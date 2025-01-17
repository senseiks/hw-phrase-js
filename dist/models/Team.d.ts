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
import { Project, Space, UserPreview } from './';
/**
 *
 * @export
 * @interface Team
 */
export interface Team {
    /**
     *
     * @type {string}
     * @memberof Team
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Team
     */
    name?: string;
    /**
     *
     * @type {Date}
     * @memberof Team
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Team
     */
    updatedAt?: Date;
    /**
     *
     * @type {Array<Project>}
     * @memberof Team
     */
    projects?: Array<Project>;
    /**
     *
     * @type {Array<Space>}
     * @memberof Team
     */
    spaces?: Array<Space>;
    /**
     *
     * @type {Array<UserPreview>}
     * @memberof Team
     */
    users?: Array<UserPreview>;
}
export declare function TeamFromJSON(json: any): Team;
export declare function TeamFromJSONTyped(json: any, ignoreDiscriminator: boolean): Team;
export declare function TeamToJSON(value?: Team | null): any;
