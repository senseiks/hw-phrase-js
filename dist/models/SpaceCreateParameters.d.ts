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
 * @interface SpaceCreateParameters
 */
export interface SpaceCreateParameters {
    /**
     * Name of the space
     * @type {string}
     * @memberof SpaceCreateParameters
     */
    name?: string;
}
export declare function SpaceCreateParametersFromJSON(json: any): SpaceCreateParameters;
export declare function SpaceCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): SpaceCreateParameters;
export declare function SpaceCreateParametersToJSON(value?: SpaceCreateParameters | null): any;
