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
 * @interface JobLocalesCreateParameters
 */
export interface JobLocalesCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobLocalesCreateParameters
     */
    branch?: string;
    /**
     * locale id
     * @type {string}
     * @memberof JobLocalesCreateParameters
     */
    localeId: string;
    /**
     * Array of user ids to be assigned to the job locale as translators
     * @type {Array<string>}
     * @memberof JobLocalesCreateParameters
     */
    userIds?: Array<string>;
    /**
     * Array of reviewer ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof JobLocalesCreateParameters
     */
    reviewerIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as translators
     * @type {Array<string>}
     * @memberof JobLocalesCreateParameters
     */
    translatorTeamIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof JobLocalesCreateParameters
     */
    reviewerTeamIds?: Array<string>;
}

export function JobLocalesCreateParametersFromJSON(json: any): JobLocalesCreateParameters {
    return JobLocalesCreateParametersFromJSONTyped(json, false);
}

export function JobLocalesCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobLocalesCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'localeId': json['locale_id'],
        'userIds': !exists(json, 'user_ids') ? undefined : json['user_ids'],
        'reviewerIds': !exists(json, 'reviewer_ids') ? undefined : json['reviewer_ids'],
        'translatorTeamIds': !exists(json, 'translator_team_ids') ? undefined : json['translator_team_ids'],
        'reviewerTeamIds': !exists(json, 'reviewer_team_ids') ? undefined : json['reviewer_team_ids'],
    };
}

export function JobLocalesCreateParametersToJSON(value?: JobLocalesCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'locale_id': value.localeId,
        'user_ids': value.userIds,
        'reviewer_ids': value.reviewerIds,
        'translator_team_ids': value.translatorTeamIds,
        'reviewer_team_ids': value.reviewerTeamIds,
    };
}


