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
 * @interface WebhookCreateParameters
 */
export interface WebhookCreateParameters {
    /**
     * Callback URL to send requests to
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    callbackUrl?: string;
    /**
     * Webhook secret used to calculate signature. If empty, the default project secret will be used.
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    secret?: string;
    /**
     * Webhook description
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    description?: string;
    /**
     * List of event names to trigger the webhook (separated by comma)
     * @type {string}
     * @memberof WebhookCreateParameters
     */
    events?: string;
    /**
     * Whether webhook is active or inactive
     * @type {boolean}
     * @memberof WebhookCreateParameters
     */
    active?: boolean;
    /**
     * If enabled, webhook will also be triggered for events from branches of the project specified.
     * @type {boolean}
     * @memberof WebhookCreateParameters
     */
    includeBranches?: boolean;
}
export declare function WebhookCreateParametersFromJSON(json: any): WebhookCreateParameters;
export declare function WebhookCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookCreateParameters;
export declare function WebhookCreateParametersToJSON(value?: WebhookCreateParameters | null): any;
