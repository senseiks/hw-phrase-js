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
 * @interface LocaleCreateParameters
 */
export interface LocaleCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof LocaleCreateParameters
     */
    branch?: string;
    /**
     * Locale name
     * @type {string}
     * @memberof LocaleCreateParameters
     */
    name?: string;
    /**
     * Locale ISO code
     * @type {string}
     * @memberof LocaleCreateParameters
     */
    code?: string;
    /**
     * Indicates whether locale is the default locale. If set to true, the previous default locale the project is no longer the default locale.
     * @type {boolean}
     * @memberof LocaleCreateParameters
     */
    _default?: boolean;
    /**
     * Indicates whether locale is a main locale. Main locales are part of the <a href=\"https://support.phrase.com/hc/en-us/articles/5784094755484\" target=\"_blank\">Verification System</a> feature.
     * @type {boolean}
     * @memberof LocaleCreateParameters
     */
    main?: boolean;
    /**
     * Indicates whether locale is a RTL (Right-to-Left) locale.
     * @type {boolean}
     * @memberof LocaleCreateParameters
     */
    rtl?: boolean;
    /**
     * Source locale. Can be the name or public id of the locale. Preferred is the public id.
     * @type {string}
     * @memberof LocaleCreateParameters
     */
    sourceLocaleId?: string;
    /**
     * Fallback locale for empty translations. Can be a locale name or id.
     * @type {string}
     * @memberof LocaleCreateParameters
     */
    fallbackLocaleId?: string;
    /**
     * Indicates that new translations for this locale should be marked as unverified. Part of the <a href=\"https://support.phrase.com/hc/en-us/articles/5784094755484\" target=\"_blank\">Advanced Workflows</a> feature.
     * @type {boolean}
     * @memberof LocaleCreateParameters
     */
    unverifyNewTranslations?: boolean;
    /**
     * Indicates that updated translations for this locale should be marked as unverified. Part of the <a href=\"https://support.phrase.com/hc/en-us/articles/5784094755484\" target=\"_blank\">Advanced Workflows</a> feature.
     * @type {boolean}
     * @memberof LocaleCreateParameters
     */
    unverifyUpdatedTranslations?: boolean;
    /**
     * If set, translations for this locale will be fetched automatically, right after creation.
     * @type {boolean}
     * @memberof LocaleCreateParameters
     */
    autotranslate?: boolean;
}
export declare function LocaleCreateParametersFromJSON(json: any): LocaleCreateParameters;
export declare function LocaleCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocaleCreateParameters;
export declare function LocaleCreateParametersToJSON(value?: LocaleCreateParameters | null): any;
