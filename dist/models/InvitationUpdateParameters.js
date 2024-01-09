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
exports.InvitationUpdateParametersToJSON = exports.InvitationUpdateParametersFromJSONTyped = exports.InvitationUpdateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function InvitationUpdateParametersFromJSON(json) {
    return InvitationUpdateParametersFromJSONTyped(json, false);
}
exports.InvitationUpdateParametersFromJSON = InvitationUpdateParametersFromJSON;
function InvitationUpdateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'role': !(0, runtime_1.exists)(json, 'role') ? undefined : json['role'],
        'projectIds': !(0, runtime_1.exists)(json, 'project_ids') ? undefined : json['project_ids'],
        'localeIds': !(0, runtime_1.exists)(json, 'locale_ids') ? undefined : json['locale_ids'],
        'spaceIds': !(0, runtime_1.exists)(json, 'space_ids') ? undefined : json['space_ids'],
        'teamIds': !(0, runtime_1.exists)(json, 'team_ids') ? undefined : json['team_ids'],
        'defaultLocaleCodes': !(0, runtime_1.exists)(json, 'default_locale_codes') ? undefined : json['default_locale_codes'],
        'permissions': !(0, runtime_1.exists)(json, 'permissions') ? undefined : json['permissions'],
    };
}
exports.InvitationUpdateParametersFromJSONTyped = InvitationUpdateParametersFromJSONTyped;
function InvitationUpdateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'role': value.role,
        'project_ids': value.projectIds,
        'locale_ids': value.localeIds,
        'space_ids': value.spaceIds,
        'team_ids': value.teamIds,
        'default_locale_codes': value.defaultLocaleCodes,
        'permissions': value.permissions,
    };
}
exports.InvitationUpdateParametersToJSON = InvitationUpdateParametersToJSON;
