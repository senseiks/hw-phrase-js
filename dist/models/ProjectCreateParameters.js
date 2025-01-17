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
exports.ProjectCreateParametersToJSON = exports.ProjectCreateParametersFromJSONTyped = exports.ProjectCreateParametersFromJSON = void 0;
var runtime_1 = require("../runtime");
function ProjectCreateParametersFromJSON(json) {
    return ProjectCreateParametersFromJSONTyped(json, false);
}
exports.ProjectCreateParametersFromJSON = ProjectCreateParametersFromJSON;
function ProjectCreateParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'mainFormat': !(0, runtime_1.exists)(json, 'main_format') ? undefined : json['main_format'],
        'media': !(0, runtime_1.exists)(json, 'media') ? undefined : json['media'],
        'sharesTranslationMemory': !(0, runtime_1.exists)(json, 'shares_translation_memory') ? undefined : json['shares_translation_memory'],
        'projectImage': !(0, runtime_1.exists)(json, 'project_image') ? undefined : json['project_image'],
        'removeProjectImage': !(0, runtime_1.exists)(json, 'remove_project_image') ? undefined : json['remove_project_image'],
        'accountId': !(0, runtime_1.exists)(json, 'account_id') ? undefined : json['account_id'],
        'pointOfContact': !(0, runtime_1.exists)(json, 'point_of_contact') ? undefined : json['point_of_contact'],
        'sourceProjectId': !(0, runtime_1.exists)(json, 'source_project_id') ? undefined : json['source_project_id'],
        'workflow': !(0, runtime_1.exists)(json, 'workflow') ? undefined : json['workflow'],
        'machineTranslationEnabled': !(0, runtime_1.exists)(json, 'machine_translation_enabled') ? undefined : json['machine_translation_enabled'],
        'enableBranching': !(0, runtime_1.exists)(json, 'enable_branching') ? undefined : json['enable_branching'],
        'protectMasterBranch': !(0, runtime_1.exists)(json, 'protect_master_branch') ? undefined : json['protect_master_branch'],
        'enableAllDataTypeTranslationKeysForTranslators': !(0, runtime_1.exists)(json, 'enable_all_data_type_translation_keys_for_translators') ? undefined : json['enable_all_data_type_translation_keys_for_translators'],
        'enableIcuMessageFormat': !(0, runtime_1.exists)(json, 'enable_icu_message_format') ? undefined : json['enable_icu_message_format'],
        'zeroPluralFormEnabled': !(0, runtime_1.exists)(json, 'zero_plural_form_enabled') ? undefined : json['zero_plural_form_enabled'],
        'autotranslateEnabled': !(0, runtime_1.exists)(json, 'autotranslate_enabled') ? undefined : json['autotranslate_enabled'],
        'autotranslateCheckNewTranslationKeys': !(0, runtime_1.exists)(json, 'autotranslate_check_new_translation_keys') ? undefined : json['autotranslate_check_new_translation_keys'],
        'autotranslateCheckNewUploads': !(0, runtime_1.exists)(json, 'autotranslate_check_new_uploads') ? undefined : json['autotranslate_check_new_uploads'],
        'autotranslateCheckNewLocales': !(0, runtime_1.exists)(json, 'autotranslate_check_new_locales') ? undefined : json['autotranslate_check_new_locales'],
        'autotranslateMarkAsUnverified': !(0, runtime_1.exists)(json, 'autotranslate_mark_as_unverified') ? undefined : json['autotranslate_mark_as_unverified'],
        'autotranslateUseMachineTranslation': !(0, runtime_1.exists)(json, 'autotranslate_use_machine_translation') ? undefined : json['autotranslate_use_machine_translation'],
        'autotranslateUseTranslationMemory': !(0, runtime_1.exists)(json, 'autotranslate_use_translation_memory') ? undefined : json['autotranslate_use_translation_memory'],
        'smartSuggestEnabled': !(0, runtime_1.exists)(json, 'smart_suggest_enabled') ? undefined : json['smart_suggest_enabled'],
        'smartSuggestUseGlossary': !(0, runtime_1.exists)(json, 'smart_suggest_use_glossary') ? undefined : json['smart_suggest_use_glossary'],
        'smartSuggestUseMachineTranslation': !(0, runtime_1.exists)(json, 'smart_suggest_use_machine_translation') ? undefined : json['smart_suggest_use_machine_translation'],
    };
}
exports.ProjectCreateParametersFromJSONTyped = ProjectCreateParametersFromJSONTyped;
function ProjectCreateParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'name': value.name,
        'main_format': value.mainFormat,
        'media': value.media,
        'shares_translation_memory': value.sharesTranslationMemory,
        'project_image': value.projectImage,
        'remove_project_image': value.removeProjectImage,
        'account_id': value.accountId,
        'point_of_contact': value.pointOfContact,
        'source_project_id': value.sourceProjectId,
        'workflow': value.workflow,
        'machine_translation_enabled': value.machineTranslationEnabled,
        'enable_branching': value.enableBranching,
        'protect_master_branch': value.protectMasterBranch,
        'enable_all_data_type_translation_keys_for_translators': value.enableAllDataTypeTranslationKeysForTranslators,
        'enable_icu_message_format': value.enableIcuMessageFormat,
        'zero_plural_form_enabled': value.zeroPluralFormEnabled,
        'autotranslate_enabled': value.autotranslateEnabled,
        'autotranslate_check_new_translation_keys': value.autotranslateCheckNewTranslationKeys,
        'autotranslate_check_new_uploads': value.autotranslateCheckNewUploads,
        'autotranslate_check_new_locales': value.autotranslateCheckNewLocales,
        'autotranslate_mark_as_unverified': value.autotranslateMarkAsUnverified,
        'autotranslate_use_machine_translation': value.autotranslateUseMachineTranslation,
        'autotranslate_use_translation_memory': value.autotranslateUseTranslationMemory,
        'smart_suggest_enabled': value.smartSuggestEnabled,
        'smart_suggest_use_glossary': value.smartSuggestUseGlossary,
        'smart_suggest_use_machine_translation': value.smartSuggestUseMachineTranslation,
    };
}
exports.ProjectCreateParametersToJSON = ProjectCreateParametersToJSON;
