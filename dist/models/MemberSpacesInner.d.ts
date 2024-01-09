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
 * @interface MemberSpacesInner
 */
export interface MemberSpacesInner {
    /**
     *
     * @type {string}
     * @memberof MemberSpacesInner
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof MemberSpacesInner
     */
    name?: string;
    /**
     *
     * @type {Date}
     * @memberof MemberSpacesInner
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof MemberSpacesInner
     */
    updatedAt?: Date;
    /**
     *
     * @type {number}
     * @memberof MemberSpacesInner
     */
    projectsCount?: number;
}
export declare function MemberSpacesInnerFromJSON(json: any): MemberSpacesInner;
export declare function MemberSpacesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberSpacesInner;
export declare function MemberSpacesInnerToJSON(value?: MemberSpacesInner | null): any;