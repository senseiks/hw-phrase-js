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
import { CustomMetadataDataType, ProjectShort, UserPreview } from './';
/**
 *
 * @export
 * @interface CustomMetadataProperty
 */
export interface CustomMetadataProperty {
    /**
     *
     * @type {string}
     * @memberof CustomMetadataProperty
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof CustomMetadataProperty
     */
    name?: string;
    /**
     *
     * @type {string}
     * @memberof CustomMetadataProperty
     */
    description?: string;
    /**
     *
     * @type {CustomMetadataDataType}
     * @memberof CustomMetadataProperty
     */
    dataType?: CustomMetadataDataType;
    /**
     *
     * @type {UserPreview}
     * @memberof CustomMetadataProperty
     */
    user?: UserPreview;
    /**
     *
     * @type {Array<ProjectShort>}
     * @memberof CustomMetadataProperty
     */
    projects?: Array<ProjectShort>;
    /**
     *
     * @type {Array<string>}
     * @memberof CustomMetadataProperty
     */
    valueOptions?: Array<string>;
    /**
     *
     * @type {Date}
     * @memberof CustomMetadataProperty
     */
    createdAt?: Date;
    /**
     *
     * @type {Date}
     * @memberof CustomMetadataProperty
     */
    updatedAt?: Date;
}
export declare function CustomMetadataPropertyFromJSON(json: any): CustomMetadataProperty;
export declare function CustomMetadataPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomMetadataProperty;
export declare function CustomMetadataPropertyToJSON(value?: CustomMetadataProperty | null): any;