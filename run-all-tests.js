// const { execSync } = require('child_process');

// const tests = [
//   //'tests/TC_01_LoginTest.spec.js',
//   'tests/TC_05_SND_Order_ApprovalPendingOrderTest.spec.js',
//   'tests/TC_06_SND_PI_CreateTest.spec.js',
//   'tests/TC_08_SND_PI_Picking_CreateTest.spec.js',
//   'tests/TC_010_SND_PI_CollectionSummery_CreateTest.spec.js',
// ];

// console.log('🚀 Starting Test Suite...\n');

// for (const test of tests) {
//   console.log(`▶️  Running: ${test}`);
//   try {
//     execSync(`npx playwright test ${test} --workers=1`, { stdio: 'inherit' });
//     console.log(`✅ Passed: ${test}\n`);
//   } catch (error) {
//     console.error(`❌ Failed: ${test}`);
//     console.error('🛑 Stopping suite due to failure.');
//     process.exit(1);
//   }
// }

// console.log('🎉 All tests passed successfully!');

const { execSync } = require("child_process");

const tests = [
  //"tests/TC_05_SND_Order_ApprovalPendingOrderTest.spec.js",
  "tests/TC_06_SND_PI_CreateTest.spec.js",
  "tests/TC_08_SND_PI_Picking_CreateTest.spec.js",
  "tests/TC_010_SND_PI_CollectionSummery_CreateTest.spec.js",
];

let failedTests = [];

console.log("🚀 Starting Test Suite...\n");

// ① Setup ONCE
console.log("⚙️  Running global setup...");
execSync("node global-setup.cjs", { stdio: "inherit" });
console.log("");

// ② Run ALL tests — never stop early, collect failures
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

// ③ ALWAYS generate report with ALL results
console.log("⚙️  Running global teardown...");
execSync("node global-teardown.cjs", { stdio: "inherit" });

// ④ Summary
if (failedTests.length > 0) {
  console.log("\n⚠️  Suite finished with failures:");
  failedTests.forEach((t) => console.log(`   ❌ ${t}`));
  process.exit(1);
} else {
  console.log("🎉 All tests passed successfully!");
}
