/*jslint node: true */
/*global driver: false */
/*global by: false */

(function () {
    'use strict';

    var BasePage = require('./BasePage'),
        homepagenavbar;

    homepagenavbar = new BasePage();

    homepagenavbar = homepagenavbar.extend({

        // Page Elements

        userDropDown: {

            open: function () {
                element(by.css("button.btn.btn-dark-blue.dropdown-toggle")).click();
            },

            logout: function () {
                this.open();
                var logOut = $("a[href='/logout/']");
                //element(by.tagName("a[href='/logout/']")).click();
                logOut.click();
            }
        }

    });

    module.exports = homepagenavbar;

}());
