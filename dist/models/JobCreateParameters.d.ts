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
 * @interface JobCreateParameters
 */
export interface JobCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobCreateParameters
     */
    branch?: string;
    /**
     * Job name
     * @type {string}
     * @memberof JobCreateParameters
     */
    name?: string;
    /**
     * The API id of the source language
     * @type {string}
     * @memberof JobCreateParameters
     */
    sourceLocaleId?: string;
    /**
     * Briefing for the translators
     * @type {string}
     * @memberof JobCreateParameters
     */
    briefing?: string;
    /**
     * Date the job should be finished
     * @type {Date}
     * @memberof JobCreateParameters
     */
    dueDate?: Date;
    /**
     * URL to a ticket for this job (e.g. Jira, Trello)
     * @type {string}
     * @memberof JobCreateParameters
     */
    ticketUrl?: string;
    /**
     * tags of keys that should be included within the job
     * @type {Array<string>}
     * @memberof JobCreateParameters
     */
    tags?: Array<string>;
    /**
     * ids of keys that should be included within the job
     * @type {Array<string>}
     * @memberof JobCreateParameters
     */
    translationKeyIds?: Array<string>;
    /**
     * id of a job template you would like to model the created job after. Any manually added parameters will take preference over template attributes.
     * @type {string}
     * @memberof JobCreateParameters
     */
    jobTemplateId?: string;
}
export declare function JobCreateParametersFromJSON(json: any): JobCreateParameters;
export declare function JobCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCreateParameters;
export declare function JobCreateParametersToJSON(value?: JobCreateParameters | null): any;