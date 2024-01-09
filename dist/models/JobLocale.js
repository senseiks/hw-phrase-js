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
exports.JobLocaleToJSON = exports.JobLocaleFromJSONTyped = exports.JobLocaleFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function JobLocaleFromJSON(json) {
    return JobLocaleFromJSONTyped(json, false);
}
exports.JobLocaleFromJSON = JobLocaleFromJSON;
function JobLocaleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'job': !(0, runtime_1.exists)(json, 'job') ? undefined : (0, _1.JobPreviewFromJSON)(json['job']),
        'locale': !(0, runtime_1.exists)(json, 'locale') ? undefined : (0, _1.LocalePreviewFromJSON)(json['locale']),
        'users': !(0, runtime_1.exists)(json, 'users') ? undefined : (json['users'].map(_1.LocaleUserPreviewFromJSON)),
        'teams': !(0, runtime_1.exists)(json, 'teams') ? undefined : (json['teams'].map(_1.LocaleTeamPreviewFromJSON)),
        'completed': !(0, runtime_1.exists)(json, 'completed') ? undefined : json['completed'],
        'translationCompletedAt': !(0, runtime_1.exists)(json, 'translation_completed_at') ? undefined : (new Date(json['translation_completed_at'])),
        'reviewCompletedAt': !(0, runtime_1.exists)(json, 'review_completed_at') ? undefined : (new Date(json['review_completed_at'])),
    };
}
exports.JobLocaleFromJSONTyped = JobLocaleFromJSONTyped;
function JobLocaleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'job': (0, _1.JobPreviewToJSON)(value.job),
        'locale': (0, _1.LocalePreviewToJSON)(value.locale),
        'users': value.users === undefined ? undefined : (value.users.map(_1.LocaleUserPreviewToJSON)),
        'teams': value.teams === undefined ? undefined : (value.teams.map(_1.LocaleTeamPreviewToJSON)),
        'completed': value.completed,
        'translation_completed_at': value.translationCompletedAt === undefined ? undefined : (value.translationCompletedAt.toISOString()),
        'review_completed_at': value.reviewCompletedAt === undefined ? undefined : (value.reviewCompletedAt.toISOString()),
    };
}
exports.JobLocaleToJSON = JobLocaleToJSON;
