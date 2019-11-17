const path = require("path");

const debug = process.env.DEBUG;

exports.config = {
    specs: ["./src/features/**/*.feature"],
    exclude: [],
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 5,
            browserName: "chrome"
        }
    ],
    logLevel: "trace",
    coloredLogs: true,
    screenshotPath: "./errorShots/",
    baseUrl: "https://www.virginholidays.co.uk/",
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    services: ["selenium-standalone"],
    outputDir: path.join(__dirname, "logs"),
    framework: "cucumber",
    reporters: ["spec"],
    cucumberOpts: {
        backtrace: false,
        requireModule: ["@babel/register"],
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: ["./src/steps/*.js"],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: "not @Pending",
        tagsInTitle: false,
        timeout: debug ? 90000000 : 90000
    },
    before: function before() {
        /**
         * Setup the Chai assertion framework
         */
        const chai = require("chai");

        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();
    }
};
