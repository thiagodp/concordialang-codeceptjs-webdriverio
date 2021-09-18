[![npm version](https://img.shields.io/npm/v/concordialang-codeceptjs-webdriverio.svg?style=for-the-badge&color=green&label=NPM)](https://badge.fury.io/js/concordialang-codeceptjs-webdriverio)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-webdriverio.svg?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio/releases)


# concordialang-codeceptjs-webdriverio

> 🔌 Concordia Compiler Plug-in for CodeceptJS with WebDriverIO

Generates and executes test scripts for **web applications**. Uses [CodeceptJS](https://codecept.io) with [WebDriverIO](http://webdriver.io).

## [What's New](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio/releases)

## Compatibility
- **Version 2.x** works with [Concordia](https://concordialang.org) `2.0.0` or above.
- **Version 1.x** works with [Concordia](https://concordialang.org) `1.0.0` or above.

## Installation

1. Make sure you have [Java 8 or above](https://www.java.com/download/) installed. WebDriverIO uses Selenium that requires Java.
2. Access your application's folder from the terminal/console.
3. Install it via Concordia or NPM:

	a) Installation via [Concordia](https://concordialang.org):

	```bash
	concordia --plugin-install codeceptjs-webdriverio
	```

	b) Installation via NPM:

	```bash
	npm i -D concordialang-codeceptjs-webdriverio
	```

## Execution

Execute it with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Example:

```bash
concordia --plugin codeceptjs-webdriverio
```

## Configuration file

CodeceptJS reads its configuration from `codeceptjs.json`. This plug-in adds the `"WebDriver"` to the property `helpers` with a basic configuration. **Please see [WebDriver Configuration](https://codecept.io/helpers/WebDriver/#configuration) for details on how to extend it.**

**Version 2** adds the property `"WebDriver"` with the following configuration:

```json
{

	"helpers": {
		"WebDriver": {
			"browser": "chrome",
			"url": "http://localhost",
			"windowSize": "maximize",
			"smartWait": 5000,
			"host": "127.0.0.1",
      		"port": 9515, /* or use 4444 */
			"path": "/",
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

## Supported CodeceptJS Commands

See [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation).

## See also

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): extension for Google Chrome and Mozilla Firefox to convert recordings produced with [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) into [Concordia Language](https://concordialang.org). It helps you to capture web elements' identification without inspecting them with the browser or looking into their source code.

## License

[![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png)](LICENSE.txt) © [Thiago Delgado Pinto](https://github.com/thiagodp)
