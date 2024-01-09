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
exports.GitlabSyncToJSON = exports.GitlabSyncFromJSONTyped = exports.GitlabSyncFromJSON = void 0;
var runtime_1 = require("../runtime");
function GitlabSyncFromJSON(json) {
    return GitlabSyncFromJSONTyped(json, false);
}
exports.GitlabSyncFromJSON = GitlabSyncFromJSON;
function GitlabSyncFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'projectId': !(0, runtime_1.exists)(json, 'project_id') ? undefined : json['project_id'],
        'gitlabProjectId': !(0, runtime_1.exists)(json, 'gitlab_project_id') ? undefined : json['gitlab_project_id'],
        'gitlabBranchName': !(0, runtime_1.exists)(json, 'gitlab_branch_name') ? undefined : json['gitlab_branch_name'],
        'autoImport': !(0, runtime_1.exists)(json, 'auto_import') ? undefined : json['auto_import'],
        'autoImportSecret': !(0, runtime_1.exists)(json, 'auto_import_secret') ? undefined : json['auto_import_secret'],
        'autoImportUrl': !(0, runtime_1.exists)(json, 'auto_import_url') ? undefined : json['auto_import_url'],
        'selfHostedApiUrl': !(0, runtime_1.exists)(json, 'self_hosted_api_url') ? undefined : json['self_hosted_api_url'],
        'lastExportedAt': !(0, runtime_1.exists)(json, 'last_exported_at') ? undefined : (new Date(json['last_exported_at'])),
        'lastImportedAt': !(0, runtime_1.exists)(json, 'last_imported_at') ? undefined : (new Date(json['last_imported_at'])),
        'lastStatus': !(0, runtime_1.exists)(json, 'last_status') ? undefined : json['last_status'],
    };
}
exports.GitlabSyncFromJSONTyped = GitlabSyncFromJSONTyped;
function GitlabSyncToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'project_id': value.projectId,
        'gitlab_project_id': value.gitlabProjectId,
        'gitlab_branch_name': value.gitlabBranchName,
        'auto_import': value.autoImport,
        'auto_import_secret': value.autoImportSecret,
        'auto_import_url': value.autoImportUrl,
        'self_hosted_api_url': value.selfHostedApiUrl,
        'last_exported_at': value.lastExportedAt === undefined ? undefined : (value.lastExportedAt.toISOString()),
        'last_imported_at': value.lastImportedAt === undefined ? undefined : (value.lastImportedAt.toISOString()),
        'last_status': value.lastStatus,
    };
}
exports.GitlabSyncToJSON = GitlabSyncToJSON;