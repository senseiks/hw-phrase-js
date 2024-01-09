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
 * @interface OrganizationJobTemplateLocaleUpdateParameters
 */
export interface OrganizationJobTemplateLocaleUpdateParameters {
    /**
     * locale name
     * @type {string}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    localeName?: string;
    /**
     * locale code
     * @type {string}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    localeCode?: string;
    /**
     * Array of user ids to be assigned to the job template locale
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    userIds?: Array<string>;
    /**
     * Array of reviewer ids to be assigned to the job template locale
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    reviewerIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as translators
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    translatorTeamIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof OrganizationJobTemplateLocaleUpdateParameters
     */
    reviewerTeamIds?: Array<string>;
}
export declare function OrganizationJobTemplateLocaleUpdateParametersFromJSON(json: any): OrganizationJobTemplateLocaleUpdateParameters;
export declare function OrganizationJobTemplateLocaleUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrganizationJobTemplateLocaleUpdateParameters;
export declare function OrganizationJobTemplateLocaleUpdateParametersToJSON(value?: OrganizationJobTemplateLocaleUpdateParameters | null): any;