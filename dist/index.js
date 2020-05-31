"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeceptJSWebDriverIO = void 0;
const concordialang_codeceptjs_core_1 = require("concordialang-codeceptjs-core");
const WebDriverIOHelperConfiguration_1 = require("./WebDriverIOHelperConfiguration");
/**
 * Plugin for CodeceptJS with WebDriverIO
 */
class CodeceptJSWebDriverIO extends concordialang_codeceptjs_core_1.CodeceptJS {
    /** @inheritdoc */
    createTestScriptExecutor() {
        return new concordialang_codeceptjs_core_1.TestScriptExecutor([new WebDriverIOHelperConfiguration_1.WebDriverIOHelperConfiguration()]);
    }
}
exports.CodeceptJSWebDriverIO = CodeceptJSWebDriverIO;
