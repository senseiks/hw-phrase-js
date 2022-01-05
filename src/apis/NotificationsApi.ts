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


import * as runtime from '../runtime';
import {
    Notification,
    NotificationFromJSON,
    NotificationToJSON,
} from '../models';

export interface NotificationsListRequest {
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

export interface NotificationsMarkAllAsReadRequest {
    xPhraseAppOTP?: string;
}

export interface NotificationsShowRequest {
    id: string;
    xPhraseAppOTP?: string;
}

/**
 * 
 */
export class NotificationsApi extends runtime.BaseAPI {

    /**
     * List all notifications from the current user
     * List notifications
     */
    async notificationsListRaw(requestParameters: NotificationsListRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/notifications`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * List all notifications from the current user
     * List notifications
     */
    async notificationsList(requestParameters: NotificationsListRequest): Promise<Array<object>> {
        const response = await this.notificationsListRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark all notifications of the current user as read
     * Mark all notifications as read
     */
    async notificationsMarkAllAsReadRaw(requestParameters: NotificationsMarkAllAsReadRequest): Promise<runtime.ApiResponse<Array<object>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/notifications/mark_all_as_read`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Mark all notifications of the current user as read
     * Mark all notifications as read
     */
    async notificationsMarkAllAsRead(requestParameters: NotificationsMarkAllAsReadRequest): Promise<Array<object>> {
        const response = await this.notificationsMarkAllAsReadRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single notification.
     * Get a single notification
     */
    async notificationsShowRaw(requestParameters: NotificationsShowRequest): Promise<runtime.ApiResponse<Notification>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling notificationsShow.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/notifications/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => NotificationFromJSON(jsonValue));
    }

    /**
     * Get details on a single notification.
     * Get a single notification
     */
    async notificationsShow(requestParameters: NotificationsShowRequest): Promise<Notification> {
        const response = await this.notificationsShowRaw(requestParameters);
        return await response.value();
    }

}
