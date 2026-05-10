// const fs = require('fs');
// const path = require('path');

// async function globalSetup() {
//   const resultsDir = 'allure-results';
//   fs.mkdirSync(resultsDir, { recursive: true });

//   const envProps = [
//     'Project=Hercules',
//     'Environment=Testing',
//     'Base URL=https://dmsweb.sslwireless.com/',
//     'Browser=Chromium',
//     'Tester=Tahamidul Haque',
//     'Supervisor=Yeasir Arafat',
//     'Version=1.0',
//     'Team=QA Team',
//   ].join('\n');

//   fs.writeFileSync(path.join(resultsDir, 'environment.properties'), envProps);
// }

// module.exports = globalSetup;

const fs = require("fs");
const path = require("path");

async function globalSetup() {
  const resultsDir = "allure-results";

  // Create folder if not exists
  fs.mkdirSync(resultsDir, { recursive: true });

  // =========================
  // Preserve History Folder
  // =========================

  const historyPath = path.join(resultsDir, "history");

  let historyBackup = null;

  if (fs.existsSync(historyPath)) {
    historyBackup = fs.readdirSync(historyPath);
  }

  // =========================
  // Clear Old Result Files
  // =========================

  fs.readdirSync(resultsDir).forEach((file) => {
    const fullPath = path.join(resultsDir, file);

    // Keep history folder
    if (file !== "history") {
      fs.rmSync(fullPath, {
        recursive: true,
        force: true,
      });
    }
  });

  // =========================
  // Environment Properties
  // =========================

  const envProps = [
    "Project=Hercules",
    "Environment=Testing",
    "Base URL=https://dmsweb.sslwireless.com/",
    "Browser=Chromium",
    "Tester=Tahamidul Haque",
    "Supervisor=Yeasir Arafat",
    "Version=1.0",
    "Team=QA Team",
  ].join("\n");

  fs.writeFileSync(
    path.join(resultsDir, "environment.properties"),
    envProps
  );

  // =========================
  // Executor
  // =========================

  const executorInfo = {
    name: "Local Machine",
    type: "Playwright",
    buildName: "Hercules Automation",
    buildOrder: Date.now(),
    reportName: "Playwright Allure Report",
  };

  fs.writeFileSync(
    path.join(resultsDir, "executor.json"),
    JSON.stringify(executorInfo, null, 2)
  );

  // =========================
  // Categories
  // =========================

  const categories = [
    {
      name: "Product defects",
      matchedStatuses: ["failed"],
    },
    {
      name: "Ignored tests",
      matchedStatuses: ["skipped"],
    },
  ];

  fs.writeFileSync(
    path.join(resultsDir, "categories.json"),
    JSON.stringify(categories, null, 2)
  );
}

module.exports = globalSetup;