// import { Cucumber } from "cucumber";
import * as report from "cucumber-html-reporter";
import * as fs from "fs";
import * as mkdirp from "mkdirp";

export class CucumberReportExtension {

    private static jsonDir = process.cwd() + "/reports/json";
    private static htmlDir = process.cwd() + "/reports/html";
    private static jsonFile = CucumberReportExtension.jsonDir + "/cucumber_report.json";

    // tslint:disable-next-line:member-ordering
    public static cucumberReporterOptions = {
        theme: "bootstrap",
        // tslint:disable-next-line:object-literal-sort-keys
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

    // tslint:disable-next-line:member-ordering
    public static CreateReportFile(dirName) {
        // tslint:disable-next-line:comment-format
        //Check of the directory exist
        if (!fs.existsSync(dirName)) {
            mkdirp.sync(dirName);
        }
    }

    // tslint:disable-next-line:member-ordering
    public static GenerateCucumberReport() {
        // report.generate(this.cucumberReporterOptions);
    }

}
