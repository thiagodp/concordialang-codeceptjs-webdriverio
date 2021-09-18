import { HelperConfiguration } from "concordialang-codeceptjs-core";
import { TestScriptExecutionOptions } from "concordialang-plugin";
export declare class WebDriverHelperConfiguration implements HelperConfiguration {
    readonly _require: string;
    private readonly _browser;
    private readonly _url;
    constructor(_require?: string, _browser?: any, _url?: string);
    /** @inheritdoc */
    name(): string;
    /** @inheritdoc */
    generate(execOptions: TestScriptExecutionOptions): any;
}
