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
    ProjectShort,
    ProjectShortFromJSON,
    ProjectShortFromJSONTyped,
    ProjectShortToJSON,
} from './';

/**
 * 
 * @export
 * @interface ReleasePreview
 */
export interface ReleasePreview {
    /**
     * 
     * @type {string}
     * @memberof ReleasePreview
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof ReleasePreview
     */
    version?: number;
    /**
     * 
     * @type {string}
     * @memberof ReleasePreview
     */
    appMinVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePreview
     */
    appMaxVersion?: string;
    /**
     * 
     * @type {string}
     * @memberof ReleasePreview
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleasePreview
     */
    platforms?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleasePreview
     */
    environments?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ReleasePreview
     */
    localeCodes?: Array<string>;
    /**
     * 
     * @type {ProjectShort}
     * @memberof ReleasePreview
     */
    project?: ProjectShort;
    /**
     * 
     * @type {Date}
     * @memberof ReleasePreview
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof ReleasePreview
     */
    updatedAt?: Date;
}

export function ReleasePreviewFromJSON(json: any): ReleasePreview {
    return ReleasePreviewFromJSONTyped(json, false);
}

export function ReleasePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReleasePreview {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
        'appMinVersion': !exists(json, 'app_min_version') ? undefined : json['app_min_version'],
        'appMaxVersion': !exists(json, 'app_max_version') ? undefined : json['app_max_version'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'platforms': !exists(json, 'platforms') ? undefined : json['platforms'],
        'environments': !exists(json, 'environments') ? undefined : json['environments'],
        'localeCodes': !exists(json, 'locale_codes') ? undefined : json['locale_codes'],
        'project': !exists(json, 'project') ? undefined : ProjectShortFromJSON(json['project']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}

export function ReleasePreviewToJSON(value?: ReleasePreview | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'version': value.version,
        'app_min_version': value.appMinVersion,
        'app_max_version': value.appMaxVersion,
        'description': value.description,
        'platforms': value.platforms,
        'environments': value.environments,
        'locale_codes': value.localeCodes,
        'project': ProjectShortToJSON(value.project),
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}


