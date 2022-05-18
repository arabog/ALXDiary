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










*/ 