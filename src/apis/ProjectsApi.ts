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
    Project,
    ProjectFromJSON,
    ProjectToJSON,
    ProjectCreateParameters,
    ProjectCreateParametersFromJSON,
    ProjectCreateParametersToJSON,
    ProjectDetails,
    ProjectDetailsFromJSON,
    ProjectDetailsToJSON,
    ProjectUpdateParameters,
    ProjectUpdateParametersFromJSON,
    ProjectUpdateParametersToJSON,
} from '../models';

export interface ProjectCreateRequest {
    projectCreateParameters: ProjectCreateParameters;
    xPhraseAppOTP?: string;
}

export interface ProjectDeleteRequest {
    id: string;
    xPhraseAppOTP?: string;
}

export interface ProjectShowRequest {
    id: string;
    xPhraseAppOTP?: string;
}

export interface ProjectUpdateRequest {
    id: string;
    projectUpdateParameters: ProjectUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface ProjectsListRequest {
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    accountId?: string;
    sortBy?: string;
    filters?: Array<string>;
}

/**
 * 
 */
export class ProjectsApi extends runtime.BaseAPI {

    /**
     * Create a new project.
     * Create a project
     */
    async projectCreateRaw(requestParameters: ProjectCreateRequest): Promise<runtime.ApiResponse<ProjectDetails>> {
        if (requestParameters.projectCreateParameters === null || requestParameters.projectCreateParameters === undefined) {
            throw new runtime.RequiredError('projectCreateParameters','Required parameter requestParameters.projectCreateParameters was null or undefined when calling projectCreate.');
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
            queryParameters["access_token"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/projects`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectCreateParametersToJSON(requestParameters.projectCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectDetailsFromJSON(jsonValue));
    }

    /**
     * Create a new project.
     * Create a project
     */
    async projectCreate(requestParameters: ProjectCreateRequest): Promise<ProjectDetails> {
        const response = await this.projectCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing project.
     * Delete a project
     */
    async projectDeleteRaw(requestParameters: ProjectDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling projectDelete.');
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
            queryParameters["access_token"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/projects/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing project.
     * Delete a project
     */
    async projectDelete(requestParameters: ProjectDeleteRequest): Promise<any> {
        const response = await this.projectDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single project.
     * Get a single project
     */
    async projectShowRaw(requestParameters: ProjectShowRequest): Promise<runtime.ApiResponse<ProjectDetails>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling projectShow.');
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
            queryParameters["access_token"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/projects/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectDetailsFromJSON(jsonValue));
    }

    /**
     * Get details on a single project.
     * Get a single project
     */
    async projectShow(requestParameters: ProjectShowRequest): Promise<ProjectDetails> {
        const response = await this.projectShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing project.
     * Update a project
     */
    async projectUpdateRaw(requestParameters: ProjectUpdateRequest): Promise<runtime.ApiResponse<ProjectDetails>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling projectUpdate.');
        }

        if (requestParameters.projectUpdateParameters === null || requestParameters.projectUpdateParameters === undefined) {
            throw new runtime.RequiredError('projectUpdateParameters','Required parameter requestParameters.projectUpdateParameters was null or undefined when calling projectUpdate.');
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
            queryParameters["access_token"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/projects/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ProjectUpdateParametersToJSON(requestParameters.projectUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ProjectDetailsFromJSON(jsonValue));
    }

    /**
     * Update an existing project.
     * Update a project
     */
    async projectUpdate(requestParameters: ProjectUpdateRequest): Promise<ProjectDetails> {
        const response = await this.projectUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all projects the current user has access to.
     * List projects
     */
    async projectsListRaw(requestParameters: ProjectsListRequest): Promise<runtime.ApiResponse<Array<Project>>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        if (requestParameters.perPage !== undefined) {
            queryParameters['per_page'] = requestParameters.perPage;
        }

        if (requestParameters.accountId !== undefined) {
            queryParameters['account_id'] = requestParameters.accountId;
        }

        if (requestParameters.sortBy !== undefined) {
            queryParameters['sort_by'] = requestParameters.sortBy;
        }

        if (requestParameters.filters) {
            queryParameters['filters'] = requestParameters.filters;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            queryParameters["access_token"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ProjectFromJSON));
    }

    /**
     * List all projects the current user has access to.
     * List projects
     */
    async projectsList(requestParameters: ProjectsListRequest): Promise<Array<Project>> {
        const response = await this.projectsListRaw(requestParameters);
        return await response.value();
    }

}
