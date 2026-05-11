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
//------------------------------------------
/*
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

*/

/*
const fs = require("fs");
const path = require("path");

async function globalSetup() {
  const resultsDir = "allure-results";

  fs.mkdirSync(resultsDir, { recursive: true });

  // Clear old result files but preserve the history folder
  fs.readdirSync(resultsDir).forEach((file) => {
    if (file !== "history") {
      fs.rmSync(path.join(resultsDir, file), { recursive: true, force: true });
    }
  });

  // Environment properties
  const envProps = [
    // -- Project identity --
  "Project=Hercules",
  "Version=1.0",
  "Team=QA Team",

  // -- Test environment --
  "Environment=Testing",
  "URL=https://dmsweb.sslwireless.com/",
  "OS=Windows 11",               // what machine ran the tests
  "NodeVersion= v24.14.1",       // useful for debugging failures

  // -- Browser --
  "Browser=Chromium",
  "Headed=false",                 // headed or headless
  "SlowMo=1000ms",

  // -- People --
  "Tester=Tahamidul Haque",
  ].join("\n");

  fs.writeFileSync(path.join(resultsDir, "environment.properties"), envProps);

  // Executor info
  const executorInfo = {
    // name: "Local Machine",
    // type: "Playwright",
    // buildName: "Hercules Automation",
    // buildOrder: Date.now(),
    // reportName: "Playwright Allure Report",
     // Required for the widget to show at all
  name: "Local Machine",           // who/what ran it — could be "GitHub Actions", "Jenkins" etc.
  type: "playwright",              // lowercase: "jenkins", "github", "gitlab", "bamboo", "playwright"

  // Build identity — shows up in the Trend chart's build list
  buildName: "Hercules Automation",
  buildOrder: Date.now(),          // integer — used to sort builds chronologically in Trends
  // buildUrl: "",                    // URL to the CI job run (leave empty for local)

  // Report identity
  reportName: "Playwright Allure Report",
  //reportUrl: "",                   // URL where this report will be hosted (optional)
  };

  fs.writeFileSync(
    path.join(resultsDir, "executor.json"),
    JSON.stringify(executorInfo, null, 2)
  );

  // Categories
  const categories = [
    { name: "Product defects", matchedStatuses: ["failed"] },
    { name: "Ignored tests",   matchedStatuses: ["skipped"] },
  ];

  fs.writeFileSync(
    path.join(resultsDir, "categories.json"),
    JSON.stringify(categories, null, 2)
  );
}

module.exports = globalSetup;


*/
const fs = require("fs");
const path = require("path");
const os = require("os");

async function globalSetup() {
  const resultsDir = "allure-results";

  fs.mkdirSync(resultsDir, { recursive: true });

  fs.readdirSync(resultsDir).forEach((file) => {
    if (file !== "history") {
      fs.rmSync(path.join(resultsDir, file), { recursive: true, force: true });
    }
  });

  const envProps = [
    "Project=Hercules",
    "Version=1.0",
    "Team=QA Team",
    "Environment=Testing",
    "URL= https://dmsweb.sslwireless.com/",
    `OS=${os.type()} ${os.release()}`,
    `Node Version= ${process.version}`,
    "Browser=Chromium",
    "Tester=Tahamidul Haque",
  ].join("\n");

  fs.writeFileSync(path.join(resultsDir, "environment.properties"), envProps);

  const executorInfo = {
    name: "Local Machine",
    type: "playwright",
    buildName: "Hercules Automation",
    buildOrder: Date.now(),
    reportName: "Hercules Automation Report",
  };

  fs.writeFileSync(
    path.join(resultsDir, "executor.json"),
    JSON.stringify(executorInfo, null, 2)
  );

  // const categories = [
  //   { name: "Product defects", matchedStatuses: ["failed"] },
  //   {
  //     name: "Test infrastructure issues",
  //     matchedStatuses: ["broken"],
  //     messageRegex: ".*TimeoutError.*",
  //   },
  //   { name: "Ignored tests", matchedStatuses: ["skipped"] },
  // ];
  
  const categories = [

  // ===========================
  // ASSERTION FAILURES
  // ===========================
  {
    name: "Product defects",
    matchedStatuses: ["failed"],
    messageRegex: ".*AssertionError.*|.*expect.*received.*|.*toBe.*|.*toEqual.*",
  },
  {
    name: "Text mismatch",
    matchedStatuses: ["failed"],
    messageRegex: ".*toHaveText.*|.*toContainText.*|.*innerHTML.*",
  },
  {
    name: "URL mismatch",
    matchedStatuses: ["failed"],
    messageRegex: ".*toHaveURL.*|.*toContain.*url.*",
  },
  {
    name: "Visibility assertion failed",
    matchedStatuses: ["failed"],
    messageRegex: ".*toBeVisible.*|.*toBeHidden.*|.*toBeEnabled.*|.*toBeDisabled.*",
  },

  // ===========================
  // TIMEOUT ISSUES
  // ===========================
  {
    name: "Action timeout",
    matchedStatuses: ["broken"],
    messageRegex: ".*actionTimeout.*|.*Timeout.*waiting for.*click.*|.*Timeout.*waiting for.*fill.*",
  },
  {
    name: "Navigation timeout",
    matchedStatuses: ["broken"],
    messageRegex: ".*navigationTimeout.*|.*page.goto.*timeout.*|.*waitForNavigation.*",
  },
  {
    name: "Element wait timeout",
    matchedStatuses: ["broken"],
    messageRegex: ".*waitForSelector.*|.*waitForLocator.*|.*locator.waitFor.*",
  },
  {
    name: "Expect timeout",
    matchedStatuses: ["broken"],
    messageRegex: ".*expect.*timeout.*|.*Timeout.*expect.*",
  },

  // ===========================
  // ELEMENT ISSUES
  // ===========================
  {
    name: "Element not found",
    matchedStatuses: ["broken", "failed"],
    messageRegex: ".*strict mode violation.*|.*resolved to.*elements.*|.*No element found.*",
  },
  {
    name: "Element not interactable",
    matchedStatuses: ["broken"],
    messageRegex: ".*element is not attached.*|.*element is outside.*|.*intercepts pointer.*|.*not visible.*",
  },
  {
    name: "Multiple elements matched",
    matchedStatuses: ["broken"],
    messageRegex: ".*strict mode violation.*resolved to.*[2-9].*elements.*",
  },

  // ===========================
  // NETWORK ISSUES
  // ===========================
  {
    name: "Network error",
    matchedStatuses: ["broken"],
    messageRegex: ".*net::ERR.*|.*ECONNREFUSED.*|.*ENOTFOUND.*|.*NetworkError.*",
  },
  {
    name: "Page load failed",
    matchedStatuses: ["broken"],
    messageRegex: ".*ERR_NAME_NOT_RESOLVED.*|.*ERR_CONNECTION_REFUSED.*|.*Failed to load.*",
  },

  // ===========================
  // BROWSER / PAGE ISSUES
  // ===========================
  {
    name: "Page crashed",
    matchedStatuses: ["broken"],
    messageRegex: ".*page crashed.*|.*Target closed.*|.*Session closed.*",
  },
  {
    name: "Browser context error",
    matchedStatuses: ["broken"],
    messageRegex: ".*browserContext.*|.*browser has been closed.*",
  },

  // ===========================
  // TEST CONFIGURATION ISSUES
  // ===========================
  {
    name: "Ignored tests",
    matchedStatuses: ["skipped"],
  },
  {
    name: "Flaky tests",
    matchedStatuses: ["failed"],
    traceRegex: ".*retry.*",
  },
  {
    name: "Unknown failures",
    matchedStatuses: ["unknown"],
  },
];

  fs.writeFileSync(
    path.join(resultsDir, "categories.json"),
    JSON.stringify(categories, null, 2)
  );

  console.log("✅ Global setup complete\n");
}

// Called by Playwright as a module AND directly via node global-setup.cjs
if (require.main === module) {
  globalSetup().catch((e) => {
    console.error('❌ Setup error:', e);
    process.exit(1);
  });
}

module.exports = globalSetup;