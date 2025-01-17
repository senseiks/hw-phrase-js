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
 * @interface LocaleStatistics
 */
export interface LocaleStatistics {
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    keysTotalCount?: number;
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    keysUntranslatedCount?: number;
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    wordsTotalCount?: number;
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    translationsCompletedCount?: number;
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    translationsUnverifiedCount?: number;
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    unverifiedWordsCount?: number;
    /**
     *
     * @type {number}
     * @memberof LocaleStatistics
     */
    missingWordsCount?: number;
}
export declare function LocaleStatisticsFromJSON(json: any): LocaleStatistics;
export declare function LocaleStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleStatistics;
export declare function LocaleStatisticsToJSON(value?: LocaleStatistics | null): any;
