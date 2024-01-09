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
exports.TranslationsUnverifyParametersToJSON = exports.TranslationsUnverifyParametersFromJSONTyped = exports.TranslationsUnverifyParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function TranslationsUnverifyParametersFromJSON(json) {
    return TranslationsUnverifyParametersFromJSONTyped(json, false);
}
exports.TranslationsUnverifyParametersFromJSON = TranslationsUnverifyParametersFromJSON;
function TranslationsUnverifyParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'q': !(0, runtime_1.exists)(json, 'q') ? undefined : json['q'],
        'sort': !(0, runtime_1.exists)(json, 'sort') ? undefined : json['sort'],
        'order': !(0, runtime_1.exists)(json, 'order') ? undefined : json['order'],
    };
}
exports.TranslationsUnverifyParametersFromJSONTyped = TranslationsUnverifyParametersFromJSONTyped;
function TranslationsUnverifyParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'q': value.q,
        'sort': value.sort,
        'order': value.order,
    };
}
exports.TranslationsUnverifyParametersToJSON = TranslationsUnverifyParametersToJSON;
