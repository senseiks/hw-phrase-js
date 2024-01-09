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
 * @interface JobTemplateUpdateParameters
 */
export interface JobTemplateUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof JobTemplateUpdateParameters
     */
    branch?: string;
    /**
     * Job template name
     * @type {string}
     * @memberof JobTemplateUpdateParameters
     */
    name: string;
    /**
     * Briefing for the translators
     * @type {string}
     * @memberof JobTemplateUpdateParameters
     */
    briefing?: string;
}
export declare function JobTemplateUpdateParametersFromJSON(json: any): JobTemplateUpdateParameters;
export declare function JobTemplateUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplateUpdateParameters;
export declare function JobTemplateUpdateParametersToJSON(value?: JobTemplateUpdateParameters | null): any;