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
import { UserPreview } from './';
/**
 *
 * @export
 * @interface TranslationKeyDetails
 */
export interface TranslationKeyDetails {
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    nameHash?: string;
    /**
     *
     * @type {boolean}
     * @memberof TranslationKeyDetails
     */
    plural?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof TranslationKeyDetails
     */
    tags?: Array<string>;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    dataType?: string;
    /**
     *
     * @type {Date}
     * @memberof TranslationKeyDetails
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof TranslationKeyDetails
     */
    updatedAt?: Date;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    namePlural?: string;
    /**
     *
     * @type {number}
     * @memberof TranslationKeyDetails
     */
    commentsCount?: number;
    /**
     *
     * @type {number}
     * @memberof TranslationKeyDetails
     */
    maxCharactersAllowed?: number;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    screenshotUrl?: string;
    /**
     *
     * @type {boolean}
     * @memberof TranslationKeyDetails
     */
    unformatted?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof TranslationKeyDetails
     */
    xmlSpacePreserve?: boolean;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    originalFile?: string;
    /**
     *
     * @type {string}
     * @memberof TranslationKeyDetails
     */
    formatValueType?: string;
    /**
     *
     * @type {UserPreview}
     * @memberof TranslationKeyDetails
     */
    creator?: UserPreview;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof TranslationKeyDetails
     */
    customMetadata?: {
        [key: string]: string;
    };
}
export declare function TranslationKeyDetailsFromJSON(json: any): TranslationKeyDetails;
export declare function TranslationKeyDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationKeyDetails;
export declare function TranslationKeyDetailsToJSON(value?: TranslationKeyDetails | null): any;
