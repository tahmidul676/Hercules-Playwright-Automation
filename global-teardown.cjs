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

/*
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

*/

/*

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

// Returns a local-time timestamp string like "2025-01-15_14-30-00"
function localTimestamp() {
  const now = new Date();

  const pad = (n) => String(n).padStart(2, "0");

  const yyyy = now.getFullYear();
  const MM   = pad(now.getMonth() + 1);
  const dd   = pad(now.getDate());
  const HH   = pad(now.getHours());
  const mm   = pad(now.getMinutes());
  const ss   = pad(now.getSeconds());

  return `${yyyy}-${MM}-${dd}_${HH}-${mm}-${ss}`;
}

async function globalTeardown() {
  const resultsDir  = "allure-results";
  const reportsRoot = "allure-reports";
  const reportDir   = path.join(reportsRoot, `report_${localTimestamp()}`);

  fs.mkdirSync(reportsRoot, { recursive: true });

  // =============================================
  // ① Copy history from the most recent report
  //    MUST happen before `allure generate` so
  //    Trends data is included in the new report.
  // =============================================

  const existingReports = fs
    .readdirSync(reportsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .reverse(); // latest first (lexicographic sort works for timestamped names)

  if (existingReports.length > 0) {
    const latestHistory = path.join(reportsRoot, existingReports[0], "history");
    const targetHistory  = path.join(resultsDir, "history");

    if (fs.existsSync(latestHistory)) {
      fs.cpSync(latestHistory, targetHistory, { recursive: true });
      console.log("📈 Previous history copied for Trends");
    } else {
      console.log("ℹ️  No previous history found — Trends will start from this run");
    }
  }

  // =============================================
  // ② Generate the Allure report
  // =============================================

  console.log("\n📊 Generating Allure Report...");

  execSync(`allure generate ${resultsDir} --clean -o ${reportDir}`, {
    stdio: "inherit",
  });

  console.log(`✅ Report saved → ${reportDir}`);
  console.log(`👉 To open: allure open ${reportDir}\n`);
}

module.exports = globalTeardown;

*/

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

function localTimestamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  const yyyy = now.getFullYear();
  const MM   = pad(now.getMonth() + 1);
  const dd   = pad(now.getDate());
  const HH   = pad(now.getHours());
  const mm   = pad(now.getMinutes());
  const ss   = pad(now.getSeconds());
  return `${yyyy}-${MM}-${dd}_${HH}-${mm}-${ss}`;
}

async function globalTeardown() {
  const resultsDir  = "allure-results";
  const reportsRoot = "allure-reports";
  const reportDir   = path.join(reportsRoot, `report_${localTimestamp()}`);

  fs.mkdirSync(reportsRoot, { recursive: true });

  // ① Copy history BEFORE generating
  const existingReports = fs
    .readdirSync(reportsRoot, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()
    .reverse();

  if (existingReports.length > 0) {
    const latestHistory = path.join(reportsRoot, existingReports[0], "history");
    const targetHistory = path.join(resultsDir, "history");

    if (fs.existsSync(latestHistory)) {
      fs.cpSync(latestHistory, targetHistory, { recursive: true });
      console.log("📈 Previous history copied for Trends");
    } else {
      console.log("ℹ️  No previous history found — Trends will start from this run");
    }
  }

  // ② Generate report
  console.log("\n📊 Generating Allure Report...");
  execSync(`allure generate ${resultsDir} --clean -o ${reportDir}`, {
    stdio: "inherit",
  });

  console.log(`\n✅ Report saved → ${reportDir}`);
  console.log(`👉 To open: allure open ${reportDir}\n`);
}

// Called by Playwright as a module AND directly via node global-teardown.cjs
if (require.main === module) {
  globalTeardown().catch((e) => {
    console.error('❌ Teardown error:', e);
    process.exit(1);
  });
}

module.exports = globalTeardown;