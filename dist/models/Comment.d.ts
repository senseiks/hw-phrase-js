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
 * @interface Comment
 */
export interface Comment {
    /**
     *
     * @type {string}
     * @memberof Comment
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Comment
     */
    message?: string;
    /**
     *
     * @type {boolean}
     * @memberof Comment
     */
    hasReplies?: boolean;
    /**
     *
     * @type {UserPreview}
     * @memberof Comment
     */
    user?: UserPreview;
    /**
     *
     * @type {Date}
     * @memberof Comment
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Comment
     */
    updatedAt?: Date;
    /**
     *
     * @type {Array<UserPreview>}
     * @memberof Comment
     */
    mentionedUsers?: Array<UserPreview>;
    /**
     *
     * @type {Array<LocalePreview>}
     * @memberof Comment
     */
    locales?: Array<LocalePreview>;
}
export declare function CommentFromJSON(json: any): Comment;
export declare function CommentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Comment;
export declare function CommentToJSON(value?: Comment | null): any;
