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
 * @interface JobCommentCreateParameters
 */
export interface JobCommentCreateParameters {
    /**
     * Job comment message
     * @type {string}
     * @memberof JobCommentCreateParameters
     */
    message?: string;
}
export declare function JobCommentCreateParametersFromJSON(json: any): JobCommentCreateParameters;
export declare function JobCommentCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobCommentCreateParameters;
export declare function JobCommentCreateParametersToJSON(value?: JobCommentCreateParameters | null): any;
