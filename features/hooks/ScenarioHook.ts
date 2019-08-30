import {  After, AfterAll, Before,  BeforeAll, setDefaultTimeout, Status } from "cucumber";
import { Browser } from "selenium-webdriver";
import {BasePage} from "../pages/basePage";
import { driver } from "../pages/basePage";

const basepage: BasePage = new BasePage();
// import { config } from "../features/step_definitions/config";
import { CucumberReportExtension } from "../../reporting/CucumberReportExtension";

const jsonReports = process.cwd() + "/reports/json";

setDefaultTimeout(10000);

BeforeAll(async () => {
    CucumberReportExtension.CreateReportFile(jsonReports);
    console.log("Before hook executed");
});

Before(async () => {
    console.log("Before hook executed");
});

// After(async function(scenario) {
//     if (scenario.result.status === Status.FAILED) {
//         console.log("After hook executed changed");
//         // // screenShot is a base-64 encoded PNG
//         //     const screenShot = await this.driver.takeScreenshot();
//         //     this.attach(screenShot, "image/png");
//     }
// });
// AfterAll(async (scenario) => {
//     console.log("After hook executed changed");
//     // return await driver.quit();
// });
