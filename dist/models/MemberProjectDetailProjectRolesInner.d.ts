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
 * @interface MemberProjectDetailProjectRolesInner
 */
export interface MemberProjectDetailProjectRolesInner {
    /**
     *
     * @type {string}
     * @memberof MemberProjectDetailProjectRolesInner
     */
    projectId?: string;
    /**
     *
     * @type {string}
     * @memberof MemberProjectDetailProjectRolesInner
     */
    role?: string;
}
export declare function MemberProjectDetailProjectRolesInnerFromJSON(json: any): MemberProjectDetailProjectRolesInner;
export declare function MemberProjectDetailProjectRolesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberProjectDetailProjectRolesInner;
export declare function MemberProjectDetailProjectRolesInnerToJSON(value?: MemberProjectDetailProjectRolesInner | null): any;
