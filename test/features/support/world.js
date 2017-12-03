'use strict';

const { Builder, Capabilities, until } = require('selenium-webdriver');
const defaults = require('./defaults');

const defaultHost = 'http://localhost';
const defaultPort = 3210;

class World {
    constructor({ parameters }) {
        this.driver = this.buildDriver();
        this.host = parameters.host || defaults.host;
        this.port = parameters.port || defaults.port;
    }

    getDriver() {
        return this.driver;
    }

    getDefaultUrl() {
        return this.host + ':' + this.port;
    }

    waitForElement(locator) {
        return this.driver.wait(until.elementLocated(locator));
    }

    buildChromeDriver() {
        let caps = Capabilities.chrome();
        const options = {
            'args': ['--start-maximized', '--no-sandbox', '--no-default-browser-check'],
            'useAutomationExtension': false // see https://bugs.chromium.org/p/chromedriver/issues/detail?id=1749
        };
        caps.set('chromeOptions', caps);
        return new Builder().forBrowser('chrome').withCapabilities(caps).build();
    }

    buildFirefoxDriver() {
        return new Builder().forBrowser('firefox').build();
    }

    buildDriver() {
        switch (process.env.BROWSER) {
            case 'firefox':
            case 'ff':
                return this.buildFirefoxDriver();
            default:
                return this.buildChromeDriver();
        }
    }
}

module.exports = World;
