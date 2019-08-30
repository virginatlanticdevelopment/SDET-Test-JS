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
var basePage_1 = require("../pages/basePage");
var holidaySearchLandingPage_1 = require("../pages/holidaySearchLandingPage");
var homePage_1 = require("../pages/homePage");
var hotelListPage_1 = require("../pages/hotelListPage");
var hotelSearchLandingPage_1 = require("../pages/hotelSearchLandingPage");
var hotListPage_1 = require("../pages/hotListPage");
var basepage = new basePage_1.BasePage();
var holidaysearchlandingpage = new holidaySearchLandingPage_1.HolidaySearchLandingPage();
var homepage = new homePage_1.HomePage();
var hotellistpage = new hotelListPage_1.HotelListPage();
var hotelsearchlandingpage = new hotelSearchLandingPage_1.HotelSearchLandingPage();
var hotlistpage = new hotListPage_1.HotListPage();
var selectedHolidayName;
var displayedHolidayName;
var selectedHotelName;
var displayedHolelName;
cucumber_1.setDefaultTimeout(40000);
cucumber_1.Given(/^I am on virgin holidays home page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, homepage.goToHomeURL()];
            case 1:
                _a.sent();
                return [4, basepage.resizeBrowser(1600, 900)];
            case 2:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Given(/^I do a holiday search$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, homepage.getSubmitButton().click()];
            case 1:
                _a.sent();
                return [4, homepage.isSearchHeaderLocated()];
            case 2:
                _a.sent();
                return [4, basepage.scrollDown()];
            case 3:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Given(/^I do a hotel search$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, homepage.getHotelTab().click()];
            case 1:
                _a.sent();
                return [4, homepage.getSubmitButton().click()];
            case 2:
                _a.sent();
                return [4, homepage.isSearchHeaderLocated()];
            case 3:
                _a.sent();
                return [4, basepage.scrollDown()];
            case 4:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.When(/^I add a holiday to a hotlist$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, holidaysearchlandingpage.isFirstHolidayItemVisible()];
            case 1:
                _a.sent();
                return [4, holidaysearchlandingpage.getFirstHolidayItemHeading()];
            case 2:
                selectedHolidayName = _a.sent();
                console.log("Selected holiday ==> ", selectedHotelName);
                return [4, holidaysearchlandingpage.getFirstHolidayItemAddToHotlistLink().click()];
            case 3:
                _a.sent();
                return [4, holidaysearchlandingpage.isFirstHolidayItemRemoveHotlistLinkVisible()];
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
            case 0: return [4, holidaysearchlandingpage.getHotListLiink().click()];
            case 1:
                _c.sent();
                _b = (_a = chai_1.assert).isTrue;
                return [4, basepage.waitForPageTitle("Hotlist")];
            case 2:
                _b.apply(_a, [_c.sent()]);
                return [4, hotlistpage.isFirstHolidayItemVisible()];
            case 3:
                _c.sent();
                return [4, hotlistpage.getFirstHolidayItemHeading()];
            case 4:
                displayedHolidayName = _c.sent();
                chai_1.assert.equal(selectedHolidayName, displayedHolidayName, "Holiday is not included");
                return [2];
        }
    });
}); });
cucumber_1.When(/^I proceed to the first hotel options page$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, hotelsearchlandingpage.isFirstHotelItemVisible()];
            case 1:
                _a.sent();
                return [4, hotelsearchlandingpage.getFirstHolidayItemHeading()];
            case 2:
                selectedHotelName = _a.sent();
                console.log("Selected hotel ==> ", selectedHotelName);
                return [4, hotelsearchlandingpage.getFirstHotelItemContinueButton().click()];
            case 3:
                _a.sent();
                return [2];
        }
    });
}); });
cucumber_1.Then(/^I can see my board basis$/, function () { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, hotellistpage.isFirstHotelItemVisible()];
            case 1:
                _a.sent();
                return [4, hotellistpage.getFirstHolidayItemHeading()];
            case 2:
                displayedHolelName = _a.sent();
                chai_1.assert.equal(selectedHotelName, displayedHolelName, "Hotel is not included");
                basepage.closeBrowser();
                return [2];
        }
    });
}); });
