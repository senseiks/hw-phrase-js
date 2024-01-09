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
/**
 *
 * @export
 * @interface GithubSyncImportParameters
 */
export interface GithubSyncImportParameters {
    /**
     * Project ID to specify the actual project the GitHub import should be triggered in.
     * @type {string}
     * @memberof GithubSyncImportParameters
     */
    projectId?: string;
}
export declare function GithubSyncImportParametersFromJSON(json: any): GithubSyncImportParameters;
export declare function GithubSyncImportParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GithubSyncImportParameters;
export declare function GithubSyncImportParametersToJSON(value?: GithubSyncImportParameters | null): any;
