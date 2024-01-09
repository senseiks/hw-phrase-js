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
import { LocalePreview, TagWithStats1Statistics } from './';
/**
 *
 * @export
 * @interface TagWithStats1Statistics1
 */
export interface TagWithStats1Statistics1 {
    /**
     *
     * @type {LocalePreview}
     * @memberof TagWithStats1Statistics1
     */
    locale?: LocalePreview;
    /**
     *
     * @type {TagWithStats1Statistics}
     * @memberof TagWithStats1Statistics1
     */
    statistics?: TagWithStats1Statistics;
}
export declare function TagWithStats1Statistics1FromJSON(json: any): TagWithStats1Statistics1;
export declare function TagWithStats1Statistics1FromJSONTyped(json: any, ignoreDiscriminator: boolean): TagWithStats1Statistics1;
export declare function TagWithStats1Statistics1ToJSON(value?: TagWithStats1Statistics1 | null): any;