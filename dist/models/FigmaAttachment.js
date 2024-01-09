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
exports.FigmaAttachmentToJSON = exports.FigmaAttachmentFromJSONTyped = exports.FigmaAttachmentFromJSON = void 0;
var runtime_1 = require("../runtime");
function FigmaAttachmentFromJSON(json) {
    return FigmaAttachmentFromJSONTyped(json, false);
}
exports.FigmaAttachmentFromJSON = FigmaAttachmentFromJSON;
function FigmaAttachmentFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}
exports.FigmaAttachmentFromJSONTyped = FigmaAttachmentFromJSONTyped;
function FigmaAttachmentToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'url': value.url,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
exports.FigmaAttachmentToJSON = FigmaAttachmentToJSON;
