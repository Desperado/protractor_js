/*jslint node: true */

(function () {
    'use strict';

    var webdriver = require('selenium-webdriver'),
        SeleniumServer = require('selenium-webdriver/remote').SeleniumServer,
        server,
        driver,
        driverConfig;

    //server = new SeleniumServer("/Users/sreedevi/Downloads/" +
        //    "selenium-server-standalone-2.42.2.jar",
      //  {port: 4444});
    //server.start();

    var driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).build();

    //driver = new webdriver.Builder().
      //  usingServer(server.address()).
        //withCapabilities(webdriver.Capabilities.chrome()).
        //build();

    driver.manage().window().maximize();

    global.driver = driver;
    global.by = webdriver.By;

    module.exports = driverConfig;

}());