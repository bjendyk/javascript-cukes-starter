'use strict';

const { defineSupportCode } = require('cucumber');
const { expect } = require('chai');
const GlobalPageObjectModel = require('../page_objects/global.pom');

defineSupportCode(({ Before, Given, When, Then }) => {
    let globalPOM, driver;

    Before(function () {
        driver = this.getDriver();
        globalPOM = new GlobalPageObjectModel(this);
    });

    Given(/^I open duckduckgo$/, () => {
        return driver.get('https://duckduckgo.com');
    });

    When(/^I input "(.*)" into the search box$/, (phrase) => {
        return globalPOM.inputSearchPhrase(phrase);
    });

    When(/^I click the search button$/, () => {
        return globalPOM.clickSearch();
    });

    Then(/^I should see some results$/, () => {
        return expect(globalPOM.searchResultsArePresent()).to.eventually.equal(true);
    });
});
