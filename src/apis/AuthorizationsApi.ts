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
    Authorization,
    AuthorizationFromJSON,
    AuthorizationToJSON,
    AuthorizationCreateParameters,
    AuthorizationCreateParametersFromJSON,
    AuthorizationCreateParametersToJSON,
    AuthorizationUpdateParameters,
    AuthorizationUpdateParametersFromJSON,
    AuthorizationUpdateParametersToJSON,
    AuthorizationWithToken,
    AuthorizationWithTokenFromJSON,
    AuthorizationWithTokenToJSON,
} from '../models';

export interface AuthorizationCreateRequest {
    authorizationCreateParameters: AuthorizationCreateParameters;
    xPhraseAppOTP?: string;
}

export interface AuthorizationDeleteRequest {
    id: string;
    xPhraseAppOTP?: string;
}

export interface AuthorizationShowRequest {
    id: string;
    xPhraseAppOTP?: string;
}

export interface AuthorizationUpdateRequest {
    id: string;
    authorizationUpdateParameters: AuthorizationUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface AuthorizationsListRequest {
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class AuthorizationsApi extends runtime.BaseAPI {

    /**
     * Create a new authorization.
     * Create an authorization
     */
    async authorizationCreateRaw(requestParameters: AuthorizationCreateRequest): Promise<runtime.ApiResponse<AuthorizationWithToken>> {
        if (requestParameters.authorizationCreateParameters === null || requestParameters.authorizationCreateParameters === undefined) {
            throw new runtime.RequiredError('authorizationCreateParameters','Required parameter requestParameters.authorizationCreateParameters was null or undefined when calling authorizationCreate.');
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
            path: `/authorizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AuthorizationCreateParametersToJSON(requestParameters.authorizationCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorizationWithTokenFromJSON(jsonValue));
    }

    /**
     * Create a new authorization.
     * Create an authorization
     */
    async authorizationCreate(requestParameters: AuthorizationCreateRequest): Promise<AuthorizationWithToken> {
        const response = await this.authorizationCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing authorization. API calls using that token will stop working.
     * Delete an authorization
     */
    async authorizationDeleteRaw(requestParameters: AuthorizationDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling authorizationDelete.');
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
            path: `/authorizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing authorization. API calls using that token will stop working.
     * Delete an authorization
     */
    async authorizationDelete(requestParameters: AuthorizationDeleteRequest): Promise<any> {
        const response = await this.authorizationDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single authorization.
     * Get a single authorization
     */
    async authorizationShowRaw(requestParameters: AuthorizationShowRequest): Promise<runtime.ApiResponse<Authorization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling authorizationShow.');
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
            path: `/authorizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorizationFromJSON(jsonValue));
    }

    /**
     * Get details on a single authorization.
     * Get a single authorization
     */
    async authorizationShow(requestParameters: AuthorizationShowRequest): Promise<Authorization> {
        const response = await this.authorizationShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing authorization.
     * Update an authorization
     */
    async authorizationUpdateRaw(requestParameters: AuthorizationUpdateRequest): Promise<runtime.ApiResponse<Authorization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling authorizationUpdate.');
        }

        if (requestParameters.authorizationUpdateParameters === null || requestParameters.authorizationUpdateParameters === undefined) {
            throw new runtime.RequiredError('authorizationUpdateParameters','Required parameter requestParameters.authorizationUpdateParameters was null or undefined when calling authorizationUpdate.');
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
            path: `/authorizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: AuthorizationUpdateParametersToJSON(requestParameters.authorizationUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => AuthorizationFromJSON(jsonValue));
    }

    /**
     * Update an existing authorization.
     * Update an authorization
     */
    async authorizationUpdate(requestParameters: AuthorizationUpdateRequest): Promise<Authorization> {
        const response = await this.authorizationUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all your authorizations.
     * List authorizations
     */
    async authorizationsListRaw(requestParameters: AuthorizationsListRequest): Promise<runtime.ApiResponse<Array<Authorization>>> {
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
            path: `/authorizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AuthorizationFromJSON));
    }

    /**
     * List all your authorizations.
     * List authorizations
     */
    async authorizationsList(requestParameters: AuthorizationsListRequest): Promise<Array<Authorization>> {
        const response = await this.authorizationsListRaw(requestParameters);
        return await response.value();
    }

}
