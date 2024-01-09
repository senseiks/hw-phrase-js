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
 * @interface BitbucketSyncExportResponse
 */
export interface BitbucketSyncExportResponse {
    /**
     *
     * @type {string}
     * @memberof BitbucketSyncExportResponse
     */
    statusPath?: string;
}
export declare function BitbucketSyncExportResponseFromJSON(json: any): BitbucketSyncExportResponse;
export declare function BitbucketSyncExportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): BitbucketSyncExportResponse;
export declare function BitbucketSyncExportResponseToJSON(value?: BitbucketSyncExportResponse | null): any;