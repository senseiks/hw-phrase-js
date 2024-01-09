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
/**
 *
 * @export
 * @interface ScreenshotMarkerCreateParameters
 */
export interface ScreenshotMarkerCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof ScreenshotMarkerCreateParameters
     */
    branch?: string;
    /**
     * Specify the Key ID which should be highlighted on the specified screenshot. The Key must belong to the project.
     * @type {string}
     * @memberof ScreenshotMarkerCreateParameters
     */
    keyId?: string;
    /**
     * Presentation details of the screenshot marker in JSON format.<br/><br/>Each Screenshot Marker is represented as a rectangular shaped highlight box with the name of the specified Key attached. You can specify the marker position on the screenshot (<code>x</code>-axis and <code>y</code>-axis in pixels) from the top left corner of the screenshot and the dimensions of the marker itself (<code>w</code> and <code>h</code> in pixels).
     * @type {string}
     * @memberof ScreenshotMarkerCreateParameters
     */
    presentation?: string;
}
export declare function ScreenshotMarkerCreateParametersFromJSON(json: any): ScreenshotMarkerCreateParameters;
export declare function ScreenshotMarkerCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenshotMarkerCreateParameters;
export declare function ScreenshotMarkerCreateParametersToJSON(value?: ScreenshotMarkerCreateParameters | null): any;