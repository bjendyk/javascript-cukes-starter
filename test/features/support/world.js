'use strict';

var { defineSupportCode } = require('cucumber');
var { Builder, Capabilities, until } = require('selenium-webdriver');

var defaultHost = 'http://localhost';
var defaultPort = 3210;
var defaultTimeoutMs = 30000;

var buildChromeDriver = function () {
    var caps = Capabilities.chrome();
    var options = {
        'args': ['--start-maximized', '--no-sandbox', '--no-default-browser-check'],
        'useAutomationExtension': false // see https://bugs.chromium.org/p/chromedriver/issues/detail?id=1749
    };
    caps.set('chromeOptions', caps);
    return new Builder().forBrowser('chrome').withCapabilities(caps).build();
};

var buildFirefoxDriver = function () {
    return new Builder().forBrowser('firefox').build();
};

var buildDriver = function () {
    console.log(process.env.BROWSER);
    switch (process.env.BROWSER) {
        case 'firefox':
        case 'ff':
            return buildFirefoxDriver();
        default:
            return buildChromeDriver();
    }
};

var World = function ({ parameters }) {
    var driver = buildDriver();

    this.host = parameters.host || defaultHost;
    this.port = parameters.port || defaultPort;
    this.defaultUrl = this.host + ':' + this.port;
    this.driver = driver;

    this.waitForElement = function (locator) {
        return driver.wait(until.elementLocated(locator));
    };
};

defineSupportCode(function ({ setWorldConstructor, setDefaultTimeout }) {
    setWorldConstructor(World);
    setDefaultTimeout(defaultTimeoutMs);
});
