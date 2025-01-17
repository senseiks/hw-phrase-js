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
 * @interface DistributionUpdateParameters
 */
export interface DistributionUpdateParameters {
    /**
     * Name of the distribution
     * @type {string}
     * @memberof DistributionUpdateParameters
     */
    name?: string;
    /**
     * Project id the distribution should be assigned to.
     * @type {string}
     * @memberof DistributionUpdateParameters
     */
    projectId?: string;
    /**
     * List of platforms the distribution should support.
     * @type {Array<string>}
     * @memberof DistributionUpdateParameters
     */
    platforms?: Array<string>;
    /**
     * List of locale ids that will be part of distribution releases
     * @type {Array<string>}
     * @memberof DistributionUpdateParameters
     */
    localeIds?: Array<string>;
    /**
     * Additional formatting and render options. Only <code>enclose_in_cdata</code> is available for platform <code>android</code>.
     * @type {{ [key: string]: string; }}
     * @memberof DistributionUpdateParameters
     */
    formatOptions?: {
        [key: string]: string;
    };
    /**
     * Use fallback locale if there is no translation in the current locale.
     * @type {boolean}
     * @memberof DistributionUpdateParameters
     */
    fallbackLocalesEnabled?: boolean;
    /**
     * Indicates whether to fallback to non regional locale when locale can not be found
     * @type {boolean}
     * @memberof DistributionUpdateParameters
     */
    fallbackToNonRegionalLocale?: boolean;
    /**
     * Indicates whether to fallback to projects default locale when locale can not be found
     * @type {boolean}
     * @memberof DistributionUpdateParameters
     */
    fallbackToDefaultLocale?: boolean;
    /**
     * Use last reviewed instead of latest translation in a project
     * @type {boolean}
     * @memberof DistributionUpdateParameters
     */
    useLastReviewedVersion?: boolean;
}
export declare function DistributionUpdateParametersFromJSON(json: any): DistributionUpdateParameters;
export declare function DistributionUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistributionUpdateParameters;
export declare function DistributionUpdateParametersToJSON(value?: DistributionUpdateParameters | null): any;
