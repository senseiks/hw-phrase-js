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
    JobTemplate,
    JobTemplateFromJSON,
    JobTemplateToJSON,
    JobTemplateCreateParameters,
    JobTemplateCreateParametersFromJSON,
    JobTemplateCreateParametersToJSON,
    JobTemplateUpdateParameters,
    JobTemplateUpdateParametersFromJSON,
    JobTemplateUpdateParametersToJSON,
} from '../models';

export interface JobTemplateCreateRequest {
    projectId: string;
    jobTemplateCreateParameters: JobTemplateCreateParameters;
    xPhraseAppOTP?: string;
}

export interface JobTemplateDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface JobTemplateShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface JobTemplateUpdateRequest {
    projectId: string;
    id: string;
    jobTemplateUpdateParameters: JobTemplateUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface JobTemplatesListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class JobTemplatesApi extends runtime.BaseAPI {

    /**
     * Create a new job template.
     * Create a job template
     */
    async jobTemplateCreateRaw(requestParameters: JobTemplateCreateRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobTemplateCreate.');
        }

        if (requestParameters.jobTemplateCreateParameters === null || requestParameters.jobTemplateCreateParameters === undefined) {
            throw new runtime.RequiredError('jobTemplateCreateParameters','Required parameter requestParameters.jobTemplateCreateParameters was null or undefined when calling jobTemplateCreate.');
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
            path: `/projects/{project_id}/job_templates`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: JobTemplateCreateParametersToJSON(requestParameters.jobTemplateCreateParameters),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Create a new job template.
     * Create a job template
     */
    async jobTemplateCreate(requestParameters: JobTemplateCreateRequest): Promise<object> {
        const response = await this.jobTemplateCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing job template.
     * Delete a job template
     */
    async jobTemplateDeleteRaw(requestParameters: JobTemplateDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobTemplateDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobTemplateDelete.');
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
            path: `/projects/{project_id}/job_templates/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing job template.
     * Delete a job template
     */
    async jobTemplateDelete(requestParameters: JobTemplateDeleteRequest): Promise<any> {
        const response = await this.jobTemplateDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single job template for a given project.
     * Get a single job template
     */
    async jobTemplateShowRaw(requestParameters: JobTemplateShowRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobTemplateShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobTemplateShow.');
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
            path: `/projects/{project_id}/job_templates/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Get details on a single job template for a given project.
     * Get a single job template
     */
    async jobTemplateShow(requestParameters: JobTemplateShowRequest): Promise<object> {
        const response = await this.jobTemplateShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing job template.
     * Update a job template
     */
    async jobTemplateUpdateRaw(requestParameters: JobTemplateUpdateRequest): Promise<runtime.ApiResponse<object>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobTemplateUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling jobTemplateUpdate.');
        }

        if (requestParameters.jobTemplateUpdateParameters === null || requestParameters.jobTemplateUpdateParameters === undefined) {
            throw new runtime.RequiredError('jobTemplateUpdateParameters','Required parameter requestParameters.jobTemplateUpdateParameters was null or undefined when calling jobTemplateUpdate.');
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
            path: `/projects/{project_id}/job_templates/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: JobTemplateUpdateParametersToJSON(requestParameters.jobTemplateUpdateParameters),
        });

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     * Update an existing job template.
     * Update a job template
     */
    async jobTemplateUpdate(requestParameters: JobTemplateUpdateRequest): Promise<object> {
        const response = await this.jobTemplateUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all job templates for the given project.
     * List job templates
     */
    async jobTemplatesListRaw(requestParameters: JobTemplatesListRequest): Promise<runtime.ApiResponse<Array<JobTemplate>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling jobTemplatesList.');
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
            path: `/projects/{project_id}/job_templates`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(JobTemplateFromJSON));
    }

    /**
     * List all job templates for the given project.
     * List job templates
     */
    async jobTemplatesList(requestParameters: JobTemplatesListRequest): Promise<Array<JobTemplate>> {
        const response = await this.jobTemplatesListRaw(requestParameters);
        return await response.value();
    }

}
