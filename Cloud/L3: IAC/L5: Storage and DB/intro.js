/*
-: Intro
Q: It's perfectly fine to use S3 to store which of the following 
response options?
Images/Video files
Configuration files
Log files

These files will be accessed by your application and won't need 
to be on the app server itself, making it ideal for transitory 
infrastructure.

-: RDS Databases 
Persisting Data
Most applications need their data to persist and not be lost, 
which requires a database.

We don't want a database to be a single point of failure, so 
we'll use resources that are designed for reliability. For 
example, RDS for the database, and S3 for the filestore.

Relational Database Service (RDS): AWS service for 
creating databases.

Choosing a database
AWS Aurora and MySQL have no additional licensing costs. 
Microsoft SQL Server will have additional licensing costs.

A single RDS Server can host multiple databases
Note that you can use a single RDS database that hosts 
multiple applications, each with different logins and 
users for those applications. In other words, you don’t 
need to create a separate RDS service for each application.


Q: If I wanted to store information from my app and make 
sure it doesn't create a single point of failure for my application, 
I'd choose...
DB on EC2 with replicas in another AZ

In fact, all the above options are valid. The problem with 
a database on EC2 is that you are responsible for eliminating 
that point of failure by creating additional replicas -- but it's 
certainly possible! Also note-worthy: DynamoDB works but it 
is a document store and not a relational database, which is 
great and sufficient for most cases but not all.

Connectivity
Subnet groups are needed for deploying in multiple AZs.

We want to place our RDS in more than one Availability Zone 
(data center). We can place the RDS in two AZs to eliminate 
single point of failure and to have high availability.

We created 4 subnets (2 private and 2 public), so the RDS can 
potentially be duplicated in all four subnets.

However, keep in mind that we usually prefer to put databases 
in a private subnet, for security. There may be use cases where 
you put a database in a public subnet but generally put it in the 
private subnets.

Database Accessibility
Usually, don't make a database public.

We'll choose "No" for public accessibility" to keep a database private.
We'd normally use a private IP address to access a database.

VPC Security Groups
Default means every resource in the VPC can talk to any other 
resource that is within that same VPC. We'll keep this default, to 
allow resources in the VPC to reach the database.

Encryption
We can use encryption for sensitive production workloads. We can 
disable encryption for our database here.

RDS Running cost notice
Be sure to delete any RDS databases that you don’t need once you 
are done practicing because it can be very expensive if you forget 
it and leave it running for a while!

Q: Your database can only be accessed from other resources that 
have the appropriate ____ assigned to them.
Security Group

Accessing server and services via TCP ports is a key networking 
concept that is governed by Security Groups within your private 
cloud.

-: RDS - Create Aurora database
According to AWS: Amazon Aurora supports up to 64TB of 
auto-scaling storage capacity, 6-way replication across 
three availability zones, and 15 low-latency read replicas.

Create a Database
1. Database creation method

Q: When should your database have a read replica?
When u want to accomodate statistical reporting and other
read-only queries

SQL Queries that take a long time use resources that slow 
down your transactional database. These are better served 
by a separate copy of your DB

Transactions per seconds and single-point-of-failure, while valid, 
are not the preferred solution: If you need higher speeds, you need 
to consider upgrading your database, and if you need to eliminate 
single-point-of-failure, consider a Multi-AZ Database.

Using CloudFormation
Note that since setting up a database is usually a one-time event,
 you can just use the console (point and click) to create the database 
 server instead of writing CloudFormation code. Using CloudFormation 
 is still an option if you choose.

 CloudFormation retention policy
You'll want your data to persist even if your stack of resources is 
updated or deleted.

Retention Policy: keeps a service even if the entire stack of infrastructure 
is marked for removal. In CloudFormation, the syntax is 
DeletionPolicy: retain. This is very useful to assign to your data storage 
(database, file storage), to make sure that your data is saved even when 
the stack is updated or deleted.

-: S3
When to use Filestores
Use filestores instead of databases for large files, such as videos 
and text documents.

Configuration files and sensitive encrypted data are best stored in 
specific filestores rather than inside the servers. Autoscaling groups 
may create or destroy servers, so keep data that you want to persist 
in separate resources such as a filestore.

Q: Knowing that the server can be discarded by the auto-scaling group, 
which of these files can I safely place in it anyway? 
Intermediate steps generated by a build process
temporary calns leading to a result
test file

ds cant be put in it
log files
audit files

Anything that is temporary in nature or can be easily re-generated can 
be stored on a transitory disk (or ephemeral disk as it is also known).

S3 buckket is not restricted to region or AZ

S3 bucket
Choose a DNS compliant name for the S3 bucket.

Command line arguments
This line lists files in the S3 bucket.
aws s3 ls <link to S3 bucket>

This line copies a file from your local machine to the S3 bucket.
aws s3 cp <file name> <link to S3 bucket>  

Versioning
You can keep past versions of your S3 bucket, which means that 
deleted files will still exist in prior versions of your S3 bucket.

Q: If it was possible to write data in realtime to S3, would it be a 
good practice to do so?
No

If you use EFS ( Elastic File Storage ), it is actually using S3 
behind the scenes! So, it’s not very fast. I guess this is fine for 
a few hundred simultaneous users, but once you start processing 
for more than 1,000 people all at once, you will run into 
performance issues. A Best practice would be to use ephemeral 
storage or SSD Storage to do your processing on your EC2 and 
then move the end-result to S3 for long term storage.

The same goes for reading data: don't expect the blazing fast 
performance that you'd have when reading from your local file system.

3 is cheaper because it’s slower and not meant for data processing 
that requires really fast I/O operations.

-: Key Points



*/ 