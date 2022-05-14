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


Elastic Block Store
Elastic Block Store persists data after an instance is terminated.

Elastic Block Store (EBS) is a storage solution for EC2 instances and 
is a physical hard drive that is attached to the EC2 instance to 
increase storage.

Tips
EBS is found on the EC2 Dashboard.
There are several EBS volume types that fall under the categories of 
Solid State Drives (SSD) and Hard Disk Drives (HDD).


*/

what r considered as serveless in relation to EC2?
can i use free tier account for my project?
what are the available options wn private key is lost?
which text/books will u suggest for devops?
can you walk me via  EC2 set up>

