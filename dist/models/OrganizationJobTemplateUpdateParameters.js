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
exports.OrganizationJobTemplateUpdateParametersToJSON = exports.OrganizationJobTemplateUpdateParametersFromJSONTyped = exports.OrganizationJobTemplateUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function OrganizationJobTemplateUpdateParametersFromJSON(json) {
    return OrganizationJobTemplateUpdateParametersFromJSONTyped(json, false);
}
exports.OrganizationJobTemplateUpdateParametersFromJSON = OrganizationJobTemplateUpdateParametersFromJSON;
function OrganizationJobTemplateUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': json['name'],
        'briefing': !(0, runtime_1.exists)(json, 'briefing') ? undefined : json['briefing'],
    };
}
exports.OrganizationJobTemplateUpdateParametersFromJSONTyped = OrganizationJobTemplateUpdateParametersFromJSONTyped;
function OrganizationJobTemplateUpdateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'briefing': value.briefing,
    };
}
exports.OrganizationJobTemplateUpdateParametersToJSON = OrganizationJobTemplateUpdateParametersToJSON;
