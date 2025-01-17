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
import { Branch, LocalePreview, ProjectShort, UserPreview } from './';
/**
 *
 * @export
 * @interface JobTemplateDetails
 */
export interface JobTemplateDetails {
    /**
     *
     * @type {string}
     * @memberof JobTemplateDetails
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof JobTemplateDetails
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof JobTemplateDetails
     */
    briefing?: string;
    /**
     *
     * @type {ProjectShort}
     * @memberof JobTemplateDetails
     */
    project?: ProjectShort;
    /**
     *
     * @type {Branch}
     * @memberof JobTemplateDetails
     */
    branch?: Branch;
    /**
     *
     * @type {Date}
     * @memberof JobTemplateDetails
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof JobTemplateDetails
     */
    updatedAt?: Date;
    /**
     *
     * @type {UserPreview}
     * @memberof JobTemplateDetails
     */
    owner?: UserPreview;
    /**
     *
     * @type {UserPreview}
     * @memberof JobTemplateDetails
     */
    creator?: UserPreview;
    /**
     *
     * @type {Array<LocalePreview>}
     * @memberof JobTemplateDetails
     */
    locales?: Array<LocalePreview>;
}
export declare function JobTemplateDetailsFromJSON(json: any): JobTemplateDetails;
export declare function JobTemplateDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplateDetails;
export declare function JobTemplateDetailsToJSON(value?: JobTemplateDetails | null): any;
