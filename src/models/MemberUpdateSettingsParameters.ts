/* tslint:disable */
/* eslint-disable */
/**
 * Phrase API Reference
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
 * @interface MemberUpdateSettingsParameters
 */
export interface MemberUpdateSettingsParameters {
    /**
     * Member role, can be any of of Manager, Developer, Translator
     * @type {string}
     * @memberof MemberUpdateSettingsParameters
     */
    projectRole?: string;
    /**
     * List of locale ids the user has access to.
     * @type {Array<string>}
     * @memberof MemberUpdateSettingsParameters
     */
    localeIds?: Array<string>;
}

export function MemberUpdateSettingsParametersFromJSON(json: any): MemberUpdateSettingsParameters {
    return MemberUpdateSettingsParametersFromJSONTyped(json, false);
}

export function MemberUpdateSettingsParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberUpdateSettingsParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectRole': !exists(json, 'project_role') ? undefined : json['project_role'],
        'localeIds': !exists(json, 'locale_ids') ? undefined : json['locale_ids'],
    };
}

export function MemberUpdateSettingsParametersToJSON(value?: MemberUpdateSettingsParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_role': value.projectRole,
        'locale_ids': value.localeIds,
    };
}

