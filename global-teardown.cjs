// const { execSync } = require('child_process');
// const fs = require('fs');
// const path = require('path');

// async function globalTeardown() {
//   const now = new Date();
//   const timestamp = now.toISOString()
//     .replace('T', '_')
//     .replace(/:/g, '-')
//     .split('.')[0];

//   const reportDir = `allure-reports/report_${timestamp}`;
//   const resultsDir = 'allure-results';

//   fs.mkdirSync('allure-reports', { recursive: true });

//   console.log(`\n📊 Generating Allure Report...`);
//   execSync(`allure generate ${resultsDir} -o ${reportDir}`, { stdio: 'inherit' });
//   console.log(`✅ Report saved → ${reportDir}`);
//   console.log(`👉 To open: allure open ${reportDir}\n`);

//   // ✅ Clear allure-results after report is generated
//   // So next run always has fresh data
//   fs.rmSync(resultsDir, { recursive: true, force: true });
//   fs.mkdirSync(resultsDir, { recursive: true });
//   console.log(`🧹 allure-results cleared for next run\n`);
// }

// module.exports = globalTeardown;

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

async function globalTeardown() {
  const now = new Date();

  const timestamp = now
    .toISOString()
    .replace("T", "_")
    .replace(/:/g, "-")
    .split(".")[0];

  const reportDir = `allure-reports/report_${timestamp}`;
  const resultsDir = "allure-results";

  // Create reports folder
  fs.mkdirSync("allure-reports", { recursive: true });

  // =========================
  // Copy Previous History
  // =========================

  const reportsRoot = "allure-reports";

  const existingReports = fs
    .readdirSync(reportsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .reverse();

  if (existingReports.length > 0) {
    const latestReport = path.join(
      reportsRoot,
      existingReports[0],
      "history"
    );

    const targetHistory = path.join(resultsDir, "history");

    if (fs.existsSync(latestReport)) {
      fs.cpSync(latestReport, targetHistory, {
        recursive: true,
      });

      console.log("📈 Previous history copied");
    }
  }

  // =========================
  // Generate Allure Report
  // =========================

  console.log("\n📊 Generating Allure Report...");

  execSync(
    `allure generate ${resultsDir} --clean -o ${reportDir}`,
    { stdio: "inherit" }
  );

  console.log(`✅ Report saved → ${reportDir}`);
  console.log(`👉 To open: allure open ${reportDir}\n`);
}

module.exports = globalTeardown;