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
exports.GlossaryCreateParametersToJSON = exports.GlossaryCreateParametersFromJSONTyped = exports.GlossaryCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function GlossaryCreateParametersFromJSON(json) {
    return GlossaryCreateParametersFromJSONTyped(json, false);
}
exports.GlossaryCreateParametersFromJSON = GlossaryCreateParametersFromJSON;
function GlossaryCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'projectIds': !(0, runtime_1.exists)(json, 'project_ids') ? undefined : json['project_ids'],
        'spaceIds': !(0, runtime_1.exists)(json, 'space_ids') ? undefined : json['space_ids'],
    };
}
exports.GlossaryCreateParametersFromJSONTyped = GlossaryCreateParametersFromJSONTyped;
function GlossaryCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'project_ids': value.projectIds,
        'space_ids': value.spaceIds,
    };
}
exports.GlossaryCreateParametersToJSON = GlossaryCreateParametersToJSON;
