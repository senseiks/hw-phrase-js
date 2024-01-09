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
 * @interface UploadSummary
 */
export interface UploadSummary {
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    localesCreated?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    translationKeysCreated?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    translationKeysUpdated?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    translationKeysUnmentioned?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    translationsCreated?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    translationsUpdated?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    tagsCreated?: number;
    /**
     *
     * @type {number}
     * @memberof UploadSummary
     */
    translationKeysIgnored?: number;
}
export declare function UploadSummaryFromJSON(json: any): UploadSummary;
export declare function UploadSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadSummary;
export declare function UploadSummaryToJSON(value?: UploadSummary | null): any;
