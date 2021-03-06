/*jslint node: true*/
/*global describe: false, it: false, afterEach: false, beforeEach: false*/
/*global expect: false*/


var loginpage = require('../pages/LoginPage'),
    homepage = require('../pages/HomePage'),
    logindata = require('../data/LoginData');

describe("ncryptedcloud Login Page", function() {
    'use strict';

    beforeEach(function() {
        browser.ignoreSynchronization = true;
        loginpage.go();
    });

    //it("Should go to login page", function() {
      //      homepage.gotoLoginPage()
        //}
    //)

    it("Should login user", function() {
        loginpage.validLogin(logindata.adminUsername, logindata.adminPassword);
        expect(homepage.isDisplayed()).toEqual(true);
    });

    it("Should throw an error when invalid credentials are provided", function() {
        loginpage.invalidLogin(logindata.invalidUsername, logindata.invalidPassword);
        expect(loginpage.invalidLoginError.isDisplayed()).toEqual(true);

    });

    afterEach(function() {
        homepage.isDisplayed().then(function(result) {
            if (result) {
                //homepage.navbar.userDropDown.logout() ;
            }
        });
    });
});
