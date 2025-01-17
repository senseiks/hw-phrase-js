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
 * @interface DistributionCreateParameters
 */
export interface DistributionCreateParameters {
    /**
     * Name of the distribution
     * @type {string}
     * @memberof DistributionCreateParameters
     */
    name?: string;
    /**
     * Project id the distribution should be assigned to.
     * @type {string}
     * @memberof DistributionCreateParameters
     */
    projectId?: string;
    /**
     * List of platforms the distribution should support. Valid values are: * `android` * `ios` * `flutter` * `i18next` * `rails`
     * @type {Array<string>}
     * @memberof DistributionCreateParameters
     */
    platforms?: Array<string>;
    /**
     * List of locale ids that will be part of distribution releases
     * @type {Array<string>}
     * @memberof DistributionCreateParameters
     */
    localeIds?: Array<string>;
    /**
     * Additional formatting and render options. Only <code>enclose_in_cdata</code> is available for platform <code>android</code>.
     * @type {{ [key: string]: string; }}
     * @memberof DistributionCreateParameters
     */
    formatOptions?: {
        [key: string]: string;
    };
    /**
     * Use fallback locale if there is no translation in the current locale.
     * @type {boolean}
     * @memberof DistributionCreateParameters
     */
    fallbackLocalesEnabled?: boolean;
    /**
     * Indicates whether to fallback to non regional locale when locale can not be found
     * @type {boolean}
     * @memberof DistributionCreateParameters
     */
    fallbackToNonRegionalLocale?: boolean;
    /**
     * Indicates whether to fallback to projects default locale when locale can not be found
     * @type {boolean}
     * @memberof DistributionCreateParameters
     */
    fallbackToDefaultLocale?: boolean;
    /**
     * Use last reviewed instead of latest translation in a project
     * @type {boolean}
     * @memberof DistributionCreateParameters
     */
    useLastReviewedVersion?: boolean;
}
export declare function DistributionCreateParametersFromJSON(json: any): DistributionCreateParameters;
export declare function DistributionCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistributionCreateParameters;
export declare function DistributionCreateParametersToJSON(value?: DistributionCreateParameters | null): any;
