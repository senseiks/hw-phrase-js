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
import { MemberProjectDetailProjectRolesInner, MemberSpacesInner, ProjectLocales } from './';
/**
 *
 * @export
 * @interface MemberProjectDetail
 */
export interface MemberProjectDetail {
    /**
     *
     * @type {string}
     * @memberof MemberProjectDetail
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof MemberProjectDetail
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof MemberProjectDetail
     */
    username?: string;
    /**
     *
     * @type {string}
     * @memberof MemberProjectDetail
     */
    role?: string;
    /**
     *
     * @type {Array<ProjectLocales>}
     * @memberof MemberProjectDetail
     */
    projects?: Array<ProjectLocales>;
    /**
     *
     * @type {object}
     * @memberof MemberProjectDetail
     */
    permissions?: object;
    /**
     *
     * @type {Array<string>}
     * @memberof MemberProjectDetail
     */
    localeIds?: Array<string>;
    /**
     *
     * @type {Array<string>}
     * @memberof MemberProjectDetail
     */
    defaultLocaleCodes?: Array<string>;
    /**
     *
     * @type {Array<MemberSpacesInner>}
     * @memberof MemberProjectDetail
     */
    spaces?: Array<MemberSpacesInner>;
    /**
     *
     * @type {Array<MemberProjectDetailProjectRolesInner>}
     * @memberof MemberProjectDetail
     */
    projectRoles?: Array<MemberProjectDetailProjectRolesInner>;
}
export declare function MemberProjectDetailFromJSON(json: any): MemberProjectDetail;
export declare function MemberProjectDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberProjectDetail;
export declare function MemberProjectDetailToJSON(value?: MemberProjectDetail | null): any;
