/*
-: Introduction
Diagrams
Diagrams are a very important starting point for planning your 
cloud infrastructure. DevOps engineers start with a visual 
representation of the required cloud infrastructure before they 
turn it into code. 

A VPC is simply a network segment or container that is isolated
from d oda networks It can talk to other netwrks but nt d internet
unless there is a specific routing for it

Make use of www.lucidchart.com to draw the diagram.
https://www.lucidchart.com/pages/

Learn about architecting at scale
https://lethain.com/introduction-to-architecting-systems-for-scale/


https://github.com/udacity/nd9991-c2-Infrastructure-as-Code-v1/tree/master/supporting_material


-: Setting up Lucidcharts

Q: Cloud Architecture diagrams are...
A way to visualize d infrastructure u want to design
it's a great discussion tool to communicate to others what 
you intend to create.

Lucidchart
We’ll use Lucidchart to create cloud diagrams. Other applications that 
generate diagrams include Visio or Cloudcraft.

Set Up A Lucid Chart
Navigate to www.lucidchart.com
create a new doc using a blank template
select AWS Architecture 2017 & 2019 from d Shape manager sectn

Q: If my diagram covers multiple AWS accounts, regions and 
subnets, I should...
Create multiple diagrams, with each diagram covering a logical
container, such as subnet, VPC or Account

If you have too much going on inside a subnet, for example, you 
could create a Cloud Architecture diagram just for that one subnet 
and have a separate diagram that shows the VPC, AWS Account 
and/or region.

-: Diagramming AWS accounts & regions
Create A Diagram for AWS Accounts & A Region
Add AWS cloud container to ur canvas
Add AWS General Users onto your canvas
Rename ur  AWS General Users shape to Users

-: Diagramming Availability Zones
Q: When designing production systems, you should consider multiple 
availabilities zones in all situations except which one of these:
Cost

It is cheaper to run a single copy of your web server or service, 
however, keep in mind that if something happens to it, there's no 
alternative in place in this case.

Availability Zones (AZ): An AZ is a set of one or more data centers 
(physical building).

Best Practices
Choose to have more than one availability zone to avoid a 
single point of failure.
Include more than one availability zone to design for high 
availability, .
You may choose to reduce to one AZ, possibly for prototyping 
and design for low cost. But it is not recommended for 
production environments.

-: Virtual Private Cloud
An IPv4 address is made up of four octets.

10        0         0         0         /16

CIDR Block = 10.0.0/16        One octect is missing here

We could create 255 of this smaller subnets within our VPC 
by doing [10.0.2.0, 10.0.2.1, 10.0.2.2, 10.0.2.3.....10.0.2.255], 
[10.0.3.0, 10.0.3.1, 10.0.3.2, 10.0.3.3...... 10.0.3.255], and so on. 

Glossary
Virtual Private Cloud (VPC): A virtual private cloud is a pool 
of networked cloud resources. It can span more than one 
availability zone.

The equivalent of this would be a data center. However, thanks 
to availability zones, VPCs can span more than one physical 
building. This is an amazing feature that protects against real 
world disasters like electrical failures, fires and similar events.

https://docs.aws.amazon.com/vpc/latest/userguide/what-is-amazon-vpc.html

https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing


-: Public vs Private Subnets
Decide for each practical, everyday service whether you think 
it should be a private or public subnet. Drag the appropriate 
blue block into the Subnet Restriction column.

APPLICATION                                       SUBNET RESTRICTION

Public-facing Web Server                          Public

Database                                                    Private

Load Balancer to your web servers                 Public

Back-end application server                       Private

Subnets
A subnet is a subset of the overall VPC network and it only exists 
in a single availability zone, unlike its parent network, the VPC.

A subnet contains resources, and can be assigned access rights 
that apply to all resources within that subnet.

Subnets can be public or private. Public subnets are accessible 
to external users. Private subnets are only accessed internally 
by other resources within your cloud container.

Use IP addresses for routing traffic
Use IP addresses as the “keys” for routing traffic. We can 
route traffic to stay within the VPC, or within a particular 
subnet, for security reasons.

For example, a database or any sensitive data will be placed 
in a private subnet. A public server, like a web server, can be 
placed in a public subnet. Routing rules applied to a subnet 
allow us to define access to all resources placed inside that 
subnet.

Q: If I just created a VPC and I want to provide internet access 
to it, I should make sure to...
Create a route to d Internet GateWay(IGW) and associate it with my subnet(s)
Create an IGW
Attach d IGW to my VPC

VPC internet gateway 
VPC internet gateway directly to d right of ur Users Icon

Sometimes you'll forget the route or forget to attach the Internet 
Gateway. Just be sure to consider these steps when troubleshooting 
a "no internet access" issue.

Software Defined Networking
What we have created here it's called Software Defined Networking. 
That is, using APIs and already-existing physical infrastructure to 
create our own networking layer on top, with our own privacy rules, 
our own routing and our own Private IP Space.

VPN or Virtual Private Network
It is a type of encrypted connectivity that You can setup between 
your on-premise data center and your Virtual Private Cloud. 
This allows access in and out of your AWS VPC in a secure 
manner, across the internet and using internal, Private IP 
addresses.

DirectConnect
It is a physical data line that you can purchase directly from 
AWS or through a telecommunication service provider to 
access your AWS Cloud without moving your data traffic 
across the public internet.

Internet Gateway
An internet gateway is a resource that enables inbound and 
outbound traffic from the internet to your VPC.

An internet gateway allows external users access to communicate 
with parts of your VPC.

If you create a private VPC for an application that is internal 
to your company, you will not need an internet gateway.

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Internet_Gateway.html

-: Network Address Translation
Network Address Translation (NAT) Gateway
It provides a way for servers/instances in the private subnet to access 
the Internet, for example, servers downloading the software or 
security patches. NAT Gateway keeps the private instances protected 
from unsolicited inbound connections from the Internet.

To provide outbound internet access to resources in the private subnets, 
we configure the NAT gateway to route the outbound requests to the 
Internet gateway for the VPC. While routing the outbound requests, 
the NAT gateway replaces the source instances' (private) IP address 
with NAT's own (public) IP address.

When sending the "response" traffic back to the instances, the NAT 
gateway translates the addresses back to the original source IP 
address, meaning it "translates" the incoming response into 
private traffic.

In summary, the NAT gateway serves as an intermediary to take 
a private resource's request, connect to the Internet, and then 
relay the response back to the private resource without exposing 
that private resource's IP address to the public.

NAT Gateway needs public access itself; remember to place it in 
the public subnet. Place NAT gateway inside the public subnet 
so that it can communicate with the public Internet and handle 
requests from resources in a private subnet.

https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html


-: Autoscaling groups
Glossary
Autoscaling group: It is a coherent group of Virtual Machines (EC2 instances) 
that allows running the exact number of VMs that are required to meet the 
demand/specification. The autoscaling group can automatically start or stop 
the servers (EC2 instances) according to the amount of incoming traffic. This 
behavior of the autoscaling group helps in two ways:

The consumer pays for the only duration of the servers when they were active.

The consumer doesn't have to worry about horizontal scaling of servers for a 
sudden peak in incoming traffic.

Best Practice
It is recommended that an autoscaling group spans more than one availability 
zone, for reliability.

If we set the autoscaling group to run one resource, it will run that one resource 
in one of the availability zones.

If there is a failure of that resource, the autoscaling group will shut it down in 
that availability zone and start that same resource in the other availability zone.

https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-groups.html

-: Load Balancers
A target grp is a collection of servers providing a common service

Load Balancer
A load balancer takes incoming traffic and distributes it to two or more 
resources. For example, it can take inbound user requests to access your 
website, and it can distribute the requests evenly among two or more servers.

Without a load balancer, having public-facing servers in more than one AZ 
would mean that users would have to use a different URL to reach each of 
the AZs. This can be impractical compared to just a single URL.

Good practice - Assume we have a set of web-servers in private subnet(s). 
Then, we must have a Load Balancer that would access our web-servers. 
These web-servers, in turn, would access the backend database.

AWS - Elastic Load Balancing
We recommend you to read about three types of load balancing offered 
by AWS at different layers of networking protocol:

https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/introduction.html

https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html

https://docs.aws.amazon.com/elasticloadbalancing/latest/network/introduction.html


-: Security Groups
Security groups manage traffic at the server level (the resource level). Security 
Groups aren’t for managing higher-level groups such as subnets, VPC, or user 
accounts.

The same security group can be assigned to multiple resources that require 
the same security access settings defined by that security group.

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html

Q: A Security group is a collection of networking rules for...
Inbound and outbound traffic

While you could certainly specify just one type of traffic, it's common 
practice to include rules for both inbound and outbound in a single 
Security group.

Q: A security group can be assigned to...
Any instance (or same level) in the current VPC

You can assign an SG (firewall rule) either to an instance, load balancer, 
or database, etc., in your VPC. However, each SG can scope to one or 
more IP address anywhere on the Internet (such as giving access to 
yourself, allowing the entire network 0.0.0.0/0 )




*/ 

Is this statement correct IP addresses are in VPC but they are used in Subnets?