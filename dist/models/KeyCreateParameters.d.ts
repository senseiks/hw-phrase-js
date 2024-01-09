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
 * @interface KeyCreateParameters
 */
export interface KeyCreateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof KeyCreateParameters
     */
    branch?: string;
    /**
     * Key name
     * @type {string}
     * @memberof KeyCreateParameters
     */
    name?: string;
    /**
     * Key description (usually includes contextual information for translators)
     * @type {string}
     * @memberof KeyCreateParameters
     */
    description?: string;
    /**
     * Indicates whether key supports pluralization
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    plural?: boolean;
    /**
     * Plural name for the key (used in some file formats, e.g. Gettext)
     * @type {string}
     * @memberof KeyCreateParameters
     */
    namePlural?: string;
    /**
     * Type of the key. Can be one of the following: string, number, boolean, array, markdown.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    dataType?: string;
    /**
     * List of tags separated by comma to be associated with the key.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    tags?: string;
    /**
     * Max. number of characters translations for this key can have.
     * @type {number}
     * @memberof KeyCreateParameters
     */
    maxCharactersAllowed?: number;
    /**
     * Screenshot/image for the key. This parameter is deprecated. Please use the Screenshots endpoint instead.
     * @type {Blob}
     * @memberof KeyCreateParameters
     */
    screenshot?: Blob;
    /**
     * Indicates whether the screenshot will be deleted. This parameter is deprecated. Please use the Screenshots endpoint instead.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    removeScreenshot?: boolean;
    /**
     * Indicates whether the key should be exported as \"unformatted\". Supported by Android XML and other formats.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    unformatted?: boolean;
    /**
     * Creates a translation in the default locale with the specified content
     * @type {string}
     * @memberof KeyCreateParameters
     */
    defaultTranslationContent?: string;
    /**
     * Indicates whether the key should be exported with \"xml:space=preserve\". Supported by several XML-based formats.
     * @type {boolean}
     * @memberof KeyCreateParameters
     */
    xmlSpacePreserve?: boolean;
    /**
     * Original file attribute. Used in some formats, e.g. XLIFF.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    originalFile?: string;
    /**
     * NSStringLocalizedFormatKey attribute. Used in .stringsdict format.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    localizedFormatString?: string;
    /**
     * NSStringLocalizedFormatKey attribute. Used in .stringsdict format.
     * @type {string}
     * @memberof KeyCreateParameters
     */
    localizedFormatKey?: string;
    /**
     * Custom metadata property name and value pairs to be associated with key.
     * @type {object}
     * @memberof KeyCreateParameters
     */
    customMetadata?: object;
}
export declare function KeyCreateParametersFromJSON(json: any): KeyCreateParameters;
export declare function KeyCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyCreateParameters;
export declare function KeyCreateParametersToJSON(value?: KeyCreateParameters | null): any;