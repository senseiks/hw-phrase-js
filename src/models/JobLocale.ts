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
import {
    JobPreview,
    JobPreviewFromJSON,
    JobPreviewFromJSONTyped,
    JobPreviewToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
    UserPreview,
    UserPreviewFromJSON,
    UserPreviewFromJSONTyped,
    UserPreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface JobLocale
 */
export interface JobLocale {
    /**
     * 
     * @type {string}
     * @memberof JobLocale
     */
    id?: string;
    /**
     * 
     * @type {JobPreview}
     * @memberof JobLocale
     */
    job?: JobPreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof JobLocale
     */
    locale?: LocalePreview;
    /**
     * 
     * @type {Array<UserPreview>}
     * @memberof JobLocale
     */
    users?: Array<UserPreview>;
    /**
     * 
     * @type {boolean}
     * @memberof JobLocale
     */
    completed?: boolean;
}

export function JobLocaleFromJSON(json: any): JobLocale {
    return JobLocaleFromJSONTyped(json, false);
}

export function JobLocaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobLocale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'job': !exists(json, 'job') ? undefined : JobPreviewFromJSON(json['job']),
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(UserPreviewFromJSON)),
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
    };
}

export function JobLocaleToJSON(value?: JobLocale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'job': JobPreviewToJSON(value.job),
        'locale': LocalePreviewToJSON(value.locale),
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(UserPreviewToJSON)),
        'completed': value.completed,
    };
}


