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
exports.JobLocaleCompleteParametersToJSON = exports.JobLocaleCompleteParametersFromJSONTyped = exports.JobLocaleCompleteParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function JobLocaleCompleteParametersFromJSON(json) {
    return JobLocaleCompleteParametersFromJSONTyped(json, false);
}
exports.JobLocaleCompleteParametersFromJSON = JobLocaleCompleteParametersFromJSON;
function JobLocaleCompleteParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
    };
}
exports.JobLocaleCompleteParametersFromJSONTyped = JobLocaleCompleteParametersFromJSONTyped;
function JobLocaleCompleteParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
    };
}
exports.JobLocaleCompleteParametersToJSON = JobLocaleCompleteParametersToJSON;
