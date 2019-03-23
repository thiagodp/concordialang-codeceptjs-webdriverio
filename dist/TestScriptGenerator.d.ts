import { AbstractTestScript, ATSCommand } from '../../modules/testscript/AbstractTestScript';
import { CommandMapper } from "./CommandMapper";
/**
 * Generate test scripts for CodeceptJS.
 *
 * Uses [Mustache](https://github.com/janl/mustache.js/) for this purpose.
 */
export declare class TestScriptGenerator {
    private mapper;
    private template;
    constructor(mapper: CommandMapper);
    generate(ats: AbstractTestScript): string;
    analyzeConverted(converted: string[], cmd: ATSCommand, ats: AbstractTestScript): string[];
}
