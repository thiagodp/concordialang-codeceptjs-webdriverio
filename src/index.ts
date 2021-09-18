import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { WebDriverHelperConfiguration } from './WebDriverHelperConfiguration';

/**
 * Plugin for CodeceptJS with WebDriverIO
 */
export class CodeceptJSWebDriverIO extends CodeceptJS {

    /** @inheritdoc */
    protected createTestScriptExecutor(): TestScriptExecutor {
        return new TestScriptExecutor(
            [ new WebDriverHelperConfiguration() ]
        );
    }
}
