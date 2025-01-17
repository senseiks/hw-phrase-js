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
 * @interface GlossaryTermTranslationCreateParameters
 */
export interface GlossaryTermTranslationCreateParameters {
    /**
     * Identifies the language for this translation
     * @type {string}
     * @memberof GlossaryTermTranslationCreateParameters
     */
    localeCode?: string;
    /**
     * The content of the translation
     * @type {string}
     * @memberof GlossaryTermTranslationCreateParameters
     */
    content?: string;
}
export declare function GlossaryTermTranslationCreateParametersFromJSON(json: any): GlossaryTermTranslationCreateParameters;
export declare function GlossaryTermTranslationCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlossaryTermTranslationCreateParameters;
export declare function GlossaryTermTranslationCreateParametersToJSON(value?: GlossaryTermTranslationCreateParameters | null): any;
