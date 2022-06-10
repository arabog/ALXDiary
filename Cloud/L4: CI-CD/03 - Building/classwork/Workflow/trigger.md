Exercise: Trigger an existing workflow

Instructions:
Fork this demo repository to your Github account. This will make the repository available to you in Circle CI.
https://github.com/CircleCI-Public/circleci-demo-javascript-express

Log in to your Circle CI account, make sure you're in the "Projects" page, and find the repository you just forked. If you have more than one repository, you can use the search bar.

Click "Set Up Project" next to the repository name.

Circle CI will now request an initial setup for the project. 
Click the "Start Building" button and choose "Add Manually". Then, click "Start Building".

Verify the pipeline is running.

Go to the repository in Github, select the branch Circle CI created, and modify any file (ex: readme.md). Commit the change.

Back in Circle CI, verify that the commit triggered another build.

-: Sharing Information
3rd Party Secret Keepers
Note: You should not depend on a 3rd party service for business-critical applications unless you know you can rely on its availability.

Option	Description	Website
Vault:	
Vault is a tool created by Hashicorp. It is a web service and a command line tool that work together to give you the ability to save bits of information securely and then retrieve it later. Since the service is not dependent on the job or pipeline, your jobs can reliably save and retrieve information at will.
https://www.vaultproject.io/

MemStash:	
A simple web service that takes your key-value pairs and stores securely them for a short period of time. It's a great, low-ceremony way to store quick values and get them back out, no matter which job you're running. Just use curl to save and retrieve your information. MemStash is free to use.
https://www.memstash.io/


KVdb REST API	
KVdb API lets you store multiple keys-values in a bucket. Creating 
and using a KVdb bucket is reasonably straightforward, as shown 
below. After creating a bucket, you can keep as many keys and 
associated values as you desire.

https://kvdb.io/

Using KVdb REST API
Using KVdb REST API for storing key values is a three step process:

Create a bucket
The first step is to create a bucket using your email ID as an 
account. For the first time, you will have to verify your email 
ID using the email received in your mailbox. The command to 
create a bucket is:

# Syntax
curl -d 'email=your-email-ID@domain.com' https://kvdb.io
# Returns a bucket ID, such as, "XsgrYuyPESbxCcte4sLxEM"

curl -d 'email=pharm.codex.developer@gmail.co' https://kvdb.io
GnWa3F91w7uhXKeDMSDnQg

A bucket is marked as public by default, meaning, you can 
access the key-values from any terminal if you know the 
bucket ID correctly. Also, you can create multiple buckets 
under your account.


Store the key-value pair
Choose a key-value pair of your choice. In the example below, 
we have chosen migration_${CIRCLE_WORKFLOW_ID:0:7} 
as the key, and 1 as the value. Feel free to choose any key-value 
for practice. We have taken this example key from one of the 
project steps. The command to store a key-value pair is:

# Syntax
curl https://kvdb.io/[bucket-ID]/[key]  -d '[value]'

# Example
curl https://kvdb.io/XsgrYuyPESbxCcte4sLxEM/migration_$\{CIRCLE_WORKFLOW_ID:0:7\}  -d '1'

Access the value associated with a key
The last step is to access the value associated with a particular 
key. The command is:

# Syntax
curl --insecure  https://kvdb.io/[bucket-ID]/[key]
# Example
curl --insecure  https://kvdb.io/XsgrYuyPESbxCcte4sLxEM/migration_$\{CIRCLE_WORKFLOW_ID:0:7\}

curl --insecure https://kvdb.io/GnWa3F91w7uhXKeDMSDnQg/migration_$\{CIRCLE_WORKFLOW_ID:0:7\}