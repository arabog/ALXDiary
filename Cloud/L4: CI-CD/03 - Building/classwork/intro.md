-: Intro
In this Lesson, We Will...
Learned about CI and How It Fits in the Bigger Picture
Discussed Some Behaviors of CI Veterans
Went Over Some of the Common Building Blocks of Most CI Tools, Like:
          Environment Variables
          Triggers
          Pipelines
          Jobs
          File Sharing Between Jobs
          Re-Usable Job Code
          Job Failures
Designed a Complete CI Pipeline

-: Big Picture
What is CI?
Continuous Integration is the practice of automating the integration of code changes from multiple contributors into a single software project (definition from Atlassian).

CI Opens Doors
Singular, Unified, Consistent Build Process
Automatically Packaged and Downloadable "Binaries"
Faster Recovery from botched Integration (If You Break It, You Fix It!)
Unit Test Suite Gets Some Respect
Greater Transparency and Communication
More Time Adding Value (aka Developing Software)

Differentiating between CI and CD

Continuous integration is all about the source code.
New changes to the code need to be validated, verified, exercised, worked over, massaged and squeezed to see if there are leaks. We do this by compiling, transpiling, linting, running unit tests, performing static analysis, checking dependencies for security vulnerabilities and other things.

Continuous deployment is all about built code and deployment.
Once the source code has been built in CI, we're ready to ship it to servers and devices either in the same network or elsewhere. Depending on your team's delivery process and deployment strategy, you might deploy to a staging or pre-production server for final testing or you might deploy to production right away. Before doing so, CD can run scripts to prepare the infrastructure, run smoke tests, and handle rollbacks and reverts if something doesn't go as planned.

Q: Mark the concepts that are part of Continuous Integration but not Continuous Deployment.

Run unit/integration tests
Compile/lint code
Static Code Ananlysis
Merge code from all sources (branches and or commits)
Check libraries and dependencies versions

-: Intuition
Characteristics of Healthy CI Pipelines
We want to create healthy, consistent pipelines in order to create a better build process!

Highest Priority When the Build is Broken
Trusted Members of the Team
Have the Same Abilities as any Member of the Team
Enforce Team Quality Rules
Communicate Useful Information
Shorten Feedback Loops
Don't Require Stacks of Documentation
Automated to the End!

Q: Mark all the characteristics of a healthy CI system.
Build passes and fails equally on CI and locally
It does nt require human interventn in its majority
Includes jobs to ensure d quality of the code
Runs quickly
Easy to maintain without much documtatn

-: Creating Pipelines
Single Responsibility Principle
The single-responsibility principle (SRP) is a computer-programming principle that states that every module or class should have responsibility over a single part of the functionality provided by the software, and that responsibility should be entirely encapsulated by the class, module or function.

When we limit the responsibilities of our jobs, we get some nice side-effects:
Jobs tend to be smaller and quicker
We get better and more focused feedback when there's a job failure
The pipeline is more visually 

Remember:
A graphics that says "Pipelines have workflows that have jobs that have steps."
Circle CI uses a yaml file to handle the configuration of pipelines and jobs.

Section	                    Description
version	                    Specifies the version of CircleCI's runner you want to use. Most of the time, use the latest.

jobs	                    List of jobs.

commands	          List of reusable commands that can be used as steps in jobs.

orbs	                    Makes available some pre-written functionality that you can include in your jobs. Orbs become step types which we 
will see later when we talk more about jobs.

workflows	                    Puts the jobs in execution order, sets up dependencies.

Workflows
In Circle CI, a pipeline is made up of one or more workflows. Workflows contain jobs.

Workflow Option	                    Description
<workflow_name>	                    The name of the workflow that appears in the Circle CI web app. You can have multiple workflows for different scenarios, so it's helpful to give them future-proof names.

jobs	                                                  A list of jobs,  already defined elsewhere in the config file, and some instructions 
on when to run them.

Workflow Job Option	                    Description
<job_name>	                    The name of the corresponding job.

requires	                                        Jobs are run in parallel by default, so if your job doesn't require any other jobs, they will all just run at the same time, or in random order.

filters	                                        Excludes jobs based on current branch or tag.

Q: Does the following scenario follow the Single Responsibility Principle?

To take advantage of a compile step, we also run unit and integration tests in the same job. If we break this into smaller jobs, we will be wasting resources when compiling again and again.

Yes, that's right. SRP helps us remember to keep our jobs light and focused on one thing.

Q: Does the following scenario follow the Single Responsibility Principle?

Our pipeline has a job that deploys the production files to our production server. Then, there's a job that runs some simple smoke tests. The separation helps us zero in on the problem if one of these jobs fails.

Yes, this scenario shows a set of jobs that adhere to SRP.

-: Anatomy of a Job
Remember that a job is where we define the work that needs to get done.

Job Option	          Description
<job_name>	          The name of the job which shows up in the Circle CI web app.

environment	          Map of environment variables.

docker	                    Docker image in which to run the job.

branches	                    Rules to decide when to run this job by branch exclusions or inclusions.

steps	                    Instructions to execute in the job.

Docker Images
When you are designing your jobs, you'll need to think about what docker image you want to use each time. If you're like me, you will have a handful of favorites. Each docker image comes pre-loaded with utilities and packages you need for different situations.

Image	                              Use
circleci/node	          For Node.JS server-side and networking applications.

circleci/postgres	          For tasks that require PostgreSQL database functions.

circleci/python	          For job that need to run Python or pip.

alpine:latest	          A lightweight container for simple tasks.

amazon/aws-cli	          For tasks that require the AWS CLI and related tools.

Types of Steps
Think of the steps in a job as a task list. Each step will perform some instructions and then we move on to the next step until they've all been executed. Each step has a type that defines how it will be run or represents an alias that points to another set of steps.

Step Type	                              Description
checkout	                              
Checks out the source code. Common to have this in all jobs in CI.

run	                                        
Runs a shell command. Can name the step or simply execute a script.

when	                              A conditional step that has its own steps that are run if the condition is true.

save_cache and restore_cache	
Save and restore files or folders. Cleaned up after pipeline finishes.

persist_to_workspace and attach_workspace	
Like a cache, but files are available for 15 days after pipeline.

add_ssh_keys	
Adding some additional ssh keys to the job for a tool 
that needs them (i.e. Ansible).

store_artifacts	
Makes an artifact, or file, available for download via 
CircleCI web app or API.

store_test_results	Stores test results from test runner so 
that results are visible in Circle CI web app in the Test 
Summary section.

"Orbs"	Orbs, which we talked about already, are used 
like step types

Q: Match each use to its corresponding job image.

USE                                     IMAGE
For Node.JS server-side and networking applications:        circleci/node  
For tasks that require PostgreSQL database functions:       circleci/postgres
For job that need to run Python or pip:           circleci/python
A lightweight container for simple tasks:         alpine:latest
For tasks that require the AWS CLI and related tools:       amazon/aws-cli

Q: Mark the terms that appear as yaml nodes in a Circle CI job definition.
steps
docker
environment

