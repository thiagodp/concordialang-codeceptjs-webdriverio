import { AbstractTestScript, TestScriptGenerationOptions, TestScriptExecutionOptions, TestScriptExecutionResult } from 'concordialang-types';
import { Plugin } from 'concordialang-plugin';
import { TestScriptExecutor } from './TestScriptExecutor';
import { TestScriptGenerator } from './TestScriptGenerator';
/**
 * Plugin for CodeceptJS.
 */
export declare class CodeceptJS implements Plugin {
    private _encoding;
    private readonly _descriptorPath;
    private readonly _fs;
    /**
     * Constructor
     *
     * @param descriptorPath Path of the plugin descriptor file.
     * @param fsToUse Filesystem object to use. Default is nodejs fs.
     * @param _encoding Encoding to use. Default is 'utf8'.
     */
    constructor(descriptorPath?: string, fsToUse?: any, _encoding?: string);
    /** @inheritDoc */
    generateCode(abstractTestScripts: AbstractTestScript[], options: TestScriptGenerationOptions, errors: Error[]): Promise<string[]>;
    /** @inheritDoc */
    executeCode(options: TestScriptExecutionOptions): Promise<TestScriptExecutionResult>;
    /** @inheritDoc */
    convertReportFile(filePath: string): Promise<TestScriptExecutionResult>;
    /**
     * Tries to generate a source code file from an abstract test script.
     *
     * *Important*: This function should keep the fat arrow style, () => {}, in
     * order to preverse the context of `this`.
     *
     * @param ats Abstract test script
     * @param targetDir Directory where to put the source code.
     * @returns A promise with the file name as the data.
     */
    private processTestScript;
    private ensureDir;
    private writeFile;
    protected createTestScriptGenerator(): TestScriptGenerator;
    protected createTestScriptExecutor(options: TestScriptExecutionOptions): TestScriptExecutor;
}
