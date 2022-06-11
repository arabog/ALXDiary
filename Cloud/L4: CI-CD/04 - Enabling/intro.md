-: Intro
In this Lesson, We Will...
Learn what Configuration Management Tools are and How to Use Them
Design an Ansible Playbook
Control a Remote Machine with an Ansible Playbook
Build an Ansible Inventory File
Make Various Types of CD Jobs in our CI/CD Pipeline
          Create Infrastructure
          Configure Infrastructure
          Deploy Production Artifacts
          Smoke Testing
          Rollback
          Promoting to Production

In the next few sections, we're going to dive deep into some of the building blocks of continuous deployment tooling.

-: Big Picture
Continuous Deployment
Continuous Deployment can be an incredible tool in your arsenal. Not only does CD save time, but it opens some unexpected doors that have a ripple effect over the entire organization. Let's take a look at where CD fits into the overall Software Development Lifecycle.

Where does CD fit in the SDLC?
While CI is all about code, CD is all about the deployment of the artifact.
CI produces the artifact, whether it's a docker image, a zip file, or an executable.
CD Validates the artifact, builds the infrastructure needed to run it, and sets the artifact in motion.
CD affects earlier stages of development over time because team members see quick deployments and begin slicing features into smaller pieces to take advantage.

What will I need to add CD?
Buy in from decision-makers.
Automation skills, which you are learning in this course.
Access to servers or cloud resources.
Time to build automation.

What will I lose when I add CD?
The ability to tinker with the servers manually.
The opaque wall of secrecy around one dev's way of deploying.
Free pizza from the deployment all-nighters.

What will I gain when I have CD?
Automated deployments to QA, Staging, Prod.
More time to develop features.
Generate more confidence amongst stakeholders.

Q: Mark the things that are part of CD concept
Promote to Production
Run Smoke Tests
Rollback

-: Continuous Delivery Intuition
As you get to know CD pipelines in general, you'll eventually develop some intuition about how healthy your CD pipeline is or is not. You'll also be able to easily spot problem areas and be able to explain how they impact the whole process.

Whether you're still waiting on that intuition to form or if you've had it for a long time, it's helpful to have metrics to guide decisions and demonstrate impact empirically.

Healthy Continuous Delivery
Let's take a look at a few metrics I use when I want to demonstrate the level of health or impact of a CD pipeline:

Metric	                    Formula	                    Impact
Lead Time to Production	
(Time at Successful Prod Deployment) - (Time at Completion of Feature Grooming)	
Shows how CI/CD is impacting overall delivery time, from the point the team hears about the feature to the point at which it is done (deployed to production). Easy metric to collect if using task management system to track feature grooming and deployments.

Rollback Rate	
(Total Rollbacks) / (Total Deployments)	
Shows the quality of our deployments. Of course, rate should be low because previous stages should filter out defected builds. This metric is a leading indicator for the confidence of the business in the dev team's ability to delivery.

Time to Failure	
(Time at Failure Discovery) - (Time at Build Start)	
Shows how quickly we find failures. The lower the better.

Production Uptime	
(Total Production Working Time) / (Total Time)	
Shows the amount of time we are taking production down because of botched deployments or due to our chosen deployment strategy.

Failed Pipeline Cost	
Various calculations including job run time and resources created	Shows the estimated amount of money spent on a failed build. 
Encourages us to put cheaper jobs earlier in the pipeline.

Q: Mark the healthy characteristics of a CI/CD pipeline.
Cheapest, Fastest First
Fails Quickly and Loudly
Builds confidence in production deploymt
Rolls Back Changes quickly on failure

-: Configuration Management Tools
Configuration Management and Automation Tools
Tool	      Website	          Description
Chef	      chef.io	Depends on agent to be installed. Very mature.
Puppet	          ouppet.com	Requires master "puppet master" server. Performance issues.

Salt	          saltstack.com	Keeps inventory on a central server.
Ansible	          ansible.com	Most popular. Very fast. Agentless.

Ansible
We're going to focus on Ansible since it is currently the most popular!

Installation
Installation is easy as long as you already have Python installed.

pip install --user ansible

For more information about installation, check the docs.
https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html

Ansible uses SSH
Ansible connects to a remote machine using ssh and executes commands and scripts remotely. If you already have scripts written to set up an instance, you can reuse those scripts easily with Ansible. After all, it's all about ssh and bash!

Ansible uses yaml files called Playbooks to manage all the configurations to be made. As always, we should check this file into source control so that it is versioned and available to the entire team.

