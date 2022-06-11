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

