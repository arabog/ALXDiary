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

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/resources-section-structure.html

-: Outputs: 
You should not output any sensitive information, such as passwords 
or secrets. For each resource's output, you will have to provide the 
following:

Description (optional) - A string
Value (required) - The property returned by the aws cloudformation 
describe-stacks command.

Export (optional) - The name of the resource output to be exported for 
a cross-stack reference.

Understanding the JSON (Parameters) file
Why do we need a separate parameter file (JSON)?
The separate parameter file (JSON) file helps us to avoid hard-coding 
the parameters in the template (YAML) file.


Any named parameters in the Parameters section of our CloudFormation 
template will need to have a matching value in a separate, Parameter file, 
which is in JSON format. The YAML format is not yet supported for the 
parameter file. A sample JSON-formatted Parameter file is:

[
          {
                    "ParameterKey": "EnvironmentName",
                    "ParameterValue": "UdacityProject"
          }
]

Having this additional file with actual parameter values allows you 
to change data used by your CloudFormation template without the 
risk of modifying the template directly and possibly introducing a 
typo or some logical error.

How to execute the Shell scripts?
You can run either of the shell scripts (create.sh or update.sh) as:
./<file_name> argument_1 argument_2 argument_3

For example, you can run the following command:
./create.sh ourdemoinfra ourinfra.yml ourinfra.json

The command above is equivalent of running the following:
aws cloudformation create-stack --stack-name ourdemoinfra --template-body file://ourinfra.yml    --parameters file://ourinfra.json  --region=us-east-1

Troubleshoot
While running the AWS commands using either create.sh or update.sh file, 
if you face permission denied error, then you will have to grant the execute 
permission to the owner (yourself) explicitly as:

chmod +x update.sh 
chmod +x create.sh 

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/AWS_EC2.html


https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpccidrblock.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-internetgateway.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpc-gateway-attachment.html


https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-attribute-dependson.html


https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-natgateway.html

-: Routing
Route table: Routing is the action of applying (routing) rules to your 
network, in this case, to your VPC. A route table contains a set of rules. 
It blocks traffic from resources that do not follow the routing rule. It is 
represented as an AWS::EC2::RouteTable resource in CloudFormation 
terminology.

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html

Rules: Rules define (in a particular order of precedence) the network 
protocol, allowed IP addresses, and ports to allow the inbound and 
outbound traffic separately. A single rule is called an 
AWS::EC2::Route resource in CloudFormation terminology.

The flow of creating resources here will be: 
Create route tables → Add routes → Associate route table to subnets.

SubnetRouteTableAssociation
In order to associate subnets with our route table, we will need to 
use a SubnetRouteTableAssociation resource using the following 
syntax:
This only takes two properties, which are the id's used for our 
RouteTable and our Subnet.

Important Note: Routes should be defined starting with the most 
specific rule and transitioning to the least specific rule.

Q: If your servers have no internet access it's probably because...
U created d internet gateway but forgot to attach it to ur VPC

and not bcos u created a routing table but forgot to associate
ur subnet(s) with it

https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-route.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/Welcome.html



-: Outputs
Outputs are optional but are very useful if there are output values you need to:

import into another stack
return in a response
view in AWS console
To declare an Output use the following syntax:

Outputs:
  Logical ID:
    Description: Information about the value
    Value: Value to return
    Export:
      Name: Value to export

The Value is required but the Name is optional. In the following example 
we are returning the id of our VPC as well as our Environment's Name:

VPC: 
        Description: A reference to the created VPC
        Value: !Ref VPC
        Export:
          Name: !Sub ${EnvironmentName}-VPCID

Join Function
You can use the join function to combine a group of values. The syntax 
requires you provide a delimiter and a list of values you want appended.

Join function syntax:

Fn::Join: [ delimiter, [ comma-delimited list of values ] ]

In the following example we are using !Join to combine our 
subnets before returning their values:

PublicSubnets:
        Description: A list of the public subnets
        Value: !Join [ ",", [ !Ref PublicSubnet1, !Ref PublicSubnet2 ]]
        Export:
          Name: !Sub ${EnvironmentName}-PUB-NETS

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/outputs-section-structure.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-join.html

https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-sub.html

*/ 