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
 * @interface AuthorizationWithToken1
 */
export interface AuthorizationWithToken1 {
    /**
     * 
     * @type {string}
     * @memberof AuthorizationWithToken1
     */
    token?: string;
}

export function AuthorizationWithToken1FromJSON(json: any): AuthorizationWithToken1 {
    return AuthorizationWithToken1FromJSONTyped(json, false);
}

export function AuthorizationWithToken1FromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationWithToken1 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'token': !exists(json, 'token') ? undefined : json['token'],
    };
}

export function AuthorizationWithToken1ToJSON(value?: AuthorizationWithToken1 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'token': value.token,
    };
}


