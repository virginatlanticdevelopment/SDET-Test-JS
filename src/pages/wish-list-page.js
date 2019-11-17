/* eslint-disable quotes */
/* eslint-disable class-methods-use-this */
/* eslint-disable require-jsdoc */

class WishListPage {
    get wishListPageHeader() {
        return browser.$("h1");
    }

    get wishResultsContainer() {
        return browser.$(".masonry-entry .card:nth-child(1)");
    }

    get wishListCardTitle() {
        return browser.$(".masonry-entry .card:nth-child(1) .card-title");
    }
}

export default new WishListPage();
