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
 * @interface JobLocaleUpdateParameters
 */
export interface JobLocaleUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobLocaleUpdateParameters
     */
    branch?: string;
    /**
     * ID of a target locale to update
     * @type {string}
     * @memberof JobLocaleUpdateParameters
     */
    localeId?: string;
    /**
     * Array of user ids to be assigned to the job locale
     * @type {Array<string>}
     * @memberof JobLocaleUpdateParameters
     */
    userIds?: Array<string>;
    /**
     * Array of reviewer ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof JobLocaleUpdateParameters
     */
    reviewerIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as translators
     * @type {Array<string>}
     * @memberof JobLocaleUpdateParameters
     */
    translatorTeamIds?: Array<string>;
    /**
     * Array of team ids to be assigned to the job locale as reviewers
     * @type {Array<string>}
     * @memberof JobLocaleUpdateParameters
     */
    reviewerTeamIds?: Array<string>;
}
export declare function JobLocaleUpdateParametersFromJSON(json: any): JobLocaleUpdateParameters;
export declare function JobLocaleUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobLocaleUpdateParameters;
export declare function JobLocaleUpdateParametersToJSON(value?: JobLocaleUpdateParameters | null): any;
