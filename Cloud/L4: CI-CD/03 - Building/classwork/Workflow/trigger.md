Exercise: Trigger an existing workflow

Instructions:
Fork this demo repository to your Github account. This will make the repository available to you in Circle CI.

Log in to your Circle CI account, make sure you're in the "Projects" page, and find the repository you just forked. If you have more than one repository, you can use the search bar.

Click "Set Up Project" next to the repository name.

Circle CI will now request an initial setup for the project. 
Click the "Start Building" button and choose "Add Manually". Then, click "Start Building".

Verify the pipeline is running.

Go to the repository in Github, select the branch Circle CI created, and modify any file (ex: readme.md). Commit the change.

Back in Circle CI, verify that the commit triggered another build.