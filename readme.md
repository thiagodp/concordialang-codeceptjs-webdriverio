# concordialang-codeceptjs-webdriverio

> 🔌 Concordia Compiler Plug-in for CodeceptJS with WebDriverIO

Generates and executes test scripts for **web applications**. Uses [CodeceptJS](https://codecept.io) with [WebDriverIO](http://webdriver.io).

## 💿 Installation

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

You can install additional packages **when needed**, via NPM.

The following **database drivers** allow you to connect to a certain database type during the *test execution*:

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

### You may like to install

- [Katalon Concordia extension for Chrome and Firefox](https://github.com/thiagodp/katalon-concordia): converts test scripts recorded with [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid) into Concordia Language. It's *very useful* to capture all the web elements' identifications.


## 🚀 Execution

A plug-in is only executed with the [Concordia Compiler](https://github.com/thiagodp/concordialang). Please see its documentation.

### Generated configuration file

A Concordia Compiler plug-in must generate a basic configuration file for the target testing framework.

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


## 📖 Documentation

### Packages installed by version 1.x

- No packages are installed globally.
- Dependencies are installed in `node_modules`, without any changes to `package.json`.
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

#### Test Events

| Concordia declaration  | CodeceptJS support (method/other)                                 |
| ---------------------- | ----------------------------------------------------------------- |
| `Before All`           | Manually, through hooks. See [hooks](https://codecept.io/hooks/). |
| `After All`            | Manually, through hooks. See [hooks](https://codecept.io/hooks/). |
| `Before Feature`       | `BeforeSuite`                                                     |
| `After Feature`        | `AfterSuite`                                                      |
| `Before Each Scenario` | `Before` or `Background`                                          |
| `After Each Scenario`  | `After`                                                           |


#### Actions

The following table lists the support to the [Concordia Language Actions](https://github.com/thiagodp/concordialang/tree/master/docs/en/actions.md). **The corresponding CodeceptJS commands work with both WebDriverIO and Appium**.

*Note*: A tick (✓) means "*checked with a unit test*".


 | Concordia action                                 | CodeceptJS command                                                                |
 | ------------------------------------------------ | --------------------------------------------------------------------------------- |
 | -                                                | _locate                                                                           |
 | -                                                | _locateCheckable                                                                  |
 | -                                                | _locateClickable                                                                  |
 | -                                                | _locateFields                                                                     |
 | accept + ( alert OR confirm OR popup OR prompt ) | acceptPopup ✓                                                                     |
 | amOn                                             | amOnPage ✓                                                                        |
 | append                                           | appendField ✓                                                                     |
 | attachFile                                       | attachFile ✓                                                                      |
 | cancel + ( alert OR confirm OR popup OR prompt ) | cancelPopup ✓                                                                     |
 | check                                            | checkOption ✓                                                                     |
 | clear + cookie                                   | clearCookie ✓                                                                     |
 | clear                                            | clearField ✓                                                                      |
 | click                                            | click ✓                                                                           |
 | close + app                                      | closeApp ✓ (Appium only)                                                          |
 | close + currentTab                               | closeCurrentTab ✓                                                                 |
 | close + otherTabs                                | closeOtherTabs ✓                                                                  |
 | connect + database                               | N/A - supported via [dbhelper](https://github.com/thiagodp/codeceptjs-dbhelper)   |
 | -                                                | defineTimeout                                                                     |
 | disconnect + database                            | N/A - supported via [dbhelper](https://github.com/thiagodp/codeceptjs-dbhelper)   |
 | not + see                                        | dontSee ✓                                                                         |
 | not + see + checkbox                             | dontSeeCheckboxIsChecked ✓                                                        |
 | not + see + cookie                               | dontSeeCookie ✓                                                                   |
 | not + see + url                                  | dontSeeCurrentUrlEquals ✓                                                         |
 | not + see + ( uielement OR uiliteral )           | dontSeeElement ✓                                                                  |
 | -                                                | dontSeeElementInDOM                                                               |
 | not + see + ( inside OR with ) + url             | dontSeeInCurrentUrl ✓                                                             |
 | not + see + ( textbox OR textarea )              | dontSeeInField ✓                                                                  |
 | -                                                | dontSeeInSource                                                                   |
 | not + see + title                                | dontSeeInTitle ✓                                                                  |
 | doubleClick                                      | doubleClick ✓                                                                     |
 | drag                                             | dragAndDrop ✓                                                                     |
 | -                                                | executeAsyncScript                                                                |
 | -                                                | executeScript                                                                     |
 | fill                                             | fillField ✓                                                                       |
 | -                                                | grabAttributeFrom                                                                 |
 | -                                                | grabBrowserLogs                                                                   |
 | -                                                | grabCookie                                                                        |
 | -                                                | grabCssPropertyFrom                                                               |
 | -                                                | grabCurrentUrl                                                                    |
 | -                                                | grabHTMLFrom                                                                      |
 | -                                                | grabNumberOfOpenTabs                                                              |
 | -                                                | grabNumberOfVisibleElements                                                       |
 | -                                                | grabPageScrollPosition                                                            |
 | -                                                | grabPopupText                                                                     |
 | -                                                | grabSource                                                                        |
 | -                                                | grabTextFrom                                                                      |
 | -                                                | grabTitle                                                                         |
 | -                                                | grabValueFrom                                                                     |
 | hide + keyboard                                  | hideDeviceKeyboard ✓ (Appium only)                                                |
 | install + app                                    | installApp ✓ (Appium only)                                                        |
 | -                                                | locator                                                                           |
 | maximize + window                                | resizeWindow( 'maximize' ) ✓                                                      |
 | move + cursor                                    | moveCursorTo ✓                                                                    |
 | mouseOut                                         | -                                                                                 |
 | mouseOver                                        | -                                                                                 |
 | open + new tab                                   | openNewTab                                                                        |
 | open + notifications                             | openNotifications ✓ (Appium only)                                                 |
 | press                                            | pressKey ✓                                                                        |
 | pull + file                                      | pullFile ✓ (Appium only)                                                          |
 | refresh + currentPage                            | refreshPage ✓                                                                     |
 | refresh + url                                    |                                                                                   |
 | remove + app                                     | removeApp ✓ (Appium only)                                                         |
 | resize + window                                  | resizeWindow ✓                                                                    |
 | rightClick                                       | rightClick ✓                                                                      |
 | run + command                                    | N/A - supported via [cmdhelper](https://github.com/thiagodp/codeceptjs-cmdhelper) |
 | run + script                                     | N/A - supported via [dbhelper](https://github.com/thiagodp/codeceptjs-dbhelper)   |
 | -                                                | runInWeb                                                                          |
 | -                                                | runOnAndroid                                                                      |
 | -                                                | runOnIOS                                                                          |
 | saveScreenshot                                   | saveScreenshot ✓                                                                  |
 | -                                                | scrollTo                                                                          |
 | see                                              | see ✓                                                                             |
 | see + app + installed                            | seeAppIsInstalled ✓ (Appium only)                                                 |
 | see + app + installed + not                      | seeAppIsNotInstalled ✓ (Appium only)                                              |
 | -                                                | seeAttributesOnElements                                                           |
 | see + checkbox                                   | seeCheckboxIsChecked ✓                                                            |
 | see + cookie                                     | seeCookie ✓                                                                       |
 | -                                                | seeCssPropertiesOnElements                                                        |
 | see + currentActivity + value                    | seeCurrentActivityIs ✓ (Appium only)                                              |
 | see + device + locked                            | seeDeviceIsLocked ✓ (Appium only)                                                 |
 | see + device + unlocked                          | seeDeviceIsUnlocked ✓ (Appium only)                                               |
 | see + ( with OR inside ) + url                   | seeCurrentUrlEquals ✓                                                             |
 | see + ( uielement OR uiliteral )                 | seeElement ✓                                                                      |
 | -                                                | seeElementInDOM                                                                   |
 | see + inside + url                               | seeInCurrentUrl ✓                                                                 |
 | see + ( textbox OR textarea )                    | seeInField ✓                                                                      |
 | -                                                | seeInPopup                                                                        |
 | -                                                | seeInSource                                                                       |
 | see + title                                      | seeInTitle ✓                                                                      |
 | -                                                | seeNumberOfElements                                                               |
 | -                                                | seeNumberOfVisibleElements                                                        |
 | see + orientation + landscape                    | seeOrientationIs("LANDSCAPE") ✓ (Appium only)                                     |
 | see + orientation + portrait                     | seeOrientationIs("PORTRAIT") ✓ (Appium only)                                      |
 | -                                                | seeTextEquals                                                                     |
 | -                                                | seeTitleEquals                                                                    |
 | select                                           | selectOption ✓                                                                    |
 | -                                                | setCookie                                                                         |
 | shake                                            | shakeDevice ✓ (Appium only)                                                       |
 | show                                             | -                                                                                 |
 | swipe + values                                   | swipe ✓ (Appium only)                                                             |
 | swipe + down                                     | swipeDown ✓ (Appium only)                                                         |
 | swipe + left                                     | swipeLeft ✓ (Appium only)                                                         |
 | swipe + right                                    | swipeRight ✓ (Appium only)                                                        |
 | swipe + up                                       | swipeUp ✓ (Appium only)                                                           |
 | swipe + targets                                  | swipeTo ✓ (Appium only)                                                           |
 | switch + native                                  | switchToNative ✓ (Appium only)                                                    |
 | switch + web                                     | switchToWeb ✓ (Appium only)                                                       |
 | switch + tab + number                            | switchToNextTab ✓                                                                 |
 | switch + next + tab                              | switchToNextTab ✓                                                                 |
 | switch + previous + tab                          | switchToPreviousTab ✓                                                             |
 | tap                                              | tap ✓ (Appium only)                                                               |
 | uncheck                                          | uncheckOption ✓                                                                   |
 | wait + number                                    | wait ✓                                                                            |
 | -                                                | waitForDetached                                                                   |
 | wait + uielement                                 | waitForElement ✓                                                                  |
 | wait + enabled + ( uielement OR uiliteral )      | waitForEnabled ✓                                                                  |
 | wait + invisible + ( uielement OR uiliteral )    | waitForInvisible ✓                                                                |
 | wait + text + value                              | waitForText ✓                                                                     |
 | wait + option value + value                      | waitForValue ✓                                                                    |
 | wait + visible + ( uielement OR uiliteral )      | waitForVisible ✓                                                                  |
 | -                                                | waitInUrl                                                                         |
 | -                                                | waitNumberOfVisibleElements ✓                                                     |
 | wait + hide + ( uielement OR uiliteral )         | waitToHide ✓                                                                      |
 | -                                                | waitUntil                                                                         |
 | wait + url + value                               | waitUrlEquals ✓                                                                   |


## 👁 See Also

- [concordialang-codeceptjs-appium](https://github.com/thiagodp/concordialang-codeceptjs-appium): plugin for CodeceptJS with Appium.
- [Concordia](https://github.com/thiagodp/concordialang)


## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
