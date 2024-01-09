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
exports.BranchUpdateParametersToJSON = exports.BranchUpdateParametersFromJSONTyped = exports.BranchUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function BranchUpdateParametersFromJSON(json) {
    return BranchUpdateParametersFromJSONTyped(json, false);
}
exports.BranchUpdateParametersFromJSON = BranchUpdateParametersFromJSON;
function BranchUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.BranchUpdateParametersFromJSONTyped = BranchUpdateParametersFromJSONTyped;
function BranchUpdateParametersToJSON(value) {
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
exports.BranchUpdateParametersToJSON = BranchUpdateParametersToJSON;