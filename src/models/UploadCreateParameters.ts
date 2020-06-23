/* tslint:disable */
/* eslint-disable */
/**
 * Phrase API Reference
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
 * @interface UploadCreateParameters
 */
export interface UploadCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof UploadCreateParameters
     */
    branch?: string;
    /**
     * File to be imported
     * @type {Blob}
     * @memberof UploadCreateParameters
     */
    file?: Blob;
    /**
     * File format. Auto-detected when possible and not specified.
     * @type {string}
     * @memberof UploadCreateParameters
     */
    fileFormat?: string;
    /**
     * Locale of the file\'s content. Can be the name or public id of the locale. Preferred is the public id.
     * @type {string}
     * @memberof UploadCreateParameters
     */
    localeId?: string;
    /**
     * List of tags separated by comma to be associated with the new keys contained in the upload.
     * @type {string}
     * @memberof UploadCreateParameters
     */
    tags?: string;
    /**
     * Indicates whether existing translations should be updated with the file content.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    updateTranslations?: boolean;
    /**
     * Existing key descriptions will be updated with the file content. Empty descriptions overwrite existing descriptions.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    updateDescriptions?: boolean;
    /**
     * This option is obsolete. Providing the option will cause a bad request error.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    convertEmoji?: boolean;
    /**
     * Indicates whether the upload should not create upload tags.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    skipUploadTags?: boolean;
    /**
     * Indicates whether the upload should unverify updated translations.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    skipUnverification?: boolean;
    /**
     * Enforces a specific encoding on the file contents. Valid options are \"UTF-8\", \"UTF-16\" and \"ISO-8859-1\".
     * @type {string}
     * @memberof UploadCreateParameters
     */
    fileEncoding?: string;
    /**
     * Optional, format specific mapping between locale names and the columns the translations to those locales are contained in.
     * @type {{ [key: string]: string; }}
     * @memberof UploadCreateParameters
     */
    localeMapping?: { [key: string]: string; };
    /**
     * Additional options available for specific formats. See our format guide for complete list.
     * @type {{ [key: string]: string; }}
     * @memberof UploadCreateParameters
     */
    formatOptions?: { [key: string]: string; };
    /**
     * If set, translations for the uploaded language will be fetched automatically.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    autotranslate?: boolean;
    /**
     * Indicated whether the imported translations should be marked as reviewed. This setting is available if the review workflow (currently beta) is enabled for the project.
     * @type {boolean}
     * @memberof UploadCreateParameters
     */
    markReviewed?: boolean;
}

export function UploadCreateParametersFromJSON(json: any): UploadCreateParameters {
    return UploadCreateParametersFromJSONTyped(json, false);
}

export function UploadCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'file': !exists(json, 'file') ? undefined : json['file'],
        'fileFormat': !exists(json, 'file_format') ? undefined : json['file_format'],
        'localeId': !exists(json, 'locale_id') ? undefined : json['locale_id'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'updateTranslations': !exists(json, 'update_translations') ? undefined : json['update_translations'],
        'updateDescriptions': !exists(json, 'update_descriptions') ? undefined : json['update_descriptions'],
        'convertEmoji': !exists(json, 'convert_emoji') ? undefined : json['convert_emoji'],
        'skipUploadTags': !exists(json, 'skip_upload_tags') ? undefined : json['skip_upload_tags'],
        'skipUnverification': !exists(json, 'skip_unverification') ? undefined : json['skip_unverification'],
        'fileEncoding': !exists(json, 'file_encoding') ? undefined : json['file_encoding'],
        'localeMapping': !exists(json, 'locale_mapping') ? undefined : json['locale_mapping'],
        'formatOptions': !exists(json, 'format_options') ? undefined : json['format_options'],
        'autotranslate': !exists(json, 'autotranslate') ? undefined : json['autotranslate'],
        'markReviewed': !exists(json, 'mark_reviewed') ? undefined : json['mark_reviewed'],
    };
}

export function UploadCreateParametersToJSON(value?: UploadCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'file': value.file,
        'file_format': value.fileFormat,
        'locale_id': value.localeId,
        'tags': value.tags,
        'update_translations': value.updateTranslations,
        'update_descriptions': value.updateDescriptions,
        'convert_emoji': value.convertEmoji,
        'skip_upload_tags': value.skipUploadTags,
        'skip_unverification': value.skipUnverification,
        'file_encoding': value.fileEncoding,
        'locale_mapping': value.localeMapping,
        'format_options': value.formatOptions,
        'autotranslate': value.autotranslate,
        'mark_reviewed': value.markReviewed,
    };
}


