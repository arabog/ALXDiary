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



*/ 

In what scenario is an isolated server used in a real application?