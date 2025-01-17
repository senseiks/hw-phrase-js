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
 * @interface LocaleTeamPreview
 */
export interface LocaleTeamPreview {
    /**
     *
     * @type {string}
     * @memberof LocaleTeamPreview
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof LocaleTeamPreview
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof LocaleTeamPreview
     */
    role?: string;
}
export declare function LocaleTeamPreviewFromJSON(json: any): LocaleTeamPreview;
export declare function LocaleTeamPreviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleTeamPreview;
export declare function LocaleTeamPreviewToJSON(value?: LocaleTeamPreview | null): any;
