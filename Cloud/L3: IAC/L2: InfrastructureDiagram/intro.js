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



*/ 