import { TestScriptExecutionResult, Location } from 'concordialang-types';
/**
 * Converts a Mocha Multi Report to Concordia's format.
 *
 * @see https://github.com/stanleyhlng/mocha-multi-reporters
 */
export declare class ReportConverter {
    private _fs;
    private _encoding;
    private readonly _instrumentator;
    constructor(_fs?: any, _encoding?: string);
    /**
     * Reads a execution result file and converts it to the expected Concordia's format.
     *
     * @param resultFilePath Path to a file with the test results of CodeceptJS.
     * @param pluginConfigFilePath Path to the plugin configuration file.
     */
    convertFrom(resultFilePath: string, pluginConfigFilePath: string): Promise<TestScriptExecutionResult>;
    /**
     * Fills the basic metadata
     *
     * @param source Object read from the original report.
     * @param result Concordia format.
     */
    private fillMetadata;
    /**
     * Fills the status
     *
     * @param source Object read from the original report.
     * @param result Concordia format.
     */
    private fillStatus;
    /**
     * Fills plugin's info.
     *
     * @param source Object read from the original report.
     * @param result Concordia format.
     */
    private fillPluginInfo;
    /**
     * Fills execution results.
     *
     * @param source Object read from the original report.
     * @param result Concordia format.
     */
    private fillResults;
    /**
     * Pushes a Test Method Result to a Test Script Execution Result.
     *
     * @param result Concordia format.
     * @param testMethodResult TestMethodResult to be pushed.
     * @param suiteName Test Suite Result name.
     */
    private pushTestMethodResult;
    /**
     * Verifies if a object is empty.
     * @param obj Object to be verified.
     */
    private isObjectEmpty;
    /**
     * Extract script location from a stack trace.
     *
     * @param stackTrace Stack trace.
     */
    extractScriptLocationFromStackTrace(stackTrace: string): Location | null;
    /**
     * Extract specification location from a script file.
     *
     * @param scriptFile Script file.
     */
    private extractSpecLocationFromScriptLocation;
    private readJsonFile;
}
