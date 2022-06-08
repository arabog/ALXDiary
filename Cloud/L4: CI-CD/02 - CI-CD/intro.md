-: Introduction
In this Lesson, We Will Learn About...
Fundamentals of CI/CD
Benefits of CI/CD
Continuous Delivery as a Paradigm
CI/CD Best Practices
Deployment Strategies
Pipeline Building Blocks and Jobs
CI/CD Tools

-: Intuition about CI/CD
How do you know you need CI/CD or Continuous Delivery?
There are several "warning signs" that teams exhibit that suggest 
they would be good candidates for CI/CD or Continuous Delivery. 
If you identify with any of these items, you should consider CI/CD 
an essential piece of your development workflow.

Investing more time in a release cycle than delivering value
Going through integration hell every time we finish a feature
Code gets lost because of botched merges
Unit test suite hasn't been green in ages
Deployments contribute to schedule slip
Friction between ops and development departments
Only one engineer can deploy a system
Deployments are not cause for celebration

No Free Lunch
No pain, no gain, right? Did you think CI/CD was going to solve 
all your woes and ask nothing in return? Think again!

No more manual deploying to environments
No more modifying environment settings in GUI's
No more neglecting the unit tests
No more leaving broken code in place
Requires a high level of discipline
Requires additional skills to maintain and extend automation

CI/CD isn't a silver bullet. It can't help poor development practices.
It can't help poor feature refinement techniques.

-: Fundamentals of CI/CD
Continuous Integration
The practice of merging all developers' working copies to a shared 
mainline several times a day. It's the process of "Making". Everything 
related to the code fits here, and it all culminates in the ultimate goal 
of CI: a high quality, deployable artifact! Some common CI-related 
phases might include:

Compile
Unit Test
Static Analysis
Dependency vulnerability testing
Store artifact

Continuous Deployment
A software engineering approach in which the value is delivered 
frequently through automated deployments. Everything related to 
deploying the artifact fits here. It's the process of "Moving" the 
artifact from the shelf to the spotlight. Some common 
CD-related phases might include:

Creating infrastructure
Provisioning servers
Copying files
Promoting to production
Smoke Testing (aka Verify)
Rollbacks

Key Terms
Pipeline: A set of data processing elements connected in series, 
where the output of one element is the input of the next one.

Continuous Integration: The practice of merging all developers' 
working copies to a shared mainline several times a day.

Continuous Delivery: An engineering practice in which teams 
produce and release value in short cycles.

Continuous Deployment: A software engineering approach in 
which the value is delivered frequently through automated deployments.

Infrastructure as Code: The management of infrastructure using code.

Provisioning: The process of setting up IT infrastructure.

Artifact: A product of some process applied to the code repository.

DevOps: A set of practices that works to automate and integrate the 
processes between software development and IT teams.

Testing: A practice that seeks to ensure the quality of the software.

Q: Given the scenario below, which of the concepts would address 
the team's pain points?

There have been several human errors when deploying the production 
version of a complicated application over the past 6 months. The team 
has a detailed deployment checklist, but there is always something that 
doesn't get done quite right. The company has tasked you with finding 
a solution to the problem.

Continuous Deployment

Q: Given the scenario below, which of the concepts would address 
the team's pain points?

You are involved in the development of an application in a large company 
where there are contractors who live in different time zones. The team is 
divided into 3 groups to cover several functionalities at the same time. 
Your team is having major issues with conflicting code and a neglected 
unit test suite.

Continuous Integration

