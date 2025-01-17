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
exports.DistributionPreviewToJSON = exports.DistributionPreviewFromJSONTyped = exports.DistributionPreviewFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function DistributionPreviewFromJSON(json) {
    return DistributionPreviewFromJSONTyped(json, false);
}
exports.DistributionPreviewFromJSON = DistributionPreviewFromJSON;
function DistributionPreviewFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'project': !(0, runtime_1.exists)(json, 'project') ? undefined : (0, _1.ProjectShortFromJSON)(json['project']),
        'platforms': !(0, runtime_1.exists)(json, 'platforms') ? undefined : json['platforms'],
        'releaseCount': !(0, runtime_1.exists)(json, 'release_count') ? undefined : json['release_count'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'deletedAt': !(0, runtime_1.exists)(json, 'deleted_at') ? undefined : (new Date(json['deleted_at'])),
    };
}
exports.DistributionPreviewFromJSONTyped = DistributionPreviewFromJSONTyped;
function DistributionPreviewToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'name': value.name,
        'project': (0, _1.ProjectShortToJSON)(value.project),
        'platforms': value.platforms,
        'release_count': value.releaseCount,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'deleted_at': value.deletedAt === undefined ? undefined : (value.deletedAt.toISOString()),
    };
}
exports.DistributionPreviewToJSON = DistributionPreviewToJSON;
