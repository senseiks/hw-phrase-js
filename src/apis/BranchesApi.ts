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
    Branch,
    BranchFromJSON,
    BranchToJSON,
    BranchCreateParameters,
    BranchCreateParametersFromJSON,
    BranchCreateParametersToJSON,
    BranchMergeParameters,
    BranchMergeParametersFromJSON,
    BranchMergeParametersToJSON,
    BranchUpdateParameters,
    BranchUpdateParametersFromJSON,
    BranchUpdateParametersToJSON,
} from '../models';

export interface BranchCompareRequest {
    projectId: string;
    name: string;
    xPhraseAppOTP?: string;
}

export interface BranchCreateRequest {
    projectId: string;
    branchCreateParameters: BranchCreateParameters;
    xPhraseAppOTP?: string;
}

export interface BranchDeleteRequest {
    projectId: string;
    name: string;
    xPhraseAppOTP?: string;
}

export interface BranchMergeRequest {
    projectId: string;
    name: string;
    branchMergeParameters: BranchMergeParameters;
    xPhraseAppOTP?: string;
}

export interface BranchShowRequest {
    projectId: string;
    name: string;
    xPhraseAppOTP?: string;
}

export interface BranchUpdateRequest {
    projectId: string;
    name: string;
    branchUpdateParameters: BranchUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface BranchesListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class BranchesApi extends runtime.BaseAPI {

    /**
     * Compare branch with main branch.
     * Compare branches
     */
    async branchCompareRaw(requestParameters: BranchCompareRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchCompare.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling branchCompare.');
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

        const response = await this.request({
            path: `/projects/{project_id}/branches/{name}/compare`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Compare branch with main branch.
     * Compare branches
     */
    async branchCompare(requestParameters: BranchCompareRequest): Promise<void> {
        await this.branchCompareRaw(requestParameters);
    }

    /**
     * Create a new branch.
     * Create a branch
     */
    async branchCreateRaw(requestParameters: BranchCreateRequest): Promise<runtime.ApiResponse<Branch>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchCreate.');
        }

        if (requestParameters.branchCreateParameters === null || requestParameters.branchCreateParameters === undefined) {
            throw new runtime.RequiredError('branchCreateParameters','Required parameter requestParameters.branchCreateParameters was null or undefined when calling branchCreate.');
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
            path: `/projects/{project_id}/branches`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: BranchCreateParametersToJSON(requestParameters.branchCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BranchFromJSON(jsonValue));
    }

    /**
     * Create a new branch.
     * Create a branch
     */
    async branchCreate(requestParameters: BranchCreateRequest): Promise<Branch> {
        const response = await this.branchCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing branch.
     * Delete a branch
     */
    async branchDeleteRaw(requestParameters: BranchDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchDelete.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling branchDelete.');
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

        const response = await this.request({
            path: `/projects/{project_id}/branches/{name}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Delete an existing branch.
     * Delete a branch
     */
    async branchDelete(requestParameters: BranchDeleteRequest): Promise<void> {
        await this.branchDeleteRaw(requestParameters);
    }

    /**
     * Merge an existing branch.
     * Merge a branch
     */
    async branchMergeRaw(requestParameters: BranchMergeRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchMerge.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling branchMerge.');
        }

        if (requestParameters.branchMergeParameters === null || requestParameters.branchMergeParameters === undefined) {
            throw new runtime.RequiredError('branchMergeParameters','Required parameter requestParameters.branchMergeParameters was null or undefined when calling branchMerge.');
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
            path: `/projects/{project_id}/branches/{name}/merge`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BranchMergeParametersToJSON(requestParameters.branchMergeParameters),
        });

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Merge an existing branch.
     * Merge a branch
     */
    async branchMerge(requestParameters: BranchMergeRequest): Promise<void> {
        await this.branchMergeRaw(requestParameters);
    }

    /**
     * Get details on a single branch for a given project.
     * Get a single branch
     */
    async branchShowRaw(requestParameters: BranchShowRequest): Promise<runtime.ApiResponse<Branch>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchShow.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling branchShow.');
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

        const response = await this.request({
            path: `/projects/{project_id}/branches/{name}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BranchFromJSON(jsonValue));
    }

    /**
     * Get details on a single branch for a given project.
     * Get a single branch
     */
    async branchShow(requestParameters: BranchShowRequest): Promise<Branch> {
        const response = await this.branchShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing branch.
     * Update a branch
     */
    async branchUpdateRaw(requestParameters: BranchUpdateRequest): Promise<runtime.ApiResponse<Branch>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchUpdate.');
        }

        if (requestParameters.name === null || requestParameters.name === undefined) {
            throw new runtime.RequiredError('name','Required parameter requestParameters.name was null or undefined when calling branchUpdate.');
        }

        if (requestParameters.branchUpdateParameters === null || requestParameters.branchUpdateParameters === undefined) {
            throw new runtime.RequiredError('branchUpdateParameters','Required parameter requestParameters.branchUpdateParameters was null or undefined when calling branchUpdate.');
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
            path: `/projects/{project_id}/branches/{name}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"name"}}`, encodeURIComponent(String(requestParameters.name))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: BranchUpdateParametersToJSON(requestParameters.branchUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => BranchFromJSON(jsonValue));
    }

    /**
     * Update an existing branch.
     * Update a branch
     */
    async branchUpdate(requestParameters: BranchUpdateRequest): Promise<Branch> {
        const response = await this.branchUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all branches the of the current project.
     * List branches
     */
    async branchesListRaw(requestParameters: BranchesListRequest): Promise<runtime.ApiResponse<Array<Branch>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling branchesList.');
        }

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

        const response = await this.request({
            path: `/projects/{project_id}/branches`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BranchFromJSON));
    }

    /**
     * List all branches the of the current project.
     * List branches
     */
    async branchesList(requestParameters: BranchesListRequest): Promise<Array<Branch>> {
        const response = await this.branchesListRaw(requestParameters);
        return await response.value();
    }

}
