// cucumber.js
module.exports = {
  default: {
    require: ['features/step-definitions/*.ts', 'features/support/*.ts'],
    requireModule: ['ts-node/register'],
    format: [
      'progress',
      'json:reports/cucumber-report.json' // <- Save report in JSON format
    ],
    publishQuiet: true
  }
};
