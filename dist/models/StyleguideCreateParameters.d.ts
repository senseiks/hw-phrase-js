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
 * @interface StyleguideCreateParameters
 */
export interface StyleguideCreateParameters {
    /**
     * Style guide title
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    title?: string;
    /**
     * Audience description
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    audience?: string;
    /**
     * Can be one of: not_specified, children, teenager, young_adults, adults, old_adults.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    targetAudience?: string;
    /**
     * Can be one of: not_specified, first_person_singular, second_person_singular, third_person_singular_masculine, third_person_singular_feminine, third_person_singular_neuter, first_person_plural, second_person_plural, third_person_plural.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    grammaticalPerson?: string;
    /**
     * Can be one of: not_specified, popular, technical, fictional.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    vocabularyType?: string;
    /**
     * Description of the business
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    business?: string;
    /**
     * Company branding to remain consistent.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    companyBranding?: string;
    /**
     * Formatting requirements and character limitations.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    formatting?: string;
    /**
     * List of terms and/or phrases that need to be translated consistently.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    glossaryTerms?: string;
    /**
     * Formal or informal pronouns, consistent conjugation, grammatical gender
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    grammarConsistency?: string;
    /**
     * Can be one of: Cultural/Conversational, Literal, Neutral.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    literalTranslation?: string;
    /**
     * Tone requirement descriptions
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    overallTone?: string;
    /**
     * Provide links to sample product pages, FAQ pages, etc. to give the translator a point of reference. You can also provide past translations. Even snippets or short paragraphs are helpful for maintaining consistency.
     * @type {string}
     * @memberof StyleguideCreateParameters
     */
    samples?: string;
}
export declare function StyleguideCreateParametersFromJSON(json: any): StyleguideCreateParameters;
export declare function StyleguideCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): StyleguideCreateParameters;
export declare function StyleguideCreateParametersToJSON(value?: StyleguideCreateParameters | null): any;