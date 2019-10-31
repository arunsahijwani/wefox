# Automated Testing Project #

<br />

## Prerequisites ##
- - - -
- Protractor should be installed globally on your system
- [Node.js] **4.2.x** or above installed.
- Have *Node.js* installation path added to **PATH** environment variable.


<br />

## Installation ##
- - - -
All needed node packages and its dependencies are specified in the `package.json` file located in the repository root. So all you need is to run the following command from the repository root:
```sh
$ yarn
```

<br />

## Configuration ##
- - - -
The current version of `webdriver-manager` node module does not have ***Selenium 3*** as a pre-requisite by the default. In order to make the `webdriver-manager` download ***Selenium 3*** you should follow the following steps:

1.Browse to the path.

```sh
WINDOWS -> %LOCALAPPDATA%/Yarn/config/global/node_modules/webdriver-manager/built
OSX and Linux(non-root) -> ~/.config/yarn/global/node_modules/webdriver-manager/built
Linux(root) -> /usr/local/share/.config/yarn/global/node_modules/webdriver-manager/built
```
2.Open `config.json` file and make `webdriverVersions.selenium` parameter pointing to **3.0.1**. The final content should look like:
```json
{
  "webdriverVersions": {
    "selenium": "3.0.1",
    "chromedriver": "2.25",
    "geckodriver": "v0.11.1",
    "iedriver": "2.53.1",
    "androidsdk": "24.4.1",
    "appium": "1.6.0"
  },
  "cdnUrls": {
    "selenium": "https://selenium-release.storage.googleapis.com/",
    "chromedriver": "https://chromedriver.storage.googleapis.com/",
    "geckodriver": "https://github.com/mozilla/geckodriver/releases/download/",
    "iedriver": "https://selenium-release.storage.googleapis.com/",
    "androidsdk": "http://dl.google.com/android/"
  }
}
```
3.Run the following command from any directory:
```sh
$ webdriver-manager update
```
## Execution of the test ##
1. Run the following command from a terminal window
```sh
protractor config.js --specs=features/TEST.feature
```

<br />

## Code contribution ##
- - - -
Before adding new code or modifying existing one, you should read: [Best Practices to automate with Protractor and Cucumber]

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Node.js]: <https://nodejs.org/en/download/>
