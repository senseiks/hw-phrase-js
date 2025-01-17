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
exports.UserPreviewToJSON = exports.UserPreviewFromJSONTyped = exports.UserPreviewFromJSON = void 0;
var runtime_1 = require("../runtime");
function UserPreviewFromJSON(json) {
    return UserPreviewFromJSONTyped(json, false);
}
exports.UserPreviewFromJSON = UserPreviewFromJSON;
function UserPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'username': !(0, runtime_1.exists)(json, 'username') ? undefined : json['username'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'gravatarUid': !(0, runtime_1.exists)(json, 'gravatar_uid') ? undefined : json['gravatar_uid'],
    };
}
exports.UserPreviewFromJSONTyped = UserPreviewFromJSONTyped;
function UserPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'username': value.username,
        'name': value.name,
        'gravatar_uid': value.gravatarUid,
    };
}
exports.UserPreviewToJSON = UserPreviewToJSON;
