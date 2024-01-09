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
import { UserPreview } from './';
/**
 *
 * @export
 * @interface Branch
 */
export interface Branch {
    /**
     *
     * @type {string}
     * @memberof Branch
     */
    baseProjectId?: string;
    /**
     *
     * @type {string}
     * @memberof Branch
     */
    branchProjectId?: string;
    /**
     *
     * @type {string}
     * @memberof Branch
     */
    name?: string;
    /**
     *
     * @type {Date}
     * @memberof Branch
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Branch
     */
    updatedAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof Branch
     */
    mergedAt?: Date;
    /**
     *
     * @type {UserPreview}
     * @memberof Branch
     */
    mergedBy?: UserPreview;
    /**
     *
     * @type {UserPreview}
     * @memberof Branch
     */
    createdBy?: UserPreview;
    /**
     *
     * @type {string}
     * @memberof Branch
     */
    state?: string;
}
export declare function BranchFromJSON(json: any): Branch;
export declare function BranchFromJSONTyped(json: any, ignoreDiscriminator: boolean): Branch;
export declare function BranchToJSON(value?: Branch | null): any;