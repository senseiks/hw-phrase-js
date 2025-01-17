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
exports.AccountToJSON = exports.AccountFromJSONTyped = exports.AccountFromJSON = void 0;
var runtime_1 = require("../runtime");
function AccountFromJSON(json) {
    return AccountFromJSONTyped(json, false);
}
exports.AccountFromJSON = AccountFromJSON;
function AccountFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'slug': !(0, runtime_1.exists)(json, 'slug') ? undefined : json['slug'],
        'company': !(0, runtime_1.exists)(json, 'company') ? undefined : json['company'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'companyLogoUrl': !(0, runtime_1.exists)(json, 'company_logo_url') ? undefined : json['company_logo_url'],
    };
}
exports.AccountFromJSONTyped = AccountFromJSONTyped;
function AccountToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'slug': value.slug,
        'company': value.company,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'company_logo_url': value.companyLogoUrl,
    };
}
exports.AccountToJSON = AccountToJSON;
