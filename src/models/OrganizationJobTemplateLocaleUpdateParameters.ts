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
 * @interface OrganizationJobTemplateLocaleUpdateParameters
 */
export interface OrganizationJobTemplateLocaleUpdateParameters {
    /**
     * locale name
     * @type {string}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    localeName?: string;
    /**
     * locale code
     * @type {string}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    localeCode?: string;
    /**
     * Array of user ids to be assigned to the job template locale
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    userIds?: Array<string>;
    /**
     * Array of reviewer ids to be assigned to the job template locale
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    reviewerIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as translators
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    translatorTeamIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    reviewerTeamIds?: Array<string>;
}

export function OrganizationJobTemplateLocaleUpdateParametersFromJSON(json: any): OrganizationJobTemplateLocaleUpdateParameters {
    return OrganizationJobTemplateLocaleUpdateParametersFromJSONTyped(json, false);
}

export function OrganizationJobTemplateLocaleUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationJobTemplateLocaleUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'localeName': !exists(json, 'locale_name') ? undefined : json['locale_name'],
        'localeCode': !exists(json, 'locale_code') ? undefined : json['locale_code'],
        'userIds': !exists(json, 'user_ids') ? undefined : json['user_ids'],
        'reviewerIds': !exists(json, 'reviewer_ids') ? undefined : json['reviewer_ids'],
        'translatorTeamIds': !exists(json, 'translator_team_ids') ? undefined : json['translator_team_ids'],
        'reviewerTeamIds': !exists(json, 'reviewer_team_ids') ? undefined : json['reviewer_team_ids'],
    };
}

export function OrganizationJobTemplateLocaleUpdateParametersToJSON(value?: OrganizationJobTemplateLocaleUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'locale_name': value.localeName,
        'locale_code': value.localeCode,
        'user_ids': value.userIds,
        'reviewer_ids': value.reviewerIds,
        'translator_team_ids': value.translatorTeamIds,
        'reviewer_team_ids': value.reviewerTeamIds,
    };
}


