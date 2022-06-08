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

-: Benefits of CI/CD
Why Is Translation Important?
If the decision-makers in your company can't understand why 
something is important or adds value, they might not approve it. 
This usually isn't because they're ignorant or trying to be difficult, 
this is often because they don't understand how the technical 
changes translate into benefits for the company. Using language 
they understand will make everyone's lives better and easier!

Technical Language	                         Value             Translation
Catch Compile Errors After Merge	Reduce Cost	Less developer time on issues from new developer code

Catch Unit Test Failures	Avoid Cost	Less bugs in production and less time in testing

Detect Security Vulnerabilities	Avoid Cost	Prevent embarrassing or costly security holes

Automate Infrastructure Creation	Avoid Cost	Less human error, Faster deployments

Automate Infrastructure Cleanup	Reduce Cost	Less infrastructure costs from unused resources

Faster and More Frequent Production Deployments	Increase Revenue	New value-generating features released more quickly

Deploy to Production Without Manual Checks	Increase Revenue	Less time to market

Automated Smoke Tests	Protect Revenue	Reduced downtime from a deploy-related crash or major bug

Automated Rollback Triggered by Job Failure	Protect Revenue	Quick undo to return production to working state

https://blackswanfarming.com/value-a-framework-for-thinking/

https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment


-: Exercise: Benefits of CI/CD
Pick two of the most compelling benefits of CI/CD and write a paragraph for each, explaining to me why it should be implemented in your team. Let's see if you can convince me! Don't forget to use some of the "translations" you learned about earlier!

Here are a few examples to choose from:

Smaller code changes
Error Isolation
Reduced deploy errors
More reliable tests
Faster release rate
Increase accountability and transparency
Smaller backlog
Faster error resolution time
Customer satisfaction
Team satisfaction
Easy maintenance and updates

Q: Choose one benefit of CI/CD and write a short paragraph to convince a non-technical boss using non-technical language.

Make sure your paragraph translates the technical benefits to terms that matter to any business: revenue and/or costs. If you did that, then you're doing great!

Q: Choose another benefit of CI/CD and write a short paragraph to convince a non-technical boss using non-technical language.

Do you feel like you were able to boil down the technical concepts to the businesses' native language? If you talked in terms of revenue or cost, then you have me convinced!

