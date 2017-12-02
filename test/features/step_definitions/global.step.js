'use strict';

var { defineSupportCode } = require('cucumber');
var { expect } = require('chai');
var globalPOM = require('../page_objects/global.pom');

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I open duckduckgo$/, function () {
        return this.driver.get('https://duckduckgo.com');
    });

    When(/^I input "(.*)" into the search box$/, function (phrase) {
        return globalPOM.inputSearchPhrase(phrase);
    });

    When(/^I click the search button$/, function () {
        return globalPOM.clickSearch();
    });

    Then(/^I should see some results$/, function () {
        return expect(globalPOM.searchResultsArePresent()).to.eventually.equal(true);
    });
});
