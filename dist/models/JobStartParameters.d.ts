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
 * @interface JobStartParameters
 */
export interface JobStartParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobStartParameters
     */
    branch?: string;
}
export declare function JobStartParametersFromJSON(json: any): JobStartParameters;
export declare function JobStartParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobStartParameters;
export declare function JobStartParametersToJSON(value?: JobStartParameters | null): any;
