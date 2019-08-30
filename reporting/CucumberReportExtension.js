"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var mkdirp = __importStar(require("mkdirp"));
var CucumberReportExtension = (function () {
    function CucumberReportExtension() {
    }
    CucumberReportExtension.CreateReportFile = function (dirName) {
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    };
    CucumberReportExtension.GenerateCucumberReport = function () {
    };
    CucumberReportExtension.jsonDir = process.cwd() + "/reports/json";
    CucumberReportExtension.htmlDir = process.cwd() + "/reports/html";
    CucumberReportExtension.jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";
    CucumberReportExtension.cucumberReporterOptions = {
        theme: "bootstrap",
        jsonFile: CucumberReportExtension.jsonFile,
        output: CucumberReportExtension.htmlDir + "/cucumber_reporter.html",
        reportSuiteAsScenarios: true,
        metadata: {
            "App Version": "0.0.1",
            "Browser": "Chrome  59.0.945",
            "Executed": "Local",
            "LaunchReport": "true",
            "Parallel": "Scenarios",
            "Platform": "Windows 10",
            "Test Environment": "Testing",
        },
    };
    return CucumberReportExtension;
}());
exports.CucumberReportExtension = CucumberReportExtension;
