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
exports.AffectedResourcesToJSON = exports.AffectedResourcesFromJSONTyped = exports.AffectedResourcesFromJSON = void 0;
var runtime_1 = require("../runtime");
function AffectedResourcesFromJSON(json) {
    return AffectedResourcesFromJSONTyped(json, false);
}
exports.AffectedResourcesFromJSON = AffectedResourcesFromJSON;
function AffectedResourcesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'recordsAffected': !(0, runtime_1.exists)(json, 'records_affected') ? undefined : json['records_affected'],
    };
}
exports.AffectedResourcesFromJSONTyped = AffectedResourcesFromJSONTyped;
function AffectedResourcesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'records_affected': value.recordsAffected,
    };
}
exports.AffectedResourcesToJSON = AffectedResourcesToJSON;