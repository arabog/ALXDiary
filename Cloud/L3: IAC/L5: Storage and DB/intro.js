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








*/ 