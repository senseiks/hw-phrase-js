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
 * @interface WebhookUpdateParameters
 */
export interface WebhookUpdateParameters {
    /**
     * Callback URL to send requests to
     * @type {string}
     * @memberof WebhookUpdateParameters
     */
    callbackUrl?: string;
    /**
     * Webhook secret used to calculate signature. If empty, the default project secret will be used.
     * @type {string}
     * @memberof WebhookUpdateParameters
     */
    secret?: string;
    /**
     * Webhook description
     * @type {string}
     * @memberof WebhookUpdateParameters
     */
    description?: string;
    /**
     * List of event names to trigger the webhook (separated by comma)
     * @type {string}
     * @memberof WebhookUpdateParameters
     */
    events?: string;
    /**
     * Whether webhook is active or inactive
     * @type {boolean}
     * @memberof WebhookUpdateParameters
     */
    active?: boolean;
    /**
     * If enabled, webhook will also be triggered for events from branches of the project specified.
     * @type {boolean}
     * @memberof WebhookUpdateParameters
     */
    includeBranches?: boolean;
}
export declare function WebhookUpdateParametersFromJSON(json: any): WebhookUpdateParameters;
export declare function WebhookUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookUpdateParameters;
export declare function WebhookUpdateParametersToJSON(value?: WebhookUpdateParameters | null): any;