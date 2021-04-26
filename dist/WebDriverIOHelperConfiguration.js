"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDriverIOHelperConfiguration = void 0;
class WebDriverIOHelperConfiguration {
    constructor(_require = './node_modules/codeceptjs/lib/helper/WebDriverIO', _browser = 'chrome', _url = 'http://localhost') {
        this._require = _require;
        this._browser = _browser;
        this._url = _url;
    }
    /** @inheritdoc */
    name() {
        return 'WebDriverIO';
    }
    /** @inheritdoc */
    generate(execOptions) {
        const [browser] = execOptions.target
            ? execOptions.target.split(',').map(t => t.trim())
            : [this._browser];
        return {
            "require": this._require,
            "browser": browser,
            "url": this._url,
            "windowSize": "maximize",
            "smartWait": 5000
        };
    }
}
exports.WebDriverIOHelperConfiguration = WebDriverIOHelperConfiguration;
