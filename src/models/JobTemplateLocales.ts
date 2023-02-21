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
    Items,
    ItemsFromJSON,
    ItemsFromJSONTyped,
    ItemsToJSON,
    JobTemplatePreview,
    JobTemplatePreviewFromJSON,
    JobTemplatePreviewFromJSONTyped,
    JobTemplatePreviewToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface JobTemplateLocales
 */
export interface JobTemplateLocales {
    /**
     * 
     * @type {string}
     * @memberof JobTemplateLocales
     */
    id?: string;
    /**
     * 
     * @type {JobTemplatePreview}
     * @memberof JobTemplateLocales
     */
    jobTemplate?: JobTemplatePreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof JobTemplateLocales
     */
    locale?: LocalePreview;
    /**
     * 
     * @type {Array<Items>}
     * @memberof JobTemplateLocales
     */
    users?: Array<Items>;
    /**
     * 
     * @type {Array<Items>}
     * @memberof JobTemplateLocales
     */
    teams?: Array<Items>;
}

export function JobTemplateLocalesFromJSON(json: any): JobTemplateLocales {
    return JobTemplateLocalesFromJSONTyped(json, false);
}

export function JobTemplateLocalesFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplateLocales {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'jobTemplate': !exists(json, 'job_template') ? undefined : JobTemplatePreviewFromJSON(json['job_template']),
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(ItemsFromJSON)),
        'teams': !exists(json, 'teams') ? undefined : ((json['teams'] as Array<any>).map(ItemsFromJSON)),
    };
}

export function JobTemplateLocalesToJSON(value?: JobTemplateLocales | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'job_template': JobTemplatePreviewToJSON(value.jobTemplate),
        'locale': LocalePreviewToJSON(value.locale),
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(ItemsToJSON)),
        'teams': value.teams === undefined ? undefined : ((value.teams as Array<any>).map(ItemsToJSON)),
    };
}


