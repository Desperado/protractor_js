/*jslint node: true */
/*global driver: false */
/*global by: false */


(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homepage = require('./HomePage'),
        loginpage;

    loginpage = new BasePage();

    loginpage = loginpage.extend({

        // Page Elements
        invalidLoginError: element(by.css("body > div.ng-scope > div.login-container.container > div > div > p")),
        submitButton: element(by.css("button.btn.btn-login.text-uppercase")),

        // Page Services
        go : function () {
            browser.get(this.appConfig.baseURL);
        },

        validLogin: function (username, password) {
            element(by.id("id_login")).sendKeys(username);
            element(by.id("id_password")).sendKeys(password);
            this.submitButton.click();
            return homepage;
        },

        invalidLogin: function (username, password) {
            element(by.id("id_login")).sendKeys(username);
            element(by.id("id_password")).sendKeys(password);
            this.submitButton.click();
            return this;
        }

    });

    module.exports = loginpage;

}());

