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
    JobTemplatePreview,
    JobTemplatePreviewFromJSON,
    JobTemplatePreviewFromJSONTyped,
    JobTemplatePreviewToJSON,
    JobTemplateUserPreview,
    JobTemplateUserPreviewFromJSON,
    JobTemplateUserPreviewFromJSONTyped,
    JobTemplateUserPreviewToJSON,
    LocalePreview,
    LocalePreviewFromJSON,
    LocalePreviewFromJSONTyped,
    LocalePreviewToJSON,
} from './';

/**
 * 
 * @export
 * @interface JobTemplateLocale
 */
export interface JobTemplateLocale {
    /**
     * 
     * @type {string}
     * @memberof JobTemplateLocale
     */
    id?: string;
    /**
     * 
     * @type {JobTemplatePreview}
     * @memberof JobTemplateLocale
     */
    jobTemplate?: JobTemplatePreview;
    /**
     * 
     * @type {LocalePreview}
     * @memberof JobTemplateLocale
     */
    locale?: LocalePreview;
    /**
     * 
     * @type {Array<JobTemplateUserPreview>}
     * @memberof JobTemplateLocale
     */
    users?: Array<JobTemplateUserPreview>;
}

export function JobTemplateLocaleFromJSON(json: any): JobTemplateLocale {
    return JobTemplateLocaleFromJSONTyped(json, false);
}

export function JobTemplateLocaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplateLocale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'jobTemplate': !exists(json, 'job_template') ? undefined : JobTemplatePreviewFromJSON(json['job_template']),
        'locale': !exists(json, 'locale') ? undefined : LocalePreviewFromJSON(json['locale']),
        'users': !exists(json, 'users') ? undefined : ((json['users'] as Array<any>).map(JobTemplateUserPreviewFromJSON)),
    };
}

export function JobTemplateLocaleToJSON(value?: JobTemplateLocale | null): any {
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
        'users': value.users === undefined ? undefined : ((value.users as Array<any>).map(JobTemplateUserPreviewToJSON)),
    };
}


