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
exports.LocalePreviewToJSON = exports.LocalePreviewFromJSONTyped = exports.LocalePreviewFromJSON = void 0;
var runtime_1 = require("../runtime");
function LocalePreviewFromJSON(json) {
    return LocalePreviewFromJSONTyped(json, false);
}
exports.LocalePreviewFromJSON = LocalePreviewFromJSON;
function LocalePreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
    };
}
exports.LocalePreviewFromJSONTyped = LocalePreviewFromJSONTyped;
function LocalePreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'code': value.code,
    };
}
exports.LocalePreviewToJSON = LocalePreviewToJSON;
