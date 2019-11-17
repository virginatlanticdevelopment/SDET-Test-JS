/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */

class HomeSearchPage {
    open(path) {
        browser.url(path);
    }

    get holidayNavLink() {
        return browser.$$("#search-panel-nav li")[0];
    }

    get hotelNavLink() {
        return browser.$$("#search-panel-nav li")[5];
    }

    get flyingFromSelectTwo() {
        return browser.$('[data-flyout-key="flights"]');
    }

    get flyingFromOptions() {
        return browser.$(".radio-options-list");
    }

    get flyFromDestingations() {
        return browser.$$("#holiday-gateways li");
    }

    get doneButton() {
        return browser.$$(".flyout-footer button")[0];
    }

    get flyingFromSelectOne() {
        return browser.$('[id="holiday-gatways"]');
    }

    get searchSummaryPanel() {
        return browser.$("#summary-panel");
    }

    get firstCardDrawer() {
        return browser.$("#search-results article:nth-child(1) .card-drawers");
    }

    get wishListButton() {
        return browser.$(
            "#search-results article:nth-child(1) .card-action .vhols-hotlist a.hotlist-link"
        );
    }

    get wishListNavLink() {
        return browser.$(
            '[aria-label="Top Bar Navigation"] li[class*="hotlist"] a'
        );
    }

    get boardBasisFilter() {
        return browser.$$("#filters .filter-panel .filter-group")[5];
    }

    get boardBasisHeader() {
        return browser.$(
            "#filters .filter-panel div.filter-group:nth-of-type(6) h4"
        );
    }

    destinationInput(type) {
        return browser.$(`#${type}-typeahead-typeahead`);
    }

    destinationResultsContainer(type) {
        return browser.$(`#${type}-typeahead-typeahead-results`);
    }

    bestMatchLocations(type) {
        return browser.$$(`#${type}-typeahead-typeahead-results ul li`);
    }

    chooseDestination(type, travelDestination) {
        this.destinationInput(type).click();
        this.destinationInput(type).setValue(travelDestination);
        this.destinationResultsContainer(type).waitForDisplayed();
        const destinationMatch = this.bestMatchLocations(type).find(
            destination =>
                destination
                    .getText()
                    .toLowerCase()
                    .includes(travelDestination.toLowerCase())
        );
        destinationMatch.click();
    }

    flyingFromTypeTwo(airport) {
        this.flyingFromSelectTwo.click();
        this.flyingFromOptions.waitForDisplayed();
        const flyFromDestinations = this.flyFromDestingations;

        flyFromDestinations.find(flyFrom => {
            if (flyFrom.getText() === airport) {
                flyFrom.click();
            }
        });

        this.doneButton.waitForDisplayed();
        this.doneButton.click();
    }

    flyingFromTypeOne(airport) {
        this.flyingFromSelectOne.click();
        this.flyingFromSelectOne.selectByAttribute("value", airport);
    }

    calendarTypeTwo(type) {
        return browser.$(`[data-flyout-key="${type}-date"]`);
    }

    calendar2Button(type) {
        return browser.$(
            `[data-flyout-key="${type}-date"] .flyout-footer button`
        );
    }

    calendar2NextMonth(type) {
        return browser.$(
            `[data-flyout-key="${type}-date"] .flatpickr-next-month`
        );
    }

    calendar2AvailableDays(type) {
        return browser.$$(
            `[data-flyout-key="${type}-date"] .dayContainer span:not(.disabled):not(.prevMonthDay):not(.nextMonthDay)`
        );
    }

    calendar2CurrentMonth(type) {
        return browser.$(`[data-flyout-key="${type}-date"] .cur-month`);
    }

    calendarType2(type, travelCalendarDay, nosOfMonths) {
        console.log("...using calendarTypeTwo");

        this.calendarTypeTwo(type).click();

        for (let i = 0; i <= nosOfMonths; i++) {
            this.calendar2NextMonth(type).click();
        }
        const daysInCurrentMonth = this.calendar2AvailableDays(type);

        this.calendar2CurrentMonth(type).click();
        daysInCurrentMonth[travelCalendarDay].click();
        this.calendar2Button(type).click();
    }

    calendarTypeOne(type) {
        return browser.$(`#${type}-datepicker`);
    }

    calendar1NextMonth(type) {
        return browser.$(
            `[data-uid="${type}-datepicker"] span.flatpickr-next-month`
        );
    }

    calendar1DayContainer(type) {
        return browser.$(`[data-uid="${type}-datepicker"] .dayContainer`);
    }

    calendar1CurrentMonthYear(type) {
        return browser.$(`[data-uid="${type}-datepicker"] .flatpickr-month`);
    }

    calendar1AvailableDays(type) {
        return browser.$$(
            `[data-uid="${type}-datepicker"] span.flatpickr-day:not(.disabled):not(.prevMonthDay):not(.nextMonthDay)`
        );
    }

    calendarType1(type, travelCalendarDay, nosOfMonths) {
        console.log("...using calendarTypeOne");

        this.calendarTypeOne(type).click();

        for (let i = 0; i <= nosOfMonths; i++) {
            this.calendar1NextMonth(type).click();
        }

        this.calendar1CurrentMonthYear(type).click();
        this.calendar1DayContainer(type).waitForDisplayed();

        const daysInCurrentMonth = this.calendar1AvailableDays(type);

        daysInCurrentMonth[travelCalendarDay].click();
    }

    searchSubmitButton(type) {
        return browser.$(`[data-booking-type="${type}"] .submit-button`);
    }
}

export default new HomeSearchPage();
