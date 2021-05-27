/* tslint:disable */
/* eslint-disable */
/**
 * Phrase API Reference
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@phrase.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface NotificationGroupDetail
 */
export interface NotificationGroupDetail {
    /**
     * 
     * @type {string}
     * @memberof NotificationGroupDetail
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof NotificationGroupDetail
     */
    eventName?: string;
    /**
     * 
     * @type {Date}
     * @memberof NotificationGroupDetail
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof NotificationGroupDetail
     */
    updatedAt?: Date;
    /**
     * 
     * @type {object}
     * @memberof NotificationGroupDetail
     */
    latestNotification?: object;
}

export function NotificationGroupDetailFromJSON(json: any): NotificationGroupDetail {
    return NotificationGroupDetailFromJSONTyped(json, false);
}

export function NotificationGroupDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotificationGroupDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'eventName': !exists(json, 'event_name') ? undefined : json['event_name'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'latestNotification': !exists(json, 'latest_notification') ? undefined : json['latest_notification'],
    };
}

export function NotificationGroupDetailToJSON(value?: NotificationGroupDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'event_name': value.eventName,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'latest_notification': value.latestNotification,
    };
}

