/* eslint-disable no-plusplus */
/* eslint-disable quotes */

import { Given, When, Then } from "cucumber";

import HomeSearchPage from "../pages/home-search-page";
import SearchResultsPage from "../pages/search-results-page";
import WishListPage from "../pages/wish-list-page";
import {
    DESTINATION,
    AIRPORT,
    DURATION,
    getTravelDate
} from "../support/test-data";

Given("I am on virgin holidays home page", () => {
    HomeSearchPage.open("/");
});

Given("I do a holiday search", () => {
    HomeSearchPage.holidayNavLink.click();
    HomeSearchPage.chooseDestination("holiday", DESTINATION.orlandoFlorida);

    if (HomeSearchPage.flyingFromSelectTwo.isDisplayed()) {
        HomeSearchPage.flyingFromTypeTwo(AIRPORT.LondonGatwick);
    }

    if (HomeSearchPage.flyingFromSelectOne.isDisplayed()) {
        HomeSearchPage.flyingFromTypeOne(AIRPORT.Gatwick);
    }

    const [travelCalendarDay, nosOfMonths] = getTravelDate("2020-06-15");

    if (HomeSearchPage.calendarTypeTwo("holiday").isDisplayed()) {
        HomeSearchPage.calendarType2("holiday", travelCalendarDay, nosOfMonths);
    }
    if (HomeSearchPage.calendarTypeOne("holiday").isDisplayed()) {
        HomeSearchPage.calendarType1("holiday", travelCalendarDay, nosOfMonths);
    }

    const incongnitoHowLong = browser.$("#holiday-duration");
    if (incongnitoHowLong.isDisplayed()) {
        incongnitoHowLong.selectByAttribute("value", DURATION.fiveNigths);
    }

    HomeSearchPage.searchSubmitButton("holiday").click();
});

When("I do a hotel search", () => {
    HomeSearchPage.hotelNavLink.click();
    SearchResultsPage.setGlobalData(DESTINATION.orlandoFlorida);
    HomeSearchPage.chooseDestination("hotel", DESTINATION.orlandoFlorida);

    const [travelCalendarDay, nosOfMonths] = getTravelDate("2020-06-15");

    if (HomeSearchPage.calendarTypeTwo("hotel").isDisplayed()) {
        HomeSearchPage.calendarType2("hotel", travelCalendarDay, nosOfMonths);
    }
    if (HomeSearchPage.calendarTypeOne("hotel").isDisplayed()) {
        HomeSearchPage.calendarType1("hotel", travelCalendarDay, nosOfMonths);
    }

    HomeSearchPage.searchSubmitButton("hotel").click();
});

When("I add a holiday to a hotlist", () => {
    const [, , travelDate] = getTravelDate("2020-06-15");

    browser.waitUntil(
        () => browser.$("#summary-panel").isDisplayed() === true,
        20000,
        "Expected holiday search results to have been displayed within 20s"
    );

    const summaryPanel = browser.$("#summary-panel");
    summaryPanel.waitForDisplayed();

    const searchType = SearchResultsPage.searchType.getText();
    const flyingFromAirport = SearchResultsPage.flyingFrom.getText();
    const goingToDestination = SearchResultsPage.goingTo.getText();
    const depatureDate = SearchResultsPage.depatureDate.getText();

    expect(searchType).to.include(`Holiday`);
    expect(flyingFromAirport).to.include(AIRPORT.LondonGatwick);
    expect(goingToDestination).to.include(DESTINATION.orlandoFlorida);
    expect(depatureDate).to.include(travelDate);

    HomeSearchPage.firstCardDrawer.scrollIntoView();
    HomeSearchPage.firstCardDrawer.waitForDisplayed();

    const searchCardTitle = browser
        .$("#search-results article:nth-child(1) .card-content h2")
        .getText()
        .toLowerCase();

    SearchResultsPage.setGlobalData(searchCardTitle);

    const { wishListButton, wishListNavLink } = HomeSearchPage;
    expect(wishListNavLink.getAttribute("class")).to.not.include("full-mode");

    wishListButton.click();

    if (wishListButton.getText() !== "Remove from my Wishlist") {
        wishListButton.waitForDisplayed(2000);
        wishListButton.click();
    }
    browser.pause(2000);
});

When("I proceed to hotel options page", () => {
    const [, , travelDate] = getTravelDate("2020-06-15");
    const destination = SearchResultsPage.getGlobalData();

    browser.waitUntil(
        () => HomeSearchPage.searchSummaryPanel.isDisplayed() === true,
        20000,
        "Expected hotel search results to have been displayed within 20s"
    );

    const searchType = SearchResultsPage.searchType.getText();
    const goingToDestination = SearchResultsPage.goingTo.getText();
    const depatureDate = SearchResultsPage.hotelDepatureDate.getText();

    expect(searchType).to.include("Hotel");
    expect(goingToDestination).to.include(destination);
    expect(depatureDate).to.include(travelDate);
});

Then("I can see that a holiday added to the hotlist on top of the page", () => {
    const { wishListNavLink } = HomeSearchPage;
    expect(wishListNavLink.getAttribute("class")).to.include("full-mode");

    HomeSearchPage.wishListNavLink.click();

    const { wishListPageHeader } = WishListPage;
    expect(wishListPageHeader.getText()).to.eq("Wishlist");

    WishListPage.wishResultsContainer.waitForDisplayed();

    const { wishListCardTitle } = WishListPage;
    const searchCardTitle = SearchResultsPage.getGlobalData();
    expect(wishListCardTitle.getText().toLowerCase()).to.eq(
        searchCardTitle.toLowerCase()
    );
});

Then("I can see my board basis", () => {
    HomeSearchPage.boardBasisFilter.scrollIntoView();
    HomeSearchPage.boardBasisFilter.click();

    const { boardBasisHeader } = HomeSearchPage;

    expect(boardBasisHeader.getText()).to.eq("BOARD BASIS");
});
