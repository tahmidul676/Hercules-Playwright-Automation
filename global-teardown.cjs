

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