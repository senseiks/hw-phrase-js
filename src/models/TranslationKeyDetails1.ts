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
import {
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface TranslationKeyDetails1
 */
export interface TranslationKeyDetails1 {
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDetails1
     */
    namePlural?: string;
    /**
     * 
     * @type {number}
     * @memberof TranslationKeyDetails1
     */
    commentsCount?: number;
    /**
     * 
     * @type {number}
     * @memberof TranslationKeyDetails1
     */
    maxCharactersAllowed?: number;
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDetails1
     */
    screenshotUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationKeyDetails1
     */
    unformatted?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationKeyDetails1
     */
    xmlSpacePreserve?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDetails1
     */
    originalFile?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationKeyDetails1
     */
    formatValueType?: string;
    /**
     * 
     * @type {UserPreview}
     * @memberof TranslationKeyDetails1
     */
    creator?: UserPreview;
}

export function TranslationKeyDetails1FromJSON(json: any): TranslationKeyDetails1 {
    return TranslationKeyDetails1FromJSONTyped(json, false);
}

export function TranslationKeyDetails1FromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationKeyDetails1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'namePlural': !exists(json, 'name_plural') ? undefined : json['name_plural'],
        'commentsCount': !exists(json, 'comments_count') ? undefined : json['comments_count'],
        'maxCharactersAllowed': !exists(json, 'max_characters_allowed') ? undefined : json['max_characters_allowed'],
        'screenshotUrl': !exists(json, 'screenshot_url') ? undefined : json['screenshot_url'],
        'unformatted': !exists(json, 'unformatted') ? undefined : json['unformatted'],
        'xmlSpacePreserve': !exists(json, 'xml_space_preserve') ? undefined : json['xml_space_preserve'],
        'originalFile': !exists(json, 'original_file') ? undefined : json['original_file'],
        'formatValueType': !exists(json, 'format_value_type') ? undefined : json['format_value_type'],
        'creator': !exists(json, 'creator') ? undefined : UserPreviewFromJSON(json['creator']),
    };
}

export function TranslationKeyDetails1ToJSON(value?: TranslationKeyDetails1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name_plural': value.namePlural,
        'comments_count': value.commentsCount,
        'max_characters_allowed': value.maxCharactersAllowed,
        'screenshot_url': value.screenshotUrl,
        'unformatted': value.unformatted,
        'xml_space_preserve': value.xmlSpacePreserve,
        'original_file': value.originalFile,
        'format_value_type': value.formatValueType,
        'creator': UserPreviewToJSON(value.creator),
    };
}


