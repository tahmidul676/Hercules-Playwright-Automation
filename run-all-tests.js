

const { execSync } = require("child_process");

const tests = [

  // "tests/TC_010_SND_Order_ApprovalPendingOrderTest.spec.js",
  //"tests/TC_011_SND_PI_CreateTest.spec.js",
  "tests/TC_014_SND_PI_Picking_CreateTest.spec.js",
  "tests/TC_016_SND_PI_CollectionSummery_CreateTest.spec.js",
  

];

let failedTests = [];

console.log("🚀 Starting Test Suite...\n");

// Setup ONCE
console.log("⚙️  Running global setup...");
execSync("node global-setup.cjs", { stdio: "inherit" });
console.log("");

// Run ALL tests — never stop early, collect failures
for (const test of tests) {
  console.log(`▶️  Running: ${test}`);
  try {
    execSync(`npx playwright test ${test} --workers=1`, { stdio: "inherit" });
    console.log(`✅ Passed: ${test}\n`);
  } catch (error) {
    console.error(`❌ Failed: ${test}\n`);
    failedTests.push(test);
    // DO NOT break — continue to next test
  }
}

// ALWAYS generate report with ALL results
console.log("⚙️  Running global teardown...");
execSync("node global-teardown.cjs", { stdio: "inherit" });

//  Summary
if (failedTests.length > 0) {
  console.log("\n⚠️  Suite finished with failures:");
  failedTests.forEach((t) => console.log(`   ❌ ${t}`));
  process.exit(1);
} else {
  console.log("🎉 All tests passed successfully!");
}
