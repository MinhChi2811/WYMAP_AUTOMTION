const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'report',
  reportPath: 'report/html',
  metadata: {
    browser: {
      name: 'chromium',
      version: 'latest',
    },
    device: 'Local test machine',
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
  customData: {
    title: 'Run info',
    data: [
      { label: 'Project', value: 'WYMAP Automation' },
      { label: 'Execution Start Time', value: new Date().toLocaleString() },
    ],
  },
  displayReportTime: true,
  pageTitle: 'WYMAP Test Report',
  reportName: 'Cucumber Playwright Automation Report',
  openReportInBrowser: true,
});
