const fs = require("fs");
const path = require("path");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

async function runLighthouse(url, opts = {}, config = null) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });
  opts.port = chrome.port;

  const results = await lighthouse(url, opts, config);
  await chrome.kill();

  return results;
}

async function main() {
  const url = "http://localhost:3000";
  const opts = {
    logLevel: "info",
    output: "html",
    onlyCategories: ["performance"],
    formFactor: "desktop",
    screenEmulation: {
      mobile: false,
      width: 1350,
      height: 940,
      deviceScaleFactor: 1,
      disabled: false,
    },
  };

  try {
    console.log("Running Lighthouse analysis...");
    const results = await runLighthouse(url, opts);

    // Save the report
    const reportPath = path.join(__dirname, "../lighthouse-report.html");
    fs.writeFileSync(reportPath, results.report);
    console.log(`Lighthouse report saved to ${reportPath}`);

    // Log performance score
    const performanceScore = results.lhr.categories.performance.score * 100;
    console.log(`Performance Score: ${performanceScore.toFixed(1)}`);

    // Log opportunities for improvement
    const opportunities =
      results.lhr.audits["performance-budget"].details.items;
    if (opportunities && opportunities.length > 0) {
      console.log("\nOpportunities for improvement:");
      opportunities.forEach((opp) => {
        console.log(`- ${opp.name}: ${opp.overBudget} bytes over budget`);
      });
    }
  } catch (error) {
    console.error("Error running Lighthouse:", error);
  }
}

main();
