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
 * @interface Icu
 */
export interface Icu {
    /**
     * Object keys are dynamic and based on requested locale codes, see example.
     * @type {string}
     * @memberof Icu
     */
    localeCode?: string;
}
export declare function IcuFromJSON(json: any): Icu;
export declare function IcuFromJSONTyped(json: any, ignoreDiscriminator: boolean): Icu;
export declare function IcuToJSON(value?: Icu | null): any;
