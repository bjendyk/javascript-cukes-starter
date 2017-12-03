'use strict';

const { defineSupportCode } = require('cucumber');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const World = require('./world');
const defaults = require('./defaults');

defineSupportCode(({ BeforeAll, After, setWorldConstructor, setDefaultTimeout }) => {
    BeforeAll(() => {
        chai.use(chaiAsPromised);
        setWorldConstructor(World);
        setDefaultTimeout(defaults.timeoutMs);
    });

    After(function () {
        return this.getDriver().quit();
    });
});
