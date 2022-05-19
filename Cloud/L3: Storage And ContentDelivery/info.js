/*
Type of Scaliing:
Vertical: scalling up: modify a serber like adding memory
Horizontal: scalling out: e.g adding or removing server moving from 2 servers to 6 servers
Diagonal: combinatn of horizontal and vertical scalings

durability: gurantees dt u will not lose d data dt u upload to d cloud,

availability: addresses hw quickly u can access ur data,

scalability: allows applicatns running in ur environmt to alw
meet demand seamlessly

Storage & Database Services
Amazon Simple Storage Service (Amazon S3)
Amazon Simple Storage Service (Amazon S3) Glacier
DynamoDB
Relational Database Service (RDS)
Redshift
ElastiCache
Neptune
Amazon DocumentDB

-: S3 & S3 Glacier
Amazon Simple Storage Service (or S3) is an object storage system in the cloud.
Put data u r nt often to use in S3 Glacier e.g annual statement report

S3 Glacier is a secure, durable, and low-cost storage class for data archiving.

Storage Classes
S3 offers several storage classes, which are different data access levels for your 
data at certain price points.

Use Cases:
Static websites
Content delivery
Backup and recovery
Archiving and big data
Applicatn data
Hybrid cloud storage

-: DynamoDB
DynamoDB is a NoSQL document database service that is fully managed. 
Unlike traditional databases, NoSQL databases, are schema-less. 
Schema-less simply means that the database doesn't contain a fixed (or 
rigid) data structure.

Tips
DynamoDB is found under the Database section on the AWS Management Console.
DynamoDB can handle more than 10 trillion requests per day.
DynamoDB is serverless as there are no servers to provision, patch, or manage.
DynamoDB supports key-value and document data models.
DynamoDB synchronously replicates data across three AZs in an AWS Region.
DynamoDB supports GET/PUT operations using a primary key.

Each row in DynamoDB table is called a document
Data is stored in DynamoDB in JSON or JSON-like format.

In the shared responsibility model, when working with DynamoDB, what 
is NOT your responsibility? Pick two
Patch or upgrade d db
Provisn or manage servers

AWS is responsible for patching or upgrading the database. They are 
also responsible for provisioning or managing servers.

According to AWS:
DynamoDB is a managed NoSQL database service that automatically 
manages the hardware provisioning, setup, configuration, replication, 
software patching, and cluster scaling.

https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.html

Global Tables - When you set up a table as a global table, that table can 
exist in two or more AWS regions with automatic replication.

Backups - A backup helps in restoring a Point-in-time state. DynamoDB 
maintains continuous backups of your table for the last 35 days.

External Resource
AWS has a very useful tutorial to get started with DynamoDB. It has the
following guided sections:

Step 1: Create a NoSQL Table
Step 2: Add Data to the NoSQL Table
Step 3: Query the NoSQL Table
Step 4: Delete an Existing Item
Step 5: Delete a NoSQL Table

Relational Database Service (RDS)
RDS (or Relational Database Service) is a service that aids in the 
administration and management of databases. RDS assists with 
database administrative tasks that include upgrades, patching, 
installs, backups, monitoring, performance checks, security, etc.

Database Engine Support
Oracle
PostgreSQL
MySQL
MariaDB
SQL Server


Features
failover
backups
restore
encryption
security
monitoring
data replication
scalability

RDS is able to manage popular database engines like Aurora(4rm AWS), 
Oracle, PostgreSQL, MySQL, MariaDB, and SQL Server.

What doesn't RDS help with?
Accessing ur db via secure shell(SSH)
To deliver a managed service experience, Amazon RDS doesn't provide 
 shell access to DB instances.

while it's involved in 
upgrading ur db
applying patches to ur db
tking db backups

According to AWS:

Amazon RDS is a relational database service that manages common database 
administration tasks, resizes automatically, and is cost-friendly.

 According to AWS:

Amazon Aurora supports up to 64TB of auto-scaling storage capacity, 
6-way replication across three availability zones, and 15 low-latency 
read replicas.


-: Redshift
Redshift is a cloud data warehousing service to help companies manage 
big data. Redshift allows you to run fast queries against your data using 
SQL, ETL, and BI tools. Redshift stores data in a column format to aid in 
fast querying.
it stores data in a column format as against row format in a relational DB

A data warehouse is designed for fast Query and Analysis not transaction
processing

Tips
Redshift can be found under the Database section on the AWS 
Management Console.
Redshift delivers great performance by using machine learning.
Redshift Spectrum is a feature that enables you to run queries 
against data in Amazon S3.
Redshift encrypts and keeps your data secure in transit and at rest.
Redshift clusters can be isolated using Amazon Virtual Private 
Cloud (VPC).

What should a data warehouse, like Redshift, NOT be used for?
processing day-to-day transactions

A data warehouse is used for reporting and data analysis


-: Content Delivery In The Cloud
A Content Delivery Network (or CDN) speeds up delivery of your 
static and dynamic web content by caching content in an Edge 
Location close to your user base.



Benefits
The benefits of a CDN includes:
low latency
decreased server load
better user experience

-: Cloud Front
CloudFront is used as a global content delivery network (CDN). 
Cloud Front speeds up the delivery of your content through 
Amazon's worldwide network of mini-data centers called Edge 
Locations.

CloudFront works with other AWS services, as shown below, 
as an origin source for your application:

Amazon S3
Elastic Load Balancing
Amazon EC2
Lambda@Edge
AWS Shield

Tips
CloudFront is found under the Networking & Content Delivery 
section on the AWS Management Console.
Amazon countinously adds new Edge Locations.
CloudFront ensures that end-user requests are served from the 
closest edge location.
CloudFront works with non-AWS origin sources.
You can use GeoIP blocking to serve content (or not serve content) 
to specific countries.
Cache control headers determine how frequently CloudFront needs 
to check the origin for an updated version your file.
The maximum size of a single file that can be delivered through 
Amazon CloudFront is 20 GB.

What happens if the content is not found in the edge location when 
a user requests your application?
Files are pulled from the origin and then stored in the cache at 
the edge location.

What is one reason you'd want to use Cloud Front?
Cloud Front is used to stream content more efficiently.





*/ 

is Relatnl DB better than NoSql?
How is RDS update and can a local DB be uploaded to AWS?

Hackathon
https://mlh.io/seasons/2022/events