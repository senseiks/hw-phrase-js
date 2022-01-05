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
    OrderConfirmParameters,
    OrderConfirmParametersFromJSON,
    OrderConfirmParametersToJSON,
    OrderCreateParameters,
    OrderCreateParametersFromJSON,
    OrderCreateParametersToJSON,
    TranslationOrder,
    TranslationOrderFromJSON,
    TranslationOrderToJSON,
} from '../models';

export interface OrderConfirmRequest {
    projectId: string;
    id: string;
    orderConfirmParameters: OrderConfirmParameters;
    xPhraseAppOTP?: string;
}

export interface OrderCreateRequest {
    projectId: string;
    orderCreateParameters: OrderCreateParameters;
    xPhraseAppOTP?: string;
}

export interface OrderDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface OrderShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface OrdersListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class OrdersApi extends runtime.BaseAPI {

    /**
     * Confirm an existing order and send it to the provider for translation. Same constraints as for create.
     * Confirm an order
     */
    async orderConfirmRaw(requestParameters: OrderConfirmRequest): Promise<runtime.ApiResponse<TranslationOrder>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling orderConfirm.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling orderConfirm.');
        }

        if (requestParameters.orderConfirmParameters === null || requestParameters.orderConfirmParameters === undefined) {
            throw new runtime.RequiredError('orderConfirmParameters','Required parameter requestParameters.orderConfirmParameters was null or undefined when calling orderConfirm.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/projects/{project_id}/orders/{id}/confirm`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: OrderConfirmParametersToJSON(requestParameters.orderConfirmParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationOrderFromJSON(jsonValue));
    }

    /**
     * Confirm an existing order and send it to the provider for translation. Same constraints as for create.
     * Confirm an order
     */
    async orderConfirm(requestParameters: OrderConfirmRequest): Promise<TranslationOrder> {
        const response = await this.orderConfirmRaw(requestParameters);
        return await response.value();
    }

    /**
     * Create a new order. Access token scope must include <code>orders.create</code>.
     * Create a new order
     */
    async orderCreateRaw(requestParameters: OrderCreateRequest): Promise<runtime.ApiResponse<TranslationOrder>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling orderCreate.');
        }

        if (requestParameters.orderCreateParameters === null || requestParameters.orderCreateParameters === undefined) {
            throw new runtime.RequiredError('orderCreateParameters','Required parameter requestParameters.orderCreateParameters was null or undefined when calling orderCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

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
            path: `/projects/{project_id}/orders`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrderCreateParametersToJSON(requestParameters.orderCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationOrderFromJSON(jsonValue));
    }

    /**
     * Create a new order. Access token scope must include <code>orders.create</code>.
     * Create a new order
     */
    async orderCreate(requestParameters: OrderCreateRequest): Promise<TranslationOrder> {
        const response = await this.orderCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Cancel an existing order. Must not yet be confirmed.
     * Cancel an order
     */
    async orderDeleteRaw(requestParameters: OrderDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling orderDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling orderDelete.');
        }

        const queryParameters: any = {};

        if (requestParameters.branch !== undefined) {
            queryParameters['branch'] = requestParameters.branch;
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
            path: `/projects/{project_id}/orders/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Cancel an existing order. Must not yet be confirmed.
     * Cancel an order
     */
    async orderDelete(requestParameters: OrderDeleteRequest): Promise<any> {
        const response = await this.orderDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single order.
     * Get a single order
     */
    async orderShowRaw(requestParameters: OrderShowRequest): Promise<runtime.ApiResponse<TranslationOrder>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling orderShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling orderShow.');
        }

        const queryParameters: any = {};

        if (requestParameters.branch !== undefined) {
            queryParameters['branch'] = requestParameters.branch;
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
            path: `/projects/{project_id}/orders/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TranslationOrderFromJSON(jsonValue));
    }

    /**
     * Get details on a single order.
     * Get a single order
     */
    async orderShow(requestParameters: OrderShowRequest): Promise<TranslationOrder> {
        const response = await this.orderShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all orders for the given project.
     * List orders
     */
    async ordersListRaw(requestParameters: OrdersListRequest): Promise<runtime.ApiResponse<Array<TranslationOrder>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling ordersList.');
        }

        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.branch !== undefined) {
            queryParameters['branch'] = requestParameters.branch;
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
            path: `/projects/{project_id}/orders`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TranslationOrderFromJSON));
    }

    /**
     * List all orders for the given project.
     * List orders
     */
    async ordersList(requestParameters: OrdersListRequest): Promise<Array<TranslationOrder>> {
        const response = await this.ordersListRaw(requestParameters);
        return await response.value();
    }

}
