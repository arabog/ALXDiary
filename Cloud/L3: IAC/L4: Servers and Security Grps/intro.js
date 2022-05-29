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



*/ 