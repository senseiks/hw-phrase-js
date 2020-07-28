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
    Screenshot,
    ScreenshotFromJSON,
    ScreenshotToJSON,
    ScreenshotCreateParameters,
    ScreenshotCreateParametersFromJSON,
    ScreenshotCreateParametersToJSON,
    ScreenshotUpdateParameters,
    ScreenshotUpdateParametersFromJSON,
    ScreenshotUpdateParametersToJSON,
} from '../models';

export interface ScreenshotCreateRequest {
    projectId: string;
    screenshotCreateParameters: ScreenshotCreateParameters;
    xPhraseAppOTP?: string;
}

export interface ScreenshotDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface ScreenshotShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface ScreenshotUpdateRequest {
    projectId: string;
    id: string;
    screenshotUpdateParameters: ScreenshotUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface ScreenshotsListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class ScreenshotsApi extends runtime.BaseAPI {

    /**
     * Create a new screenshot.
     * Create a screenshot
     */
    async screenshotCreateRaw(requestParameters: ScreenshotCreateRequest): Promise<runtime.ApiResponse<Screenshot>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotCreate.');
        }

        if (requestParameters.screenshotCreateParameters === null || requestParameters.screenshotCreateParameters === undefined) {
            throw new runtime.RequiredError('screenshotCreateParameters','Required parameter requestParameters.screenshotCreateParameters was null or undefined when calling screenshotCreate.');
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
            path: `/projects/{project_id}/screenshots`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: ScreenshotCreateParametersToJSON(requestParameters.screenshotCreateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScreenshotFromJSON(jsonValue));
    }

    /**
     * Create a new screenshot.
     * Create a screenshot
     */
    async screenshotCreate(requestParameters: ScreenshotCreateRequest): Promise<Screenshot> {
        const response = await this.screenshotCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Delete an existing screenshot.
     * Delete a screenshot
     */
    async screenshotDeleteRaw(requestParameters: ScreenshotDeleteRequest): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling screenshotDelete.');
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
            path: `/projects/{project_id}/screenshots/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing screenshot.
     * Delete a screenshot
     */
    async screenshotDelete(requestParameters: ScreenshotDeleteRequest): Promise<void> {
        const response = await this.screenshotDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single screenshot for a given project.
     * Get a single screenshot
     */
    async screenshotShowRaw(requestParameters: ScreenshotShowRequest): Promise<runtime.ApiResponse<Screenshot>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling screenshotShow.');
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
            path: `/projects/{project_id}/screenshots/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScreenshotFromJSON(jsonValue));
    }

    /**
     * Get details on a single screenshot for a given project.
     * Get a single screenshot
     */
    async screenshotShow(requestParameters: ScreenshotShowRequest): Promise<Screenshot> {
        const response = await this.screenshotShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update an existing screenshot.
     * Update a screenshot
     */
    async screenshotUpdateRaw(requestParameters: ScreenshotUpdateRequest): Promise<runtime.ApiResponse<Screenshot>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling screenshotUpdate.');
        }

        if (requestParameters.screenshotUpdateParameters === null || requestParameters.screenshotUpdateParameters === undefined) {
            throw new runtime.RequiredError('screenshotUpdateParameters','Required parameter requestParameters.screenshotUpdateParameters was null or undefined when calling screenshotUpdate.');
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
            path: `/projects/{project_id}/screenshots/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: ScreenshotUpdateParametersToJSON(requestParameters.screenshotUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => ScreenshotFromJSON(jsonValue));
    }

    /**
     * Update an existing screenshot.
     * Update a screenshot
     */
    async screenshotUpdate(requestParameters: ScreenshotUpdateRequest): Promise<Screenshot> {
        const response = await this.screenshotUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all screenshots for the given project.
     * List screenshots
     */
    async screenshotsListRaw(requestParameters: ScreenshotsListRequest): Promise<runtime.ApiResponse<Array<Screenshot>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling screenshotsList.');
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
            path: `/projects/{project_id}/screenshots`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ScreenshotFromJSON));
    }

    /**
     * List all screenshots for the given project.
     * List screenshots
     */
    async screenshotsList(requestParameters: ScreenshotsListRequest): Promise<Array<Screenshot>> {
        const response = await this.screenshotsListRaw(requestParameters);
        return await response.value();
    }

}
