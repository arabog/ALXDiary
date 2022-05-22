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







*/ 