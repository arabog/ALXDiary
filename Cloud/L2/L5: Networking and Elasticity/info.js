/*
Why do we need networking in the cloud?
Networking
Networks reliably carry loads of data around the globe allowing for 
the delivery of content and applications with high availability. The
network is the foundation of your infrastructure.

Cloud networking includes:
network architecture
network connectivity
application delivery
global performance
delivery


What is the address of a computer called?
The IP address is a long string of numbers that represents a 
computer's location on the Internet.

DNS: Domain Name System


-: Route 53: Scalable DNS and Domain Name Registration
Route 53 is a cloud domain name system (DNS) service that 
has servers distributed around the globe used to translates 
human-readable names like www.google.com into the 
numeric IP addresses like 74.125.21.147.

Features
scales automatically to manage spikes in DNS queries
allows you to register a domain name (or manage an existing)
routes internet traffic to the resources for your domain
checks the health of your resources

Tips
Route 53 is found under the Networking & Content Delivery 
section on the AWS Management Console.
Route 53 allows you to route users based on the user’s 
geographic location.

Identify one service not provided by Route 53.
Website hosting

but it does the ffg:
domain name registrtion
internet traffic routing
health checking for resources

Route 53 does not provide website hosting as it is only an 
authoritative DNS service.

-: Why do we need elasticity in the cloud?
Elasticity in the Cloud
One of the main benefits of the cloud is that it allows you 
to stop guessing about capacity when you need to run your 
applications. Sometimes you buy too much or you don't buy 
enough to support the running of your applications.

With elasticity, your servers, databases, and application 
resources can automatically scale up or scale down 
based on load.

Match the concept to the definition.
Scale up: Vertical scaling by resizing an instance to add more
capacity
Scale out: Horizontal scaling by increasing d number of 
resources e.g servers


Scaling up is also called vertical scaling, and scaling out is 
also called horizontal scaling.

Resources can scale up (or vertically). In Amazon EC2, this 
can easily be achieved by stopping an instance and resizing 
it to an instance type that has more RAM, CPU, IO, or you 
can scale out (or horizontally), which increases the number 
of resources. An example would be adding more servers.

-: EC2 Auto Scaling
EC2 Auto Scaling is a service that monitors your EC2 instances 
and automatically adjusts by adding or removing EC2 instances 
based on conditions you define in order to maintain application 
availability and provide peak performance to your users.

Features
Automatically scale in and out based on needs.
Included automatically with Amazon EC2.
Automate how your Amazon EC2 instances are managed.

Tips
EC2 Auto Scaling is found on the EC2 Dashboard.
EC2 Auto Scaling adds instances only when needed, 
optimizing cost savings.
EC2 predictive scaling removes the need for manual 
adjustment of auto scaling parameters over time.

AWS auto-scaling service is diff 4rm EC2 autoscaling
bcos it allows u to setup oda services such as Dynamo DB
to automatically scale

How could you know when EC2 Auto Scaling is launching 
or terminating an instance?
You can configure EC2 Auto Scaling to send an Simple 
Notification Service (SNS) notification whenever your 
EC2 Auto Scaling group scales.

-: Create Auto Scaling group
EC2 Auto Scaling is a service that ensures you have the 
desired number of EC2 instances always up and running 
to handle the expected load for your application. To set-up 
an Auto Scaling group, you require the following basic details:

1. Count of instances - 
The desired count of the EC2 instances you want to have available. 
If any instance goes down/fails, a new instance automatically spins up.

2. Launch template - 
The auto scaling group contains a collection of EC2 instances 
that are treated as a logical group. All EC2 instances within 
a group share the same configuration. Therefore, You need to 
specify the configuration details, such as, the ID of the Amazon 
Machine Image (AMI), the instance type, a key pair, security groups, 
and the other parameters that you use to launch EC2 instances. 
You specify the configuration details in a Launch template.

3. Scaling policy - The auto scaling policy that defines how 
to scale your EC2 instances automatically, based on demand



*/ 

How is AWS auto-scaling service diff 4rm EC2 autoscaling?