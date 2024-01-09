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
import { LocalePreview, UserPreview } from './';
/**
 *
 * @export
 * @interface OrganizationJobTemplateDetails
 */
export interface OrganizationJobTemplateDetails {
    /**
     *
     * @type {string}
     * @memberof OrganizationJobTemplateDetails
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationJobTemplateDetails
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof OrganizationJobTemplateDetails
     */
    briefing?: string;
    /**
     *
     * @type {Date}
     * @memberof OrganizationJobTemplateDetails
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof OrganizationJobTemplateDetails
     */
    updatedAt?: Date;
    /**
     *
     * @type {UserPreview}
     * @memberof OrganizationJobTemplateDetails
     */
    owner?: UserPreview;
    /**
     *
     * @type {UserPreview}
     * @memberof OrganizationJobTemplateDetails
     */
    creator?: UserPreview;
    /**
     *
     * @type {Array<LocalePreview>}
     * @memberof OrganizationJobTemplateDetails
     */
    locales?: Array<LocalePreview>;
}
export declare function OrganizationJobTemplateDetailsFromJSON(json: any): OrganizationJobTemplateDetails;
export declare function OrganizationJobTemplateDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationJobTemplateDetails;
export declare function OrganizationJobTemplateDetailsToJSON(value?: OrganizationJobTemplateDetails | null): any;
