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
 * @interface JobUpdateParameters
 */
export interface JobUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobUpdateParameters
     */
    branch?: string;
    /**
     * Job name
     * @type {string}
     * @memberof JobUpdateParameters
     */
    name?: string;
    /**
     * Briefing for the translators
     * @type {string}
     * @memberof JobUpdateParameters
     */
    briefing?: string;
    /**
     * Date the job should be finished
     * @type {Date}
     * @memberof JobUpdateParameters
     */
    dueDate?: Date;
    /**
     * URL to a ticket for this job (e.g. Jira, Trello)
     * @type {string}
     * @memberof JobUpdateParameters
     */
    ticketUrl?: string;
}
export declare function JobUpdateParametersFromJSON(json: any): JobUpdateParameters;
export declare function JobUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobUpdateParameters;
export declare function JobUpdateParametersToJSON(value?: JobUpdateParameters | null): any;
