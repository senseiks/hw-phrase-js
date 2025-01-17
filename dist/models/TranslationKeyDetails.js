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
exports.TranslationKeyDetailsToJSON = exports.TranslationKeyDetailsFromJSONTyped = exports.TranslationKeyDetailsFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function TranslationKeyDetailsFromJSON(json) {
    return TranslationKeyDetailsFromJSONTyped(json, false);
}
exports.TranslationKeyDetailsFromJSON = TranslationKeyDetailsFromJSON;
function TranslationKeyDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'nameHash': !(0, runtime_1.exists)(json, 'name_hash') ? undefined : json['name_hash'],
        'plural': !(0, runtime_1.exists)(json, 'plural') ? undefined : json['plural'],
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'dataType': !(0, runtime_1.exists)(json, 'data_type') ? undefined : json['data_type'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'namePlural': !(0, runtime_1.exists)(json, 'name_plural') ? undefined : json['name_plural'],
        'commentsCount': !(0, runtime_1.exists)(json, 'comments_count') ? undefined : json['comments_count'],
        'maxCharactersAllowed': !(0, runtime_1.exists)(json, 'max_characters_allowed') ? undefined : json['max_characters_allowed'],
        'screenshotUrl': !(0, runtime_1.exists)(json, 'screenshot_url') ? undefined : json['screenshot_url'],
        'unformatted': !(0, runtime_1.exists)(json, 'unformatted') ? undefined : json['unformatted'],
        'xmlSpacePreserve': !(0, runtime_1.exists)(json, 'xml_space_preserve') ? undefined : json['xml_space_preserve'],
        'originalFile': !(0, runtime_1.exists)(json, 'original_file') ? undefined : json['original_file'],
        'formatValueType': !(0, runtime_1.exists)(json, 'format_value_type') ? undefined : json['format_value_type'],
        'creator': !(0, runtime_1.exists)(json, 'creator') ? undefined : (0, _1.UserPreviewFromJSON)(json['creator']),
        'customMetadata': !(0, runtime_1.exists)(json, 'custom_metadata') ? undefined : json['custom_metadata'],
    };
}
exports.TranslationKeyDetailsFromJSONTyped = TranslationKeyDetailsFromJSONTyped;
function TranslationKeyDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'description': value.description,
        'name_hash': value.nameHash,
        'plural': value.plural,
        'tags': value.tags,
        'data_type': value.dataType,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'name_plural': value.namePlural,
        'comments_count': value.commentsCount,
        'max_characters_allowed': value.maxCharactersAllowed,
        'screenshot_url': value.screenshotUrl,
        'unformatted': value.unformatted,
        'xml_space_preserve': value.xmlSpacePreserve,
        'original_file': value.originalFile,
        'format_value_type': value.formatValueType,
        'creator': (0, _1.UserPreviewToJSON)(value.creator),
        'custom_metadata': value.customMetadata,
    };
}
exports.TranslationKeyDetailsToJSON = TranslationKeyDetailsToJSON;
