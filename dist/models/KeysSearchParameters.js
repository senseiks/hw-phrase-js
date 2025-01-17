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
exports.KeysSearchParametersToJSON = exports.KeysSearchParametersFromJSONTyped = exports.KeysSearchParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function KeysSearchParametersFromJSON(json) {
    return KeysSearchParametersFromJSONTyped(json, false);
}
exports.KeysSearchParametersFromJSON = KeysSearchParametersFromJSON;
function KeysSearchParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'sort': !(0, runtime_1.exists)(json, 'sort') ? undefined : json['sort'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
        'q': !(0, runtime_1.exists)(json, 'q') ? undefined : json['q'],
        'localeId': !(0, runtime_1.exists)(json, 'locale_id') ? undefined : json['locale_id'],
    };
}
exports.KeysSearchParametersFromJSONTyped = KeysSearchParametersFromJSONTyped;
function KeysSearchParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'sort': value.sort,
        'order': value.order,
        'q': value.q,
        'locale_id': value.localeId,
    };
}
exports.KeysSearchParametersToJSON = KeysSearchParametersToJSON;
