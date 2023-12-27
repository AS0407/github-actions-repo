//This index.js file will return an error.
const core = require("@actions/core");  //This @actions/core is not present in our repository. These are the node modules so for that we have to complie the action's js code into one file.
//Now, we'll make use of vercel/ncc commands to compile the index.js so that it can include all the required packages bundled in one file.
const github = require("@actions/github");

try {
  core.debug("Debug Message");
  core.warning("Warning message");
  core.error("Error message");

  const name = core.getInput("who_to_greet");

  console.log(`Hello ${name}`);

  const time = new Date();
  core.setOutput("time", time.toTimeString());

  core.exportVariable("HELLO_TIME", time);

  core.startGroup("Logging github context");
  console.log(JSON.stringify(github.context, null, 2));
  core.endGroup();
} catch (error) {
  core.setFailed(error.message);
}
