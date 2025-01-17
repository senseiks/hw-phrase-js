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
 * @interface JobTemplatePreview
 */
export interface JobTemplatePreview {
    /**
     *
     * @type {string}
     * @memberof JobTemplatePreview
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof JobTemplatePreview
     */
    name?: string;
}
export declare function JobTemplatePreviewFromJSON(json: any): JobTemplatePreview;
export declare function JobTemplatePreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplatePreview;
export declare function JobTemplatePreviewToJSON(value?: JobTemplatePreview | null): any;
