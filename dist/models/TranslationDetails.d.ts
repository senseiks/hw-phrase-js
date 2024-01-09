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
import { KeyPreview, LocalePreview, UserPreview } from './';
/**
 *
 * @export
 * @interface TranslationDetails
 */
export interface TranslationDetails {
    /**
     *
     * @type {string}
     * @memberof TranslationDetails
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof TranslationDetails
     */
    content?: string;
    /**
     *
     * @type {boolean}
     * @memberof TranslationDetails
     */
    unverified?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TranslationDetails
     */
    excluded?: boolean;
    /**
     *
     * @type {string}
     * @memberof TranslationDetails
     */
    pluralSuffix?: string;
    /**
     *
     * @type {KeyPreview}
     * @memberof TranslationDetails
     */
    key?: KeyPreview;
    /**
     *
     * @type {LocalePreview}
     * @memberof TranslationDetails
     */
    locale?: LocalePreview;
    /**
     *
     * @type {Array<string>}
     * @memberof TranslationDetails
     */
    placeholders?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof TranslationDetails
     */
    state?: string;
    /**
     *
     * @type {Date}
     * @memberof TranslationDetails
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof TranslationDetails
     */
    updatedAt?: Date;
    /**
     *
     * @type {UserPreview}
     * @memberof TranslationDetails
     */
    user?: UserPreview;
    /**
     *
     * @type {number}
     * @memberof TranslationDetails
     */
    wordCount?: number;
}
export declare function TranslationDetailsFromJSON(json: any): TranslationDetails;
export declare function TranslationDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationDetails;
export declare function TranslationDetailsToJSON(value?: TranslationDetails | null): any;
