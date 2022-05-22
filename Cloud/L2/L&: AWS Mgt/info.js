/*
Why do we need logging and auditing in the cloud?

-: Logging In The Cloud
Logging provides visibility into your cloud resources and applications. 
For applications that run in the cloud, you will need access to logging 
and auditing services to help you proactively monitor your resources 
and applications.

Logging allows you to answer important questions like:
How is this server performing?
What is the current load on the server?
What is the root cause of an application error that a user is seeing?
What is the path that leads to this error?

-: Cloud Trail
Cloud Trail allows you to audit (or review) everything that occurs in 
your AWS account. Cloud Trail does this by recording all the AWS API 
calls occurring in your account and delivering a log file to you.

Features
CloudTrail provides event history of your AWS account activity, including:
who has logged in
services that were accessed
actions performed
parameters for the actions
responses returned
This includes actions taken through the AWS Management Console, 
AWS Software Development Kits(SDKs), command line tools, and 
other AWS services.

Tips
Cloud Trail is found under the Management & Governance section 
on the AWS Management Console.
CloudTrail shows results for the last 90 days.
You can create up to five trails in an AWS region.

Q: Identify features provided by Cloud Trail. Pick three.
Set up alerts and alarms for certain activities
Log responses from AWS services
Track calls made using the SDK

Cloud Trail allows you to audit (or review) everything that occurs 
in your AWS account.

-: Create a Trail
AWS CloudTrail is a service that captures every event occurred in 
your account, in the form of logs, for review and analysis. These 
logs can be stored in Amazon S3 buckets or delivered to Amazon 
CloudWatch logs, which helps you to set alarms and take 
appropriate actions.

-: Cloud Watch
Cloud Watch is a service that monitors resources and applications 
that run on AWS by collecting data in the form of logs, metrics, 
and events.

Features
There are several useful features:
Collect and track metrics
Collect and monitor log files
Set alarms and create triggers to run your AWS resources
React to changes in your AWS resources

Tips
CloudWatch is found under the Management & Governance section 
on the AWS Management Console.
Metrics are provided automatically for a number of AWS products 
and services.

Q: What are some uses of Cloud Watch? Pick three.
Trigger a Lambda
Capture log files from services
Track metrics

Cloud Watch can collect and track metrics, collect and monitor 
log files, and create triggers to run your AWS resources.

-: Infrastructure as Code
Infrastructure as Code allows you to describe and provision all 
the infrastructure resources in your cloud environment. You can 
stand up servers, databases, runtime parameters, resources, etc. 
based on scripts that you write. Infrastructure as Code is a 
time-saving feature because it allows you to provision (or stand 
up) resources in a reproducible way.

https://en.wikipedia.org/wiki/Infrastructure_as_code


-: Cloud Formation
AWS Cloud Formation allows you to model your entire infrastructure 
in a text file template allowing you to provision AWS resources based 
on the scripts you write.

Tips
Cloud Formation is found under the Management & Governance 
section on the AWS Management Console.
Cloud Formation templates are written using JSON or YAML.
You can still individually manage AWS resources that are part of 
a CloudFormation stack.

Q: What is the best way to manage your Cloud Formation script?
Check into version control

Since your infrastructure is now code, you can check your scripts 
into version control.

-: CloudFormation
Create an S3 bucket with AWS CloudFormation
Create CloudFormation
Save CloudFormation Stack
Deploy CloudFormation Stack
View S3 Bucket created by CloudFormation Stack
Delete CloudFormation Stack

-: AWS Command Line Interface (CLI)
The AWS CLI allows you to access and control services running in 
your AWS account from the command line. To use the CLI, simply 
download, install, and configure it.

Tips
The AWS CLI allows you to work with AWS services in a 
programmatic manner

https://aws.amazon.com/cli/

-: Install and Configure CLI using permanent IAM user access keys
Before you run any of the aws commands, you need to follow three steps:

Install AWS CLI
Create an IAM user with Administrator permissions
Configure the AWS CLI

You can verify the installation using the following command in your 
terminal (macOS)/cmd (Windows).

# Display the folder that contains the symlink to the aws cli tool
which aws
# See the current version
aws --version


Profile - A collection of settings is called a profile. The default profile 
name is default, however, you can create a new profile using the 
aws configure --profile new_name command.

Here are the steps to configure the AWS CLI in your terminal:

aws configure 

If you already have a profile set locally, you can use 
--profile <profile-name> option with any of the AWS commands 
above. This will resolve the conflict with the existing profiles set 
up locally

Upon prompt, paste the copied access key (access key id and 
secret access key). Enter the default region as us-east-1 and 
output format as json. You can verify the saved config using:

# View the current configuration
aws configure list 
# View all existing profile names
aws configure list-profiles
# In case, you want to change the region in a given profile
# aws configure set <parameter> <value>  --profile <profile-name>
aws configure set region us-east-1  


Important - If you have already set the temporary AWS Access 
keys generated in the classroom that expires after the session 
ends, you should set the aws_session_token to a blank string, 
using the command below:

# Configure a single field
aws configure set aws_session_token "" --profile default

Let the system know that your sensitive information is residing in the .aws folder
export AWS_CONFIG_FILE=~/.aws/config
export AWS_SHARED_CREDENTIALS_FILE=~/.aws/credentials

 Run your first AWS CLI command
Check the successful configuration of the AWS CLI, by running 
either of the following AWS command:

# If you've just one profile set locally
aws iam list-users
# If you've multiple profiles set locally
aws iam list-users --profile <profile-name>

Updating the specific variable in the configuration
In the future, you can set a single value, by using the command, such as:

# Syntax
# aws configure set <varname> <value> [--profile profile-name]
aws configure set default.region us-east-2
It will update only the region variable in the existing default profile.




*/ 