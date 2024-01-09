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
import { Authorization, AuthorizationCreateParameters, AuthorizationUpdateParameters, AuthorizationWithToken } from '../models';
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
export declare class AuthorizationsApi extends runtime.BaseAPI {
    /**
     * Create a new authorization.
     * Create an authorization
     */
    authorizationCreateRaw(requestParameters: AuthorizationCreateRequest): Promise<runtime.ApiResponse<AuthorizationWithToken>>;
    /**
     * Create a new authorization.
     * Create an authorization
     */
    authorizationCreate(requestParameters: AuthorizationCreateRequest): Promise<AuthorizationWithToken>;
    /**
     * Delete an existing authorization. API calls using that token will stop working.
     * Delete an authorization
     */
    authorizationDeleteRaw(requestParameters: AuthorizationDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing authorization. API calls using that token will stop working.
     * Delete an authorization
     */
    authorizationDelete(requestParameters: AuthorizationDeleteRequest): Promise<any>;
    /**
     * Get details on a single authorization.
     * Get a single authorization
     */
    authorizationShowRaw(requestParameters: AuthorizationShowRequest): Promise<runtime.ApiResponse<Authorization>>;
    /**
     * Get details on a single authorization.
     * Get a single authorization
     */
    authorizationShow(requestParameters: AuthorizationShowRequest): Promise<Authorization>;
    /**
     * Update an existing authorization.
     * Update an authorization
     */
    authorizationUpdateRaw(requestParameters: AuthorizationUpdateRequest): Promise<runtime.ApiResponse<Authorization>>;
    /**
     * Update an existing authorization.
     * Update an authorization
     */
    authorizationUpdate(requestParameters: AuthorizationUpdateRequest): Promise<Authorization>;
    /**
     * List all your authorizations.
     * List authorizations
     */
    authorizationsListRaw(requestParameters: AuthorizationsListRequest): Promise<runtime.ApiResponse<Array<Authorization>>>;
    /**
     * List all your authorizations.
     * List authorizations
     */
    authorizationsList(requestParameters: AuthorizationsListRequest): Promise<Array<Authorization>>;
}