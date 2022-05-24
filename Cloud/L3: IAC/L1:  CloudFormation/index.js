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

# Clone the repository to your local system
git clone https://github.com/udacity/nd9991-c2-Infrastructure-as-Code-v1.git

cd nd9991-c2-Infrastructure-as-Code-v1

# See the content in the current directory. You will see README.md, project_starter, 
and supporting_material directories. 
ls

# Get inside the supporting_material
cd supporting_material

# Open the VS code editor to display your content
code .

Q: Let's recap and identify which tools you need to set up?
You'll need these three tools to get started in CloudFormation

Version Ctrl
Code Editor for YAML and JSON
Amazon Web Service account

N.B: While GitHub is a version control platform, you can use 
any version control system to work with, not necessarily GitHub.

-: Creating Access Key ID for IAM User
After installing AWS CLI, recall that you must configure the following 
four items on your local machine before you can interact with any of 
the AWS services:

Access key - It is a combination of Access Key ID and a Secret Access 
Key. You can generate an Access key from the AWS IAM service, and 
specify the level of permissions (authorization) with the help of IAM Roles.

Default AWS Region - It specifies the AWS Region where you want 
to send your requests by default.

Default output format - It specifies how the results are formatted. It 
can either be a json, yaml, text, or a table.

Profile - A collection of settings is called a profile. The default profile 
name is default, however, you can create a new profile using the aws 
configure --profile new_name command.

-: Let’s create an IAM User and copy the access key
Note that each user can have up to 2 access keys at the same time.

Deciding Access Privileges within AWS
AWS access type
Programmatic Access: In the AWS console, choose "programmatic access." 
This allows us to use code to interact with AWS, instead of relying on mouse 
clicking in the console web pages. Choosing this option will Enable the 
access key ID and secret access key for the AWS CLI.

AWS Management Console access: it is used only when you want the 
new user to be able to sign-in to the AWS web console using a 
password. This one is not the case in our course

Permissions
Administrator Access: The permissions to a user are granted in 
form of Policies, which are JSON documents. The AWS web 
console provides a pre-created list of policies to choose from. 
For the current IAM user that you are creating, choose “administrator 
access.” This is just for the initial setup of your account. Afterward, 
you’ll want to limit access to only what you need.

Once a user is created, copy the access key for configuring the CLI. 
Do not save the access key in your code or into any public repositories. 
Keep them private to you.

Development and Production user accounts
In practice, Development and DevOps members may have separate 
user accounts for the development environment as opposed to the 
production environment. This makes it easier for developers by 
giving them wider privileges in the dev environment that would 
normally only be reserved for DevOps members in the production 
environment.

Q: When creating a new API Access user, you will... (Select all that apply)
Create a programatic access IAM User
Assign an appropriate IAM Policy to the user, depending
on their require access

Configure d AWS CLI Tool with the newly created keys for our
user. (N.B: Think of another option that would help to test your 
IAM User’s permissions and perform command line automated 
tasks on your AWS Account).

-: Configuring AWS CLI
Q: Regarding your access keys it's always best to...
Rotate them(change them) frequently
Make them inactive if dy wont be used for a long time

Perfect, be sure to rotate your keys every 90 days, disable or delete 
unused ones and save them in a good location, such as AWS’s own 
Parameter Store.

Configuring the AWS Command Line Interface (CLI)
Assuming you have already installed the AWS CLI tool and copied 
the access key for an administrator IAM user, follow the steps below:

Verify, if you already have a CLI v1 installed. If yes, prefer to 
uninstall CLI v1 and have CLI v2 installed, which is the latest 
one. You can verify the version using:

aws --version

To set up your AWS CLI, type either of the following commands in 
the terminal:

aws configure
aws configure --profile default

Upon prompt:
Paste the copied access key (access key id and secret access key).

Enter the default region either as as us-east-1 or us-west-2, even if 
you’re living closer to another available region.

Enter the output format either as json or leave it blank

Verifying your Setup
Verify the successful configuration of the AWS CLI, by running any 
AWS command:

# List your S3 buckets. This will be blank if you have no S3 buckets
aws s3 ls

# List the IAM users in your account
aws iam list-users

Uninstalling awscli:
which aws

ls -l /usr/bin/aws

sudo rm /usr/local/bin/aws

sudo rm /usr/bin/aws_completer

sudo rm -rf /usr/aws-cli

How to install cli v2:
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"

unzip awscliv2.zip

sudo ./aws/install

-: Adding Additional Keys
Additional Access Keys
Note that each user can have up to 2 access keys at the same time.

Why Making Keys Inactive is a Better Choice
You may make your access key temporarily inactive rather than 
destroying it and creating a new one. This may be helpful if you 
want to stop an automated process that uses that key (for example, 
a CI/CD process).

-: Understanding CloudFormation
CloudFormation is a declarative language, not an imperative language.

CloudFormation handles resource dependencies so that you don’t have 
to specify which resource to start up before another. There are cases 
where you can specify that a resource depends on another resource, but 
ideally, you’ll let CloudFormation take care of dependencies.

VPC is the smallest unit of resource.

Glossary
Declarative languages: These languages specify what you want, without 
requiring you to specify how to get it. An example of a popular 
declarative language is SQL.

Imperative languages: These languages use statements to change the 
state of the program.

Additional resources:
https://en.wikipedia.org/wiki/Imperative_programming

https://stackoverflow.com/questions/17826380/what-is-difference-between-functional-and-imperative-programming-languages

















*/ 