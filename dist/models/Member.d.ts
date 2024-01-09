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
import { MemberSpacesInner, ProjectLocales, TeamShort } from './';
/**
 *
 * @export
 * @interface Member
 */
export interface Member {
    /**
     *
     * @type {string}
     * @memberof Member
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Member
     */
    email?: string;
    /**
     *
     * @type {string}
     * @memberof Member
     */
    username?: string;
    /**
     *
     * @type {Date}
     * @memberof Member
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Member
     */
    lastActivityAt?: Date;
    /**
     *
     * @type {string}
     * @memberof Member
     */
    role?: string;
    /**
     *
     * @type {Array<ProjectLocales>}
     * @memberof Member
     */
    projects?: Array<ProjectLocales>;
    /**
     *
     * @type {object}
     * @memberof Member
     */
    permissions?: object;
    /**
     *
     * @type {Array<string>}
     * @memberof Member
     */
    defaultLocaleCodes?: Array<string>;
    /**
     *
     * @type {Array<TeamShort>}
     * @memberof Member
     */
    teams?: Array<TeamShort>;
    /**
     *
     * @type {Array<MemberSpacesInner>}
     * @memberof Member
     */
    spaces?: Array<MemberSpacesInner>;
}
export declare function MemberFromJSON(json: any): Member;
export declare function MemberFromJSONTyped(json: any, ignoreDiscriminator: boolean): Member;
export declare function MemberToJSON(value?: Member | null): any;
