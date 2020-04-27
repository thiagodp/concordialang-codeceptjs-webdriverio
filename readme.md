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
- **Version 1.x**: Make sure you have [Concordia](https://github.com/thiagodp/concordialang) `1.0.0` or above.
- **Version 2.x**: Make sure you have [Concordia](https://github.com/thiagodp/concordialang) `2.0.0` or above.
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

### You may also like

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): extension for Google Chrome and Mozilla Firefox.
  Use it along with [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) to record your actions while using your application and then convert the recording script into Concordia Language.
  > Recommended to capture web elements' identifications without need to inspect them.


## Execution

Execute it with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Example:

```bash
concordia --plugin codeceptjs-webdriverio
```

## Generated configuration file

### Version 2.x

Version `2.x` generates a configuration file like this:

```json
{
	"tests": "test/**/*.js",
	"output": "output",
	"helpers": {
		"WebDriverIO": {
			"browser": "chrome",
			"url": "http://localhost",
			"windowSize": "maximize",
			"smartWait": 5000
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
			},
			"mochawesome": {
				"stdout": "-",
				"options": {
					"reportDir": "./output",
					"reportFilename": "report",
					"uniqueScreenshotNames": true,
					"timestamp": true
				}
            }
		}
	},
	"multiple": {
        "parallel": {
            "chunks": 2
        }
    }
}
```

This file is compatible with CodeceptJS `1.x`.

### Versions 0.x and 1.x

Versions `0.x` and `1.x` generate the file `codecept.json` with a content like this:

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

This file is compatible with CodeceptJS `1.x`.

### Tips

- You can change the value of the property `url` to your application's URL, *e.g.*, `"http://localhost/myapp"`.
- You can change the value of the property `browser` to the desired browser to test, *e.g.*, `"firefox"`.
- See https://codecept.io/helpers/WebDriverIO/ for more options.



## Dependencies

### Version 2.x

- Compatible with Concordia `2.x`.
- No global packages nor changes made to your `package.json` (except for the own plugin).
- Packages installed directly:
  | name                | version                  |
  | ------------------- | ------------------------ |
  | webdriverio         | `4.14.4` or latest `4.x` |
  | selenium-standalone | latest                   |
- See [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core) for other packages.


### Version 1.x

- Compatible with Concordia `1.x`.
- **No global packages nor changes made to your `package.json` (except for the own plugin).**
- Install the same packages as version `0.x`, but locally.

### Version 0.x

- Compatible with Concordia `0.x`
- Package installed globally:
  | name                 | version  |
  | -------------------- | -------- |
  | codeceptjs           | `1.2.1`  |
  | webdriverio          | `4.14.0` |
  | selenium-standalone  | latest   |
- Packages installed as `devDependencies` in your `package.json`:
  | name                 | version |
  | -------------------- | ------- |
  | codeceptjs           | `1.2.1` |
  | mocha                | `5.2.0` |
  | mocha-multi          | `1.0.1` |
  | codeceptjs-cmdhelper | latest  |
  | codeceptjs-dbhelper  | latest  |
  | database-js          | latest  |
  | database-js-json     | latest  |

## Integration with CodeceptJS

See [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation).


## Related

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): export Katalon recordings to [Concordia](https://github.com/thiagodp/concordialang)
- [concordialang-codeceptjs-core](https://github.com/thiagodp/concordialang-codeceptjs-core): plugin core
- [concordialang-codeceptjs-appium](https://github.com/thiagodp/concordialang-codeceptjs-appium): plugin for CodeceptJS with Appium.


## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
