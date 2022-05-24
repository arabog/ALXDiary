/*
-: What is (Cloud) Infrastructure?
Cloud services are broadly categorized as Software as a Service (SaaS), 
Platform as a Service (PaaS), or Infrastructure as a Service (IaaS). Cloud 
is a collection of geographically distributed data centers that are logically 
grouped into regions and availability-zones.

The IaaS allows a user to provision Virtual Machines (VMs), set up networks 
(VPC), create subnets, and associate necessary security features. Further, 
VMs can be attached to storage volumes, different networks, or servers. 
All the resources mentioned above are referred to as Infrastructure.

-: Lesson Objectives
After completing this lesson, you will be able to...
Describe Infrastructure as a Code (IaaC) as one of the best practices 
used in the DevOps model.

Configure basic settings to start using AWS services as an Identity and 
Access Management (IAM) user.

Explain the fundamentals of Cloud Formation.

Contrast the manual vs. automated (script-based) provisioning of 
Elastic Compute Cloud (EC2) instances in a Virtual Private Cloud (VPC).

Utilize the AWS command-line tool - CLI for necessary activities, such 
as configuring a VPC, or creating an IAM user.

Course Github Repository
The link to the Github repository is - 
https://github.com/udacity/nd9991-c2-Infrastructure-as-Code-v1 
that contains the following:

Supporting material used in this course, inside supporting_material folder. 
It contains the files used in the demonstration videos in Lesson 1 to Lesson 5.
Project starter code, inside project starter folder.

-: What is DevOps
DevOps = Development + Operatns

Operatnal is d part of IT dt mnages, monitors, configures, and deploys software

-: Why you need DevOps
Issues that DevOps tries to solve:
Unpredictable deployments
Mismatched environments (development doesn’t match production)
Configuration Drift

-: What are the benefits of Cloud DevOps?
DevOps best practices and tools
One of the benefits of using DevOps is that it allows predictable deployments 
using automated scripts. In the DevOps model, development and operations 
teams are merged into a single team. These DevOps teams use a few tools 
and best practices that deploy and manage configuration changes to servers

Difference between DevOps and Software Configuration Management
https://softwareengineering.stackexchange.com/questions/130850/difference-between-devops-and-software-configuration-management


The most important practices are:
Continuous Integration / Continuous Delivery (CI/CD) - new features are 
automatically deployed with all the required dependencies.

Infrastructure as Code (IaaC) - configuration and management of cloud 
infrastructure using re-usable scripts.

Other prevalent practices are:
Microservices
Monitoring and Logging
Communication and Collaboration

Glossary
Continuous Integration Continuous Deployment (CI/CD): Tracks 
the development workflow from testing through production. 
Continuous integration is the process flow of testing any change 
made to your development flow, while continuous deployment tracks 
those changes through to staging and production systems.

Continuous integration vs. delivery vs. deployment
https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment

Infrastructure as code (IaC): Provision and manages the cloud-infrastructure 
by using scripts. These scripts can be written in YAML or JSON format. 
These scripts ensure that the same architecture can be re-built multiple 
numbers of times. These scripts are particularly useful in enterprise 
applications and different environments - dev, prod, or test.

Infrastructure as code
https://en.wikipedia.org/wiki/Infrastructure_as_code

Track your usage on the AWS web console. Go to AWS Billing Dashboard,
and view the monthly spending. It will list you the services constituting the 
spend.

https://aws.amazon.com/pricing/

Submit a ticket to Student Support Services to know your current balance.

https://udacity.zendesk.com/hc/en-us/requests/new?ticket_form_id=110806


-: Set up Tools
What is CloudFormation?
CloudFormation is an AWS tool for creating, managing, configuring, 
and deploying cloud resources. This tool is beneficial if you have to 
provision a set of cloud resources multiple times, at scale. You can 
do so by simply writing (YAML or JSON) scripts that you can easily 
edit and run numerous times.

Tools required for the current course
AWS CLI tool

# See the current version
aws --version




*/ 