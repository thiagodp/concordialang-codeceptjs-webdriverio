[![npm version](https://img.shields.io/npm/v/concordialang-codeceptjs-webdriverio.svg?style=for-the-badge&color=green&label=NPM)](https://badge.fury.io/js/concordialang-codeceptjs-webdriverio)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-webdriverio.svg?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio/releases)


# concordialang-codeceptjs-webdriverio

> 🔌 Concordia compiler plug-in for CodeceptJS with WebDriverIO

Generates and executes test scripts [CodeceptJS](https://codecept.io) with [WebDriverIO](http://webdriver.io), aiming to verify **web** applications.

## Install

Requirements:

- [Java 8 or above](https://www.java.com/download/), since WebDriverIO uses Selenium which requires Java.
- [NodeJS](https://nodejs.org/) 12 or later.
- [Concordia Compiler](https://concordialang.org) 2.


Installation via Concordia Compiler:

```bash
concordia --plugin-install codeceptjs-webdriverio
```

Installation via NPM:

```bash
npm i -D concordialang-codeceptjs-webdriverio
```

Note: You can also use PNPM or Yarn.


## Execution

**Step 1**: Open the testing server

> Since WebDriverIO uses Selenium, it requires to start Selenium before running the tests.

```bash
npx concordia --plugin-serve codeceptjs-webdriverio
```
**Step 2**: Run

```bash
npx concordia -p codeceptjs-webdriverio
```

## Documentation

### Configuration file

CodeceptJS reads its configuration from `codeceptjs.json`. This plug-in adds the `"WebDriver"` to the property `helpers` with a basic configuration. **Please see [WebDriver Configuration](https://codecept.io/helpers/WebDriver/#configuration) for details on how to extend it.**

**Version 2** adds the property `"WebDriver"` with the following configuration:

```json
{

	"helpers": {
		"WebDriver": {
			"browser": "firefox",
			"url": "http://localhost",
			"windowSize": "maximize",
			"smartWait": 5000,
			"host": "127.0.0.1",
      		"port": 4444,
			"path": "/wd/hub",
      		"restart": false,
			"desiredCapabilities": {
        		"chromeOptions": {
          			"args": [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
        		}
      		}
		}
	}
}
```

**Versions 0.x and 1.x** add `"WebDriverIO"` with the following configuration:

```json
{
	"helpers": {
		"WebDriverIO": {
			"browser": "chrome",
			"url": "http://localhost",
			"windowSize": "maximize",
			"smartWait": 5000,
			"timeouts": {
				"script": 60000,
				"page load": 10000
			}
		}
	}
}
```

### Tips

- You can change the value of the property `url` to your application's URL, *e.g.*, `"http://localhost/myapp"`.
- You can change the value of the property `browser` to the desired browser to test, *e.g.*, `"firefox"`.
- [See more options](https://codecept.io/helpers/WebDriver/#webdriver).


## See also

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): Browser extension that converts [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid)'s recordings into [Concordia Language](https://concordialang.org). Very useful to capture web elements' identification without inspecting them with the browser or looking into their source code.

- [Integration with CodeceptJS](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation).


## License

[![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png)](LICENSE.txt) © [Thiago Delgado Pinto](https://github.com/thiagodp)
