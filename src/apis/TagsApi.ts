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
    Tag,
    TagFromJSON,
    TagToJSON,
    TagCreateParameters,
    TagCreateParametersFromJSON,
    TagCreateParametersToJSON,
    TagWithStats,
    TagWithStatsFromJSON,
    TagWithStatsToJSON,
} from '../models';

export interface TagCreateRequest {
    projectId: string;
    tagCreateParameters: TagCreateParameters;
    xPhraseAppOTP?: string;
}

export interface TagDeleteRequest {
    projectId: string;
    name: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface TagShowRequest {
    projectId: string;
    name: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface TagsListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class TagsApi extends runtime.BaseAPI {

    /**
     * Create a new tag.
     * Create a tag
     */
    async tagCreateRaw(requestParameters: TagCreateRequest): Promise<runtime.ApiResponse<TagWithStats>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling tagCreate.');
        }

        if (requestParameters.tagCreateParameters === null || requestParameters.tagCreateParameters === undefined) {
            throw new runtime.RequiredError('tagCreateParameters','Required parameter requestParameters.tagCreateParameters was null or undefined when calling tagCreate.');
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
            path: `/projects/{project_id}/tags`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TagCreateParametersToJSON(requestParameters.tagCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagWithStatsFromJSON(jsonValue));
    }

    /**
     * Create a new tag.
     * Create a tag
     */
    async tagCreate(requestParameters: TagCreateRequest): Promise<TagWithStats> {
        const response = await this.tagCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing tag.
     * Delete a tag
     */
    async tagDeleteRaw(requestParameters: TagDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling tagDelete.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling tagDelete.');
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
            path: `/projects/{project_id}/tags/{name}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing tag.
     * Delete a tag
     */
    async tagDelete(requestParameters: TagDeleteRequest): Promise<void> {
        await this.tagDeleteRaw(requestParameters);
    }

    /**
     * Get details and progress information on a single tag for a given project.
     * Get a single tag
     */
    async tagShowRaw(requestParameters: TagShowRequest): Promise<runtime.ApiResponse<TagWithStats>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling tagShow.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling tagShow.');
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
            path: `/projects/{project_id}/tags/{name}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => TagWithStatsFromJSON(jsonValue));
    }

    /**
     * Get details and progress information on a single tag for a given project.
     * Get a single tag
     */
    async tagShow(requestParameters: TagShowRequest): Promise<TagWithStats> {
        const response = await this.tagShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all tags for the given project.
     * List tags
     */
    async tagsListRaw(requestParameters: TagsListRequest): Promise<runtime.ApiResponse<Array<Tag>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling tagsList.');
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

        const response = await this.request({
            path: `/projects/{project_id}/tags`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TagFromJSON));
    }

    /**
     * List all tags for the given project.
     * List tags
     */
    async tagsList(requestParameters: TagsListRequest): Promise<Array<Tag>> {
        const response = await this.tagsListRaw(requestParameters);
        return await response.value();
    }

}
