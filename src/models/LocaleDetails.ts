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
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
    LocaleStatistics,
    LocaleStatisticsFromJSON,
    LocaleStatisticsFromJSONTyped,
    LocaleStatisticsToJSON,
} from './';

/**
 * 
 * @export
 * @interface LocaleDetails
 */
export interface LocaleDetails {
    /**
     * 
     * @type {string}
     * @memberof LocaleDetails
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof LocaleDetails
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof LocaleDetails
     */
    code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof LocaleDetails
     */
    _default?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocaleDetails
     */
    main?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof LocaleDetails
     */
    rtl?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof LocaleDetails
     */
    pluralForms?: Array<string>;
    /**
     * 
     * @type {LocalePreview}
     * @memberof LocaleDetails
     */
    sourceLocale?: LocalePreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof LocaleDetails
     */
    fallbackLocale?: LocalePreview;
    /**
     * 
     * @type {Date}
     * @memberof LocaleDetails
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof LocaleDetails
     */
    updatedAt?: Date;
    /**
     * 
     * @type {LocaleStatistics}
     * @memberof LocaleDetails
     */
    statistics?: LocaleStatistics;
}

export function LocaleDetailsFromJSON(json: any): LocaleDetails {
    return LocaleDetailsFromJSONTyped(json, false);
}

export function LocaleDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'main': !exists(json, 'main') ? undefined : json['main'],
        'rtl': !exists(json, 'rtl') ? undefined : json['rtl'],
        'pluralForms': !exists(json, 'plural_forms') ? undefined : json['plural_forms'],
        'sourceLocale': !exists(json, 'source_locale') ? undefined : LocalePreviewFromJSON(json['source_locale']),
        'fallbackLocale': !exists(json, 'fallback_locale') ? undefined : LocalePreviewFromJSON(json['fallback_locale']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'statistics': !exists(json, 'statistics') ? undefined : LocaleStatisticsFromJSON(json['statistics']),
    };
}

export function LocaleDetailsToJSON(value?: LocaleDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'code': value.code,
        'default': value._default,
        'main': value.main,
        'rtl': value.rtl,
        'plural_forms': value.pluralForms,
        'source_locale': LocalePreviewToJSON(value.sourceLocale),
        'fallback_locale': LocalePreviewToJSON(value.fallbackLocale),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'statistics': LocaleStatisticsToJSON(value.statistics),
    };
}


