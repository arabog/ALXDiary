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

-: Solution: Benefits of CI/CD
It's great, as a technical member of the team, for you to understand the benefits of CI/CD. This way, when you're banging your head against the wall because of some confusing mess you've gotten yourself into, you will remember the benefits and they will motivate you to keep going! But, it's quite possibly more important that you understand how to translate these benefits to other members of the team so they can understand how CI/CD will benefit their area of responsibility as well!

Remember, whenever you are attempting to convince business people of some technical benefit, you should always translate it to either revenue or cost. If the benefits truly outweigh the costs of implementation, you'll find that the business will often give you the green light.

-: Best Practices for CI/CD:
Fail Fast
Set up your CI/CD pipeline to find and reveal failures as fast as possible. 
The faster you can bring your code failures to light, the faster you can 
fix them.

Measure Quality
Measure your code quality so that you can see the positive effects 
of your improvement work (or the negative effects of technical debt).

Only Road to Production
Once CI/CD is deploying to production on your behalf, it must be the 
only way to deploy. Any other person or process that meddles with 
production after CI/CD is running will inevitably cause CI/CD to 
become inconsistent and fail.

Maximum Automation
If it can be automated, automate it. This will only improve your 
process!

Config in Code
All configuration code must be in code and versioned alongside 
your production code. This includes the CI/CD configuration files!

-: Deployment Strategies
Deployment Strategy	                              Description
Big-Bang	                                        Replace A with B all at once.

Blue Green	                              Two versions of production: Blue or previous version and Green or new version. Traffic can still be routed to blue while testing green. Switching to the new version is done by simply shifting traffic from blue to green.

Canary	                                        Aka Rolling Update, After deploying the new version, start routing traffic to new version little by little until all traffic is hitting the new production. Both versions coexist for a period of time.

A/B Testing	                              Similar to Canary, but instead of routing traffic to new version to accomplish a full deployment, you are testing your new version with a subset of users for feedback. You might end up routing all traffic to the new version, but that's always the goal.

-: Blue Green Deployment
The Router
Router Option	          Description
Load Balancer	          Instant switch for FE or BE, ideal router in most cases
CDN	                          Instant switch for front-end web apps.
DNS	                              A bit slow because of DNS propagation.

Common Jobs

Step	                                        Description
Integrate Code in a Build	          Compile and create artifact

Run Tests	                                        Run unit and/or integration tests

Ensure Infrastructure is Present	Create green infrastructure

Provision the Environment	          Configure green instance, migrate DB, etc

Deploy Artifact	                              Copy artifact files to instance

Run Smoke Tests	                              Run a few tests that don't impact the prod server	

Perform Rollback if Failure	                    Rollback here is more of a cleanup of green

Switch Router	                              Redirect traffic to new version

Run Sanity Test	                              Run a few tests that don't impact the prod server

Perform Rollback If Failure	          Rollback here is switching the router back to blue and cleaning up green

Destroy Old Release Environment?	Clean up blue env (optional)

Notify The Team (Successful)	          Celebrate!

Q: Select the best sequence for a Blue Green Deployment.
Compile, Unit Tests, Provision, Deploy, Smoke Tests, Switch 
d Router, Sanity Test, Destroy Old Environmet, Notify Team of Success

it's very important to test well before and after you switch the router.

Q: Imagine a company you'd like to work for (or currently work for) and a team you'd like to work on. What sort of router might that team use to manage the switch from one prod env to another? It might be a load balancer or some other mechanism.

Things to think about
There are so many ways to implement the "router" in Blue Green Deployment. The main thing is that we need a way to have both environments live so that we can test before making the switch.

-: Pipeline Building Blocks
Build Stages
Think of stages like categories or types of jobs. Stages are used to group jobs and control timing.

Stage	Description
Build	Everything that has to do with making code executable in production (e.g. Compile). The goal is to produce an artifact.

Test	All automated tests that verify at the code level.

Analyze	Any static analysis on the code or checking of dependencies.

Deploy	Anything to do with creating server instances or copying pre-built application files to an instance.

Verify	Any tests that can be run against a running instance of the application, often against a pre-production instance.

Promote	Replacing the current production environment with the new version which was just built and deployed.

Revert	Rolling back or undoing changes in case any verification fails after deployment.

Jobs and Steps
Jobs are what actually do the work of CI/CD. Each job has a name 
and defines a set of instructions to run and an environment in which 
to run those instructions. The instructions are called steps. Each step 
has a name and a bit of instructions to carry out a script to execute 
or a task to complete.

Q: What might be some steps names in a job that compiles the 
backend for a website?

Those names are pretty good. Always think of how the names 
communicate to the next developer who will have to maintain 
this code.

-: Pipeline
One Solution, Not The Solution
Depending on your project and your pipeline, your diagram might 
look different from mine! Maybe you're not using Slack to display 
success or failure messages or maybe you're using a different 
deployment strategy. Use my below solution as a reference, but 
it's not the only answer!

Q: What would you do differently in your diagram after seeing mine?
Always keep refining this skill. The ability to distill complicated 
processes into something understandable is very important to 
development teams.



