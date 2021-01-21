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
/**
 * 
 * @export
 * @interface ScreenshotMarkerUpdateParameters
 */
export interface ScreenshotMarkerUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof ScreenshotMarkerUpdateParameters
     */
    branch?: string;
    /**
     * Specify the Key ID which should be highlighted on the specified screenshot. The Key must belong to the project.
     * @type {string}
     * @memberof ScreenshotMarkerUpdateParameters
     */
    keyId?: string;
    /**
     * Presentation details of the screenshot marker in JSON format.<br/><br/>Each Screenshot Marker is represented as a rectangular shaped highlight box with the name of the specified Key attached. You can specify the marker position on the screenshot (<code>x</code>-axis and <code>y</code>-axis in pixels) from the top left corner of the screenshot and the dimensions of the marker itself (<code>w</code> and <code>h</code> in pixels).
     * @type {string}
     * @memberof ScreenshotMarkerUpdateParameters
     */
    presentation?: string;
}

export function ScreenshotMarkerUpdateParametersFromJSON(json: any): ScreenshotMarkerUpdateParameters {
    return ScreenshotMarkerUpdateParametersFromJSONTyped(json, false);
}

export function ScreenshotMarkerUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenshotMarkerUpdateParameters {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'branch': !exists(json, 'branch') ? undefined : json['branch'],
        'keyId': !exists(json, 'key_id') ? undefined : json['key_id'],
        'presentation': !exists(json, 'presentation') ? undefined : json['presentation'],
    };
}

export function ScreenshotMarkerUpdateParametersToJSON(value?: ScreenshotMarkerUpdateParameters | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'branch': value.branch,
        'key_id': value.keyId,
        'presentation': value.presentation,
    };
}


