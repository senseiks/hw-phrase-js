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
exports.ReleaseCreateParametersToJSON = exports.ReleaseCreateParametersFromJSONTyped = exports.ReleaseCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function ReleaseCreateParametersFromJSON(json) {
    return ReleaseCreateParametersFromJSONTyped(json, false);
}
exports.ReleaseCreateParametersFromJSON = ReleaseCreateParametersFromJSON;
function ReleaseCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'platforms': !(0, runtime_1.exists)(json, 'platforms') ? undefined : json['platforms'],
        'localeIds': !(0, runtime_1.exists)(json, 'locale_ids') ? undefined : json['locale_ids'],
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
    };
}
exports.ReleaseCreateParametersFromJSONTyped = ReleaseCreateParametersFromJSONTyped;
function ReleaseCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'description': value.description,
        'platforms': value.platforms,
        'locale_ids': value.localeIds,
        'tags': value.tags,
        'branch': value.branch,
    };
}
exports.ReleaseCreateParametersToJSON = ReleaseCreateParametersToJSON;
