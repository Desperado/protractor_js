/*jslint node: true*/
/*global describe: false, it: false, afterEach: false, beforeEach: false*/
/*global expect: false*/


var loginpage = require('../pages/LoginPage'),
    homepage = require('../pages/HomePage'),
    logindata = require('../data/LoginData')
    //authenticationpage = require('../pages/AuthPage');

describe("ncryptedcloud Authorization Page", function() {
    'use strict';

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        loginpage.go();
    });

    it("Should authorize user", function() {
        loginpage.validLogin(logindata.adminUsername, logindata.adminPassword);
        expect(homepage.isDisplayed()).toEqual(true);
        homepage.authorizeProvider(logindata.dropUsername, logindata.dropPassword);


    });


    afterEach(function() {
        homepage.isDisplayed().then(function(result) {
            if (result) {
                //homepage.navbar.userDropDown.logout() ;
            }
        });
    });
});
