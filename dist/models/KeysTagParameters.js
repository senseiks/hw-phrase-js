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
exports.KeysTagParametersToJSON = exports.KeysTagParametersFromJSONTyped = exports.KeysTagParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function KeysTagParametersFromJSON(json) {
    return KeysTagParametersFromJSONTyped(json, false);
}
exports.KeysTagParametersFromJSON = KeysTagParametersFromJSON;
function KeysTagParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'q': !(0, runtime_1.exists)(json, 'q') ? undefined : json['q'],
        'localeId': !(0, runtime_1.exists)(json, 'locale_id') ? undefined : json['locale_id'],
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
    };
}
exports.KeysTagParametersFromJSONTyped = KeysTagParametersFromJSONTyped;
function KeysTagParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'q': value.q,
        'locale_id': value.localeId,
        'tags': value.tags,
    };
}
exports.KeysTagParametersToJSON = KeysTagParametersToJSON;