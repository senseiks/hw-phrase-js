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
    Upload,
    UploadFromJSON,
    UploadToJSON,
} from '../models';

export interface UploadCreateRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    branch?: string;
    file?: Blob;
    fileFormat?: string;
    localeId?: string;
    tags?: string;
    updateTranslations?: boolean;
    updateDescriptions?: boolean;
    convertEmoji?: boolean;
    skipUploadTags?: boolean;
    skipUnverification?: boolean;
    fileEncoding?: string;
    localeMapping?: object;
    formatOptions?: object;
    autotranslate?: boolean;
    markReviewed?: boolean;
}

export interface UploadShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}

export interface UploadsListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}

/**
 * 
 */
export class UploadsApi extends runtime.BaseAPI {

    /**
     * Upload a new language file. Creates necessary resources in your project.
     * Upload a new file
     */
    async uploadCreateRaw(requestParameters: UploadCreateRequest): Promise<runtime.ApiResponse<Upload>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling uploadCreate.');
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

        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters.branch !== undefined) {
            formParams.append('branch', requestParameters.branch as any);
        }

        if (requestParameters.file !== undefined) {
            formParams.append('file', requestParameters.file as any);
        }

        if (requestParameters.fileFormat !== undefined) {
            formParams.append('file_format', requestParameters.fileFormat as any);
        }

        if (requestParameters.localeId !== undefined) {
            formParams.append('locale_id', requestParameters.localeId as any);
        }

        if (requestParameters.tags !== undefined) {
            formParams.append('tags', requestParameters.tags as any);
        }

        if (requestParameters.updateTranslations !== undefined) {
            formParams.append('update_translations', requestParameters.updateTranslations as any);
        }

        if (requestParameters.updateDescriptions !== undefined) {
            formParams.append('update_descriptions', requestParameters.updateDescriptions as any);
        }

        if (requestParameters.convertEmoji !== undefined) {
            formParams.append('convert_emoji', requestParameters.convertEmoji as any);
        }

        if (requestParameters.skipUploadTags !== undefined) {
            formParams.append('skip_upload_tags', requestParameters.skipUploadTags as any);
        }

        if (requestParameters.skipUnverification !== undefined) {
            formParams.append('skip_unverification', requestParameters.skipUnverification as any);
        }

        if (requestParameters.fileEncoding !== undefined) {
            formParams.append('file_encoding', requestParameters.fileEncoding as any);
        }

        if (requestParameters.localeMapping !== undefined) {
            formParams.append('locale_mapping', requestParameters.localeMapping as any);
        }

        if (requestParameters.formatOptions !== undefined) {
            formParams.append('format_options', requestParameters.formatOptions as any);
        }

        if (requestParameters.autotranslate !== undefined) {
            formParams.append('autotranslate', requestParameters.autotranslate as any);
        }

        if (requestParameters.markReviewed !== undefined) {
            formParams.append('mark_reviewed', requestParameters.markReviewed as any);
        }

        const response = await this.request({
            path: `/projects/{project_id}/uploads`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UploadFromJSON(jsonValue));
    }

    /**
     * Upload a new language file. Creates necessary resources in your project.
     * Upload a new file
     */
    async uploadCreate(requestParameters: UploadCreateRequest): Promise<Upload> {
        const response = await this.uploadCreateRaw(requestParameters);
        return await response.value();
    }

    /**
     * View details and summary for a single upload.
     * View upload details
     */
    async uploadShowRaw(requestParameters: UploadShowRequest): Promise<runtime.ApiResponse<Upload>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling uploadShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling uploadShow.');
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
            path: `/projects/{project_id}/uploads/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => UploadFromJSON(jsonValue));
    }

    /**
     * View details and summary for a single upload.
     * View upload details
     */
    async uploadShow(requestParameters: UploadShowRequest): Promise<Upload> {
        const response = await this.uploadShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * List all uploads for the given project.
     * List uploads
     */
    async uploadsListRaw(requestParameters: UploadsListRequest): Promise<runtime.ApiResponse<Array<Upload>>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling uploadsList.');
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
            path: `/projects/{project_id}/uploads`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UploadFromJSON));
    }

    /**
     * List all uploads for the given project.
     * List uploads
     */
    async uploadsList(requestParameters: UploadsListRequest): Promise<Array<Upload>> {
        const response = await this.uploadsListRaw(requestParameters);
        return await response.value();
    }

}
