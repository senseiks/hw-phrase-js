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
exports.BranchMergeParametersToJSON = exports.BranchMergeParametersFromJSONTyped = exports.BranchMergeParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function BranchMergeParametersFromJSON(json) {
    return BranchMergeParametersFromJSONTyped(json, false);
}
exports.BranchMergeParametersFromJSON = BranchMergeParametersFromJSON;
function BranchMergeParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'strategy': !(0, runtime_1.exists)(json, 'strategy') ? undefined : json['strategy'],
    };
}
exports.BranchMergeParametersFromJSONTyped = BranchMergeParametersFromJSONTyped;
function BranchMergeParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'strategy': value.strategy,
    };
}
exports.BranchMergeParametersToJSON = BranchMergeParametersToJSON;
