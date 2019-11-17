/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */

class SearchResultsPage {
    get searchType() {
        return browser.$$("#summary-panel .sp-summary")[0];
    }

    get goingTo() {
        return browser.$$("#summary-panel .sp-summary")[1];
    }

    get flyingFrom() {
        return browser.$$("#summary-panel .sp-summary")[2];
    }

    get depatureDate() {
        return browser.$$("#summary-panel .sp-summary")[3];
    }

    get hotelDepatureDate() {
        return browser.$$("#summary-panel .sp-summary")[2];
    }

    get searchResultCards() {
        return browser.$$("#search-results > article");
    }

    get firstWishList() {
        return browser.$$(
            "#search-results > article .card-content .card-action .vhols-hotlist a"
        )[0];
    }

    setGlobalData(globalData) {
        this.globalData = globalData;
    }

    getGlobalData() {
        return this.globalData;
    }
}

export default new SearchResultsPage();
