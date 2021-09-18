import { HelperConfiguration } from "concordialang-codeceptjs-core";
import { TestScriptExecutionOptions } from "concordialang-plugin";

export class WebDriverHelperConfiguration implements HelperConfiguration {

    constructor(
        public readonly _require: string = './node_modules/codeceptjs/lib/helper/WebDriver',
        private readonly _browser: any = 'chrome',
        private readonly _url: string = 'http://localhost'
     ) {
    }

    /** @inheritdoc */
    name() {
        return 'WebDriver';
    }

    /** @inheritdoc */
    generate( execOptions: TestScriptExecutionOptions ): any {
        const [ browser ] = execOptions.target
            ? execOptions.target.split( ',' ).map( t => t.trim() )
            : [ this._browser ];
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
      		"port": 9515, /* or use 4444 */
			"path": "/",
			"restart": false,
			"desiredCapabilities": {
				"chromeOptions": {
					"args": [ /*"--headless",*/ "--disable-gpu", "--no-sandbox" ]
				}
			}
		};
    }

}
