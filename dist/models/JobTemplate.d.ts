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
import { Branch, ProjectShort } from './';
/**
 *
 * @export
 * @interface JobTemplate
 */
export interface JobTemplate {
    /**
     *
     * @type {string}
     * @memberof JobTemplate
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof JobTemplate
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof JobTemplate
     */
    briefing?: string;
    /**
     *
     * @type {ProjectShort}
     * @memberof JobTemplate
     */
    project?: ProjectShort;
    /**
     *
     * @type {Branch}
     * @memberof JobTemplate
     */
    branch?: Branch;
    /**
     *
     * @type {Date}
     * @memberof JobTemplate
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof JobTemplate
     */
    updatedAt?: Date;
}
export declare function JobTemplateFromJSON(json: any): JobTemplate;
export declare function JobTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): JobTemplate;
export declare function JobTemplateToJSON(value?: JobTemplate | null): any;
