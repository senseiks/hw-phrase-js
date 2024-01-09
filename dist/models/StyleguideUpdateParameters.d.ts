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
 * @interface StyleguideUpdateParameters
 */
export interface StyleguideUpdateParameters {
    /**
     * Style guide title
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    title?: string;
    /**
     * Audience description
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    audience?: string;
    /**
     * Can be one of: not_specified, children, teenager, young_adults, adults, old_adults.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    targetAudience?: string;
    /**
     * Can be one of: not_specified, first_person_singular, second_person_singular, third_person_singular_masculine, third_person_singular_feminine, third_person_singular_neuter, first_person_plural, second_person_plural, third_person_plural.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    grammaticalPerson?: string;
    /**
     * Can be one of: not_specified, popular, technical, fictional.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    vocabularyType?: string;
    /**
     * Description of the business
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    business?: string;
    /**
     * Company branding to remain consistent.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    companyBranding?: string;
    /**
     * Formatting requirements and character limitations.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    formatting?: string;
    /**
     * List of terms and/or phrases that need to be translated consistently.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    glossaryTerms?: string;
    /**
     * Formal or informal pronouns, consistent conjugation, grammatical gender
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    grammarConsistency?: string;
    /**
     * Can be one of: Cultural/Conversational, Literal, Neutral.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    literalTranslation?: string;
    /**
     * Tone requirement descriptions
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    overallTone?: string;
    /**
     * Provide links to sample product pages, FAQ pages, etc. to give the translator a point of reference. You can also provide past translations. Even snippets or short paragraphs are helpful for maintaining consistency.
     * @type {string}
     * @memberof StyleguideUpdateParameters
     */
    samples?: string;
}
export declare function StyleguideUpdateParametersFromJSON(json: any): StyleguideUpdateParameters;
export declare function StyleguideUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): StyleguideUpdateParameters;
export declare function StyleguideUpdateParametersToJSON(value?: StyleguideUpdateParameters | null): any;