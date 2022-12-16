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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ProjectUpdateParameters
 */
export interface ProjectUpdateParameters {
    /**
     * Required if the requesting user is a member of multiple accounts. Account ID to specify the actual account the project should be created in.
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    accountId?: string;
    /**
     * (Optional) Name of the project
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    name?: string;
    /**
     * (Optional) Main file format specified by its API Extension name. Used for locale downloads if no format is specified. For API Extension names of available file formats see <a href=\"https://support.phrase.com/hc/en-us/sections/6111343326364\">Format Guide</a> or our <a href=\"#formats\">Formats API Endpoint</a>.
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    mainFormat?: string;
    /**
     * (Optional) Indicates whether the project should share the account\'s translation memory
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    sharesTranslationMemory?: boolean;
    /**
     * (Optional) Image to identify the project
     * @type {Blob}
     * @memberof ProjectUpdateParameters
     */
    projectImage?: Blob;
    /**
     * (Optional) Indicates whether the project image should be deleted.
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    removeProjectImage?: boolean;
    /**
     * (Optional) Review Workflow. \"simple\" / \"review\". <a href=\"https://support.phrase.com/hc/en-us/articles/5784094755484\">Read more</a>
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    workflow?: string;
    /**
     * (Optional) Enable machine translation support in the project. Required for Autopilot and Smart Suggest
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    machineTranslationEnabled?: boolean;
    /**
     * (Optional) Enable branching in the project
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    enableBranching?: boolean;
    /**
     * (Optional) Protect the master branch in project where branching is enabled
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    protectMasterBranch?: boolean;
    /**
     * (Optional) Otherwise, translators are not allowed to edit translations other than strings
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    enableAllDataTypeTranslationKeysForTranslators?: boolean;
    /**
     * (Optional) We can validate and highlight your ICU messages. <a href=\"https://support.phrase.com/hc/en-us/articles/5822319545116\">Read more</a>
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    enableIcuMessageFormat?: boolean;
    /**
     * (Optional) Displays the input fields for the \'ZERO\' plural form for every key as well although only some languages require the \'ZERO\' explicitly.
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    zeroPluralFormEnabled?: boolean;
    /**
     * (Optional) Autopilot, requires machine_translation_enabled. <a href=\"https://support.phrase.com/hc/en-us/articles/5822187934364\">Read more</a>
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateEnabled?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateCheckNewTranslationKeys?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateCheckNewUploads?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateCheckNewLocales?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateMarkAsUnverified?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateUseMachineTranslation?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateUseTranslationMemory?: boolean;
    /**
     * (Optional) Smart Suggest, requires machine_translation_enabled
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    smartSuggestEnabled?: boolean;
    /**
     * (Optional) Requires smart_suggest_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    smartSuggestUseGlossary?: boolean;
    /**
     * (Optional) Requires smart_suggest_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    smartSuggestUseMachineTranslation?: boolean;
}

export function ProjectUpdateParametersFromJSON(json: any): ProjectUpdateParameters {
    return ProjectUpdateParametersFromJSONTyped(json, false);
}

export function ProjectUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountId': !exists(json, 'account_id') ? undefined : json['account_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'mainFormat': !exists(json, 'main_format') ? undefined : json['main_format'],
        'sharesTranslationMemory': !exists(json, 'shares_translation_memory') ? undefined : json['shares_translation_memory'],
        'projectImage': !exists(json, 'project_image') ? undefined : json['project_image'],
        'removeProjectImage': !exists(json, 'remove_project_image') ? undefined : json['remove_project_image'],
        'workflow': !exists(json, 'workflow') ? undefined : json['workflow'],
        'machineTranslationEnabled': !exists(json, 'machine_translation_enabled') ? undefined : json['machine_translation_enabled'],
        'enableBranching': !exists(json, 'enable_branching') ? undefined : json['enable_branching'],
        'protectMasterBranch': !exists(json, 'protect_master_branch') ? undefined : json['protect_master_branch'],
        'enableAllDataTypeTranslationKeysForTranslators': !exists(json, 'enable_all_data_type_translation_keys_for_translators') ? undefined : json['enable_all_data_type_translation_keys_for_translators'],
        'enableIcuMessageFormat': !exists(json, 'enable_icu_message_format') ? undefined : json['enable_icu_message_format'],
        'zeroPluralFormEnabled': !exists(json, 'zero_plural_form_enabled') ? undefined : json['zero_plural_form_enabled'],
        'autotranslateEnabled': !exists(json, 'autotranslate_enabled') ? undefined : json['autotranslate_enabled'],
        'autotranslateCheckNewTranslationKeys': !exists(json, 'autotranslate_check_new_translation_keys') ? undefined : json['autotranslate_check_new_translation_keys'],
        'autotranslateCheckNewUploads': !exists(json, 'autotranslate_check_new_uploads') ? undefined : json['autotranslate_check_new_uploads'],
        'autotranslateCheckNewLocales': !exists(json, 'autotranslate_check_new_locales') ? undefined : json['autotranslate_check_new_locales'],
        'autotranslateMarkAsUnverified': !exists(json, 'autotranslate_mark_as_unverified') ? undefined : json['autotranslate_mark_as_unverified'],
        'autotranslateUseMachineTranslation': !exists(json, 'autotranslate_use_machine_translation') ? undefined : json['autotranslate_use_machine_translation'],
        'autotranslateUseTranslationMemory': !exists(json, 'autotranslate_use_translation_memory') ? undefined : json['autotranslate_use_translation_memory'],
        'smartSuggestEnabled': !exists(json, 'smart_suggest_enabled') ? undefined : json['smart_suggest_enabled'],
        'smartSuggestUseGlossary': !exists(json, 'smart_suggest_use_glossary') ? undefined : json['smart_suggest_use_glossary'],
        'smartSuggestUseMachineTranslation': !exists(json, 'smart_suggest_use_machine_translation') ? undefined : json['smart_suggest_use_machine_translation'],
    };
}

export function ProjectUpdateParametersToJSON(value?: ProjectUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_id': value.accountId,
        'name': value.name,
        'main_format': value.mainFormat,
        'shares_translation_memory': value.sharesTranslationMemory,
        'project_image': value.projectImage,
        'remove_project_image': value.removeProjectImage,
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


