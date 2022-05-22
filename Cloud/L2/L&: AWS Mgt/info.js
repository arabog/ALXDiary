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





*/ 