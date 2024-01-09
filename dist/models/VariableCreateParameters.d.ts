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
 * @interface VariableCreateParameters
 */
export interface VariableCreateParameters {
    /**
     * Name of the variable
     * @type {string}
     * @memberof VariableCreateParameters
     */
    name?: string;
    /**
     * Value of the variable
     * @type {string}
     * @memberof VariableCreateParameters
     */
    value?: string;
}
export declare function VariableCreateParametersFromJSON(json: any): VariableCreateParameters;
export declare function VariableCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariableCreateParameters;
export declare function VariableCreateParametersToJSON(value?: VariableCreateParameters | null): any;
