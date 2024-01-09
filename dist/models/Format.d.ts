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
 * @interface Format
 */
export interface Format {
    /**
     *
     * @type {string}
     * @memberof Format
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Format
     */
    apiName?: string;
    /**
     *
     * @type {string}
     * @memberof Format
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof Format
     */
    extension?: string;
    /**
     *
     * @type {string}
     * @memberof Format
     */
    defaultEncoding?: string;
    /**
     *
     * @type {boolean}
     * @memberof Format
     */
    importable?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Format
     */
    exportable?: boolean;
    /**
     *
     * @type {string}
     * @memberof Format
     */
    defaultFile?: string;
    /**
     *
     * @type {boolean}
     * @memberof Format
     */
    rendersDefaultLocale?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Format
     */
    includesLocaleInformation?: boolean;
}
export declare function FormatFromJSON(json: any): Format;
export declare function FormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): Format;
export declare function FormatToJSON(value?: Format | null): any;