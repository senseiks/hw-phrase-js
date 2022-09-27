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
 * @interface MemberProjectDetailProjectRoles
 */
export interface MemberProjectDetailProjectRoles {
    /**
     * 
     * @type {string}
     * @memberof MemberProjectDetailProjectRoles
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof MemberProjectDetailProjectRoles
     */
    role?: string;
}

export function MemberProjectDetailProjectRolesFromJSON(json: any): MemberProjectDetailProjectRoles {
    return MemberProjectDetailProjectRolesFromJSONTyped(json, false);
}

export function MemberProjectDetailProjectRolesFromJSONTyped(json: any, ignoreDiscriminator: boolean): MemberProjectDetailProjectRoles {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
        'role': !exists(json, 'role') ? undefined : json['role'],
    };
}

export function MemberProjectDetailProjectRolesToJSON(value?: MemberProjectDetailProjectRoles | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.projectId,
        'role': value.role,
    };
}


