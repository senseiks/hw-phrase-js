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
import { LocalePreview } from './';
/**
 *
 * @export
 * @interface Locale
 */
export interface Locale {
    /**
     *
     * @type {string}
     * @memberof Locale
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Locale
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof Locale
     */
    code?: string;
    /**
     *
     * @type {boolean}
     * @memberof Locale
     */
    _default?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Locale
     */
    main?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof Locale
     */
    rtl?: boolean;
    /**
     *
     * @type {Array<string>}
     * @memberof Locale
     */
    pluralForms?: Array<string>;
    /**
     *
     * @type {LocalePreview}
     * @memberof Locale
     */
    sourceLocale?: LocalePreview;
    /**
     *
     * @type {LocalePreview}
     * @memberof Locale
     */
    fallbackLocale?: LocalePreview;
    /**
     *
     * @type {Date}
     * @memberof Locale
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Locale
     */
    updatedAt?: Date;
}
export declare function LocaleFromJSON(json: any): Locale;
export declare function LocaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Locale;
export declare function LocaleToJSON(value?: Locale | null): any;