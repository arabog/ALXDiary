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



