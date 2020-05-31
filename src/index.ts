import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { WebDriverIOHelperConfiguration } from './WebDriverIOHelperConfiguration';

/**
 * Plugin for CodeceptJS with WebDriverIO
 */
export class CodeceptJSWebDriverIO extends CodeceptJS {

    /** @inheritdoc */
    protected createTestScriptExecutor(): TestScriptExecutor {
        return new TestScriptExecutor(
            [ new WebDriverIOHelperConfiguration() ]
        );
    }
}
