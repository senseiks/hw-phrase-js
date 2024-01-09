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
exports.TranslationVersionToJSON = exports.TranslationVersionFromJSONTyped = exports.TranslationVersionFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function TranslationVersionFromJSON(json) {
    return TranslationVersionFromJSONTyped(json, false);
}
exports.TranslationVersionFromJSON = TranslationVersionFromJSON;
function TranslationVersionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'content': !(0, runtime_1.exists)(json, 'content') ? undefined : json['content'],
        'pluralSuffix': !(0, runtime_1.exists)(json, 'plural_suffix') ? undefined : json['plural_suffix'],
        'key': !(0, runtime_1.exists)(json, 'key') ? undefined : (0, _1.KeyPreviewFromJSON)(json['key']),
        'locale': !(0, runtime_1.exists)(json, 'locale') ? undefined : (0, _1.LocalePreviewFromJSON)(json['locale']),
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'changedAt': !(0, runtime_1.exists)(json, 'changed_at') ? undefined : (new Date(json['changed_at'])),
    };
}
exports.TranslationVersionFromJSONTyped = TranslationVersionFromJSONTyped;
function TranslationVersionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'content': value.content,
        'plural_suffix': value.pluralSuffix,
        'key': (0, _1.KeyPreviewToJSON)(value.key),
        'locale': (0, _1.LocalePreviewToJSON)(value.locale),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'changed_at': value.changedAt === undefined ? undefined : (value.changedAt.toISOString()),
    };
}
exports.TranslationVersionToJSON = TranslationVersionToJSON;