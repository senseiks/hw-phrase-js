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
exports.UploadSummaryToJSON = exports.UploadSummaryFromJSONTyped = exports.UploadSummaryFromJSON = void 0;
var runtime_1 = require("../runtime");
function UploadSummaryFromJSON(json) {
    return UploadSummaryFromJSONTyped(json, false);
}
exports.UploadSummaryFromJSON = UploadSummaryFromJSON;
function UploadSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'localesCreated': !(0, runtime_1.exists)(json, 'locales_created') ? undefined : json['locales_created'],
        'translationKeysCreated': !(0, runtime_1.exists)(json, 'translation_keys_created') ? undefined : json['translation_keys_created'],
        'translationKeysUpdated': !(0, runtime_1.exists)(json, 'translation_keys_updated') ? undefined : json['translation_keys_updated'],
        'translationKeysUnmentioned': !(0, runtime_1.exists)(json, 'translation_keys_unmentioned') ? undefined : json['translation_keys_unmentioned'],
        'translationsCreated': !(0, runtime_1.exists)(json, 'translations_created') ? undefined : json['translations_created'],
        'translationsUpdated': !(0, runtime_1.exists)(json, 'translations_updated') ? undefined : json['translations_updated'],
        'tagsCreated': !(0, runtime_1.exists)(json, 'tags_created') ? undefined : json['tags_created'],
        'translationKeysIgnored': !(0, runtime_1.exists)(json, 'translation_keys_ignored') ? undefined : json['translation_keys_ignored'],
    };
}
exports.UploadSummaryFromJSONTyped = UploadSummaryFromJSONTyped;
function UploadSummaryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'locales_created': value.localesCreated,
        'translation_keys_created': value.translationKeysCreated,
        'translation_keys_updated': value.translationKeysUpdated,
        'translation_keys_unmentioned': value.translationKeysUnmentioned,
        'translations_created': value.translationsCreated,
        'translations_updated': value.translationsUpdated,
        'tags_created': value.tagsCreated,
        'translation_keys_ignored': value.translationKeysIgnored,
    };
}
exports.UploadSummaryToJSON = UploadSummaryToJSON;
