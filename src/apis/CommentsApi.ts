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


import * as runtime from '../runtime';
import {
    Comment,
    CommentFromJSON,
    CommentToJSON,
    CommentCreateParameters,
    CommentCreateParametersFromJSON,
    CommentCreateParametersToJSON,
    CommentMarkReadParameters,
    CommentMarkReadParametersFromJSON,
    CommentMarkReadParametersToJSON,
    CommentUpdateParameters,
    CommentUpdateParametersFromJSON,
    CommentUpdateParametersToJSON,
    CommentsListParameters,
    CommentsListParametersFromJSON,
    CommentsListParametersToJSON,
} from '../models';

export interface CommentCreateRequest {
    projectId: string;
    keyId: string;
    commentCreateParameters: CommentCreateParameters;
    xPhraseAppOTP?: string;
    message?: string;
    localeIds?: Array<string>;
}

export interface CommentDeleteRequest {
    projectId: string;
    keyId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface CommentMarkCheckRequest {
    projectId: string;
    keyId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface CommentMarkReadRequest {
    projectId: string;
    keyId: string;
    id: string;
    commentMarkReadParameters: CommentMarkReadParameters;
    xPhraseAppOTP?: string;
}

export interface CommentMarkUnreadRequest {
    projectId: string;
    keyId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface CommentShowRequest {
    projectId: string;
    keyId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface CommentUpdateRequest {
    projectId: string;
    keyId: string;
    id: string;
    commentUpdateParameters: CommentUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface CommentsListRequest {
    projectId: string;
    keyId: string;
    commentsListParameters: CommentsListParameters;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
    query?: string;
    localeIds?: Array<string>;
    filters?: Array<string>;
    order?: string;
}

/**
 * 
 */
export class CommentsApi extends runtime.BaseAPI {

    /**
     * Create a new comment for a key.
     * Create a comment
     */
    async commentCreateRaw(requestParameters: CommentCreateRequest): Promise<runtime.ApiResponse<Comment>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentCreate.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentCreate.');
        }

        if (requestParameters.commentCreateParameters === null || requestParameters.commentCreateParameters === undefined) {
            throw new runtime.RequiredError('commentCreateParameters','Required parameter requestParameters.commentCreateParameters was null or undefined when calling commentCreate.');
        }

        const queryParameters: any = {};

        if (requestParameters.message !== undefined) {
            queryParameters['message'] = requestParameters.message;
        }

        if (requestParameters.localeIds) {
            queryParameters['locale_ids'] = requestParameters.localeIds;
        }

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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CommentCreateParametersToJSON(requestParameters.commentCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentFromJSON(jsonValue));
    }

    /**
     * Create a new comment for a key.
     * Create a comment
     */
    async commentCreate(requestParameters: CommentCreateRequest): Promise<Comment> {
        const response = await this.commentCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing comment.
     * Delete a comment
     */
    async commentDeleteRaw(requestParameters: CommentDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentDelete.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentDelete.');
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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing comment.
     * Delete a comment
     */
    async commentDelete(requestParameters: CommentDeleteRequest): Promise<any> {
        const response = await this.commentDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Check if comment was marked as read. Returns 204 if read, 404 if unread.
     * Check if comment is read
     */
    async commentMarkCheckRaw(requestParameters: CommentMarkCheckRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentMarkCheck.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentMarkCheck.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentMarkCheck.');
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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments/{id}/read`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Check if comment was marked as read. Returns 204 if read, 404 if unread.
     * Check if comment is read
     */
    async commentMarkCheck(requestParameters: CommentMarkCheckRequest): Promise<any> {
        const response = await this.commentMarkCheckRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark a comment as read.
     * Mark a comment as read
     */
    async commentMarkReadRaw(requestParameters: CommentMarkReadRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentMarkRead.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentMarkRead.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentMarkRead.');
        }

        if (requestParameters.commentMarkReadParameters === null || requestParameters.commentMarkReadParameters === undefined) {
            throw new runtime.RequiredError('commentMarkReadParameters','Required parameter requestParameters.commentMarkReadParameters was null or undefined when calling commentMarkRead.');
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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments/{id}/read`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CommentMarkReadParametersToJSON(requestParameters.commentMarkReadParameters),
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Mark a comment as read.
     * Mark a comment as read
     */
    async commentMarkRead(requestParameters: CommentMarkReadRequest): Promise<any> {
        const response = await this.commentMarkReadRaw(requestParameters);
        return await response.value();
    }

    /**
     * Mark a comment as unread.
     * Mark a comment as unread
     */
    async commentMarkUnreadRaw(requestParameters: CommentMarkUnreadRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentMarkUnread.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentMarkUnread.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentMarkUnread.');
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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments/{id}/read`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Mark a comment as unread.
     * Mark a comment as unread
     */
    async commentMarkUnread(requestParameters: CommentMarkUnreadRequest): Promise<any> {
        const response = await this.commentMarkUnreadRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single comment.
     * Get a single comment
     */
    async commentShowRaw(requestParameters: CommentShowRequest): Promise<runtime.ApiResponse<Comment>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentShow.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentShow.');
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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentFromJSON(jsonValue));
    }

    /**
     * Get details on a single comment.
     * Get a single comment
     */
    async commentShow(requestParameters: CommentShowRequest): Promise<Comment> {
        const response = await this.commentShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing comment.
     * Update a comment
     */
    async commentUpdateRaw(requestParameters: CommentUpdateRequest): Promise<runtime.ApiResponse<Comment>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentUpdate.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling commentUpdate.');
        }

        if (requestParameters.commentUpdateParameters === null || requestParameters.commentUpdateParameters === undefined) {
            throw new runtime.RequiredError('commentUpdateParameters','Required parameter requestParameters.commentUpdateParameters was null or undefined when calling commentUpdate.');
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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CommentUpdateParametersToJSON(requestParameters.commentUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => CommentFromJSON(jsonValue));
    }

    /**
     * Update an existing comment.
     * Update a comment
     */
    async commentUpdate(requestParameters: CommentUpdateRequest): Promise<Comment> {
        const response = await this.commentUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all comments for a key.
     * List comments
     */
    async commentsListRaw(requestParameters: CommentsListRequest): Promise<runtime.ApiResponse<Array<Comment>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling commentsList.');
        }

        if (requestParameters.keyId === null || requestParameters.keyId === undefined) {
            throw new runtime.RequiredError('keyId','Required parameter requestParameters.keyId was null or undefined when calling commentsList.');
        }

        if (requestParameters.commentsListParameters === null || requestParameters.commentsListParameters === undefined) {
            throw new runtime.RequiredError('commentsListParameters','Required parameter requestParameters.commentsListParameters was null or undefined when calling commentsList.');
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

        if (requestParameters.query !== undefined) {
            queryParameters['query'] = requestParameters.query;
        }

        if (requestParameters.localeIds) {
            queryParameters['locale_ids'] = requestParameters.localeIds;
        }

        if (requestParameters.filters) {
            queryParameters['filters'] = requestParameters.filters;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

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

        const response = await this.request({
            path: `/projects/{project_id}/keys/{key_id}/comments`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"key_id"}}`, encodeURIComponent(String(requestParameters.keyId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: CommentsListParametersToJSON(requestParameters.commentsListParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CommentFromJSON));
    }

    /**
     * List all comments for a key.
     * List comments
     */
    async commentsList(requestParameters: CommentsListRequest): Promise<Array<Comment>> {
        const response = await this.commentsListRaw(requestParameters);
        return await response.value();
    }

}
