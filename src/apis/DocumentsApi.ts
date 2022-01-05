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
    Document,
    DocumentFromJSON,
    DocumentToJSON,
} from '../models';

export interface DocumentDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface DocumentsListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class DocumentsApi extends runtime.BaseAPI {

    /**
     * Delete an existing document.
     * Delete document
     */
    async documentDeleteRaw(requestParameters: DocumentDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling documentDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling documentDelete.');
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
            path: `/projects/{project_id}/documents/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Delete an existing document.
     * Delete document
     */
    async documentDelete(requestParameters: DocumentDeleteRequest): Promise<any> {
        const response = await this.documentDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all documents the current user has access to.
     * List documents
     */
    async documentsListRaw(requestParameters: DocumentsListRequest): Promise<runtime.ApiResponse<Array<Document>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling documentsList.');
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

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = typeof token === 'function' ? token("bearerAuth", []) : token;

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/projects/{project_id}/documents`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(DocumentFromJSON));
    }

    /**
     * List all documents the current user has access to.
     * List documents
     */
    async documentsList(requestParameters: DocumentsListRequest): Promise<Array<Document>> {
        const response = await this.documentsListRaw(requestParameters);
        return await response.value();
    }

}
