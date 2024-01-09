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
 * @interface KeyUpdateParameters
 */
export interface KeyUpdateParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    branch?: string;
    /**
     * Key name
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    name?: string;
    /**
     * Key description (usually includes contextual information for translators)
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    description?: string;
    /**
     * Indicates whether key supports pluralization
     * @type {boolean}
     * @memberof KeyUpdateParameters
     */
    plural?: boolean;
    /**
     * Plural name for the key (used in some file formats, e.g. Gettext)
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    namePlural?: string;
    /**
     * Type of the key. Can be one of the following: string, number, boolean, array, markdown.
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    dataType?: string;
    /**
     * List of tags separated by comma to be associated with the key.
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    tags?: string;
    /**
     * Max. number of characters translations for this key can have.
     * @type {number}
     * @memberof KeyUpdateParameters
     */
    maxCharactersAllowed?: number;
    /**
     * Screenshot/image for the key. This parameter is deprecated. Please use the Screenshots endpoint instead.
     * @type {Blob}
     * @memberof KeyUpdateParameters
     */
    screenshot?: Blob;
    /**
     * Indicates whether the screenshot will be deleted. This parameter is deprecated. Please use the Screenshots endpoint instead.
     * @type {boolean}
     * @memberof KeyUpdateParameters
     */
    removeScreenshot?: boolean;
    /**
     * Indicates whether the key should be exported as \"unformatted\". Supported by Android XML and other formats.
     * @type {boolean}
     * @memberof KeyUpdateParameters
     */
    unformatted?: boolean;
    /**
     * Indicates whether the key should be exported with \"xml:space=preserve\". Supported by several XML-based formats.
     * @type {boolean}
     * @memberof KeyUpdateParameters
     */
    xmlSpacePreserve?: boolean;
    /**
     * Original file attribute. Used in some formats, e.g. XLIFF.
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    originalFile?: string;
    /**
     * NSStringLocalizedFormatKey attribute. Used in .stringsdict format.
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    localizedFormatString?: string;
    /**
     * NSStringLocalizedFormatKey attribute. Used in .stringsdict format.
     * @type {string}
     * @memberof KeyUpdateParameters
     */
    localizedFormatKey?: string;
    /**
     * Updates/Creates custom metadata property name and value pairs to be associated with key. If you want to delete a custom metadata property, you can set its value to null. If you want to update a custom metadata property, you can set its value to the new value.
     * @type {object}
     * @memberof KeyUpdateParameters
     */
    customMetadata?: object;
}
export declare function KeyUpdateParametersFromJSON(json: any): KeyUpdateParameters;
export declare function KeyUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): KeyUpdateParameters;
export declare function KeyUpdateParametersToJSON(value?: KeyUpdateParameters | null): any;