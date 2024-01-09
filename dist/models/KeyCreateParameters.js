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
exports.KeyCreateParametersToJSON = exports.KeyCreateParametersFromJSONTyped = exports.KeyCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function KeyCreateParametersFromJSON(json) {
    return KeyCreateParametersFromJSONTyped(json, false);
}
exports.KeyCreateParametersFromJSON = KeyCreateParametersFromJSON;
function KeyCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'plural': !(0, runtime_1.exists)(json, 'plural') ? undefined : json['plural'],
        'namePlural': !(0, runtime_1.exists)(json, 'name_plural') ? undefined : json['name_plural'],
        'dataType': !(0, runtime_1.exists)(json, 'data_type') ? undefined : json['data_type'],
        'tags': !(0, runtime_1.exists)(json, 'tags') ? undefined : json['tags'],
        'maxCharactersAllowed': !(0, runtime_1.exists)(json, 'max_characters_allowed') ? undefined : json['max_characters_allowed'],
        'screenshot': !(0, runtime_1.exists)(json, 'screenshot') ? undefined : json['screenshot'],
        'removeScreenshot': !(0, runtime_1.exists)(json, 'remove_screenshot') ? undefined : json['remove_screenshot'],
        'unformatted': !(0, runtime_1.exists)(json, 'unformatted') ? undefined : json['unformatted'],
        'defaultTranslationContent': !(0, runtime_1.exists)(json, 'default_translation_content') ? undefined : json['default_translation_content'],
        'xmlSpacePreserve': !(0, runtime_1.exists)(json, 'xml_space_preserve') ? undefined : json['xml_space_preserve'],
        'originalFile': !(0, runtime_1.exists)(json, 'original_file') ? undefined : json['original_file'],
        'localizedFormatString': !(0, runtime_1.exists)(json, 'localized_format_string') ? undefined : json['localized_format_string'],
        'localizedFormatKey': !(0, runtime_1.exists)(json, 'localized_format_key') ? undefined : json['localized_format_key'],
        'customMetadata': !(0, runtime_1.exists)(json, 'custom_metadata') ? undefined : json['custom_metadata'],
    };
}
exports.KeyCreateParametersFromJSONTyped = KeyCreateParametersFromJSONTyped;
function KeyCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'name': value.name,
        'description': value.description,
        'plural': value.plural,
        'name_plural': value.namePlural,
        'data_type': value.dataType,
        'tags': value.tags,
        'max_characters_allowed': value.maxCharactersAllowed,
        'screenshot': value.screenshot,
        'remove_screenshot': value.removeScreenshot,
        'unformatted': value.unformatted,
        'default_translation_content': value.defaultTranslationContent,
        'xml_space_preserve': value.xmlSpacePreserve,
        'original_file': value.originalFile,
        'localized_format_string': value.localizedFormatString,
        'localized_format_key': value.localizedFormatKey,
        'custom_metadata': value.customMetadata,
    };
}
exports.KeyCreateParametersToJSON = KeyCreateParametersToJSON;
