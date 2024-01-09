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
import { LocalePreview, ProjectShort, ReleasePreview } from './';
/**
 *
 * @export
 * @interface Distribution
 */
export interface Distribution {
    /**
     *
     * @type {string}
     * @memberof Distribution
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Distribution
     */
    name?: string;
    /**
     *
     * @type {ProjectShort}
     * @memberof Distribution
     */
    project?: ProjectShort;
    /**
     *
     * @type {Array<string>}
     * @memberof Distribution
     */
    platforms?: Array<string>;
    /**
     *
     * @type {Array<LocalePreview>}
     * @memberof Distribution
     */
    locales?: Array<LocalePreview>;
    /**
     *
     * @type {Array<ReleasePreview>}
     * @memberof Distribution
     */
    releases?: Array<ReleasePreview>;
    /**
     *
     * @type {Date}
     * @memberof Distribution
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Distribution
     */
    deletedAt?: Date;
}
export declare function DistributionFromJSON(json: any): Distribution;
export declare function DistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Distribution;
export declare function DistributionToJSON(value?: Distribution | null): any;