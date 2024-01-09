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
import { NotificationGroupDetail } from '../models';
export interface NotificationGroupsListRequest {
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}
export interface NotificationGroupsMarkAllAsReadRequest {
    xPhraseAppOTP?: string;
}
export interface NotificationGroupsMarkAsReadRequest {
    id: string;
    xPhraseAppOTP?: string;
}
/**
 *
 */
export declare class NotificationGroupsApi extends runtime.BaseAPI {
    /**
     * List all notification groups from the current user
     * List notification groups
     */
    notificationGroupsListRaw(requestParameters: NotificationGroupsListRequest): Promise<runtime.ApiResponse<Array<NotificationGroupDetail>>>;
    /**
     * List all notification groups from the current user
     * List notification groups
     */
    notificationGroupsList(requestParameters: NotificationGroupsListRequest): Promise<Array<NotificationGroupDetail>>;
    /**
     * Mark all notification groups of the current user as read
     * Mark all notification groups as read
     */
    notificationGroupsMarkAllAsReadRaw(requestParameters: NotificationGroupsMarkAllAsReadRequest): Promise<runtime.ApiResponse<Array<NotificationGroupDetail>>>;
    /**
     * Mark all notification groups of the current user as read
     * Mark all notification groups as read
     */
    notificationGroupsMarkAllAsRead(requestParameters: NotificationGroupsMarkAllAsReadRequest): Promise<Array<NotificationGroupDetail>>;
    /**
     * Mark a notifications group of the current user as read
     * Mark a notification group as read
     */
    notificationGroupsMarkAsReadRaw(requestParameters: NotificationGroupsMarkAsReadRequest): Promise<runtime.ApiResponse<NotificationGroupDetail>>;
    /**
     * Mark a notifications group of the current user as read
     * Mark a notification group as read
     */
    notificationGroupsMarkAsRead(requestParameters: NotificationGroupsMarkAsReadRequest): Promise<NotificationGroupDetail>;
}