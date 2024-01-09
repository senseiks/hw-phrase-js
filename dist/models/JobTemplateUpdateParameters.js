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
exports.JobTemplateUpdateParametersToJSON = exports.JobTemplateUpdateParametersFromJSONTyped = exports.JobTemplateUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function JobTemplateUpdateParametersFromJSON(json) {
    return JobTemplateUpdateParametersFromJSONTyped(json, false);
}
exports.JobTemplateUpdateParametersFromJSON = JobTemplateUpdateParametersFromJSON;
function JobTemplateUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'name': json['name'],
        'briefing': !(0, runtime_1.exists)(json, 'briefing') ? undefined : json['briefing'],
    };
}
exports.JobTemplateUpdateParametersFromJSONTyped = JobTemplateUpdateParametersFromJSONTyped;
function JobTemplateUpdateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'name': value.name,
        'briefing': value.briefing,
    };
}
exports.JobTemplateUpdateParametersToJSON = JobTemplateUpdateParametersToJSON;
