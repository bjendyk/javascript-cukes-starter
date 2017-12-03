'use strict';

const { By } = require('selenium-webdriver');

class GlobalPageObjectModel {
    constructor(world) {
        this.world = world;
        this.driver = world.getDriver();
    }

    inputSearchPhrase(phrase) {
        return this.world.waitForElement(By.css('form#search_form_homepage'))
        .then(() => {
            return this.driver.findElement(By.css('input#search_form_input_homepage'));
        })
        .then((element) => {
            return element.sendKeys(phrase);
        });
    }

    clickSearch() {
        return this.driver.findElement(By.css('input#search_button_homepage'))
        .then((element) => {
            return element.click();
        });
    }

    searchResultsArePresent() {
        return this.world.waitForElement(By.css('div#links'))
        .then(() => {
            return this.driver.findElements(By.css('div.result'));
        })
        .then((elements) => {
            return Promise.resolve(elements.length > 0);
        });
    }
}

module.exports = GlobalPageObjectModel;
