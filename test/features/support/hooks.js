'use strict';

var { defineSupportCode } = require('cucumber');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

defineSupportCode(function ({ BeforeAll, After }) {
    BeforeAll(function () {
        chai.use(chaiAsPromised);
    });

    After(function () {
        return this.driver.quit();
    });
});
