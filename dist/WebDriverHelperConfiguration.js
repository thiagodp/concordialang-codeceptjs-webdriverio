"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDriverHelperConfiguration = void 0;
class WebDriverHelperConfiguration {
    constructor(_require = './node_modules/codeceptjs/lib/helper/WebDriver', _browser = 'chrome', _url = 'http://localhost') {
        this._require = _require;
        this._browser = _browser;
        this._url = _url;
    }
    /** @inheritdoc */
    name() {
        return 'WebDriver';
    }
    /** @inheritdoc */
    generate(execOptions) {
        const [browser] = execOptions.target
            ? execOptions.target.split(',').map(t => t.trim())
            : [this._browser];
        // return  {
        //     "require": this._require,
        //     "browser": browser,
        //     "url": this._url,
        //     "windowSize": "maximize",
        //     "smartWait": 5000
        // };
        return {
            "require": this._require,
            "browser": browser,
            "url": this._url,
            "windowSize": "maximize",
            "smartWait": 5000,
            "host": "127.0.0.1",
            "port": 9515,
            "path": "/",
            "restart": false,
            "desiredCapabilities": {
                "chromeOptions": {
                    "args": [/*"--headless",*/ "--disable-gpu", "--no-sandbox"]
                }
            }
        };
    }
}
exports.WebDriverHelperConfiguration = WebDriverHelperConfiguration;
