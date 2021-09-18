"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeceptJSWebDriverIO = void 0;
const concordialang_codeceptjs_core_1 = require("concordialang-codeceptjs-core");
const WebDriverHelperConfiguration_1 = require("./WebDriverHelperConfiguration");
/**
 * Plugin for CodeceptJS with WebDriverIO
 */
class CodeceptJSWebDriverIO extends concordialang_codeceptjs_core_1.CodeceptJS {
    /** @inheritdoc */
    createTestScriptExecutor() {
        return new concordialang_codeceptjs_core_1.TestScriptExecutor([new WebDriverHelperConfiguration_1.WebDriverHelperConfiguration()]);
    }
}
exports.CodeceptJSWebDriverIO = CodeceptJSWebDriverIO;
