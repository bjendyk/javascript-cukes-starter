'use strict';

var { defineSupportCode } = require('cucumber');
var { By } = require('selenium-webdriver');

var driver, world;

defineSupportCode(function ({ Before }) {
    Before(function () {
        world = this;
        driver = this.driver;
    });
});

function inputSearchPhrase(phrase) {
    return world.waitForElement(By.css('form#search_form_homepage'))
        .then(function () {
            return driver.findElement(By.css('input#search_form_input_homepage'));
        })
        .then(function (element) {
            return element.sendKeys(phrase);
        });
}

function clickSearch() {
    return driver.findElement(By.css('input#search_button_homepage'))
        .then(function (element) {
            return element.click();
        });
}

function searchResultsArePresent() {
    return world.waitForElement(By.css('div#links'))
        .then(function () {
            return driver.findElements(By.css('div.result'));
        })
        .then(function (elements) {
            return Promise.resolve(elements.length > 0);
        });
}

module.exports = {
    inputSearchPhrase: inputSearchPhrase,
    clickSearch: clickSearch,
    searchResultsArePresent: searchResultsArePresent
};
