/*
-: Intro
In the previous lesson, we built the necessary networking infrastructure
a VPC, subnets, internet gateway, NAT gateway, and routing tables.

In particular, we will create the following resources using the 
CloudFormation template:

Security groups - Security group specify firewall rules. We will create two 
of them, one for a load-balancer and another for a web server.

AutoScaling group - An autoscaling group ensures that a desired number 
of servers (EC2 instances) are always up and running. If an instance goes 
down due to any reason, such as bad health, a substitute instance with a 
similar configuration will spin up automatically.

Launch configuration - The configuration of the EC2 instance that spins 
up automatically, if required, as a part of autoscaling group resides in a 
launch configuration.

Load balancer - A load balancer distributes the incoming traffic 
uniformly across multiple servers (target group) within the same 
or different AZs. We will also create a listener and target group for 
the load balancer.

https://github.com/udacity/nd9991-c2-Infrastructure-as-Code-v1/tree/master/supporting_material


-: Understanding Security Groups
Recall that a security group defines the firewall rules, 
such as the protocol to open to network traffic and the 
set of valid IP addresses.

We will create two Security groups:
          WebServerSecGroup for the webserver
LBSecGroup for a load balancer

Security Group Syntax
The following is the syntax required to create a SecurityGroup:
          Type: AWS::EC2::SecurityGroup
          Properties: 
          GroupDescription: String
          GroupName: String
          SecurityGroupEgress: 
                    - Egress
          SecurityGroupIngress: 
                    - Ingress
          Tags: 
                    - Tag
          VpcId: String

In the SecurityGroup syntax shown above:
The only required (mandatory) property is GroupDescription. 
It is a String value up to 255 characters without quotes.

The GroupName is similar to GroupDescription, but it's 
not a required property.

The SecurityGroupEgress and SecurityGroupIngress property 
rules are the most critical as it defines where the traffic will 
go. The former defines outbound traffic, whereas the latter 
defines the inbound traffic.

The VpcId denotes the VPC ID in which you are creating 
the Security Group.

Ingress rules and egress rules
Ingress rules are for inbound traffic, and egress rules are 
for outbound traffic.

Ingress rules restrict or allow traffic trying to reach our 
resources on specific ports.

Egress rules restrict or allow traffic originating from our 
server -- typically we are ok allowing all outbound traffic 
without restrictions as this doesn’t pose a risk for a 
security breach.

Example
The security group below with ingress/egress rules allowing 
traffic on port 80 using TCP protocol from/to any location:

InstanceSecurityGroup:
Type: AWS::EC2::SecurityGroup
Properties:
          GroupDescription: Allow http to client host
          VpcId:
                    Ref: myVPC
          SecurityGroupIngress:
                    - IpProtocol: tcp
                    FromPort: 80
                    ToPort: 80
                    CidrIp: 0.0.0.0/0
          SecurityGroupEgress:
                    - IpProtocol: tcp
                    FromPort: 80
                    ToPort: 80
                    CidrIp: 0.0.0.0/0

Q: By default Security Groups provide the following to the \
resources to which they are assigned:
Inbound:Deny All, Outbound: Allow all

Outbound is always allowed and Inbound is always denied 
unless specified. Keep in mind that this is when a resource, 
such as a Server, has a security group with defaults assigned 
to it. If a server doesn’t have a security group assigned to it 
at all, then it becomes isolated. Meaning that no traffic is 
allowed in or out.

The assumption is that outbound traffic is ok and preventing 
inbound traffic is necessary.

Q: Security group entries in CloudFormation can have:
IP address or range
Start port
End port
Rule type (Ingress or Egress)


When defining a security group in CloudFormation you need 
to specify the following properties:

GroupDescription: String (Required)
GroupName: String
SecurityGroupEgress
SecurityGroupIngress
Tags
VpcId: String

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-ec2-security-group.html


-: Security Groups
Security groups are specific to individual resources (EC2 servers, 
databases) and not to subnets. There are few points that you must 
remember:

Traffic is blocked by default
In the cloud, traffic is completely blocked, so you have to explicitly 
open ports to allow traffic in and out. This is a general networking concept.

Limit inbound traffic for security
For ingress rules, we want to limit inbound traffic, for security, to a 
single port or just a handful of ports required by the application we 
are running. For example, if it’s a public web server, it will require 
port 80 open to the world ( World = 0.0.0.0/0 ). Should you need the 
SSH port open, restrict this port only to your specific IP address.

For outbound traffic, give full access
For egress rules, we want to give the resource full access to the internet, 
so we give egress access to all ports, from 0 all the way to 65535.

-: Creating Autoscaling Group
What is an Autoscaling group?
An Autoscaling group is a logical group of EC2 instances that share a 
similar configuration.

This AWS service monitors the EC2 instances and automatically adjusts 
the running count by adding/removing EC2 instances, ensuring that a 
desired number of servers (EC2 instances) are always up and running.

Scaling policy
A Scaling Policy is the criteria used to decide when to Add or Remove 
Servers from your Auto Scaling Group. Running the servers 24 hours 
a day costs money. So, It's best to have criteria/conditions, called 
Scaling policy, that will turn those servers off when they are not needed 
and then turn them back on demand.

For example, you could create a CloudWatch Alarm with a custom 
metric that counts the number of web visitors in the last 2 hours; if 
the number is less than 100, perhaps a single server is enough. This 
will be a trigger to Scale Down if there is more than one server 
running at the time.

A Scaling policy spins up/shuts down EC2 instances automatically 
based on certain conditions that we specify, such as:

If an instance goes down due to any reason, such as bad health

If an instance achieves a CPU utilization upper threshold, say 90%

If the CPU utilization comes down below a certain lower threshold, 
then one of the instances will be shut down automatically

Launch configuration
Note that all the EC2 instances running as a part of an autoscaling 
group share a common configuration, such as AMI, instance-type, 
security-group, key pair, etc. All these configurations are saved in 
a separate resource: Launch configuration. Think of a Launch 
Configuration as a template or a recipe. You are instructing the 
Auto Scaling service HOW to run your web application.

For example: An application requires 2GB RAM , 4 vCPUs, 10GB 
of Disk Space, Java runtime version 8 or NodeJS 10.0. All this on 
top of a standard distribution of Linux or Windows.

Note: AWS provides another option, Launch templates, as an 
alternative to the Launch configuration. They both serve a similar 
purpose.

Writing YAML code for either of them is similar in syntax. We will 
learn to code Launch configuration in this lesson, though.

AWS::AutoScaling::AutoScalingGroup
An autoscaling group in our example exercise will require the following:

VPCZoneIdentifier
LaunchConfigurationName
Min and Max count of instances
TargetGroupARNs
See the code below having a reference to a Launch configuration, 
WebAppLaunchConfig, that we will create next:

WebAppGroup:
    Type: AWS::AutoScaling::AutoScalingGroup
    Properties:
      VPCZoneIdentifier:
      - Fn::ImportValue: 
          !Sub "${EnvironmentName}-PRIV-NETS"
      LaunchConfigurationName:
        Ref: WebAppLaunchConfig
      MinSize: '3'
      MaxSize: '5'
      TargetGroupARNs:
      - Ref: WebAppTargetGroup
      HealthCheckGracePeriod: 60
      HealthCheckType: ELB
      
In the code above:
The VPCZoneIdentifier is a list of subnet IDs for a virtual private 
cloud (VPC) where instances in the Auto Scaling group can be 
created. We are using the private subnets.

The LaunchConfigurationName represents the name of the launch 
configuration to use to launch instances. We will create a launch 
configuration in the next demo.

The MinSize & MaxSize lets us know the range of machines we 
will be running, which also alerts us to the min/max costs we can 
be expecting from these machines.

A target group is a group of registered instances, to whom the 
traffic will be routed. The ARN (Amazon Resource Names) 
serves as a unique ID for any resource. The TargetGroupARNs 
property refers to the ARNs of the load balancer target group 
that we will create in the upcoming demos.

Q: Which of these are elements of an autoscaling group? 
Scaling Policy
Launch Configuration

The Launch configuration will tell the scaling group what you 
want to launch, and the scaling policies will tell it WHEN to 
execute the scaling, either up or down.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-as-group.html

https://aws.amazon.com/autoscaling/faqs/


-: Launch Configuration
What is a Launch configuration?
It is a saved-resource that stores the configuration details of an EC2 
instance, such as the AMI, instance-type, security-group, key pair, etc. 
The Autoscaling group uses a launch configuration to launch EC2 instances.

Let's see how you can code a launch configuration.

AWS::AutoScaling::LaunchConfiguration
This is an updated WebAppLaunchConfig so that you don’t need 
external dependencies, such as Docker in the UserData script.

Resources:
  WebAppLaunchConfig:
    Type: AWS::AutoScaling::LaunchConfiguration
    Properties:
      UserData:
        Fn::Base64: !Sub |
          #!/bin/bash
          apt-get update -y
          apt-get install apache2 -y
          systemctl start apache2.service
          cd /var/www/html
          echo "Udacity Demo Web Server Up and Running!" > index.html
      ImageId: ami-0ac73f33a1888c64a
      KeyName: VocareumKey2
      SecurityGroups:
      - Ref: WebServerSecGroup
      InstanceType: t3.small
      BlockDeviceMappings:
      - DeviceName: "/dev/sdk"
        Ebs:
          VolumeSize: '10'

In the example above, we have done the following:
Set a UserData script that will run on the new instance automatically 
after launch. See the next paragraph for more details.

Used the ami-0ac73f33a1888c64a as AMI in the us-west-2 (Oregon) 
region. If you wish to run the whole exercise in another region, 
say us-east-1 (N Virginia), then you will have to change the 
AMI ID to ami-00ddb0e5626798373.

AMI IDs are specific to the region and keep changing with updates 
in the image. The AMI ID used in the example above is for a Ubuntu 
Server 18.04 LTS (HVM), SSD Volume Type system. You can search 
the AMI ID of all Ubuntu-based images here.

https://cloud-images.ubuntu.com/locator/

https://cloud-images.ubuntu.com/locator/

Assumed that the RSA login key name is VocareumKey2. Please 
create a key-pair with the name VocareumKey2 (or any name) 
in the AWS web console (under EC2 services) before using it 
in the code above.

Referenced the previously defined WebServerSecGroup for 
our SecurityGroup

Set our InstanceType to t3.small . You can also use t3.medium, 
as shown in the video demo above. To see all available instance 
types, click here.

Specified 10gbs for our VolumeSize.

Note: In a Launch configuration, the only required properties 
are ImageId and Instance Type. The remaining ones are optional.

UserData script
A UserData script is a series of commands that run automatically 
at the time of instantiating your EC2 instance. The purpose of a 
UserData script is to properly configure the EC2 instance before 
running your application.

Script to use in your exercise
By default, the EC2 instance will not have the Apache Tomcat 
server installed and running. Use the following UserData script 
to do so. Note that this script is meant to run only on Ubuntu 
Linux systems.

          #!/bin/bash
          apt-get update -y
          apt-get install apache2 -y
          systemctl start apache2.service
          cd /var/www/html
          echo "Udacity Demo Web Server Up and Running!" > index.html

It will first install the Apache Tomcat server, starting the 
server, and then create an index.html page at the default 
location, /var/www/html.

Script shown in the demo is different
The instructor uses a slightly different UserData script in the 
demo video above that uses external dependencies, such as 
installing a Docker and then installing the Apache Tomcat in 
a Docker container.

       #!/bin/bash
       # Install docker
       apt-get update
       apt-get install -y apt-transport-https ca-certificates curl software-properties-common
       curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
       add-apt-repository \
       "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
       $(lsb_release -cs) \
       stable"
       apt-get update
       apt-get install -y docker-ce
       usermod -aG docker ubuntu
       docker run -p 8080:8080 tomcat:8.0

You can use either of the scripts mentioned above. Note that 
the scripts above are valid only for an Ubuntu VM.

What else you can do with a UserData script?
In addition to the example shown above, you can also do things such as:
Fetch credentials
Set Environment Variables ( ENV=PROD, for example )
Download and Install libraries
Get your source files or binaries from a storage location, such as S3

When should you use the UserData script?
If you want to run your application in a plain out-of-the-box 
Linux or Window server, you'll use the UserData script to do 
all the necessary configurations. You don't need it if you are 
using an AMI that already has everything installed.

How to verify and troubleshoot a UserData script?
The best way to create and verify a UserData script is to run each 
command manually and verify everything works as expected. If 
you run yours and it fails, you should login to the server and check 
the logs that can be found here:

/var/log/cloud-init-output.log

For Windows:
C:\ProgramData\Amazon\EC2-Windows\Launch\Log\UserdataExecution.log

[Optional] Additional lnformation
Please note the UserData script above is meant to run only on 
Ubuntu Linux. Had it been a CentOS-based Amazon 
Linux 2 AMI (HVM), SSD Volume Type, then you may have to 
use the following UserData script to install and start the Apache 
Tomcat server with PHP:

#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
sudo yum install -y httpd mariadb-server
sudo systemctl start httpd
sudo systemctl enable httpd
sudo chkconfig httpd on
Also, in this case, you will have to use different AMI-ID as:

us-east-1 N Virginia - ami-047a51fa27710816e

us-west-2 Oregon  - ami-0e999cbd62129e3b1

The AMI ID varies for each region, and updates periodically. 
See the snapshot below to know how to get the right AMI ID 
in your case.

https://classroom.udacity.com/nanodegrees/nd9991-alg-t2/parts/cd0648/modules/71d62f39-2467-4131-b9fd-fd372e818257/lessons/c7659a71-f18f-4674-96e8-7d7fc865e6a7/concepts/84f433e2-55d6-48ab-aae0-37d359949fda

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-autoscaling-launchconfiguration.html



*/ 

In what scenario is an isolated server used in a real application?