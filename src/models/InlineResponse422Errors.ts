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
 * @interface InlineResponse422Errors
 */
export interface InlineResponse422Errors {
    /**
     * 
     * @type {string}
     * @memberof InlineResponse422Errors
     */
    resource?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse422Errors
     */
    field?: string;
    /**
     * 
     * @type {string}
     * @memberof InlineResponse422Errors
     */
    message?: string;
}

export function InlineResponse422ErrorsFromJSON(json: any): InlineResponse422Errors {
    return InlineResponse422ErrorsFromJSONTyped(json, false);
}

export function InlineResponse422ErrorsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse422Errors {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resource': !exists(json, 'resource') ? undefined : json['resource'],
        'field': !exists(json, 'field') ? undefined : json['field'],
        'message': !exists(json, 'message') ? undefined : json['message'],
    };
}

export function InlineResponse422ErrorsToJSON(value?: InlineResponse422Errors | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resource': value.resource,
        'field': value.field,
        'message': value.message,
    };
}


