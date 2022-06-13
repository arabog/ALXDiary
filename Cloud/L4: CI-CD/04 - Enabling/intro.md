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

Q: Mark the things that a configuration management tool should do.
Configure Environmt variables
Install dependencies
Start/stop services
Deploy Application



Configuration Management Tool are perfect for deploying applications.

Even though it's technically possible to run CloudFormation templates using a Configuration Management Tool, it's not the best idea. Configuration Management Tools should start their job after infrastructure is created.

-: Design an Ansible Playbook
The command used in the demo above is similar to:

ansible-playbook -i inventory.txt main.yml --private-key=~/udacity-ansible.pem

Ansible Playbook - Introduction
Definition - Playbooks are the YAML files containing a series of commands 
to run on the target machines.

Each Playbook contains the following primary sections:

name - Name of the file.
hosts - Identifies the target machines / hosts.
tasks - Contains the ordered series of commands to run on the identified hosts. Sometimes, it contains Modules, which are like library functions.
roles - These are self-conatined "child" Playbooks that are used to bring modularity in complex orchestration.

1. Install Ansible
Refer to the official instructions available here.
https://docs.ansible.com/ansible/latest/installation_guide/intro_installation.html


2. Authentication
Remember that Ansible is just executing bash commands over SSH, so 
whatever you need to log in to your instance manually, you will also 
need for Ansible.

There are two things we need to authenticate:

username
ssh key
The first component of authentication is the "username" of the user 
we will log in as. In most cases, you will use the default user for the 
EC2 instance. For example, if your instance was created using the 
Ubuntu AMI, then your default username is "ubuntu" according to 
this page.

  user: ubuntu

The second component of authentication is the SSH key, also 
known as the key pair or the PEM file. The SSH key would have 
been associated with our default user already. We need a copy of 
the SSH key in the form of a PEM file. We will refer to this PEM 
file when executing the playbook.

3. Targets
You can target one or more machines with just one Ansible playlist. 
Each play in a Playbook should have a hosts section where you can 
select machines that you want to configure. You can specify one 
hostname, a group name, or use a pattern to select multiple hosts 
from an inventory list.

  hosts: web

An inventory file can be very powerful and complex, but it can 
also be extremely simple. On the easy extreme, the inventory file 
is just a list of DNS hostnames or IP addresses in a group labeled 
by a ["group_name"] in typical INI style. This is what it looks like.

[web]
ec2-50-16-166-50.compute-1.amazonaws.com

Note that the web group name is being referred to in the Playbook 
host line. Have a look at the relevant references:


How to target different hosts?
https://docs.ansible.com/ansible/latest/user_guide/intro_patterns.html

How to build an inventory file?
https://docs.ansible.com/ansible/latest/user_guide/intro_inventory.html

4. Roles
In Ansible, roles are a great way to clean up your Ansible code and make it more maintainable. We can build roles by using Ansible's expected folder/file structure.

├── main1.yml      # Playbook file (Ignore file name)
└── roles
       ├── configure-prometheus-node-exporter
       │   └── tasks
       │       └── main.yml
       └── configure-server
              └── tasks
                  └── main.yml

The main playbook file and configure-server role files above also available here: https://github.com/udacity/nd9991-c3-hello-world-exercise-solution Here we have two roles:

configure-prometheus-node-exporter
configure-server`

The sub-folders in each role folder represent a different function in the role:

configure-prometheus-node-exporter
configure-server`
The sub-folders in each role folder represent a different function in the role:

Role Component	                    Description
tasks	              Main list of tasks that the role executes
files	              Files that the role deploys
handlers	          Handlers, which may be used within or outside this role
library	          Modules, which may be used within this role
defaults	          Default variables for the role
vars	          Other variables for the role
templates	          Templates that the role deploys
meta	          Metadata for the role, including role dependencies

According to Ansible's rules, each sub-folder of each role must 
have a main.yml file in it, which is how it is able to discover and 
incorporate the role functionality.

We're going to mostly use tasks and files. If you want to know 
more about how to use the other components of Ansible roles, 
you should check out the docs.

Our main.yml playbook file:

---
- name: "configuration play."
  hosts: web
  user: ubuntu
  gather_facts: false
  vars:
    - ansible_python_interpreter: /usr/bin/python3
    - ansible_host_key_checking: false
    - ansible_stdout_callback: yaml

  pre_tasks:
    - name: "wait 600 seconds for target connection to become reachable/usable."
      wait_for_connection:

    - name: "install python for Ansible."
      become: true
      raw: test -e /usr/bin/python3 || (apt -y update && apt install -y python3)
      changed_when: false

    - setup:
  roles:
    - configure-prometheus-node-exporter
    - configure-server1

<!-- ================================ -->
Our roles/configure-server/tasks/main.yml file (Roles):

---
- name: "upgrade packages."
  become: true
  apt:
    upgrade: "yes"

- name: "install dependencies."
  become: true
  apt:
    name: ["nodejs", "npm"]
    state: latest
    update_cache: yes

- name: "install pm2"
  become: true
  npm:
    name: pm2
    global: yes
    production: yes
    state: present

Do not copy and use it straight-away. Instead, go through the individual statements. In my code above, you'll notice a few things:

The playbook is the entry point
The playbook delegates to roles by name
The role does the actual work. You can probably guess what it's doing without much explanation.
Each task is using become: yes to escalate to root user (like adding sudo before bash commands).

Read more about Ansible roles in the documentation.
https://docs.ansible.com/ansible/latest/user_guide/playbooks_reuse_roles.html


Showing the contents of three files - playbook, tasks/main.yml, and inventory.txt
cat main1.yml 

cat roles/configure-server/tasks/main.yml 

cat inventory.txt 

5. Modules
Ansible modules are the utilities that you can use in your Playbooks. Some of the Ansible modules are:

Module	          Description
shell	          How you execute shell commands and scripts
apt	          Manage apt packages
npm	          Manage nodejs packages
file	          Set attributes of files and directories as well as remove
git	          Push and pull code and files from git
script	          Execute a shell script
copy	          Copy files
unarchive	          Unpack an archive file
systemd	          Manage services

You can see a list of all the modules in the Ansible docs.

https://docs.ansible.com/ansible/latest/plugins/module.html



6. Further Reading
What is an Ansible playbook?
https://www.redhat.com/en/topics/automation/what-is-an-ansible-playbook

Learning Ansible terminology
https://www.redhat.com/en/topics/automation/learning-ansible-tutorial


Q: Tell about the difference between a Playbook and an inventory file.
A Playbook is a set of instructions that Ansible uses to configure a machine. 
An inventory file is the list of machines on which to perform those instructions.

Run your playbook using the command ansible-playbook main.yml.

-: Build an Inventory File
Query the instances i have: returns all d ec2 available as at ds time:

aws ec2 describe-instances --query 'Reservations[*].Instances[*].PublicIpAddress' --output text

Script to Create the Initial Inventory File: create inventory
echo "[all]" > inventory

cat inventory

Script to Query EC2 for Instances and Output to File
aws ec2 describe-instances --query 'Reservations[*].Instances[*].PublicIpAddress'  --output text >> inventory

cat inventory

Here, we called the output file inventory. But you could call it anything at all as long as you use the same name when running your Ansible Playbook later on.

Also, in the first script, we use > because we are creating a new file. Then, in the second script, we are using >> because we want to append the output to the file, not overwrite it (since it has our [all] header).

Q: Why is it so important to be able to build an inventory file during CI/CD?
Ansible needs d IP addresses so dt it can configure EC@ instances

Ansible can't know our instance IP addresses until we run our script since they don't exist until just before our Ansible job.

-: Exercise: Inventory File
https://docs.ansible.com/ansible/2.7/user_guide/intro_inventory.html

Prerequisites
AWS CLI should be installed and configured. Verify it using:
aws --version

# Run any test command
aws iam list-users

Instructions
Create an EC2 instance in your AWS account using the Ubuntu AMI and micro/free tier VM type. Add a memorable tag like Project:udacity to the instance. Please remember the tag name you're adding.

Create an inventory file called inventory (or inventory.txt) with and add [all] at the beginning, using these commands:

# Run this in your exercise directory
touch inventory
echo [all] > inventory

Run the following CLI command to list the EC2 instance and save the IP 
address to the inventory file:

aws ec2 describe-instances --query 'Reservations[*].Instances[*].PublicIpAddress' --output text >> inventory

For Tag name and value:
aws ec2 describe-instances --query 'Reservations[*].Instances[*].PublicIpAddress'  --filters "Name=tag:Project,Values=udacity"--output text >> inventory

This will append the udacity-tagged instance public IP addresses to 
our inventory file and should look something like this:

[all]
169.254.123.12  # The public IP will be different in your case

For Some Extra Challenge
Try wrapping this script in a Circle CI job and save the inventory 
file to the cache or workspace. You'll have to do this later in your 
project, but it might help to try it now to get a head start!


-: Building an Ansible Playbook from a Tutorial
Ansible is like a remote control robot that teleports in (via SSH of course) to our remote machine and performs some shell commands on our behalf. Seriously, it's just THAT simple. So, in theory, you could take any tutorial on the web and turn it into an Ansible Playbook. That's what we're doing right here!

If you'd like to try this for yourself, here's the tutorial I followed in the video: Installing Apache

https://riptutorial.com/apache/example/5607/-ubuntu--simple-hello-world-example

