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
 * @interface Authorization
 */
export interface Authorization {
    /**
     *
     * @type {string}
     * @memberof Authorization
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Authorization
     */
    note?: string;
    /**
     *
     * @type {string}
     * @memberof Authorization
     */
    tokenLastEight?: string;
    /**
     *
     * @type {string}
     * @memberof Authorization
     */
    hashedToken?: string;
    /**
     *
     * @type {Array<string>}
     * @memberof Authorization
     */
    scopes?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof Authorization
     */
    expiresAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Authorization
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Authorization
     */
    updatedAt?: Date;
}
export declare function AuthorizationFromJSON(json: any): Authorization;
export declare function AuthorizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Authorization;
export declare function AuthorizationToJSON(value?: Authorization | null): any;
