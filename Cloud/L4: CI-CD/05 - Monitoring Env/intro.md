In this Lesson, We Will...
Talk About the New Capabilities Monitoring Gives Us as Cloud Developers
Discuss Some Monitoring Tools that are Available
Talk about Prometheus
Install and Configure Prometheus
Talk About the Various Data Source Options and How to Get that Data into Prometheus
Discuss How to Start Analyzing the Monitoring Data You Have
Learn About Alerts and How to Set Them Up

What Does Monitoring Feel Like?
Let's face it, monitoring is not that exciting! When you became an engineer, you probably didn't say "I can't wait to monitor stuff!". For many, it's like the matrix; there's so much information, it's like lines just blurring together! For others, it's not enough useful data. Plus, it's hard to get excited about something that seems to only brings bad news.

What's the Reality?
It's a necessary evil!
Raise issues quickly and loudly.
Best weapon against down-time.
Often the most neglected or underestimated tool.
What are the Possibilities?
In the heat of battle, you'll get to problems faster.
Find out when something goes down or degrades (network logs).
Wake up the right people in an event (app logs).
Find out an hour before an outage (CPU, memory, disk).
Use data to predict the next outage in 2 weeks (ML, data science).

Q: Monitoring helps with the following things:
Predicting Problems Before dy happen
Real-time notifications of issues
Watching Server performance
Watching for Application errors

-: Intuition About Monitoring
A Needle in a Haystack?
As a cloud developer, during an outage, you should be able to know 
where to look to find the source of the problem. You should be able 
to see through a haystack of monitoring data and zero in on the issue 
at hand.

Before any outage, you should be thinking about where failures might 
occur and ensure those areas have proper monitoring. Some common 
areas where you might need monitoring are:

Database Stats
Application Logs
Docker Logs
Firewall
Load Balancer
GPU
Operating System
Router
Cable Modem
Message Bus
AWS Services
Mail Server
Other 3rd Party Services
Other Monitoring Systems

Q: What are some of the typical places you look to troubleshoot a production issue?
Of course, you'd look at the logs for application errors or operating system errors.

-: The Case for Monitoring
"But Monitoring Isn't Exciting!"
In case you need convincing, I'm going to give you a few reasons why monitoring is not an optional piece of your cloud development strategy.

Availability
Uptime or downtime often translates to dollars, one way or the other. Downtime will increase drastically without monitoring since you won't be watching the system manually, round the clock. This downtime will negatively affect revenue or could increase legal costs.

Performance
Company performance and image often hangs the reliability of its technology. If systems degrade when users are trying to consume it, their confidence in the system will also degrade, which might result in employee turn-over or loss of clients.

Capacity
Company or product growth is (generally) a good thing, especially if technology can rise to the demands of its users. But, when infrastructure is not ready meet the needs of business on time, it can result in lost revenue or increased costs.

Productivity
Development teams who spend time less troubleshooting tend to spend more time developing. However, without proper monitoring, development team members will have no choice but to dive into time-consuming troubleshooting, affecting feature release plans and incurring opportunity costs.

Reactive vs Proactive
Reactive monitoring is common practice because of its usefulness during a crisis. But, monitoring can have even more power when used proactively.

Reactive Monitoring
Real time CPU, memory or disk space meters
Current health status of any server or resource
Application logs
Operating System logs

Proactive Monitoring
Forecast Infrastructure Costs
Monitor the Unknowns
Track Bugs to Their True Source
Predict Seasonal Spikes and Trends

Q: We can use _________ combined with _________ to predict things 
like problems and costs.

Machine learning can use our metrics to predict many things

Q: Which scenarios are proactive or reactive?

SCENARIO                                                    PROACTIVE/REACTIVE

Based on past metrics from database             PROACTIVE
monitoring, adjust connection settings 
to reduce memory usage.


Watch real-time CPU usage and kill off some     REACTIVE
processes to reduce load.


Use prediction of server costs based on usage    PROACTIVE
metrics to decide to start a new costly project 
or not.


Get an alert of a network resource that just        REACTIVE
went to an unhealthy state.

-: Monitoring Tools
Any Complete Monitoring System will be Composed of:
1. Time-Series Data
Time-series data is data that is in a series of time intervals. Some 
examples include:

Blood-sugar level checked at the top of every hour
Daily closing value of Microsoft stock
Monthly rainfall by city
Available disk space by the minute

Another way I like to describe time-series data is "anything with 
a timestamp and at least 10 data points." Therefore, data collected 
from your monitoring system is time-series data!

2. Data Aggregator
A data aggregator is a system that collects and groups data by 
type or data source. One way to think of data aggregators is 
like a database with extra tooling to aid in data collection.

3. Data Visualizer
A data visualizer takes copious amounts of seemingly unintelligible 
data from the data aggregator and produces useful charts and graphs.

Q: Mark those that could be classified as time-series data.

Network Traffic
Application logs
CPU Usage
Inches of Rain per Day


Monitoring Tools
Data Aggregator	                    Details	Visualizers
Graphite	Mature,                 Open-Source, Installable	Grafana
Loggly	Managed,                    Cloud-Based, Powerful tooling	Built-In
Datadog	Managed,                Cloud-Based, Built-in AI/ML	Built-In
Prometheus	                    Open Source, Lightweight, Self-Contained, Installable	Grafana
Logstash	                        Open Source, Cloud-Based or Installable	Kibana
CloudWatch	                    Built-In to AWS	Built-In

For demonstration purposes, we will be using Prometheus for this course.


-: Setting Up Prometheus
Launch a new instance in EC2 with port 9090 open to the public.
Log into the instance via SSH.
Download and extract the Prometheus server files.
Start Prometheus.
Open the instance's hostname or IP address in your browser with port 9090.
Profit!

Editing Your prometheus.yml File


-: Exporters
Exporters Abound
Data is pulled from various data sources using lightweight agents called an 
Exporters that are installed on or attached to the data sources themselves. 
Once it knows about an exporter, Prometheus "scrapes" data from those 
exporters every few seconds. No matter how many exporters you have 
providing data, Prometheus can scrape them all and happily collect your 
monitoring data in near real-time.

Available Exporters
Exporters	                Purpose
Node exporter	        Provides basic operating system metrics like CPU, Disk and Memory Usage.
Nginx VTS Exporter	Provides metrics on connections, server zones, and upstream requests.
Blackbox exporter	    The Blackbox exporter allows black-box probing of endpoints over HTTP,  HTTPS, DNS, TCP, and ICMP

Github Exporter	        Provides metrics on repository commits, pull requests, and issues.
MongoDB Exporter	The MongoDB exporter periodically scrapes MongoDB server stats.
Jira Exporter	            Provides metrics on Jira issues and projects.
Swagger Stats	        API performance stats available to Prometheus
AWS Health Exporter	Provides health metrics on all AWS services and regions.
... and many more.

Even with all these existing exporters, you might need something that doesn't exist yet. The documentation is very helpful and mature, but there's a steep learning curve. One way you can flatten that curve a bit is to use an existing exporter and modifying it.

https://github.com/prometheus/node_exporter

Key Terms:
Exporter

Pull System

Congratulations!
You now know how to manually configure an instance with node_exporter.
Consider how you might do this using a configuration tool like Puppet or Ansible (might be useful later, hint hint).
You now have a Prometheus server that will automatically discover every backend server you add to EC2. Nice!



Ansible : how to create roles and install prometheus, grafana and node-exporter

https://xavier-pestel.medium.com/ansible-how-to-create-roles-and-install-prometheus-grafana-and-node-exporter-28c142904541

https://www.youtube.com/watch?v=Qimp1wPF_zg

