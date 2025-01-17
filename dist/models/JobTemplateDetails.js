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
exports.JobTemplateDetailsToJSON = exports.JobTemplateDetailsFromJSONTyped = exports.JobTemplateDetailsFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function JobTemplateDetailsFromJSON(json) {
    return JobTemplateDetailsFromJSONTyped(json, false);
}
exports.JobTemplateDetailsFromJSON = JobTemplateDetailsFromJSON;
function JobTemplateDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'briefing': !(0, runtime_1.exists)(json, 'briefing') ? undefined : json['briefing'],
        'project': !(0, runtime_1.exists)(json, 'project') ? undefined : (0, _1.ProjectShortFromJSON)(json['project']),
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : (0, _1.BranchFromJSON)(json['branch']),
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : (0, _1.UserPreviewFromJSON)(json['owner']),
        'creator': !(0, runtime_1.exists)(json, 'creator') ? undefined : (0, _1.UserPreviewFromJSON)(json['creator']),
        'locales': !(0, runtime_1.exists)(json, 'locales') ? undefined : (json['locales'].map(_1.LocalePreviewFromJSON)),
    };
}
exports.JobTemplateDetailsFromJSONTyped = JobTemplateDetailsFromJSONTyped;
function JobTemplateDetailsToJSON(value) {
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
        'project': (0, _1.ProjectShortToJSON)(value.project),
        'branch': (0, _1.BranchToJSON)(value.branch),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'owner': (0, _1.UserPreviewToJSON)(value.owner),
        'creator': (0, _1.UserPreviewToJSON)(value.creator),
        'locales': value.locales === undefined ? undefined : (value.locales.map(_1.LocalePreviewToJSON)),
    };
}
exports.JobTemplateDetailsToJSON = JobTemplateDetailsToJSON;
