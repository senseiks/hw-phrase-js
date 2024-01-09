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
 * @interface Variable
 */
export interface Variable {
    /**
     *
     * @type {string}
     * @memberof Variable
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Variable
     */
    value?: string;
    /**
     *
     * @type {Date}
     * @memberof Variable
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Variable
     */
    updatedAt?: Date;
}
export declare function VariableFromJSON(json: any): Variable;
export declare function VariableFromJSONTyped(json: any, ignoreDiscriminator: boolean): Variable;
export declare function VariableToJSON(value?: Variable | null): any;
