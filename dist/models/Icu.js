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
exports.IcuToJSON = exports.IcuFromJSONTyped = exports.IcuFromJSON = void 0;
var runtime_1 = require("../runtime");
function IcuFromJSON(json) {
    return IcuFromJSONTyped(json, false);
}
exports.IcuFromJSON = IcuFromJSON;
function IcuFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'localeCode': !(0, runtime_1.exists)(json, 'locale_code') ? undefined : json['locale_code'],
    };
}
exports.IcuFromJSONTyped = IcuFromJSONTyped;
function IcuToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'locale_code': value.localeCode,
    };
}
exports.IcuToJSON = IcuToJSON;
