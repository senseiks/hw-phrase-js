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
 * @interface GithubSyncExportParameters
 */
export interface GithubSyncExportParameters {
    /**
     * Project ID to specify the actual project the GitHub export should be triggered in.
     * @type {string}
     * @memberof GithubSyncExportParameters
     */
    projectId?: string;
}

export function GithubSyncExportParametersFromJSON(json: any): GithubSyncExportParameters {
    return GithubSyncExportParametersFromJSONTyped(json, false);
}

export function GithubSyncExportParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GithubSyncExportParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'projectId': !exists(json, 'project_id') ? undefined : json['project_id'],
    };
}

export function GithubSyncExportParametersToJSON(value?: GithubSyncExportParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'project_id': value.projectId,
    };
}


