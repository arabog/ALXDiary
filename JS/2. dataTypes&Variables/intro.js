
/*
The primitive data types of JavaScript.
Numbers
Strings
Booleans,
undefined
null

It's good practice to include code comments to improve code readability.

Strings can be any combination of characters -- letters, numbers 
and even emojis

The JavaScript Udacity style guide for labs and projects suggests 
using single quotes to define string literals

What do you think will happen when you type "Hello" + 5*10 
into the console?
"Hello50"

It’s called implicit type coercion and it's a feature of JavaScript. JavaScript multiplies the 5*10 to become 50 and then changes the number 50 into the string "50", so you're adding together the same data type. This then gets combined with the string "Hello". 

let and const avoid this issue because they are only available in the scope where they are declared.

You can use the String’s charAt() method to access individual characters. For example, quote.charAt(6) 

Escaping characters
In JavaScript, you use the backslash to escape other characters.

"The man whispered, \"please speak to me.\""

Select the string that returns the following output:
"The file located at "C:\\Desktop\My Documents\Roster\names.txt" contains the names on the roster."

"The file located at \"C:\\\\Desktop\\My Documents\\Roster\\names.txt\" contains the names on the roster."

 If you want to know the ASCII value of a particular character, you can try running the code below:

// Pick a string. Your string can have any number of characters.
const my_string = "a";

// Calculate the ASCII value of the first character, i.e. the character at the position 0. 
const ASCII_value = my_string.charCodeAt(0);

// Let us print
console.log(ASCII_value);

A flat network is a simple network design that reduces cost and overall adminstratn

What can a VPC protect? Pick two.
Data stored on AWS S3
AWS EC2 Instances

Definition - A network access control list (ACL) defines the set of firewall 
rules for controlling traffic coming in and out of subnets in your VPC.

Launch an EC2 Instance
Access VPC service from AWS mgt console
Launch an EC2 instance
Attach an EBS volume
Cleanup and Disable EC2 instance

Compute Power In The Cloud
Compute power in the cloud is a faster way to build applications, providing:

no servers to manage (i.e. serverless)
ability to continuously scale
ability to run code on demand in response to events
pay only when your code runs

Lambda
AWS Lambda provides you with computing power in the cloud by allowing you 
to execute code without standing up or managing servers.

Tips
Lambda is found under the Compute section on the AWS Management Console.
Lambdas have a time limit of 15 minutes.
The code you run on AWS Lambda is called a “Lambda function.”
Lambda code can be triggered by other AWS services.
AWS Lambda supports Java, Go, PowerShell, Node.js, C#/.NET, Python, and 
Ruby. There is a Runtime API that allows you to use other programming 
languages to author your functions.
Lambda code can be authored via the console

Lambda is event-driven, so you can run your code based on certain 
events happening, like a file upload, or a record being inserted in 
a database, etc.

https://aws.amazon.com/lambda/


Create and execute a Lambda
AWS S3 is a file storage service


Exercise
Launch an EC@ instance
Connect to Linux instance
Create n EBS
EBS Dashbord

VPC Dashboard
Create a VPC
Your VPCs

Launch an EC2 instance

Create a Lambda Function
Create and Execute a Lambda

Deploy Sample App to Elastic Beanstalk

Amazon S3 
https://youtu.be/_I14_sXHO8U


Elastic Beanstalk
Elastic Beanstalks is an orchestration service that allows you to deploy 
a web application at the touch of a button by spinning up (or provisioning) 
all of the services that you need to run your application.

Tips
Elastic Beanstalk is found under the Compute section of the 
AWS Management Console.
Elastic Beanstalk can be used to deployed web applications 
developed with Java, .NET, PHP, Node.js, Python, Ruby, Go, 
and Docker.
You can run your applications in a VPC.
Elastic Beanstalk can spin up database instances for you, VPCs, 
security groups, EC2 instances, etc

What service can be launched using Elastic Beanstalk? Select three.
. Remember Elastic Beanstalk can be used to launch an EC2 instance, set up 
auto-scaling or an elastic load balancer, and it can spin up a database instance.

What is an environment?
An environment is the collection of AWS resources and permissions 
to allow your web application to run smoothly. The Elastic Beanstalk 
service manages the environment for us.


*/
how to get Elastic IP Allocation ID in VPC?
Customer Gateway  IP?
Can a default value be deleted e.g VPC
What does no server means in Compute Power In The Cloud?
Why deleting my first lampda function and IAM role for d fxn
i noticed other roles dt i didn't create, do i need to be concern
abt them like deletng dm?

Consequences of disabling: Block all public access in S3

When deploying an applicatn in Elastic Beanstalk, do we 
need to create all stuffs like VPC, Lmbda fxn, S3 bucket etc?
On d classroom page, 4 projects were slated to be submitted on aug 11,
r d projects d previous projects or new ones?

How can i check my sub balance?
