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
exports.DistributionUpdateParametersToJSON = exports.DistributionUpdateParametersFromJSONTyped = exports.DistributionUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function DistributionUpdateParametersFromJSON(json) {
    return DistributionUpdateParametersFromJSONTyped(json, false);
}
exports.DistributionUpdateParametersFromJSON = DistributionUpdateParametersFromJSON;
function DistributionUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'projectId': !(0, runtime_1.exists)(json, 'project_id') ? undefined : json['project_id'],
        'platforms': !(0, runtime_1.exists)(json, 'platforms') ? undefined : json['platforms'],
        'localeIds': !(0, runtime_1.exists)(json, 'locale_ids') ? undefined : json['locale_ids'],
        'formatOptions': !(0, runtime_1.exists)(json, 'format_options') ? undefined : json['format_options'],
        'fallbackLocalesEnabled': !(0, runtime_1.exists)(json, 'fallback_locales_enabled') ? undefined : json['fallback_locales_enabled'],
        'fallbackToNonRegionalLocale': !(0, runtime_1.exists)(json, 'fallback_to_non_regional_locale') ? undefined : json['fallback_to_non_regional_locale'],
        'fallbackToDefaultLocale': !(0, runtime_1.exists)(json, 'fallback_to_default_locale') ? undefined : json['fallback_to_default_locale'],
        'useLastReviewedVersion': !(0, runtime_1.exists)(json, 'use_last_reviewed_version') ? undefined : json['use_last_reviewed_version'],
    };
}
exports.DistributionUpdateParametersFromJSONTyped = DistributionUpdateParametersFromJSONTyped;
function DistributionUpdateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'project_id': value.projectId,
        'platforms': value.platforms,
        'locale_ids': value.localeIds,
        'format_options': value.formatOptions,
        'fallback_locales_enabled': value.fallbackLocalesEnabled,
        'fallback_to_non_regional_locale': value.fallbackToNonRegionalLocale,
        'fallback_to_default_locale': value.fallbackToDefaultLocale,
        'use_last_reviewed_version': value.useLastReviewedVersion,
    };
}
exports.DistributionUpdateParametersToJSON = DistributionUpdateParametersToJSON;
