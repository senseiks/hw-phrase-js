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
 * @interface TranslationsSearchParameters
 */
export interface TranslationsSearchParameters {
    /**
     * specify the branch to use
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    branch?: string;
    /**
     * Sort criteria. Can be one of: key_name, created_at, updated_at.
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    sort?: string;
    /**
     * Order direction. Can be one of: asc, desc.
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    order?: string;
    /**
     * Specify a query to find translations by content (including wildcards).<br><br> <i>Note: Search is limited to 10000 results and may not include recently updated data (depending on the project size).</i><br> The following qualifiers are supported in the query:<br> <ul>   <li><code>id:translation_id,...</code> for queries on a comma-separated list of ids</li>   <li><code>tags:XYZ</code> for tags on the translation</li>   <li><code>unverified:{true|false}</code> for verification status</li>   <li><code>excluded:{true|false}</code> for exclusion status</li>   <li><code>updated_at:{>=|<=}2013-02-21T00:00:00Z</code> for date range queries</li> </ul> Find more examples <a href=\"#overview--usage-examples\">here</a>.
     * @type {string}
     * @memberof TranslationsSearchParameters
     */
    q?: string;
}
export declare function TranslationsSearchParametersFromJSON(json: any): TranslationsSearchParameters;
export declare function TranslationsSearchParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): TranslationsSearchParameters;
export declare function TranslationsSearchParametersToJSON(value?: TranslationsSearchParameters | null): any;
