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
 * @interface FigmaAttachmentUpdateParameters
 */
export interface FigmaAttachmentUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof FigmaAttachmentUpdateParameters
     */
    branch?: string;
    /**
     * Figma file url
     * @type {string}
     * @memberof FigmaAttachmentUpdateParameters
     */
    url?: string;
}

export function FigmaAttachmentUpdateParametersFromJSON(json: any): FigmaAttachmentUpdateParameters {
    return FigmaAttachmentUpdateParametersFromJSONTyped(json, false);
}

export function FigmaAttachmentUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): FigmaAttachmentUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function FigmaAttachmentUpdateParametersToJSON(value?: FigmaAttachmentUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'url': value.url,
    };
}

