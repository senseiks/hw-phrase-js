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
exports.MemberSpacesInnerToJSON = exports.MemberSpacesInnerFromJSONTyped = exports.MemberSpacesInnerFromJSON = void 0;
var runtime_1 = require("../runtime");
function MemberSpacesInnerFromJSON(json) {
    return MemberSpacesInnerFromJSONTyped(json, false);
}
exports.MemberSpacesInnerFromJSON = MemberSpacesInnerFromJSON;
function MemberSpacesInnerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'projectsCount': !(0, runtime_1.exists)(json, 'projects_count') ? undefined : json['projects_count'],
    };
}
exports.MemberSpacesInnerFromJSONTyped = MemberSpacesInnerFromJSONTyped;
function MemberSpacesInnerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'projects_count': value.projectsCount,
    };
}
exports.MemberSpacesInnerToJSON = MemberSpacesInnerToJSON;
