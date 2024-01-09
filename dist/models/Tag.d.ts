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
 * @interface Tag
 */
export interface Tag {
    /**
     *
     * @type {string}
     * @memberof Tag
     */
    name?: string;
    /**
     *
     * @type {number}
     * @memberof Tag
     */
    keysCount?: number;
    /**
     *
     * @type {Date}
     * @memberof Tag
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Tag
     */
    updatedAt?: Date;
}
export declare function TagFromJSON(json: any): Tag;
export declare function TagFromJSONTyped(json: any, ignoreDiscriminator: boolean): Tag;
export declare function TagToJSON(value?: Tag | null): any;
