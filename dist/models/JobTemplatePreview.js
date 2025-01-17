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
exports.JobTemplatePreviewToJSON = exports.JobTemplatePreviewFromJSONTyped = exports.JobTemplatePreviewFromJSON = void 0;
var runtime_1 = require("../runtime");
function JobTemplatePreviewFromJSON(json) {
    return JobTemplatePreviewFromJSONTyped(json, false);
}
exports.JobTemplatePreviewFromJSON = JobTemplatePreviewFromJSON;
function JobTemplatePreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.JobTemplatePreviewFromJSONTyped = JobTemplatePreviewFromJSONTyped;
function JobTemplatePreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
    };
}
exports.JobTemplatePreviewToJSON = JobTemplatePreviewToJSON;
