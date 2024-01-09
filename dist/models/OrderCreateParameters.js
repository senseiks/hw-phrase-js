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
exports.OrderCreateParametersToJSON = exports.OrderCreateParametersFromJSONTyped = exports.OrderCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function OrderCreateParametersFromJSON(json) {
    return OrderCreateParametersFromJSONTyped(json, false);
}
exports.OrderCreateParametersFromJSON = OrderCreateParametersFromJSON;
function OrderCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'branch': !(0, runtime_1.exists)(json, 'branch') ? undefined : json['branch'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'lsp': !(0, runtime_1.exists)(json, 'lsp') ? undefined : json['lsp'],
        'sourceLocaleId': !(0, runtime_1.exists)(json, 'source_locale_id') ? undefined : json['source_locale_id'],
        'targetLocaleIds': !(0, runtime_1.exists)(json, 'target_locale_ids') ? undefined : json['target_locale_ids'],
        'translationType': !(0, runtime_1.exists)(json, 'translation_type') ? undefined : json['translation_type'],
        'tag': !(0, runtime_1.exists)(json, 'tag') ? undefined : json['tag'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        'styleguideId': !(0, runtime_1.exists)(json, 'styleguide_id') ? undefined : json['styleguide_id'],
        'unverifyTranslationsUponDelivery': !(0, runtime_1.exists)(json, 'unverify_translations_upon_delivery') ? undefined : json['unverify_translations_upon_delivery'],
        'includeUntranslatedKeys': !(0, runtime_1.exists)(json, 'include_untranslated_keys') ? undefined : json['include_untranslated_keys'],
        'includeUnverifiedTranslations': !(0, runtime_1.exists)(json, 'include_unverified_translations') ? undefined : json['include_unverified_translations'],
        'category': !(0, runtime_1.exists)(json, 'category') ? undefined : json['category'],
        'quality': !(0, runtime_1.exists)(json, 'quality') ? undefined : json['quality'],
        'priority': !(0, runtime_1.exists)(json, 'priority') ? undefined : json['priority'],
    };
}
exports.OrderCreateParametersFromJSONTyped = OrderCreateParametersFromJSONTyped;
function OrderCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'branch': value.branch,
        'name': value.name,
        'lsp': value.lsp,
        'source_locale_id': value.sourceLocaleId,
        'target_locale_ids': value.targetLocaleIds,
        'translation_type': value.translationType,
        'tag': value.tag,
        'message': value.message,
        'styleguide_id': value.styleguideId,
        'unverify_translations_upon_delivery': value.unverifyTranslationsUponDelivery,
        'include_untranslated_keys': value.includeUntranslatedKeys,
        'include_unverified_translations': value.includeUnverifiedTranslations,
        'category': value.category,
        'quality': value.quality,
        'priority': value.priority,
    };
}
exports.OrderCreateParametersToJSON = OrderCreateParametersToJSON;