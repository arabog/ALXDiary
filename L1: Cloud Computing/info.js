/*
Cloud Computing
Cloud Computing is the delivery of IT resources over the Internet. 

It allows you to manage: (Databases, Compute Power, Application, Security)
Storage services like databases
Servers, compute power, networking
Analytics, artificial intelligence, augmented reality
Security services for data and applications


Characteristics of Cloud Computing
Pay as you go - You pay only for what you use and only when your code runs.
Autoscaling - The number of active servers can grow or shrink based on demand.
Serverless - Allows you to write and deploy code without having to worry 
about the underlying infrastructure.


Types of Cloud Computing:
Infrastructure-as-a-Service (IaaS): The provider supplies virtual server 
instances, storage, and mechanisms for you to manage servers.
An IaaS provides underlying infrastructure

Platform-as-a-Service (PaaS): A platform of development tools hosted 
on a provider's infrastructure.
PaaS is a platform of both hardware and software tools such as operating 
systems and database management and development tools.


Software-as-a-Service (SaaS): A software application that runs over the 
Internet and is managed by the service provider.


Match the provider with the type of service:

TYPE                                                                  PROVIDER
Platform-as-a-Service (PaaS)                                GoDaddy
Infrastructure-as-a-Service (IaaS)                          Rackspace, Digital Ocean
Software-as-a-Service (SaaS)                                Gmail


Cloud Computing Deployment Model
Public Cloud
A public cloud makes resources available over the Internet to the general public.

Private Cloud / On premises
A private cloud is a proprietary network that supplies services to a limited number of people.

Hybrid Cloud
A hybrid model contains a combination of both a public and a private cloud.


Benefits
There are several benefits to the cloud.
Stop guessing about capacity.
Avoid huge capital investments up front.
Pay for only what you use.
Scale globally in minutes.
Deliver faster.

Latency is d time taken to receive response when a request is sent

Options Of Providers:
Amazon Web Services
Azure
Google Cloud

-: Services
Cloud-Based Products
Amazon Web Services offers a broad set of global cloud-based products.

Analytics
Quick Sight
Athena
Redshift

Application integration
Simple Queue Service (SQS)
Simple Notification Service (SNS)

Cost management
AWS Budgets

Compute services
Elastic Cloud Compute (EC2)
Lambda
Elastic Beanstalk

Database management services
MySQL
Oracle
SQLServer
DynamoDB
MongoDB

Developer tools
Cloud 9
Code Pipeline

Security services
Key Management Service (KMS)
Shield
Identity and Access Management (IAM)

Additional Services
Blockchain
Machine Learning
Computer Vision
Internet of Things (IoT)
AR/VR

Match the service to the functionality.

FUNCTIONALITY                                              AWS SERVICE 
Notification                                                          Simple Notification Service (SNS)
Data Warehouse                                                  RedShift     
Continuous Integration                                       Code Pipeline
Data Encryption                                                  Key Mgt Service
Development Tool                                               Cloud 9

Global Infrastructure
Region is considered a geographic location/area on a map.

Availability Zone: is an isolated location in a region 
and is a physical data center within a specific region.

Edge Location: is a mini-data center used solely to cache 
large data files closer to a user's location.

Additional Information
There are more Availability Zones (AZs) than there are Regions.
There should be at least two AZs per Region.
Each region is located in a separate geographic area.
AZs are distinct locations that are engineered to be isolated from failures.

TOPIC                                             DEFINITION/FEATURE
Region                                            Geographical location
Edge Location                                     Cache files
Availability Zone                                 Data center

Deploying applications across multiple regions can help build a robust architecture.


-: Shared Responsibility Model
AWS is responsible for security OF the cloud, we are responsible for security IN the cloud.

Examples

AWS is responsible for:
Securing edge locations
Monitoring physical device security
Providing physical access control to hardware/software
Database patching
Discarding physical storage devices

You are responsible for:
Managing AWS Identity and Access Management (IAM)
Encrypting data
Preventing or detecting when an AWS account has been compromised
Restricting access to AWS services to only those users who need it

AWS provides many powerful security controls but when and how you 
apply them is your responsibility.


-: Course - AWS Sign In and Costs
Note: You might not have necessary permissions to complete this course 
if you select regions other than us-east-1 and us-west-2.

Default AWS region
The default AWS region for you will be US East (N. Virginia) (us-east-1). 
However, you can switch and practice in us-west-2 region as well. 
Note: You might not have necessary permissions to complete this course 
if you select regions other than us-east-1 and us-west-2


Any service available to you @$0.1/hour or higher should be monitored 
closely and shut down immediately after use or if you are stepping away

Students must log out of any existing instances of the AWS console 
before accessing AWS for this program, especially when moving 
between more than one Udacity program, to ensure the right set 
of permissions to complete this w











https://aws.amazon.com/what-is-cloud-computing/

https://aws.amazon.com/types-of-cloud-computing/

https://aws.amazon.com/products/?aws-products-all.sort-by=item.additionalFields.productCategory&aws-products-all.sort-order=asc&awsf.re%3AInvent=*all&awsf.Free%20Tier%20Type=*all&awsf.tech-category=*all&awsm.page-aws-products-all=3

https://aws.amazon.com/about-aws/global-infrastructure/regions_az/

https://aws.amazon.com/about-aws/global-infrastructure/

https://aws.amazon.com/compliance/shared-responsibility-model/

https://aws.amazon.com/pricing/



*/