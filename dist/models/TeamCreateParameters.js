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
exports.TeamCreateParametersToJSON = exports.TeamCreateParametersFromJSONTyped = exports.TeamCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function TeamCreateParametersFromJSON(json) {
    return TeamCreateParametersFromJSONTyped(json, false);
}
exports.TeamCreateParametersFromJSON = TeamCreateParametersFromJSON;
function TeamCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.TeamCreateParametersFromJSONTyped = TeamCreateParametersFromJSONTyped;
function TeamCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
    };
}
exports.TeamCreateParametersToJSON = TeamCreateParametersToJSON;
