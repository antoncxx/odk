const fs = require('fs');
const path = require('path');

try {
  const coverageJsonPath = path.resolve(process.argv[2]);

  if (!fs.existsSync(coverageJsonPath)) {
    throw new Error(`File not found: ${coverageJsonPath}`);
  }

  const coverageData = fs.readFileSync(coverageJsonPath);

  let coverageReport;
  try {
    coverageReport = JSON.parse(coverageData);
  } catch (parseError) {
    throw new Error('Invalid JSON format in coverage report.');
  }

  const summary = coverageReport.total;

  if (!summary) {
    throw new Error('Missing total summary in coverage report.');
  }

  const totalStatements = summary.statements?.total ?? 0;
  const coveredStatements = summary.statements?.covered ?? 0;

  const totalBranches = summary.branches?.total ?? 0;
  const coveredBranches = summary.branches?.covered ?? 0;

  const totalFunctions = summary.functions?.total ?? 0;
  const coveredFunctions = summary.functions?.covered ?? 0;

  const totalLines = summary.lines?.total ?? 0;
  const coveredLines = summary.lines?.covered ?? 0;

  const totalElements =
    totalStatements + totalBranches + totalFunctions + totalLines;
  const coveredElements =
    coveredStatements + coveredBranches + coveredFunctions + coveredLines;

  if (totalElements === 0) {
    throw new Error('No coverage data found.');
  }

  const totalCoverage = (coveredElements / totalElements) * 100;

  const thresholdValue = +(process.env.TOTAL_COVERAGE_PERCENT ?? 80);

  if (totalCoverage < thresholdValue) {
    console.error(
      `Expected coverage ${thresholdValue}%, actual: ${totalCoverage.toFixed(
        2,
      )}%`,
    );
    process.exit(1);
  } else {
    process.exit(0);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
