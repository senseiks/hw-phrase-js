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
import * as runtime from '../runtime';
import { Webhook, WebhookCreateParameters, WebhookUpdateParameters } from '../models';
export interface WebhookCreateRequest {
    projectId: string;
    webhookCreateParameters: WebhookCreateParameters;
    xPhraseAppOTP?: string;
}
export interface WebhookDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface WebhookShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface WebhookTestRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface WebhookUpdateRequest {
    projectId: string;
    id: string;
    webhookUpdateParameters: WebhookUpdateParameters;
    xPhraseAppOTP?: string;
}
export interface WebhooksListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}
/**
 *
 */
export declare class WebhooksApi extends runtime.BaseAPI {
    /**
     * Create a new webhook.
     * Create a webhook
     */
    webhookCreateRaw(requestParameters: WebhookCreateRequest): Promise<runtime.ApiResponse<Webhook>>;
    /**
     * Create a new webhook.
     * Create a webhook
     */
    webhookCreate(requestParameters: WebhookCreateRequest): Promise<Webhook>;
    /**
     * Delete an existing webhook.
     * Delete a webhook
     */
    webhookDeleteRaw(requestParameters: WebhookDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing webhook.
     * Delete a webhook
     */
    webhookDelete(requestParameters: WebhookDeleteRequest): Promise<any>;
    /**
     * Get details on a single webhook.
     * Get a single webhook
     */
    webhookShowRaw(requestParameters: WebhookShowRequest): Promise<runtime.ApiResponse<Webhook>>;
    /**
     * Get details on a single webhook.
     * Get a single webhook
     */
    webhookShow(requestParameters: WebhookShowRequest): Promise<Webhook>;
    /**
     * Perform a test request for a webhook.
     * Test a webhook
     */
    webhookTestRaw(requestParameters: WebhookTestRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Perform a test request for a webhook.
     * Test a webhook
     */
    webhookTest(requestParameters: WebhookTestRequest): Promise<any>;
    /**
     * Update an existing webhook.
     * Update a webhook
     */
    webhookUpdateRaw(requestParameters: WebhookUpdateRequest): Promise<runtime.ApiResponse<Webhook>>;
    /**
     * Update an existing webhook.
     * Update a webhook
     */
    webhookUpdate(requestParameters: WebhookUpdateRequest): Promise<Webhook>;
    /**
     * List all webhooks for the given project.
     * List webhooks
     */
    webhooksListRaw(requestParameters: WebhooksListRequest): Promise<runtime.ApiResponse<Array<Webhook>>>;
    /**
     * List all webhooks for the given project.
     * List webhooks
     */
    webhooksList(requestParameters: WebhooksListRequest): Promise<Array<Webhook>>;
}
