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
 * @interface JobTemplateLocaleUpdateParameters
 */
export interface JobTemplateLocaleUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobTemplateLocaleUpdateParameters
     */
    branch?: string;
    /**
     * locale id
     * @type {string}
     * @memberof JobTemplateLocaleUpdateParameters
     */
    localeId?: string;
    /**
     * Array of user ids to be assigned to the job template locale
     * @type {Array<string>}
     * @memberof JobTemplateLocaleUpdateParameters
     */
    userIds?: Array<string>;
    /**
     * Array of reviewer ids to be assigned to the job template locale
     * @type {Array<string>}
     * @memberof JobTemplateLocaleUpdateParameters
     */
    reviewerIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as translators
     * @type {Array<string>}
     * @memberof JobTemplateLocaleUpdateParameters
     */
    translatorTeamIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof JobTemplateLocaleUpdateParameters
     */
    reviewerTeamIds?: Array<string>;
}
export declare function JobTemplateLocaleUpdateParametersFromJSON(json: any): JobTemplateLocaleUpdateParameters;
export declare function JobTemplateLocaleUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplateLocaleUpdateParameters;
export declare function JobTemplateLocaleUpdateParametersToJSON(value?: JobTemplateLocaleUpdateParameters | null): any;
