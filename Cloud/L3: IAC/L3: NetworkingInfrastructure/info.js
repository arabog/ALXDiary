/*
-: Lesson Objectives
Upon completion of this lesson, you will be able to:

Describe the syntax of the CloudFormation code that builds the infrastructure
Build the following resources -
          Virtual Private Cloud and subnets
          Internet gateway and NAT gateway
          Route table
Export the stack output

-: Workflow and Helpers
The NAT gateway serves as an intermediary to take a private resource's 
outbound request, connect to the Internet gateway, and then relay the 
response back to the private resource without exposing that private 
resource's IP address to the public. 

We will deploy the (publicly visible) load balancer in the same 
VPC having both public and private subnets. Note that all 
resources within a VPC can connect to each other directly 
using the private IP address. Therefore, the elastic load balancer 
can directly distribute the ingress requests across multiple targets 
VMs with the same VPC, even if the VMs are in a private subnet. 


*/ 