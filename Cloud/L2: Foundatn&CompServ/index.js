/*
Foundational and compute service
1. Server
2. Security/Protection
3. Cloud services to manage d lifecycle of d site

Cloud services === servers in d cloud

-: EC2 Elastic Cloud Compute
is a service that provides servers for rent in the cloud
and d server r called INSTANCES. d server r in AZ or
data centers. It is not considered as serverless.


Pricing Options
There are several pricing options for EC2.
On Demand - Pay as you go, no contract.
Dedicated Hosts - You have your own dedicated hardware 
and don't share it with others.

Spot - You place a bid on an instance price. If there is extra 
capacity that falls below your bid, an EC2 instance is 
provisioned. If the price goes above your bid while the 
instance is running, the instance is terminated.

Reserved Instances - You earn huge discounts if you pay 
up front and sign a 1-year or 3-year contract.

Tips
EC2 is found under the Compute section of the AWS Management Console.
Spot instances can save you up to 90% off the on-demand pricing.

There are no long term contracts and you pay as you go.

***********************************
Launch an EC2 Instance
An EC2 instance is a Virtual Machine (VM) with user-defined 
configuration that runs on the cloud. There are a plethora of 
options to choose the instance-configuration of your choice. 
Let's learn the general steps to build an instance with any 
given configuration.

Step 1 - Choose an Amazon Machine Image (AMI)
AMI contains the pre-installed operating system, application 
server, and applications required to launch your instance.
There is a variety of Linux, Windows, and other OS 
servers available. Choose the one available under the 
free-tier option

Step 2 - Choose an Instance Type
Instance Type offers varying combinations of CPUs, memory 
(GB), storage (GB), types of network performance, and availability 
of IPv6 support. AWS offers a variety of instance types, based 
on the configuration you choose. Prefer to choose any one of 
those types supported by a free tier account.

Select the hardware configuration of your instance. The t2.micro 
instance type, which is available under the free tier, is selected by 
default. It has 1 vCPU, 2.5 GHz, 1 GiB memory, the default root 
volume, and supports additional EBS storage.

Step 3 - Configure Instance Details
Provide the instance count and configuration details, such as network, 
subnet, behavior, monitoring, etc.

Step 4 - Add Storage
You can choose to attach either SSD or Standard Magnetic drive to 
your instance.

Step 5 - Add Tags
A tag serves as a label that you can attach to multiple AWS resources, 
such as volumes, instances, users, or roles. Tagging helps in easy 
search and grouping resources for various purposes.

Step 6 - Configure Security Group
Attach a set of firewall rules to your instance(s) that controls the 
incoming traffic to your instance(s).

Security Groups. It defines the firewall rules, such as the protocol 
to open to network traffic and the set of valid IP addresses. By 
default, SSH protocol is used for a Linux instance, and RDP for 
a Windows instance. HTTP and HTTPS allow Internet traffic 
to reach your instance.

Step 7 - Review
Review your instance details before the launch.

Step 8 - Download Key Pair
AWS generates a pair of public and private (encrypted) keys, 
that help in logging into the EC2 instance. Download the 
private key (.pem file) locally. The public key will be stored 
on the EC2 instance, while the private key will be available 
to download locally, just once. In case, if the private key 
file (.pem) is misplaced or lost, the AWS doesn't allow 
regenerating the private key.

Instances dashboard showing a running instance. You can select
 the checkbox against the instance you wish to 
 connect/stop/terminate/view details. In this dashboard, 
 you will see all your instances, their properties, and 
 configuration details.

Note - Do not forget to shut down/terminate every AWS 
resource after use. You can instantiate them again when 
you'd come back.

https://classroom.udacity.com/nanodegrees/nd9991-alg-t2/parts/cd0355/modules/29783684-5852-4b81-99f6-2de6ff37b6d6/lessons/cccb3643-2470-4b97-8261-b4a222d45d07/concepts/43bf8b8f-09ee-4089-955d-606cf28f91f4

https://classroom.udacity.com/nanodegrees/nd9991-alg-t2/parts/cd0355/modules/29783684-5852-4b81-99f6-2de6ff37b6d6/lessons/cccb3643-2470-4b97-8261-b4a222d45d07/concepts/2fb659d3-6cb7-4214-8a19-c91155339f7b


Best practices for Amazon EC2
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-best-practices.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-purchasing-options.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIs.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-security-groups.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/elastic-ip-addresses-eip.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-eni.html

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html

https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html


A flat network is a simple network design that reduces cost and overall adminstratn

What can a VPC protect? Pick two.
Data stored on AWS S3
AWS EC2 Instances

Definition - A network access control list (ACL) defines the set of firewall 
rules for controlling traffic coming in and out of subnets in your VPC.

Launch an EC2 Instance
Access VPC service from AWS mgt console
Launch an EC2 instance
Attach an EBS volume
Cleanup and Disable EC2 instance

Compute Power In The Cloud
Compute power in the cloud is a faster way to build applications, providing:

no servers to manage (i.e. serverless)
ability to continuously scale
ability to run code on demand in response to events
pay only when your code runs

Lambda
AWS Lambda provides you with computing power in the cloud by allowing you 
to execute code without standing up or managing servers.

Tips
Lambda is found under the Compute section on the AWS Management Console.
Lambdas have a time limit of 15 minutes.
The code you run on AWS Lambda is called a “Lambda function.”
Lambda code can be triggered by other AWS services.
AWS Lambda supports Java, Go, PowerShell, Node.js, C#/.NET, Python, and 
Ruby. There is a Runtime API that allows you to use other programming 
languages to author your functions.
Lambda code can be authored via the console

Lambda is event-driven, so you can run your code based on certain 
events happening, like a file upload, or a record being inserted in 
a database, etc.

https://aws.amazon.com/lambda/


Create and execute a Lambda
AWS S3 is a file storage service


Exercise
Launch an EC@ instance
Connect to Linux instance
Create n EBS
EBS Dashbord

VPC Dashboard
Create a VPC
Your VPCs

Launch an EC2 instance

Create a Lambda Function
Create and Execute a Lambda

Deploy Sample App to Elastic Beanstalk

Amazon S3 
https://youtu.be/_I14_sXHO8U


Elastic Beanstalk
Elastic Beanstalks is an orchestration service that allows you to deploy 
a web application at the touch of a button by spinning up (or provisioning) 
all of the services that you need to run your application.

Tips
Elastic Beanstalk is found under the Compute section of the 
AWS Management Console.
Elastic Beanstalk can be used to deployed web applications 
developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, 
and Docker.
You can run your applications in a VPC.
Elastic Beanstalk can spin up database instances for you, VPCs, 
security groups, EC2 instances, etc

What service can be launched using Elastic Beanstalk? Select three.
. Remember Elastic Beanstalk can be used to launch an EC2 instance, set up 
auto-scaling or an elastic load balancer, and it can spin up a database instance.

AWS supports three types of load balancers: Application Load Balancers, 
Network Load Balancers (new), and Classic Load Balancers (might become 
deprecated soon).


What is an environment?
An environment is the collection of AWS resources and permissions 
to allow your web application to run smoothly. The Elastic Beanstalk 
service manages the environment for us.

Elastic Block Store
Elastic Block Store persists data after an instance is terminated.

Elastic Block Store (EBS) is a storage solution for EC2 instances and 
is a physical hard drive that is attached to the EC2 instance to 
increase storage.

Tips
EBS is found on the EC2 Dashboard.
There are several EBS volume types that fall under the categories of 
Solid State Drives (SSD) and Hard Disk Drives (HDD).

2 types of memory for an EC2 instance:
in memory/instance store and 
on EBS

Provisioned IOPS SSD volumes can deliver up to 64000 IOPS, 
and are best for EBS-optimized instances.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/monitoring-volume-status.html


Questions: 
how to get Elastic IP Allocation ID in VPC?
Customer Gateway  IP?
Can a default value be deleted e.g VPC
What does no server means in Compute Power In The Cloud?
Why deleting my first lampda function and IAM role for d fxn
i noticed other roles dt i didn't create, do i need to be concern
abt them like deletng dm?

Consequences of disabling: Block all public access in S3

When deploying an applicatn in Elastic Beanstalk, do we 
need to create all stuffs like VPC, Lmbda fxn, S3 bucket etc?
On d classroom page, 4 projects were slated to be submitted on aug 11,
r d projects d previous projects or new ones?

How can i check my sub balance?


what r considered as serveless in relation to EC2?
can i use free tier account for my project?
what are the available options wn private key is lost?
Whta is d diff btw these key pair types: RSA, ED25519? 
Dedicated Hosts:  This is where you have your own dedicated hardware?
which text/books will u suggest for devops?
can you walk me via  EC2 set up>
EBS is referred to as phy HDD, for how long is it owned
and how is it maintained in price wise(amoun payed)?

whaat does EC2 is automatically replicated in its AZ means,
does it means when it spoil it replace?

who owns d EBS amazon or d client? 

*/


