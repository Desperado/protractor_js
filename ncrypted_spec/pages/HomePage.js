/*jslint node: true */
/*global driver: false */
/*global by: false */

(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homePageNavBar = require('./HomePageNavBar'),
        homepage,
        inputName = $("input[name='login_email']"),
        inputPassword = $("input[name='login_password']"),
        dropboxAuth = $("a[href='/cloudwebportal/dropbox/auth/']"),
        //allowAccess = $("button[name='allow_access']");

    homepage = new BasePage();

    homepage = homepage.extend({

        // Page Elements
        navbar: homePageNavBar,

        // Page Services
        isDisplayed: function () {
            return element(by.className("js")).isDisplayed();
        },

        authorizeProvider: function (username, password) {

            dropboxAuth.click();

            inputName.sendKeys(username);
            inputPassword.sendKeys(password);

            element(by.className("sign-in-text")).click();

            setTimeout(function() { element(by.css("button.auth-button.button-primary")).click(); }, 5000);

            return homepage;
        }



    });

    module.exports = homepage;

}());
