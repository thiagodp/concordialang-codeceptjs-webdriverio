import { HelperConfiguration } from "concordialang-codeceptjs-core";
import { TestScriptExecutionOptions } from "concordialang-plugin";

export class WebDriverIOHelperConfiguration implements HelperConfiguration {

    constructor(
        public readonly _require: string = './node_modules/codeceptjs/lib/helper/WebDriverIO',
        private readonly _browser: any = 'chrome',
        private readonly _url: string = 'http://localhost'
     ) {
    }

    /** @inheritdoc */
    name() {
        return 'WebDriverIO';
    }

    /** @inheritdoc */
    generate( execOptions: TestScriptExecutionOptions ): any {
        const [ browser ] = execOptions.target
            ? execOptions.target.split( ',' ).map( t => t.trim() )
            : [ this._browser ];
        return  {
            "require": this._require,
            "browser": browser,
            "url": this._url,
            "windowSize": "maximize",
            "smartWait": 5000
        };
    }

}