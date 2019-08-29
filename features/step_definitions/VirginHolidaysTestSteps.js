"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
var selenium_webdriver_1 = require("selenium-webdriver");
var selectedHolidayName;
var displayedHolidayName;
var driver = new selenium_webdriver_1.Builder().forBrowser("chrome").build();
cucumber_1.setDefaultTimeout(40000);
cucumber_1.Given(/^I am on virgin holidays home page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.get("https://www.virginholidays.co.uk/")];
            case 1:
                _a.sent();
                return [4, driver.manage().window().setSize(1600, 900)];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Given(/^I do a holiday search$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.findElement(selenium_webdriver_1.By.css("#search-panel > div > div > div.sp-tab.sp-selected > form > div.sp-container > div.sp-submit-container > button"))
                    .click()];
            case 1:
                _a.sent();
                return [4, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By.css("#app-header")), 25000)];
            case 2:
                _a.sent();
                return [4, driver.executeScript("window.scrollTo(0,600)")];
            case 3:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.When(/^I add a holiday to a hotlist$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, driver.wait(selenium_webdriver_1.until.elementLocated(selenium_webdriver_1.By
                    .css("#search-results > article:nth-child(1) > div.card-content > div.card-action > div.vhols-hotlist > a > span.hbc-add-content")), 20000)];
            case 1:
                _a.sent();
                return [4, driver.findElement(selenium_webdriver_1.By.css("#search-results > article:nth-child(1) > div.card-content > div.card-detail > header > h2")).getText()];
            case 2:
                selectedHolidayName = _a.sent();
                console.log("Selected holiday ==> ", selectedHolidayName);
                return [4, driver.findElement(selenium_webdriver_1.By.css("#search-results > article:nth-child(1) > div.card-content > div.card-action > div.vhols-hotlist > a ")).click()];
            case 3:
                _a.sent();
                return [4, driver.wait(selenium_webdriver_1.until.elementIsVisible(driver.findElement(selenium_webdriver_1.By
                        .css("#search-results > article:nth-child(1) > div.card-content > div.card-action > div.vhols-hotlist > a > span.hbc-remove-content-md"))), 20000)];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^I can see that the holiday added to the hotlist on top of the page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4, driver.findElement(selenium_webdriver_1.By.css("li.mvhtr-entry.mvhtr-hotlist > a ")).click()];
            case 1:
                _c.sent();
                return [4, driver.wait(selenium_webdriver_1.until.titleContains("Hotlist"))];
            case 2:
                _c.sent();
                return [4, driver.findElement(selenium_webdriver_1.By.css("section > div:nth-child(1) > div > div.card-block > h4"))
                        .getText()];
            case 3:
                displayedHolidayName = _c.sent();
                console.log("Displayed holiday ==> ", displayedHolidayName);
                chai_1.assert.equal(selectedHolidayName, displayedHolidayName, "Holiday is not included");
                _b = (_a = chai_1.assert).isTrue;
                return [4, driver.wait(selenium_webdriver_1.until.titleContains("Hotlist"), 10000)];
            case 4:
                _b.apply(_a, [_c.sent()]);
                return [2];
        }
    });
}); });
