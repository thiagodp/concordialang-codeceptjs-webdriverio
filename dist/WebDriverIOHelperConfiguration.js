"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebDriverIOHelperConfiguration = void 0;
class WebDriverIOHelperConfiguration {
    constructor(_browser = 'chrome', _url = 'http://localhost') {
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
            "browser": browser,
            "url": this._url,
            "windowSize": "maximize",
            "smartWait": 5000
        };
    }
}
exports.WebDriverIOHelperConfiguration = WebDriverIOHelperConfiguration;
