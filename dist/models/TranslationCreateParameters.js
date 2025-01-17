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
exports.TranslationCreateParametersToJSON = exports.TranslationCreateParametersFromJSONTyped = exports.TranslationCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function TranslationCreateParametersFromJSON(json) {
    return TranslationCreateParametersFromJSONTyped(json, false);
}
exports.TranslationCreateParametersFromJSON = TranslationCreateParametersFromJSON;
function TranslationCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'localeId': !(0, runtime_1.exists)(json, 'locale_id') ? undefined : json['locale_id'],
        'keyId': !(0, runtime_1.exists)(json, 'key_id') ? undefined : json['key_id'],
        'content': !(0, runtime_1.exists)(json, 'content') ? undefined : json['content'],
        'pluralSuffix': !(0, runtime_1.exists)(json, 'plural_suffix') ? undefined : json['plural_suffix'],
        'unverified': !(0, runtime_1.exists)(json, 'unverified') ? undefined : json['unverified'],
        'excluded': !(0, runtime_1.exists)(json, 'excluded') ? undefined : json['excluded'],
        'autotranslate': !(0, runtime_1.exists)(json, 'autotranslate') ? undefined : json['autotranslate'],
    };
}
exports.TranslationCreateParametersFromJSONTyped = TranslationCreateParametersFromJSONTyped;
function TranslationCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'locale_id': value.localeId,
        'key_id': value.keyId,
        'content': value.content,
        'plural_suffix': value.pluralSuffix,
        'unverified': value.unverified,
        'excluded': value.excluded,
        'autotranslate': value.autotranslate,
    };
}
exports.TranslationCreateParametersToJSON = TranslationCreateParametersToJSON;
