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
 * @interface CommentMarkReadParameters
 */
export interface CommentMarkReadParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof CommentMarkReadParameters
     */
    branch?: string;
}
export declare function CommentMarkReadParametersFromJSON(json: any): CommentMarkReadParameters;
export declare function CommentMarkReadParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommentMarkReadParameters;
export declare function CommentMarkReadParametersToJSON(value?: CommentMarkReadParameters | null): any;
