In this lesson, requests are typically HTTP requests with some input data, and a response will be a JSON-formatted set of output values.

-: Functions as a Service (FaaS)
What is AWS Lambda?
From the AWS documentation:

"AWS Lambda is a compute service that lets you run code without provisioning or managing servers."

"AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second.
You pay only for the compute time you consume - there is no charge when your code is not running."
"You can use AWS Lambda to run your code in response to events," such as HTTP requests.

SQS Queue
Amazon Simple Queue Service (Amazon SQS) offers a secure, durable, and available hosted queue that lets you integrate and decouple distributed software systems and components.

A queue is just a type of list that orders data in a particular way; typically in a first-item-in = first-item-out order (FIFO)

https://aws.amazon.com/sqs/

https://aws.amazon.com/blogs/compute/seamlessly-scale-predictions-with-aws-lambda-and-mxnet/


-: A Model for Serverless
Though we'll be using AWS cloud tools, there are a number of other providers that you can use to build serverless applications with auto-scaling capabilities. The skills you learn in this lesson will be widely applicable to these other platforms. Some of the larger, cloud providers include:

Amazon Web Services [ Chalice & Cloud Formation]
https://github.com/aws/chalice
https://aws.amazon.com/cloudformation/

Terraform   https://www.terraform.io/

Google Cloud Platform
https://console.cloud.google.com/welcome?project=dev1-312820&pli=1

Microsoft Azure
https://azure.microsoft.com/en-us/


-: Benefits of FaaS
Why FaaS?
Higher developer ROI because server infrastructure management no longer required.
More time focused on writing code, which leads to a higher developer velocity.
Functional programming is a design well suited to distributed computing. Instead of scaling your entire application, you can scale your functions automatically and independently with usage.

Q: What is the main benefit of FaaS? (There are multiple ways to answer this question; think about the features that FaaS have.)
Simple
Event based
Can be more cost effective
Leverage Cloud-Native Technologies

Complete abstraction of servers away from the developer.
Cost-effective. There is billing on-demand; based on consumption and executions.
Services that are event-driven and instantaneously scalable.

-: Cloud-Native
What is Cloud Native Computing?
According to the Cloud Native Computing Foundation:

Cloud Native computing empower organizations to build and run scalable applications in modern, dynamic environments such as public, private, and hybrid clouds. Containers, service meshes, microservices, immutable infrastructure, and declarative APIs exemplify this approach.

In simpler words, it is the ability to design, build, and run applications in the cloud, thereby utilizing the seemingly "infinite" compute, storage, and networking capacity and other inherent benefits of cloud computing.

Benefits of Cloud Computing
Cost
There is no up-front cost and resources can be precisely metered to meet demand.
Speed
The cloud offers self-service, so an expert user can leverage the resources to build solutions quickly.
Global scale
All major cloud providers have a global scale, which means services can be provisioned all over the world to meet demand in a geographic region.

Productivity
Many tasks, such as racking servers, configuring network hardware, and physically securing a data center, no longer exists. Companies can focus on building core intellectual property versus reinventing the wheel.

Performance
The performance of applications can leverage a continuous upgrade cycle. The network, the storage and the compute improve over time consistently. Additionally, Cloud-Native applications are able to leverage new capabilities in the cloud to further increase performance.

Reliability
The core architecture of the cloud offers redundancy at every step. There are multiple regions and multiple data centers in each region. Cloud-native architecture can design around these capabilities, leading to highly available architectures. Additionally, many-core cloud services are themselves highly available, like Amazon S3, which has nine nines, or 99.999999999% reliability.

Security
You are only as good as your weakest link with security. By consolidating to centralized security, a higher level of security occurs. Problems such as physical access to a data center or encryption at rest become industry standard on day one.

https://docs.aws.amazon.com/whitepapers/latest/aws-overview/six-advantages-of-cloud-computing.html

https://aws.amazon.com/application-hosting/benefits/


-: Characteristics of Cloud-Native Systems
