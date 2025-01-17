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
exports.MemberProjectDetailToJSON = exports.MemberProjectDetailFromJSONTyped = exports.MemberProjectDetailFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function MemberProjectDetailFromJSON(json) {
    return MemberProjectDetailFromJSONTyped(json, false);
}
exports.MemberProjectDetailFromJSON = MemberProjectDetailFromJSON;
function MemberProjectDetailFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'username': !(0, runtime_1.exists)(json, 'username') ? undefined : json['username'],
        'role': !(0, runtime_1.exists)(json, 'role') ? undefined : json['role'],
        'projects': !(0, runtime_1.exists)(json, 'projects') ? undefined : (json['projects'].map(_1.ProjectLocalesFromJSON)),
        'permissions': !(0, runtime_1.exists)(json, 'permissions') ? undefined : json['permissions'],
        'localeIds': !(0, runtime_1.exists)(json, 'locale_ids') ? undefined : json['locale_ids'],
        'defaultLocaleCodes': !(0, runtime_1.exists)(json, 'default_locale_codes') ? undefined : json['default_locale_codes'],
        'spaces': !(0, runtime_1.exists)(json, 'spaces') ? undefined : (json['spaces'].map(_1.MemberSpacesInnerFromJSON)),
        'projectRoles': !(0, runtime_1.exists)(json, 'project_roles') ? undefined : (json['project_roles'].map(_1.MemberProjectDetailProjectRolesInnerFromJSON)),
    };
}
exports.MemberProjectDetailFromJSONTyped = MemberProjectDetailFromJSONTyped;
function MemberProjectDetailToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'email': value.email,
        'username': value.username,
        'role': value.role,
        'projects': value.projects === undefined ? undefined : (value.projects.map(_1.ProjectLocalesToJSON)),
        'permissions': value.permissions,
        'locale_ids': value.localeIds,
        'default_locale_codes': value.defaultLocaleCodes,
        'spaces': value.spaces === undefined ? undefined : (value.spaces.map(_1.MemberSpacesInnerToJSON)),
        'project_roles': value.projectRoles === undefined ? undefined : (value.projectRoles.map(_1.MemberProjectDetailProjectRolesInnerToJSON)),
    };
}
exports.MemberProjectDetailToJSON = MemberProjectDetailToJSON;
