/**
 * Phrase Strings API Reference
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@phrase.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import * as runtime from '../runtime';
import { GithubSyncExportParameters, GithubSyncImportParameters } from '../models';
export interface GithubSyncExportRequest {
    githubSyncExportParameters: GithubSyncExportParameters;
    xPhraseAppOTP?: string;
}
export interface GithubSyncImportRequest {
    githubSyncImportParameters: GithubSyncImportParameters;
    xPhraseAppOTP?: string;
}
/**
 *
 */
export declare class GitHubSyncApi extends runtime.BaseAPI {
    /**
     * Export translations from Phrase Strings to GitHub according to the .phraseapp.yml file within the GitHub repository. <br><br><i>Note: Export is done asynchronously and may take several seconds depending on the project size.</i>
     * Export from Phrase Strings to GitHub
     */
    githubSyncExportRaw(requestParameters: GithubSyncExportRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Export translations from Phrase Strings to GitHub according to the .phraseapp.yml file within the GitHub repository. <br><br><i>Note: Export is done asynchronously and may take several seconds depending on the project size.</i>
     * Export from Phrase Strings to GitHub
     */
    githubSyncExport(requestParameters: GithubSyncExportRequest): Promise<any>;
    /**
     * Import files to Phrase Strings from your connected GitHub repository. <br><br><i>Note: Import is done asynchronously and may take several seconds depending on the project size.</i>
     * Import to Phrase Strings from GitHub
     */
    githubSyncImportRaw(requestParameters: GithubSyncImportRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Import files to Phrase Strings from your connected GitHub repository. <br><br><i>Note: Import is done asynchronously and may take several seconds depending on the project size.</i>
     * Import to Phrase Strings from GitHub
     */
    githubSyncImport(requestParameters: GithubSyncImportRequest): Promise<any>;
}
