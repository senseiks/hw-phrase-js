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
 * @interface AuthorizationCreateParameters
 */
export interface AuthorizationCreateParameters {
    /**
     * A note to help you remember what the access is used for.
     * @type {string}
     * @memberof AuthorizationCreateParameters
     */
    note?: string;
    /**
     * A list of scopes that the access can be used for.
     * @type {Array<string>}
     * @memberof AuthorizationCreateParameters
     */
    scopes?: Array<string>;
    /**
     * Expiration date for the authorization token. Null means no expiration date (default).
     * @type {Date}
     * @memberof AuthorizationCreateParameters
     */
    expiresAt?: Date;
}

export function AuthorizationCreateParametersFromJSON(json: any): AuthorizationCreateParameters {
    return AuthorizationCreateParametersFromJSONTyped(json, false);
}

export function AuthorizationCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'note': !exists(json, 'note') ? undefined : json['note'],
        'scopes': !exists(json, 'scopes') ? undefined : json['scopes'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
    };
}

export function AuthorizationCreateParametersToJSON(value?: AuthorizationCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'note': value.note,
        'scopes': value.scopes,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
    };
}


