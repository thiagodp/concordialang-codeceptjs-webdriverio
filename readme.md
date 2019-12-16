<!--
[![Build Status](https://travis-ci.org/thiagodp/concordialang-codeceptjs-webdriverio.svg?branch=master)](https://travis-ci.org/thiagodp/concordialang-codeceptjs-webdriverio)
-->
[![npm version](https://badge.fury.io/js/concordialang-codeceptjs-webdriverio.svg)](https://badge.fury.io/js/concordialang-codeceptjs-webdriverio)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-webdriverio.svg)](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio/releases)


# concordialang-codeceptjs-webdriverio

> 🔌 Concordia Compiler Plug-in for CodeceptJS with WebDriverIO

Generates and executes test scripts for **web applications**. Uses [CodeceptJS](https://codecept.io) with [WebDriverIO](http://webdriver.io).

## [What's New](https://github.com/thiagodp/concordialang-codeceptjs-webdriverio/releases)

## Installation

Before installing:
- Make sure you have [Concordia](https://github.com/thiagodp/concordialang) `1.0.0` or above.
- Make sure you have [Java 8 or above](https://www.java.com/download/) installed.  WebDriverIO needs Java because of Selenium.
- Go to your applications' root folder via console/terminal for typing the installation command.

Installation via [Concordia](https://github.com/thiagodp/concordialang):

```bash
concordia --plugin-install codeceptjs-webdriverio
```

Installation via NPM:

```bash
npm install --save-dev concordialang-codeceptjs-webdriverio
```

### Optional installation

To support database scripts in you tests, execute the corresponding command:

| driver        | command to install                            | note           |
| ------------- | --------------------------------------------- | -------------- |
| CSV files     | `npm install --save-dev database-js-csv`      |                |
| Excel files   | `npm install --save-dev database-js-xlsx`     |                |
| Firebase      | `npm install --save-dev database-js-firebase` |                |
| INI files     | `npm install --save-dev database-js-ini`      |                |
| JSON files    | `npm install --save-dev database-js-json`     |                |
| MySQL         | `npm install --save-dev database-js-mysql`    |                |
| MS Access     | `npm install --save-dev database-js-adodb`    | *Windows only* |
| MS SQL Server | `npm install --save-dev database-js-mssql`    |                |
| PostgreSQL    | `npm install --save-dev database-js-postgres` |                |
| SQLite        | `npm install --save-dev database-js-sqlite`   |                |

Please visit the [Concordia](https://github.com/thiagodp/concordialang)'s documentation for information about how to access and handle databases.

### You may like to install

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): extension for Google Chrome and Mozilla Firefox.
  Use it along with [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) to record your actions while using your application and then convert the recording script into Concordia Language.
  > It is *very useful* to capture all the web elements' identifications.


## Execution

Execute it with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Example:

```bash
concordia --plugin codeceptjs-webdriverio
```

### Generated configuration file

The plug-in generates a basic configuration file for you.

#### Versions 0.x and 1.x

Versions `0.x` and `1.x` generate the file `codecept.json` with the following content:

```json
{
	"tests": "test/**/*.js",
	"output": "output",
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
		},
		"DbHelper": {
			"require": "./node_modules/codeceptjs-dbhelper"
		},
		"CmdHelper": {
			"require": "./node_modules/codeceptjs-cmdhelper"
		}
	},
	"bootstrap": false,
	"mocha": {
		"reporterOptions": {
			"codeceptjs-cli-reporter": {
				"stdout": "-",
				"options": {
					"steps": true
				}
			},
			"json": {
				"stdout": "output/output.json"
			}
		}
	}
}
```

The above file is compatible with CodeceptJS `1.2.1`, and probably any version in `1.x`.

#### Tips

- You can change the value of the property `url` to your application's URL, *e.g.*, `"http://localhost/myapp"`.
- You can change the value of the property `browser` to the desired browser to test, *e.g.", `"firefox"`.
- See https://codecept.io/helpers/WebDriverIO/ for more options.


## Documentation

### Packages installed by version 1.x

- No packages are installed globally.
- No changes to `package.json`.
- All the same dependencies as version `0.x`.

### Packages installed by version 0.x

Installed globally:

| package             | version  | reason                                                                  |
| ------------------- | -------- | ----------------------------------------------------------------------- |
| codeceptjs          | `1.2.1`  | Allow executing CodeceptJS in the CLI without NPX or via `node_modules` |
| webdriverio         | `4.14.0` | Needed by CodeceptJS to execute web-based tests                         |
| selenium-standalone | latest   | Install drivers to control browsers                                     |

Installed in `package.json`'s `devDependencies`:

| package              | version | reason                                                                              |
| -------------------- | ------- | ----------------------------------------------------------------------------------- |
| codeceptjs           | `1.2.1` | Needed framework                                                                    |
| mocha                | `5.2.0` | Generate JSON reports read by the plug-in                                           |
| mocha-multi          | `1.0.1` | Allow to generate multiple reports simultaneously, such as the JSON's and the CLI's |
| codeceptjs-cmdhelper | latest  | Execute Concordia commands in the CLI                                               |
| codeceptjs-dbhelper  | latest  | Execute Concordia commands in a database                                            |
| database-js          | latest  | Access databases during tests, e.g., to setup them for the test                     |
| database-js-json     | latest  | Access JSON files as databases                                                      |

### Integration with CodeceptJS

Documentation available in [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation).


## See Also

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): extension for Google Chrome and Mozilla Firefox
- [concordialang-codeceptjs-appium](https://github.com/thiagodp/concordialang-codeceptjs-appium): plugin for CodeceptJS with Appium.
- [Concordia](https://github.com/thiagodp/concordialang)


## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
