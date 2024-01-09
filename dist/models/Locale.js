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
exports.LocaleToJSON = exports.LocaleFromJSONTyped = exports.LocaleFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function LocaleFromJSON(json) {
    return LocaleFromJSONTyped(json, false);
}
exports.LocaleFromJSON = LocaleFromJSON;
function LocaleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        '_default': !(0, runtime_1.exists)(json, 'default') ? undefined : json['default'],
        'main': !(0, runtime_1.exists)(json, 'main') ? undefined : json['main'],
        'rtl': !(0, runtime_1.exists)(json, 'rtl') ? undefined : json['rtl'],
        'pluralForms': !(0, runtime_1.exists)(json, 'plural_forms') ? undefined : json['plural_forms'],
        'sourceLocale': !(0, runtime_1.exists)(json, 'source_locale') ? undefined : (0, _1.LocalePreviewFromJSON)(json['source_locale']),
        'fallbackLocale': !(0, runtime_1.exists)(json, 'fallback_locale') ? undefined : (0, _1.LocalePreviewFromJSON)(json['fallback_locale']),
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}
exports.LocaleFromJSONTyped = LocaleFromJSONTyped;
function LocaleToJSON(value) {
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
        'default': value._default,
        'main': value.main,
        'rtl': value.rtl,
        'plural_forms': value.pluralForms,
        'source_locale': (0, _1.LocalePreviewToJSON)(value.sourceLocale),
        'fallback_locale': (0, _1.LocalePreviewToJSON)(value.fallbackLocale),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
exports.LocaleToJSON = LocaleToJSON;
