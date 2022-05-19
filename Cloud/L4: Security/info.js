/*
Security: in the Cloud

Why do we need security for applications?

Security In The Cloud
As adoption of cloud services has increased, so has the need 
for increased security in the cloud. The great thing about cloud 
security is that it not only protects data, it also protects 
applications that access the data. Cloud security even protects 
the infrastructure (like servers) that applications run on.

The way security is delivered depends on the cloud provider 
you're using and the cloud security options they offer.

-: AWS Web Application Firewall
AWS Web Application Firewall) provides a firewall that protects 
your web applications. WAF can stop common web attacks by 
reviewing the data being sent to your application and stopping 
well-known attacks.

Tips
WAF is found under the Security, Identity, & Compliance section 
on the AWS Management Console.
WAF can protect websites not hosted in AWS through Cloud Front.
You can configure CloudFront to present a custom error page when 
requests are blocked.
AWS WAF is available under a composite dashboard, WAF & Shield, 
that combines the following three services:

Identify the type of web attacks that AWS WAF prevents. Choose two.
 AWS WAF helps protects your website from common attack techniques 
 like SQL injection and Cross-Site Scripting (XSS).

-: AWS Shield
AWS Shield is a managed DDoS (or Distributed Denial of Service) 
protection service that safeguards web applications running on AWS. 
AWS Shield offers two tiers of protection - Standard and Advanced.

Standard tier: Standard AWS Shield is a service that you get "out of the box", 
it is always running (automatically) and is a part of the free standard tier.
Advanced tier: If you want to use some of the more advanced features, 
you'll have to utilize the paid tier.


A Distributed Denial of Service (DDoS) attack is an attempt to 
make a website or an application unavailable by overwhelming it 
with traffic from multiple sources.

Shield is a great service because it gives you complete visibility into 
DDoS attacks.

-: Identity & Access Management
Identity & Access Management (IAM) is an AWS service that allows us 
to configure who can access our AWS account, services, or even 
applications running in our account. IAM is a global service and is
automatically available across ALL regions.

AWS IAM service securely controls access to AWS resources by 
authenticating and authorizing (giving granular permissions) the 
individual users, applications, or services.











*/ 
WAF can protect websites not hosted in AWS through Cloud Front.?