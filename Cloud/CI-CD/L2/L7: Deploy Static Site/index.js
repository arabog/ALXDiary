/*
Project Overview
The whole project has two major intentions to implement:
Hosting a static website on S3 and
Accessing the cached website pages using CloudFront 
content delivery network (CDN) service.

Note that Static website hosting essentially requires a public 
bucket, whereas the CloudFront can work with public and 
private buckets.

In this project, you will deploy a static website to AWS by 
performing the following steps:

You will create a public S3 bucket and upload the website files 
to your bucket.

You will configure the bucket for website hosting and secure it 
using IAM policies.

You will speed up content delivery using AWS’s content distribution 
network service, CloudFront.

You will access your website in a browser using the unique 
CloudFront endpoint.

bucket website endpt:      http://hugb.s3-website-us-east-1.amazonaws.com

CloudFront: https://d1oft9knqf9ghg.cloudfront.net/

S3 bucket object:   https://hugb.s3.amazonaws.com/index.html


https://aws.amazon.com/premiumsupport/knowledge-center/s3-website-cloudfront-error-403/

https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/




*/ 