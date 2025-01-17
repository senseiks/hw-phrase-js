"use strict";
/* tslint:disable */
/* eslint-disable */
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookDeliveryToJSON = exports.WebhookDeliveryFromJSONTyped = exports.WebhookDeliveryFromJSON = void 0;
var runtime_1 = require("../runtime");
function WebhookDeliveryFromJSON(json) {
    return WebhookDeliveryFromJSONTyped(json, false);
}
exports.WebhookDeliveryFromJSON = WebhookDeliveryFromJSON;
function WebhookDeliveryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'webhookId': !(0, runtime_1.exists)(json, 'webhook_id') ? undefined : json['webhook_id'],
        'responseStatusCode': !(0, runtime_1.exists)(json, 'response_status_code') ? undefined : json['response_status_code'],
        'deliveredAt': !(0, runtime_1.exists)(json, 'delivered_at') ? undefined : (new Date(json['delivered_at'])),
        'durationMs': !(0, runtime_1.exists)(json, 'duration_ms') ? undefined : json['duration_ms'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
    };
}
exports.WebhookDeliveryFromJSONTyped = WebhookDeliveryFromJSONTyped;
function WebhookDeliveryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'webhook_id': value.webhookId,
        'response_status_code': value.responseStatusCode,
        'delivered_at': value.deliveredAt === undefined ? undefined : (value.deliveredAt.toISOString()),
        'duration_ms': value.durationMs,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
    };
}
exports.WebhookDeliveryToJSON = WebhookDeliveryToJSON;
