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
exports.CustomMetadataPropertyCreate422ResponseToJSON = exports.CustomMetadataPropertyCreate422ResponseFromJSONTyped = exports.CustomMetadataPropertyCreate422ResponseFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function CustomMetadataPropertyCreate422ResponseFromJSON(json) {
    return CustomMetadataPropertyCreate422ResponseFromJSONTyped(json, false);
}
exports.CustomMetadataPropertyCreate422ResponseFromJSON = CustomMetadataPropertyCreate422ResponseFromJSON;
function CustomMetadataPropertyCreate422ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(_1.CustomMetadataPropertyCreate422ResponseErrorsInnerFromJSON)),
    };
}
exports.CustomMetadataPropertyCreate422ResponseFromJSONTyped = CustomMetadataPropertyCreate422ResponseFromJSONTyped;
function CustomMetadataPropertyCreate422ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'message': value.message,
        'errors': value.errors === undefined ? undefined : (value.errors.map(_1.CustomMetadataPropertyCreate422ResponseErrorsInnerToJSON)),
    };
}
exports.CustomMetadataPropertyCreate422ResponseToJSON = CustomMetadataPropertyCreate422ResponseToJSON;
