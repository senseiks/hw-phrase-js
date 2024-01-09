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
exports.JobLocaleUpdateParametersToJSON = exports.JobLocaleUpdateParametersFromJSONTyped = exports.JobLocaleUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function JobLocaleUpdateParametersFromJSON(json) {
    return JobLocaleUpdateParametersFromJSONTyped(json, false);
}
exports.JobLocaleUpdateParametersFromJSON = JobLocaleUpdateParametersFromJSON;
function JobLocaleUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'localeId': !(0, runtime_1.exists)(json, 'locale_id') ? undefined : json['locale_id'],
        'userIds': !(0, runtime_1.exists)(json, 'user_ids') ? undefined : json['user_ids'],
        'reviewerIds': !(0, runtime_1.exists)(json, 'reviewer_ids') ? undefined : json['reviewer_ids'],
        'translatorTeamIds': !(0, runtime_1.exists)(json, 'translator_team_ids') ? undefined : json['translator_team_ids'],
        'reviewerTeamIds': !(0, runtime_1.exists)(json, 'reviewer_team_ids') ? undefined : json['reviewer_team_ids'],
    };
}
exports.JobLocaleUpdateParametersFromJSONTyped = JobLocaleUpdateParametersFromJSONTyped;
function JobLocaleUpdateParametersToJSON(value) {
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
exports.JobLocaleUpdateParametersToJSON = JobLocaleUpdateParametersToJSON;
