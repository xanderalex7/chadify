const  chadify = require('./index');

const yes = chadify(true, false, 1, 1231223123, "Yes.", 'Yes.', "No.")

const testResult = yes === "Yes." ? "Passed: Yes. " : "Failed to chadify the world."

console.log(testResult)