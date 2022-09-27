/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface InvitationUpdateParameters
 */
export interface InvitationUpdateParameters {
    /**
     * Invitiation role, can be any of Manager, Developer, Translator
     * @type {string}
     * @memberof InvitationUpdateParameters
     */
    role?: string;
    /**
     * List of project ids the invited user has access to
     * @type {string}
     * @memberof InvitationUpdateParameters
     */
    projectIds?: string;
    /**
     * List of locale ids the invited user has access to
     * @type {string}
     * @memberof InvitationUpdateParameters
     */
    localeIds?: string;
    /**
     * List of spaces the user is assigned to.
     * @type {Array<string>}
     * @memberof InvitationUpdateParameters
     */
    spaceIds?: Array<string>;
    /**
     * List of teams the user is assigned to.
     * @type {Array<string>}
     * @memberof InvitationUpdateParameters
     */
    teamIds?: Array<string>;
    /**
     * List of default locales for the user.
     * @type {Array<string>}
     * @memberof InvitationUpdateParameters
     */
    defaultLocaleCodes?: Array<string>;
    /**
     * Additional permissions depending on invitation role.
     * @type {{ [key: string]: string; }}
     * @memberof InvitationUpdateParameters
     */
    permissions?: { [key: string]: string; };
}

export function InvitationUpdateParametersFromJSON(json: any): InvitationUpdateParameters {
    return InvitationUpdateParametersFromJSONTyped(json, false);
}

export function InvitationUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvitationUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'role': !exists(json, 'role') ? undefined : json['role'],
        'projectIds': !exists(json, 'project_ids') ? undefined : json['project_ids'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
        'spaceIds': !exists(json, 'space_ids') ? undefined : json['space_ids'],
        'teamIds': !exists(json, 'team_ids') ? undefined : json['team_ids'],
        'defaultLocaleCodes': !exists(json, 'default_locale_codes') ? undefined : json['default_locale_codes'],
        'permissions': !exists(json, 'permissions') ? undefined : json['permissions'],
    };
}

export function InvitationUpdateParametersToJSON(value?: InvitationUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'role': value.role,
        'project_ids': value.projectIds,
        'locale_ids': value.localeIds,
        'space_ids': value.spaceIds,
        'team_ids': value.teamIds,
        'default_locale_codes': value.defaultLocaleCodes,
        'permissions': value.permissions,
    };
}


