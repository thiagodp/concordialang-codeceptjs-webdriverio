import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
/**
 * Plugin for CodeceptJS with WebDriverIO
 */
export declare class CodeceptJSWebDriverIO extends CodeceptJS {
    /** @inheritdoc */
    protected createTestScriptExecutor(): TestScriptExecutor;
}
