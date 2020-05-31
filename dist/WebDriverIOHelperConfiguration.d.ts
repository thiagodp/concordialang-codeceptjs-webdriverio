import { HelperConfiguration } from "concordialang-codeceptjs-core";
import { TestScriptExecutionOptions } from "concordialang-plugin";
export declare class WebDriverIOHelperConfiguration implements HelperConfiguration {
    private readonly _browser;
    private readonly _url;
    constructor(_browser?: any, _url?: string);
    /** @inheritdoc */
    name(): string;
    /** @inheritdoc */
    generate(execOptions: TestScriptExecutionOptions): any;
}
