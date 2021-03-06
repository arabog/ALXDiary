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


-: Getting Started With CloudFormation Script
Here is the link to the Cloudformation VPC documentation 

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html

Before you proceed further, get yourself familiarized with the 
terminologies, such as Template, and Stack from the official 
documentation.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-whatis-concepts.html


Q: If you have several types of IT experts across your company, 
how would you group the resources you are creating in 
CloudFormation in order to make it easy for everyone to have 
their expert input on them?
Type of resource

Having scripts specific for networking and other scripts specific to 
EC2 Servers or Databases keep your scripts small, and easily 
shared across teams with different skill sets, such as database 
administrators and network experts.

YAML and JSON
YAML and JSON file formats are both supported in CloudFormation, 
but YAML is the industry preferred version that’s used for AWS and 
other cloud providers (Azure, Google Cloud Platform).

An important note about YAML files: the whitespace indentation 
matters! We recommend that you use four white spaces for each 
indentation.

Glossary in CloudFormation scripts
Name: A name you want to give to the resource (does this have to 
be unique across all resource types?)

Type: Specifies the actual hardware resource that you’re deploying.

Properties: Specifies configuration options for your resource. Think 
of these as all the drop-down menus and checkbox options that you 
would see in the AWS console if you were to request the resource 
manually.

Stack: A stack is a group of resources. These are the resources that 
you want to deploy, and that are specified in the YAML file.

Best practices
Create separate files to organize your code. You can either create 
separate files for similar resources or create files for each developer 
who uses those resources.

How do I find the syntax for a particular resource?
You don't need to memorize the code that you need for each resource. 
You can find sample code in the AWS CloudFormation - Resource and 
property types documentation for each AWS Service, such as EC2. 
Then, you can select the particular resource within the selected service, 
such as AWS::EC2::VPC in the list.

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html


-: AWS CloudFormation concepts
When you use AWS CloudFormation, you work with templates and stacks. 
You create templates to describe your AWS resources and their properties. 
Whenever you create a stack, CloudFormation provisions the resources 
that are described in your template.

Templates
A CloudFormation template is a JSON or YAML formatted text file. You 
can save these files with any extension, such as .json, .yaml, .template, 
or .txt. CloudFormation uses these templates as blueprints for building 
your AWS resources. For example, in a template, you can describe an 
Amazon EC2 instance, such as the instance type, the AMI ID, block 
device mappings, and its Amazon EC2 key pair name. Whenever you 
create a stack, you also specify a template that CloudFormation uses to 
create whatever you described in the template.

For example, if you created a stack with the following template, 
CloudFormation provisions an instance with an 
ami-0ff8a91507f77f867 AMI ID, t2.micro instance type, testkey key 
pair name, and an Amazon EBS volume.

JSON
{
          "AWSTemplateFormatVersion": "2010-09-09",
          "Description": "A sample template",
          "Resources": {
          "MyEC2Instance": {
                    "Type": "AWS::EC2::Instance",
                    "Properties": {
                    "ImageId": "ami-0ff8a91507f77f867",
                    "InstanceType": "t2.micro",
                    "KeyName": "testkey",
                    "BlockDeviceMappings": [
                              {
                                        "DeviceName": "/dev/sdm",
                                        "Ebs": {
                                                  "VolumeType": "io1",
                                                  "Iops": 200,
                                                  "DeleteOnTermination": false,
                                                  "VolumeSize": 20
                                        }
                              }
                    ]
                    }
          }
          }
}

YAML:
AWSTemplateFormatVersion: 2010-09-09
Description: A sample template
Resources:
          MyEC2Instance:
                    Type: 'AWS::EC2::Instance'
                    Properties:
                              ImageId: ami-0ff8a91507f77f867
                              InstanceType: t2.micro
                              KeyName: testkey
                              BlockDeviceMappings:
                                        - DeviceName: /dev/sdm
                                        Ebs:
                                                  VolumeType: io1
                                                  Iops: 200
                                                  DeleteOnTermination: false
                                                  VolumeSize: 20




          MyEIP:
                    Type: 'AWS::EC2::EIP'
                    Properties:
                              InstanceId: !Ref MyEC2Instance


You can specify a value like the instance type when you create a 
stack instead of when you create the template, making the template 
easier to reuse in different situations.

Stacks
When you use CloudFormation, you manage related resources as 
a single unit called a stack. You create, update, and delete a 
collection of resources by creating, updating, and deleting stacks. 
All the resources in a stack are defined by the stack's CloudFormation 
template. Suppose you created a template that includes an Auto Scaling 
group, Elastic Load Balancing load balancer, and an Amazon Relational 
Database Service (Amazon RDS) database instance. To create those 
resources, you create a stack by submitting the template that you created, 
and CloudFormation provisions all those resources for you.

https://us-east-1.console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks?filteringStatus=active&filteringText=&viewNested=true&hideStacks=false

Change sets
If you need to make changes to the running resources in a stack, 
you update the stack. Before making changes to your resources, 
you can generate a change set, which is a summary of your proposed 
changes. Change sets allow you to see how your changes might impact 
your running resources, especially for critical resources, before 
implementing them.

For example, if you change the name of an Amazon RDS database 
instance, CloudFormation will create a new database and delete 
the old one. You will lose the data in the old database unless you've 
already backed it up. If you generate a change set, you will see that 
your change will cause your database to be replaced, and you will 
be able to plan accordingly before you update your stack.

-: Exercise - Create a VPC: Automated
Description: 
          Babs    /       Udacity
          This template deploys a VPC
Resources: 
          UdacityVPC:
                    Type: AWS::EC2::VPC
                    Properties: 
                    CidrBlock: 10.0.0.0/16
                    EnableDnsHostnames: true


to find d file containing d code: 
ls <filename>

to create stack: (i.e a grp of resources)
aws cloudformation create-stack --stack-name ourfirsttest --region us-east-1 --template-body file://testcfn.yml

1. Create stack
Create the template file: Use the following code for your first test file: 
testcfn.yml (or choose any other name). Be careful about the indentation 
while you paste/write the same code in your editor.

AWSTemplateFormatVersion: 2010-09-09
Description: Carlos Rivas / Udacity - This template deploys a VPC
Resources:
UdacityVPC:
          Type: 'AWS::EC2::VPC'
          Properties:
                    CidrBlock: 10.0.0.0/16
                    EnableDnsHostnames: 'true'
                    Tags:
                              - Key: name
                              Value: myfirsttestvpc

Run the aws command : Run the following command in the terminal, 
from the same directory where you've placed your testcfn.yml file. 
We are assuming that your stack name is myFirstTest

aws cloudformation create-stack  --stack-name myFirstTest --region us-east-1 --template-body file://testcfn.yml

Alternate method - Shell Script: You can write a shell script (.sh) file as:
aws cloudformation create-stack --stack-name $1 --template-body file://$2  --parameters file://$3 --capabilities "CAPABILITY_IAM" "CAPABILITY_NAMED_IAM" --region=us-west-2

were $1, $2, and $3 can be replaced with the actual values passed 
as command-line arguments. Note the --parameters and --capabilities 
options

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/create-stack.html

Update stack
You may also want to use update-stack when you want to update an 
existing stack instead of destroying your stack and creating a new one. 
The syntax is similar to before:

aws cloudformation update-stack  --stack-name myFirstTest --region us-east-1 --template-body file://testcfn.yml

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/update-stack.html

Describe stack
Once a stack is created successfully, you can verify by either going to 
the web console or running the following command, which will display 
all the details the stack.

aws cloudformation describe-stacks --stack-name myFirstTest

You can describe the details of multiple stacks in one command. If no 
stack name is specified, then it will return the description for all the 
stacks created in your account.

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html#cli-aws-cloudformation


Can you try deleting the stack yourself?

aws cloudformation delete-stack  --stack-name myFirstTest 

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/describe-stacks.html

https://docs.aws.amazon.com/cli/latest/reference/cloudformation/index.html#cli-aws-cloudformation

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/gettingstarted.templatebasics.html


Summary of the commands:
aws cloudformation create-stack --stack-name ourfirsttest --region us-east-1 --template-body file://testcfn.yml

aws cloudformation update-stack  --stack-name myFirstTest --region us-east-1 --template-body file://testcfn.yml

aws cloudformation describe-stacks --stack-name myFirstTest

aws cloudformation delete-stack  --stack-name myFirstTest 


-: EC2 Instance with an Admin Role
Brief Introduction
You will create an EC2 Instance based on Amazon Linux AMI 
that you can connect via SSH. While provisioning the instance, 
you will make sure to limit access to your IP address only, using 
Security Groups. The instance will already have the CLI installed 
by default. You just need to assign permissions to this instance.

Once the instance is running, create an IAM role with admin 
access to your account. Then, attach the role to your EC2. 
In this case, the CLI tool will pick up the credentials from the 
role and won’t need hard-coded credentials.

Exercise objectives
By the end of this exercise, you will be able to:
Launch a secure EC2 instance
Create IAM role with admin privileges
Attach the IAM role to the EC2 instance created earlier
Connect to your EC2 instance via SSH
Use CLI tool in the EC2 instance

Step 1. Create a default VPC(use aws console)
Step 2. Launch an EC2 instance
Step 3. Create an IAM Role
Step 4. Attach the Role to the EC2 Instance
Step 5. Connect to your EC2 instance using SSH

ssh -i "cloud-formation.pem" ubuntu@ec2-35-173-136-20.compute-1.amazonaws.com

Summary
As this lesson comes to an end, now you must be able to...
Describe IaaC as one of the best practices used in the DevOps model.
Configure basic settings to start using AWS services as an IAM user.
Explain the fundamentals of Cloud Formation.
Contrast the manual vs. automated provisioning of EC2 instances in a VPC.
Utilize the AWS command-line tool - CLI for necessary activities, such 
as configuring a VPC, or creating an IAM user.

-: Challenge 1
Prerequisites
1. You should have a VPC available in your account. 
Note the ID of a particular VPC

2. You should have a public subnet available in the VPC 
selected above. Note down the subnet-ID.

3. ToDo
Write a CloudFormation script that will create the following 
two Resources: AWS::EC2::SecurityGroup and AWS::EC2::Instance. 

You will have to write the suitable properties for each resource. 
Inside one of the properties' fields, you will have to specify the 
VPC and Subnet ID. Details of the resource to create are:

1. AWS::EC2::SecurityGroup
Creates a Security Group which only allows inbound access on 
TCP port 80 and also allows unrestricted outbound access. 
Refer to the documentation to check which properties you want 
to use.

2. AWS::EC2::Instance
In the same CloudFormation script: create a resource that 
deploys an EC2 Server and associate its network interface 
with the security group mentioned above. Use the following 
properties:

The instance type will be t3.micro.
You will need the AMI ID of the base Amazon Linux 2 AMI 
(HVM), SSD Volume Type, on top of which we’ll install our 
web server software. To get this ID, go to the EC2 web console 
and click on Launch Instance. Since we’ll be launching a 
t3.micro instance, be sure to copy the AMI Id that says 
64-bit x86 next to it.

Note that AMI IDs are specific to the region, and keep changing 
with patches and updates.

Your EC2 resource’s networking interface will need this property 
set to true: AssociatePublicIpAddress. It ensures that your server 
gets assigned a public IP address that you can reach over the 
internet to verify it’s working correctly.

Script to run: We want a script to run automatically at the time 
of provisioning of the EC2 instance. In the UserData section of 
this EC2 server, you will deploy the Apache Web Server software 
that we can then use to verify that the machine correctly deployed. 
Use the following UserData script for your EC2 CloudFormation 
Resource:

UserData:
  Fn::Base64: !Sub |
    #!/bin/bash
    sudo yum update -y
    sudo yum install -y httpd
    sudo systemctl start httpd
    sudo systemctl enable httpd

The script above installs, and start the Apache Web Server 
in the new EC2 instance. Also, it will enable this service to 
start automatically after reboot.

Bonus points: Write your script to use parameters for the 
Subnet, VPC and AMI! This will make the script easier to 
maintain in the future and easier to move to other AWS 
Regions or accounts.

Expected Output
To verify, you will use the public IP address of the newly 
launched EC2 instance, and paste it in a new browser window. 
You should see the Apache web server test page.

Note: Use http ( not https! ), like so: http://public-ip-address

https://video.udacity-data.com/topher/2021/February/602ba301_challenge1-parameters/challenge1-parameters.json

https://video.udacity-data.com/topher/2021/June/60d45c87_challenge1/challenge1.yml



*/ 