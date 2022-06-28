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
Microservice oriented
Microservices more closely map business logic to code. These systems can be updated and developed independently. A good example of a Microservice architecture would be a Python AWS Lambda application that uses API Gateway.

Elastic
Elastic systems can automatically scale to meet increased load without the involvement of humans. These same systems can then scale down again when load diminishes. By eliminating human touchpoints, which are error-prone, the quality increases. Likewise, because the system can scale up and down for demand, it is more efficient to run and costs less.

Continuous Delivery
Cloud-native systems leverage IAC (infrastructure as code) to fully define the infrastructure. This means that deployment can target a dynamically created environment and that software can be automatically deployed to a new environment as it is created. Humans again are eliminated from the process of deployment increasing quality.

DevOps
Cloud-native systems utilize DevOps. DevOps is a combination of automation, processes, and tools that increase automation, collaboration, and operational efficiency. Using Python for DevOps is a common way this automation is achieved.

Agility
The agility of developing solutions improves. The cloud speeds up development time and increases quality through the use of IaC (Infrastructure as Code) and Continuous Delivery.

Composable
Cloud-Native solutions are highly composable. The service design is one of integration. At the minimum, each service has an Application Programming Interface (API) that is consistent and discoverable. Other traits include well-defined behaviors for registration, discovery, and request management.

Pros:
Ability to leverage near infinite resources of the cloud: Compute, Disk I/O, Storage, and Memory.
No up-front costs and resources can be metered to meet demand like an electric or water utility.
Applications are able to “go global” immediately with no extra investment.
Increased reliability is increased as many cloud services are themselves highly available. A good example is Amazon S3 which has nine nine’s availability or is 99.999999999% reliable.
Security is improved by consolidating to a centralized security model where there is a shared security partnership with the cloud vendor. They take care of portions of security such as access to the physical data center.
The speed applications can be developed and tested are dramatically improved. With concepts like IAC (Infrastructure as Code), complete replicas of a production environment can be provisioned, tested, and then destroyed. This leads to increased quality of software and speed in which software can be developed.
Cons:
Risk of creating systems that rely on a specific cloud vendor.
The cost involved in migrating an application to a different architecture.
A current organization may need to hire a new workforce trained to use the cloud or retrain their workforce.
What is Fault-Tolerance?
Fault Tolerance - the property that enables a system to continue operating properly in the event of the failure of one or more of its components.

An example is a typical car, which is designed so it will continue to be drivable if one of the tires is punctured or damaged.
In computer systems, a fault-tolerant design enables a system to continue its intended operation, possibly at a reduced level, rather than failing completely, when some part of the system fails.

Q: What is a characteristic of cloud-native systems?
They are automable

-: AWS Console & Cloud9 Environment
The majority of work that you do in this lesson will be completed using AWS Cloud9, which lets you code, run, and debug code in your browser! For certain exercises, you will be expected to work through a Cloud9 environment, which has access to all the libraries we need as well as data management and deployment tools!

Set up a Cloud9 Environment
Then, you'll need to set up a Cloud9 environment that is connected to the main Github repository for this course. This environment will be the primary way in which we interact with the Cloud9 ecosystem.

-: What is AWS Lambda?
AWS Lambda is a new category of computing where business logic can be directly deployed to a production environment without thinking about servers. Another word for this is serverless or FaaS (Function As A Service). Some of the benefits of AWS Lambda include no servers to manage, continuous scaling, and billing at the sub-second level.

Another benefit of AWS Lambda includes being part of an ecosystem designed to exploit the capability. Here are two examples of AWS Lambda. The first example is AWS Step Functions. They build upon AWS Lambda to create more sophisticated workflows like polling for a job to finish and performing an action. The second example is AWS DeepLens (a computer vision device). It uses AWS Lambda to serve out predictions. Finally, if you look closely, almost every service on AWS can utilize AWS Lambda.

The AWS ecosystem allows Lambda functions to respond to events instead of constantly running. This is similar to a motion detector that turns on a light in the garage. The duration the light may run for could be only a few hours per year. If the light switch was manually triggered it is possible the light would be run constantly for 365 days in the year.

The AWS Lambda ecosystem allows integration with other core services in AWS through triggers. An example of a trigger would be a movie file that is uploaded to Amazon S3 storage. An AWS Lambda function could be triggered that uses an AWS API to transcode the movie file to a different code or to add captioning.

Relevant References
https://aws.amazon.com/lambda/

https://aws.amazon.com/lambda/faqs/


