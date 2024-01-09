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
exports.JobUpdateParametersToJSON = exports.JobUpdateParametersFromJSONTyped = exports.JobUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function JobUpdateParametersFromJSON(json) {
    return JobUpdateParametersFromJSONTyped(json, false);
}
exports.JobUpdateParametersFromJSON = JobUpdateParametersFromJSON;
function JobUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'briefing': !(0, runtime_1.exists)(json, 'briefing') ? undefined : json['briefing'],
        'dueDate': !(0, runtime_1.exists)(json, 'due_date') ? undefined : (new Date(json['due_date'])),
        'ticketUrl': !(0, runtime_1.exists)(json, 'ticket_url') ? undefined : json['ticket_url'],
    };
}
exports.JobUpdateParametersFromJSONTyped = JobUpdateParametersFromJSONTyped;
function JobUpdateParametersToJSON(value) {
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
        'due_date': value.dueDate === undefined ? undefined : (value.dueDate.toISOString()),
        'ticket_url': value.ticketUrl,
    };
}
exports.JobUpdateParametersToJSON = JobUpdateParametersToJSON;
