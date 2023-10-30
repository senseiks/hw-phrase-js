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
import {
    GitlabSyncHistoryErrorsInner,
    GitlabSyncHistoryErrorsInnerFromJSON,
    GitlabSyncHistoryErrorsInnerFromJSONTyped,
    GitlabSyncHistoryErrorsInnerToJSON,
} from './';

/**
 * 
 * @export
 * @interface GitlabSyncHistory
 */
export interface GitlabSyncHistory {
    /**
     * 
     * @type {string}
     * @memberof GitlabSyncHistory
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof GitlabSyncHistory
     */
    action?: string;
    /**
     * 
     * @type {Array<GitlabSyncHistoryErrorsInner>}
     * @memberof GitlabSyncHistory
     */
    errors?: Array<GitlabSyncHistoryErrorsInner>;
    /**
     * 
     * @type {Date}
     * @memberof GitlabSyncHistory
     */
    date?: Date;
    /**
     * 
     * @type {object}
     * @memberof GitlabSyncHistory
     */
    details?: object;
}

export function GitlabSyncHistoryFromJSON(json: any): GitlabSyncHistory {
    return GitlabSyncHistoryFromJSONTyped(json, false);
}

export function GitlabSyncHistoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitlabSyncHistory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'status': !exists(json, 'status') ? undefined : json['status'],
        'action': !exists(json, 'action') ? undefined : json['action'],
        'errors': !exists(json, 'errors') ? undefined : ((json['errors'] as Array<any>).map(GitlabSyncHistoryErrorsInnerFromJSON)),
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'details': !exists(json, 'details') ? undefined : json['details'],
    };
}

export function GitlabSyncHistoryToJSON(value?: GitlabSyncHistory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'status': value.status,
        'action': value.action,
        'errors': value.errors === undefined ? undefined : ((value.errors as Array<any>).map(GitlabSyncHistoryErrorsInnerToJSON)),
        'date': value.date === undefined ? undefined : (value.date.toISOString()),
        'details': value.details,
    };
}


