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
exports.InvitationToJSON = exports.InvitationFromJSONTyped = exports.InvitationFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function InvitationFromJSON(json) {
    return InvitationFromJSONTyped(json, false);
}
exports.InvitationFromJSON = InvitationFromJSON;
function InvitationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'role': !(0, runtime_1.exists)(json, 'role') ? undefined : json['role'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'projects': !(0, runtime_1.exists)(json, 'projects') ? undefined : (json['projects'].map(_1.ProjectShortFromJSON)),
        'locales': !(0, runtime_1.exists)(json, 'locales') ? undefined : (json['locales'].map(_1.LocalePreviewFromJSON)),
        'teams': !(0, runtime_1.exists)(json, 'teams') ? undefined : (json['teams'].map(_1.TeamShortFromJSON)),
        'defaultLocaleCodes': !(0, runtime_1.exists)(json, 'default_locale_codes') ? undefined : json['default_locale_codes'],
        'permissions': !(0, runtime_1.exists)(json, 'permissions') ? undefined : json['permissions'],
        'localeIds': !(0, runtime_1.exists)(json, 'locale_ids') ? undefined : json['locale_ids'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'acceptedAt': !(0, runtime_1.exists)(json, 'accepted_at') ? undefined : (new Date(json['accepted_at'])),
        'spaces': !(0, runtime_1.exists)(json, 'spaces') ? undefined : (json['spaces'].map(_1.SpaceFromJSON)),
        'projectRole': !(0, runtime_1.exists)(json, 'project_role') ? undefined : (json['project_role'].map(_1.MemberProjectDetailProjectRolesInnerFromJSON)),
    };
}
exports.InvitationFromJSONTyped = InvitationFromJSONTyped;
function InvitationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'email': value.email,
        'role': value.role,
        'state': value.state,
        'projects': value.projects === undefined ? undefined : (value.projects.map(_1.ProjectShortToJSON)),
        'locales': value.locales === undefined ? undefined : (value.locales.map(_1.LocalePreviewToJSON)),
        'teams': value.teams === undefined ? undefined : (value.teams.map(_1.TeamShortToJSON)),
        'default_locale_codes': value.defaultLocaleCodes,
        'permissions': value.permissions,
        'locale_ids': value.localeIds,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'accepted_at': value.acceptedAt === undefined ? undefined : (value.acceptedAt.toISOString()),
        'spaces': value.spaces === undefined ? undefined : (value.spaces.map(_1.SpaceToJSON)),
        'project_role': value.projectRole === undefined ? undefined : (value.projectRole.map(_1.MemberProjectDetailProjectRolesInnerToJSON)),
    };
}
exports.InvitationToJSON = InvitationToJSON;
