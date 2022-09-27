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
 * @interface VariableCreateParameters
 */
export interface VariableCreateParameters {
    /**
     * Name of the variable
     * @type {string}
     * @memberof VariableCreateParameters
     */
    name?: string;
    /**
     * Value of the variable
     * @type {string}
     * @memberof VariableCreateParameters
     */
    value?: string;
}

export function VariableCreateParametersFromJSON(json: any): VariableCreateParameters {
    return VariableCreateParametersFromJSONTyped(json, false);
}

export function VariableCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): VariableCreateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function VariableCreateParametersToJSON(value?: VariableCreateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}


