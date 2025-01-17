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
    BranchName,
    BranchNameFromJSON,
    BranchNameFromJSONTyped,
    BranchNameToJSON,
    ProjectShort,
    ProjectShortFromJSON,
    ProjectShortFromJSONTyped,
    ProjectShortToJSON,
} from './';

/**
 * 
 * @export
 * @interface Job
 */
export interface Job {
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    briefing?: string;
    /**
     * 
     * @type {Date}
     * @memberof Job
     */
    dueDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    state?: string;
    /**
     * 
     * @type {string}
     * @memberof Job
     */
    ticketUrl?: string;
    /**
     * 
     * @type {ProjectShort}
     * @memberof Job
     */
    project?: ProjectShort;
    /**
     * 
     * @type {BranchName}
     * @memberof Job
     */
    branch?: BranchName;
    /**
     * 
     * @type {Date}
     * @memberof Job
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Job
     */
    updatedAt?: Date;
}

export function JobFromJSON(json: any): Job {
    return JobFromJSONTyped(json, false);
}

export function JobFromJSONTyped(json: any, ignoreDiscriminator: boolean): Job {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'briefing': !exists(json, 'briefing') ? undefined : json['briefing'],
        'dueDate': !exists(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'state': !exists(json, 'state') ? undefined : json['state'],
        'ticketUrl': !exists(json, 'ticket_url') ? undefined : json['ticket_url'],
        'project': !exists(json, 'project') ? undefined : ProjectShortFromJSON(json['project']),
        'branch': !exists(json, 'branch') ? undefined : BranchNameFromJSON(json['branch']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function JobToJSON(value?: Job | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'briefing': value.briefing,
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'state': value.state,
        'ticket_url': value.ticketUrl,
        'project': ProjectShortToJSON(value.project),
        'branch': BranchNameToJSON(value.branch),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


