exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['login/loginspec.js', 'login/AuthorizationSpec.js'],
    //specs: ['login/AuthorizationSpec.js'],
    multiCapabilities: [{
        'browserName': 'chrome'
    }, {
        'browserName': 'firefox'
    }
    ]
}