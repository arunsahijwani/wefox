
var log4js = require('log4js');
var logger = log4js.getLogger();
var browserName = null;
var capabilities = null;

process.argv.forEach(function (protractorArgument) {
    if (protractorArgument.includes("browserData")) {
        browserName = protractorArgument.split('=')[1];
    }
});

if (browserName === 'firefox') {
    capabilities =  {
        browserName: browserName,
        marionette: true,
        acceptInsecureCerts: true,
        maxInstance: 1
    }
} else if (browserName === 'chromeMobile') {
    capabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized',
                '--disable-extensions'
            ],
            mobileEmulation: {
                deviceName: 'Nexus 6'
            }
        }
    }
} else {
    capabilities = {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-maximized',
                '--disable-extensions'
            ]
        }
    }
}

exports.config = {
    /*Default value is localhost. It's possible to launch test on a distant device setting the selenium address like on this example:
    seleniumAddress:null,
    specs: [
        'features/*.feature'
    ],
    /*You can use this parameter to launch a group of tests instead of launching all of them or only one. You can pass the parameter like in this example:
     ex: protractor config.js suite=smoke
     Be aware it is "suite" in singular, not in plural*/
    suites: {
        smoke: 'features/smoke/*.feature',
        full: '/features/*.feature'
    },
    rootElement: 'body',
    allScriptsTimeout: 120000,
    getPageTimeout: 120000,
    //This parameter is used to specified the path of the test we want to launch
    capabilities: capabilities,

    onPrepare: function() {
        browser.driver.manage().deleteAllCookies();
        browser.driver.manage().window().maximize();
    },
    onComplete: function() {
        browser.quit();
    },
    restartBrowserBetweenTests: false,
    ignoreUncaughtExceptions: true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        // Require files before executing the features.
        require: 'support/**/*.js',
        tags: '~@wip',
        // How to format features (default: progress)
        format: ['pretty','json:cucumber_report.json','rerun:@rerun.txt'],
    }
};