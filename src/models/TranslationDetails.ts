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
    KeyPreview,
    KeyPreviewFromJSON,
    KeyPreviewFromJSONTyped,
    KeyPreviewToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
    Translation,
    TranslationFromJSON,
    TranslationFromJSONTyped,
    TranslationToJSON,
    TranslationDetails1,
    TranslationDetails1FromJSON,
    TranslationDetails1FromJSONTyped,
    TranslationDetails1ToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface TranslationDetails
 */
export interface TranslationDetails {
    /**
     * 
     * @type {string}
     * @memberof TranslationDetails
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TranslationDetails
     */
    content?: string;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationDetails
     */
    unverified?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof TranslationDetails
     */
    excluded?: boolean;
    /**
     * 
     * @type {string}
     * @memberof TranslationDetails
     */
    pluralSuffix?: string;
    /**
     * 
     * @type {KeyPreview}
     * @memberof TranslationDetails
     */
    key?: KeyPreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof TranslationDetails
     */
    locale?: LocalePreview;
    /**
     * 
     * @type {Array<string>}
     * @memberof TranslationDetails
     */
    placeholders?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof TranslationDetails
     */
    state?: string;
    /**
     * 
     * @type {Date}
     * @memberof TranslationDetails
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof TranslationDetails
     */
    updatedAt?: Date;
    /**
     * 
     * @type {UserPreview}
     * @memberof TranslationDetails
     */
    user?: UserPreview;
    /**
     * 
     * @type {number}
     * @memberof TranslationDetails
     */
    wordCount?: number;
}

export function TranslationDetailsFromJSON(json: any): TranslationDetails {
    return TranslationDetailsFromJSONTyped(json, false);
}

export function TranslationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'content': !exists(json, 'content') ? undefined : json['content'],
        'unverified': !exists(json, 'unverified') ? undefined : json['unverified'],
        'excluded': !exists(json, 'excluded') ? undefined : json['excluded'],
        'pluralSuffix': !exists(json, 'plural_suffix') ? undefined : json['plural_suffix'],
        'key': !exists(json, 'key') ? undefined : KeyPreviewFromJSON(json['key']),
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
        'placeholders': !exists(json, 'placeholders') ? undefined : json['placeholders'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'user': !exists(json, 'user') ? undefined : UserPreviewFromJSON(json['user']),
        'wordCount': !exists(json, 'word_count') ? undefined : json['word_count'],
    };
}

export function TranslationDetailsToJSON(value?: TranslationDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'content': value.content,
        'unverified': value.unverified,
        'excluded': value.excluded,
        'plural_suffix': value.pluralSuffix,
        'key': KeyPreviewToJSON(value.key),
        'locale': LocalePreviewToJSON(value.locale),
        'placeholders': value.placeholders,
        'state': value.state,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'user': UserPreviewToJSON(value.user),
        'word_count': value.wordCount,
    };
}


