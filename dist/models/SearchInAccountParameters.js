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
exports.SearchInAccountParametersToJSON = exports.SearchInAccountParametersFromJSONTyped = exports.SearchInAccountParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function SearchInAccountParametersFromJSON(json) {
    return SearchInAccountParametersFromJSONTyped(json, false);
}
exports.SearchInAccountParametersFromJSON = SearchInAccountParametersFromJSON;
function SearchInAccountParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'query': !(0, runtime_1.exists)(json, 'query') ? undefined : json['query'],
        'localeCode': !(0, runtime_1.exists)(json, 'locale_code') ? undefined : json['locale_code'],
        'page': !(0, runtime_1.exists)(json, 'page') ? undefined : json['page'],
        'perPage': !(0, runtime_1.exists)(json, 'per_page') ? undefined : json['per_page'],
    };
}
exports.SearchInAccountParametersFromJSONTyped = SearchInAccountParametersFromJSONTyped;
function SearchInAccountParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'query': value.query,
        'locale_code': value.localeCode,
        'page': value.page,
        'per_page': value.perPage,
    };
}
exports.SearchInAccountParametersToJSON = SearchInAccountParametersToJSON;
