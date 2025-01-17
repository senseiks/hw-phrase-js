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
 * @interface AffectedResources
 */
export interface AffectedResources {
    /**
     *
     * @type {number}
     * @memberof AffectedResources
     */
    recordsAffected?: number;
}
export declare function AffectedResourcesFromJSON(json: any): AffectedResources;
export declare function AffectedResourcesFromJSONTyped(json: any, ignoreDiscriminator: boolean): AffectedResources;
export declare function AffectedResourcesToJSON(value?: AffectedResources | null): any;
