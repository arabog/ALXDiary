Prerequisites:
Here's what you'll need to stay afloat in this course:

Experience with Front-End Development using HTML5 and JavaScript
Experience with Version Control using Git
Experience with Back-End Development of an Application in AWS
Linux Command Line Basics
Ability to Create a Key-Pair from EC2
Ability to Create an AWS IAM User with Programmatic Access
Create a PostgreSQL Database in Amazon RDS with a Public IP Address
Create and Use a Local PostgreSQL Database (either Installed or with Docker Compose)
You'll also need accounts in Github, Circle CI and AWS.

-: Introduction to Continuous Delivery
There is some confusion in the community around Continuous Delivery, Continuous Integration and Continuous Deployment. For the sake of 
consistency throughout this course, we will assume that Continuous Delivery is an overarching paradigm or mindset that informs and enhances the practices of Continuous Integration and Continuous Deployment.

Continuous Delivery = Continuous Integration + Continuous Deployment

Continuous Integration: 
The practice of mergining all developer's working copies to a shared mainline
several times a day.

Continuous Deployment:
A software engineering approach in wc d value is delivered freqly via 
automated deploymts

Continuous Delivery:
An engineering practice in wc teams produce and release value in 
short cycles

CI/CD is a set of development practices aimed at automating the building, testing, and deployment of applications.

https://aws.amazon.com/devops/continuous-delivery/

https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment

https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment


-: Continuous Delivery Is Important
Devops, Agile, Lean, Kanban, Scrum... all great things, all exciting buzz words, each the subject of many conferences, blogs and courses. But, not a single one of those amazing concepts or methodologies will make a real difference until we allow them to change how we think about the value we deliver to our customers.

Continuous Delivery doesn't replace anything, but rather it enhances everything.

-: Stakeholders
Both sides of the business/tech divide need to involve the other side in decisions so that our companies can be stronger and make a better impact on the world. But, since you're the one taking this course, it's probably going to be up to you to start the conversation. You can start by bringing your business leaders into the discussion about CI/CD and Continuous Delivery.

Use this as an opportunity to translate the technical terms into words that matter to the business-minded people in your company. Convince them to move in the direction of Continuous Delivery based on the very real benefits it can have for your company, not just some cool technical features that make developers happy. By bringing the business side of the house into the discussion, you'll be better positioned to make real change!

Always remember that business leaders need to be at the helm of decisions that affect the bottom-line.

-: Continuous Delivery as a "True North"
A Better "True North"
True continuous delivery is not always attainable for the long term. That doesn't negate its usefulness as a "True North", though. If we keep continuous delivery as our "eventual destination", then every small improvement in that direction will be a win.

Building Confidence
In order to achieve (or even move in the direction of) continuous delivery, we need to pay attention to the confidence of our stakeholders. The confidence they have in the delivery team to do its job well, the more freedom the delivery team will have to move closer to continuous delivery.

Stakeholders need confidence that...

Production will be available for users
Features will be built correctly
Once they have that, frequent, automated deliveries straight to production should be no problem.

Exercises to Build Confidence and Move Closer to Continuous Delivery
Expect collaborative, comprehensive grooming of features that include team and stakeholders

Ruthless slicing of features to smallest valuable increments

Build team-wide, deep understanding of each feature's requirements and characteristics before coding starts

Write comprehensive automated unit tests in front-end and back-end layers

Shoot for high coverage from automated back-end integration tests

Shoot for high feature critical-path coverage from end-to-end UI tests

Include automated smoke tests that can be run on production-candidates

Ensure all post-commit tasks and hand-offs must be automated in CI/CD

Strive for quick, reliable rollback if smoke tests fail

-: Principles of Continuous Delivery
8 Principles of Continuous Delivery
Repeatable Reliable Process
Automate Everything
Version Control Everything
Bring the Pain Forward
Build-in Quality
"Done" Means Released
Everyone is Responsible
Continuous Improvement


-: Course Outline
What We'll Cover In This Course:
Continuous Integration and Continuous Deployment
Building a Continuous Integration Pipeline
Enabling Continuous Delivery with Deployment Pipelines
Monitoring Environments

-: Tools, Environment & Dependencies
We will be using the following cloud-based tools. If you don't have an account already, you should take the time to sign up now:

Github
Circle CI
https://circleci.com/

Amazon AWS
Also, you should download and install the following tools:

Visual Studio Code (or your favorite code editor)

By the End of this Course, You'll Be Able To:
Explain the fundamentals and benefits of CI/CD to achieve, build, and deploy automation for cloud-based software products.
Utilize Deployment Strategies to design and build CI/CD pipelines that support Continuous Delivery processes.
Utilize a configuration management tool to accomplish deployment to cloud-based servers.
Surface critical server errors for diagnosis using centralized structured logging.
And much more!
