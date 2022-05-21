/*
Docker is an e.g of container

Messaging in the Cloud
There are often times that users of your applications need to be 
notified when certain events happen. Notifications, such as text 
messages or emails can be sent through services in the cloud. 
The use of the cloud offers benefits like lowered costs, increased 
storage, and flexibility.

Q: Messages are typically sent between which two entities?
Messaging typically occurs between Internet-based 
applications and devices. One system can send a message 
to another system.


Simple Notification Service
Amazon Simple Notification Service (or SNS) is a cloud service 
that allows you to send notifications to the users of your applications. 
SNS allows you to decouple the notification logic from being 
embedded in your applications and allows notifications to be 
published to a large number of subscribers(wc can be a person 
or anoda AWS service).

Features
SNS uses a publish/subscribe model.
SNS can publish messages to Amazon SQS queues, AWS Lambda 
functions, and HTTP/S webhooks.

Tips
SNS is found under the Application Integration section on the 
AWS Management Console.
SNS Topic names are limited to 256 characters.
A notification can contain only one message.

Q: Which ways can notifications be sent to users via SNS? Pick three.
Notifications can be sent to end users using mobile push, text 
messages, and email.

-: Why do we need queuing technology?
Queues
A queue is a data structure that holds requests called messages. 
Messages in a queue are commonly processed in order, first in, 
first out (or FIFO).

Messaging queues improve:
performance
scalability
user experience

Q: What type of processing does queuing support?
Asynchronous processing
The use of asynchronous processing, where a user doesn't wait 
for a response, improves the overall user experience.

Simple Queue Service
Amazon Simple Queue Service (SQS) is a fully managed message 
queuing service that allows you to integrate queuing functionality 
in your application. SQS offers two types of message queues: 
standard and FIFO.

Features
send messages
store messages
receive messages

Tips
The Simple Queue Service (SQS) is found under the Application 
Integration on the AWS Management Console.
FIFO queues support up to 300 messages per second.
FIFO queues guarantee the ordering of messages.
Standard queues offer best-effort ordering but no guarantees.
Standard queues deliver a message at least once, but occasionally 
more than one copy of a message is delivered.

Q: What are the benefits of a FIFO queue over a standard queue? 
Pick two.
messages r processed exactly one
msg r precessedin exact order

You should use FIFO ordering when message ordering is critical 
and standard queues when messages can arrive more than once 
and be processed out of order.

SQS - Create a Queue
Amazon SQS is a service that hosts the queue of messages (requests 
and responses) from the decoupled application components. 

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-basic-architecture.html

https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-getting-started.html


Send alerts via SNS
Create a Topic
Subscribe to a Topic
Publish a Message to a Topic









*/

https://stackoverflow.com/questions/28429493/how-to-connect-mysql-workbench-to-amazon-rds


SNS allows you to decouple the notification logic from being 
embedded in your applications?
mobile push?