"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationJobTemplateLocalesCreateParametersToJSON = exports.OrganizationJobTemplateLocalesCreateParametersFromJSONTyped = exports.OrganizationJobTemplateLocalesCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function OrganizationJobTemplateLocalesCreateParametersFromJSON(json) {
    return OrganizationJobTemplateLocalesCreateParametersFromJSONTyped(json, false);
}
exports.OrganizationJobTemplateLocalesCreateParametersFromJSON = OrganizationJobTemplateLocalesCreateParametersFromJSON;
function OrganizationJobTemplateLocalesCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'localeName': json['locale_name'],
        'localeCode': json['locale_code'],
        'userIds': !(0, runtime_1.exists)(json, 'user_ids') ? undefined : json['user_ids'],
        'reviewerIds': !(0, runtime_1.exists)(json, 'reviewer_ids') ? undefined : json['reviewer_ids'],
        'translatorTeamIds': !(0, runtime_1.exists)(json, 'translator_team_ids') ? undefined : json['translator_team_ids'],
        'reviewerTeamIds': !(0, runtime_1.exists)(json, 'reviewer_team_ids') ? undefined : json['reviewer_team_ids'],
    };
}
exports.OrganizationJobTemplateLocalesCreateParametersFromJSONTyped = OrganizationJobTemplateLocalesCreateParametersFromJSONTyped;
function OrganizationJobTemplateLocalesCreateParametersToJSON(value) {
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
exports.OrganizationJobTemplateLocalesCreateParametersToJSON = OrganizationJobTemplateLocalesCreateParametersToJSON;
