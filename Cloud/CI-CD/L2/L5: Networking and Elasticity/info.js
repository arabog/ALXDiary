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

An Auto Scaling group is a collection of Amazon EC2 instances 
that are treated as a logical unit. You configure settings for a 
group and its instances as well as define the group’s minimum, 
maximum, and desired capacity. Setting different minimum and 
maximum capacity values forms the bounds of the group, which 
allows the group to scale as the load on your application spikes 
higher or lower, based on demand. To scale the Auto Scaling 
group, you can either make manual adjustments to the desired 
capacity or let Amazon EC2 Auto Scaling automatically add 
and remove capacity to meet changes in demand.

When launching fleets of instances, you can specify what 
percentage of your capacity should be fulfilled by On-Demand 
instances, and what percentage with Spot Instances, to save up 
to 90% on EC2 costs. Amazon EC2 Auto Scaling lets you 
provision and balance capacity across Availability Zones 
to optimize availability. It also provides lifecycle hooks, 
instance health checks, and scheduled scaling to automate 
capacity management.

https://aws.amazon.com/ec2/autoscaling/getting-started/

https://docs.aws.amazon.com/autoscaling/ec2/userguide/get-started-with-ec2-auto-scaling.html

You use key pairs to connect to an Amazon EC2 instance with SSH
and it helps to  log in to the EC2 instances.

-: Elastic Load Balancing
Elastic Load Balancing automatically distributes incoming 
application traffic across multiple servers.

Elastic Load Balancer is a service that:

Balances load between two or more servers
Stands in front of a web server
Provides redundancy and performance

Tips
Elastic Load Balancing can be found on the EC2 Dashbaoard.
Elastic Load Balancing works with EC2 Instances, containers, 
IP addresses, and Lambda functions.
You can configure Amazon EC2 instances to only accept traffic 
from a load balancer.

Match the concept to the definition.
CONCEPT             DEFINITION

Redundancy: If u lose a server, d load balancer will send requests
to other working servers. ds features maintains continous operatns
in an emergency

Performance: if a server starts having issues or bottleneck, d load
balancer will add more servers to d pool of available servers. Auto
scaling automatically adjusts capacity to maintain a steady state.

-: Elastic Load Balancing
AWS offers three types of load balancers,

1. Application Load Balancer (ALB)
A simple use case: Assume you are running a microservices-architecture 
based application. An Application Load Balancer allows you to host the 
different API endpoints of your application on different servers. The 
load balancer then redirects the incoming HTTP/HTTP traffic to the 
suitable server based on the rules you specify in the configuration.

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

https://classroom.udacity.com/nanodegrees/nd9991-alg-t2/parts/cd0355/modules/29783684-5852-4b81-99f6-2de6ff37b6d6/lessons/1fc3917d-88f9-4465-8958-d7b9879372ab/concepts/4a2582ac-02e8-4b52-8a37-a0da08fcf940



2. Network Load Balancer (NLB)
A Network Load Balancer helps to balance the load on each 
individual server. Having an NLB becomes essential when 
your application requires handling millions of requests per 
second securely while maintaining ultra-low latencies.

https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html

3. Classic Load Balancer (CLB)
It is a previous generation option. You can choose a Classic 
Load Balancer when you have an existing application running 
in the EC2-Classic network.

https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html


Gateway Load Balancer
Choose a Gateway Load Balancer when you need to deploy and manage 
a fleet of third-party virtual appliances that support GENEVE. These 
appliances enable you to improve security, compliance, and policy controls.

https://aws.amazon.com/elasticloadbalancing/


An NLB serves as the single point of contact for clients and 
automatically distributes the incoming traffic uniformly 
across multiple targets. The targets are the EC2 instances 
within the same or different AZs.

HOW TO CREATE DEFAULT VPC
https://docs.aws.amazon.com/vpc/latest/userguide/default-vpc.html#create-default-vpc


#!/bin/bash
sudo yum update -y
sudo amazon-linux-extras install -y lamp-mariadb10.2-php7.2 php7.2
sudo yum install -y httpd mariadb-server
sudo systemctl start httpd
sudo systemctl enable httpd
sudo chkconfig httpd on
# Set file permissions for the Apache web server
sudo groupadd www
sudo usermod -a -G www ec2-user
sudo chgrp -R www /var/www
sudo chmod 2775 /var/www
find /var/www -type d -exec sudo chmod 2775 {} +
find /var/www -type f -exec sudo chmod 0664 {} +
# Create a new PHP file at  /var/www/html/ path
// echo "<?php phpinfo(); ?>" > /var/www/html/phpinfo.php
 echo "<?php echo \"<h1>Welcome to server 2</h1>\" ?>" > /var/www/html/phpinfo.php
 

The script above will install, configure, and launch the 
Apache webserver on the EC2 instance. You can learn 
more about the individual steps at 
Create an EC2 instance and install a web server.

https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Tutorials.WebServerDB.CreateWebServer.html#CHAP_Tutorials.WebServerDB.CreateWebServer.Apache


Configuring the secure HTTPS on EC2 will add overhead to 
the current experiment, and you may deviate from the intent 
of learning an NLB.

https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/SSL-on-amazon-linux-2.html


An Autoscaling group contains a collection of EC2 instances that 
share similar characteristics and are treated as a logical group.

All EC2 instances that are provisioned as a part of auto-scaling 
have the same configuration because they are instantiated from 
a Launch template. 

n this exercise, we will use the following two services 
available in the EC2 dashboard:
Instances → Launch templates
Auto Scaling → Auto Scaling Groups





*/ 

How is AWS auto-scaling service diff 4rm EC2 autoscaling?
In Network setting in AWS autoscaling, wt is d diff btw 
public/private subnet?

