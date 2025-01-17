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
 * @interface TeamsSpacesCreateParameters
 */
export interface TeamsSpacesCreateParameters {
    /**
     * Space ID to add to the Team
     * @type {string}
     * @memberof TeamsSpacesCreateParameters
     */
    id?: string;
}
export declare function TeamsSpacesCreateParametersFromJSON(json: any): TeamsSpacesCreateParameters;
export declare function TeamsSpacesCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TeamsSpacesCreateParameters;
export declare function TeamsSpacesCreateParametersToJSON(value?: TeamsSpacesCreateParameters | null): any;
