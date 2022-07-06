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


https://us-east-1.console.aws.amazon.com/cloud9/ide/a4a117ec513144cb91499651a9fca671


1. Allow Cloud9 to access the Github repo:
# Generate a pair of SSH keys, if you want your Cloud9 env to be able to push changes to the Github repo
ssh-keygen -t rsa

# View the contents of the public key
cat /home/ec2-user/.ssh/id_rsa.pubssh-keygen -t rsa

2. Clone the forked repo into the Cloud9 environment using:
git clone https://github.com/[Your-username]/DevOps_Microservices.git
# The instructor uses his personal repo instead. 
# It's https://github.com/noahgift/awslambda.git

cd awslambda

3. [Optional] Increase the Cloud9 memory limits: Run the resize.sh script present in this folder to increase the Cloud9 available-memory limits.
cd DevOps_Microservices/Supporting-material
# The instructor shows `cd awslambda` per hierarchy of his personal repo
df -h
chmod +x resize.sh
./resize.sh 
df -h
cd ..

df -h

4. Initialize a new Lambda function:
sam init

Choose the following options in the prompts that appear next:

Prompt	Recommended Response
Template source	AWS quick start template
Package type	Image artifact
Base image	amazon/python3.8-base
Project name	Your choice of the [Application-name]
AWS quick start application template	Hello world Lambda image example

<!-- 4 video tutorial -->
To initialize a new lambda fxn:
sam init

Select: 1, 2, 5

Name:
HelloWorldLambda2022

Select: 1- HelloWorld.....

Follow the instructn: (readme file)

cd HelloWorldLambda2022

sam build

to invoke: sam local invoke

sam deploy --guided

5. Build the Hello World application
# Check the [Application-name]/README file instructions
cd [Application-name]
sam build

6. Run the application locally (in Cloud9)
sam local invoke

7. Deploy the application to an ECR image repository
# Create a cloudformation stack to deploy the application image in the ECR image repository
sam deploy --guided

8. Test: After successful execution, it will generate an API gateway endpoint URL that you can curl or paste in a browser tab to see the function output.
curl [API gateway endpoint URL]

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-getting-started-hello-world.html

https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html


go to:elastic container registry
and cr8 a registry

copy d URI: 
808190147553.dkr.ecr.us-east-1.amazonaws.com/helloworldrepo

paste the uri in the Image Repository for HelloWorldFunction prompt: 
808190147553.dkr.ecr.us-east-1.amazonaws.com/helloworldrepo

get the deploy url from the Value section:
curl url
curl https://6vvpx6x60b.execute-api.us-east-1.amazonaws.com/Prod/hello/


or paste d url in browser
https://6vvpx6x60b.execute-api.us-east-1.amazonaws.com/Prod/hello/


Q:What parameter(s) does a basic lambda_handler accept as input?
event and context

-: Deploying and testing:
to run the API locally on port 3000:
sam local start-api

dn run: curl http://127.0.0.1:3000/hello
in terminal

One of the most common ways to trigger the Lambda function would be through API Gateway. A web service is created by adding API Gateway to the lambda, and then, if the URL is requested by a browser or an API call, it would, in turn, trigger the Lambda function.

Another common way to trigger the AWS Lambda function would be to attach it to Amazon S3. Instead of the Lambda function being triggered from the web service, it could be triggered every time a new file is placed in an S3 bucket. Yet another trigger could be a CloudWatch Event Timer. A timer could be set up to run every hour. At the top of each hour, the Lambda function would be called.

Let’s get into a real-world example now. A company that needs to collect a competitor’s pricing, say for a similar washing machine they are selling, could create a Lambda function that scrapes the competitor’s website. Next, a CloudWatch Event timer could run nightly to scrape the website and put the results into an S3 bucket. When the S3 bucket receives the HTML results, a second AWS Lambda function could be triggered that extracts the pricing information from the HTML file and writes it to DynamoDB, if it is lower than the current value in the database. Finally, the website itself could host a third AWS Lambda function that uses API Gateway to serve out the companies current prices, which will always be at least the same price or lower than their competitors.

-: Creating a Virtual Environment
Creating a Virtual Environment
A virtual environment is a Python environment isolates the Python interpreter to a specific directory. In simple words, it has its own set of python packages installed.

Creating Virtual Environments
There are a several ways to create a virtual environment. Here, we will make use of the venv package that comes as a default with Python 3.x. The Python standard library includes a module called venv that helps to create a virtual environment.

The command below will create hello virtual environment in a user's home directory.

python3 -m venv ~/.hello
To use this virtual environment it needs to be activated.

source  ~/.hello/bin/activate

[Optional] Convention to Create Virtual Environments:

 A convention based workflow with virtual environments can also dramatically simplify using them. Here is a simple convention to use:

Create a virtual environment with a ~/.[reponame] format. This removes the decision about where to put the virtual environment and what to name it. If your git repository is called hello, then you would run the following command:
python3 -m venv ~/.hello

Note, that the . makes the virtual environment hidden. This will prevent your home directory overflowing with virtual environments when you open it in a GUI or list the contents with ls -l.
Create an alias in your Bash or ZSH environment. With ZSH, the config file to edit would be ~/.zshrc. In Bash it would be ~/.bashrc. Inside of this config file add the following:

# Hello repo                                                                   
alias hello="cd ~/hello && source ~/.hello/bin/activate"   

https://ohmyz.sh/

https://packaging.python.org/en/latest/guides/installing-using-pip-and-virtual-environments/


Q: What is the terminal command for creating a virtual, python environment named mycloud9?
python3 -m venv ~/mycloud9

Q: What is the terminal command for activating a virtual, python environment named mycloud9?
You should use source and activate with your environment name.
source ~/mycloud9/bin/activate

Q: After you've created a virtual environment, which two steps do you then typically follow (in order)?
1. Activate d environmt 
2. Install any required dependencies


-: Events & Response
here are codes (signals) that are returned that indicate what a web request is doing:

1xx (request received and processing)
2xx (request successful)
3xx (redirection)
4xx (client error
5xx (server error)

In practice this comes into play when testing an application or setting up alerts. For monitoring that an error code that had, say 500 would signal a problem and a 200 would be a success.


Q: Assuming an event has a body, how do you retrieve and save that JSON body in code?
You have to load the JSON body with json.loads() and save the event["body"] to a variable name.
body = json.loads(event["body"])


Q: When formatting a JSON response you have to include several "string":value pairs. What strings are included in a simple JSON response? (Check ALL options that apply.)
statusCode
headers
body

Q: To send a JSON payload as input or as a test, what kind of HTTP method should you use?
POST

to access help:
sam local invoke -h

anoda way of invoking json
sam local invoke -e payload.json


-: Test & Response



-:Summary:
Key Terms:
Microservice
A lightweight loosely coupled service. It can be as small as a function.

FaaS (Function as a Service)
A type of cloud computing that facilitates functions that respond to events.

AWS Lambda
A serverless compute platform by AWS that has FaaS capability.

Cloud-Native Applications
Cloud-Native applications are services that utilize the unique capabilities of the cloud, like serverless.

SQS Queue
A distributed messaging queue built by Amazon with near-infinite reads and writes.

Serverless
Serverless is a technique of building applications based on functions and events.

Moore's Law
The perception that for some time the number of transistors on a microchip doubles every two years.

AWS Cloud9
AWS Cloud9 cloud-based development environment running in AWS. It has special hooks for developing serverless applications.

Python Virtual Environment
A python virtual environment is created by isolating a python interpreter to a directory and installing packages in that directory. The python interpreter can perform this action via python -m venv yournewenv.

Source: https://noahgift.github.io/cloud-data-analysis-at-scale/topics/key-terms