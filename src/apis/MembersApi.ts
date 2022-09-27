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
    Member,
    MemberFromJSON,
    MemberToJSON,
    MemberProjectDetail,
    MemberProjectDetailFromJSON,
    MemberProjectDetailToJSON,
    MemberUpdateParameters,
    MemberUpdateParametersFromJSON,
    MemberUpdateParametersToJSON,
    MemberUpdateSettingsParameters,
    MemberUpdateSettingsParametersFromJSON,
    MemberUpdateSettingsParametersToJSON,
} from '../models';

export interface MemberDeleteRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface MemberShowRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}

export interface MemberUpdateRequest {
    accountId: string;
    id: string;
    memberUpdateParameters: MemberUpdateParameters;
    xPhraseAppOTP?: string;
}

export interface MemberUpdateSettingsRequest {
    projectId: string;
    id: string;
    memberUpdateSettingsParameters: MemberUpdateSettingsParameters;
    xPhraseAppOTP?: string;
}

export interface MembersListRequest {
    accountId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}

/**
 * 
 */
export class MembersApi extends runtime.BaseAPI {

    /**
     * Remove a user from the account. The user will be removed from the account but not deleted from Phrase. Access token scope must include <code>team.manage</code>.
     * Remove a user from the account
     */
    async memberDeleteRaw(requestParameters: MemberDeleteRequest): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling memberDelete.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling memberDelete.');
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
            path: `/accounts/{account_id}/members/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Remove a user from the account. The user will be removed from the account but not deleted from Phrase. Access token scope must include <code>team.manage</code>.
     * Remove a user from the account
     */
    async memberDelete(requestParameters: MemberDeleteRequest): Promise<any> {
        const response = await this.memberDeleteRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get details on a single user in the account. Access token scope must include <code>team.manage</code>.
     * Get single member
     */
    async memberShowRaw(requestParameters: MemberShowRequest): Promise<runtime.ApiResponse<Member>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling memberShow.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling memberShow.');
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
            path: `/accounts/{account_id}/members/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberFromJSON(jsonValue));
    }

    /**
     * Get details on a single user in the account. Access token scope must include <code>team.manage</code>.
     * Get single member
     */
    async memberShow(requestParameters: MemberShowRequest): Promise<Member> {
        const response = await this.memberShowRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update user permissions in the account. Developers and translators need <code>project_ids</code> and <code>locale_ids</code> assigned to access them. Access token scope must include <code>team.manage</code>.
     * Update a member
     */
    async memberUpdateRaw(requestParameters: MemberUpdateRequest): Promise<runtime.ApiResponse<Member>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling memberUpdate.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling memberUpdate.');
        }

        if (requestParameters.memberUpdateParameters === null || requestParameters.memberUpdateParameters === undefined) {
            throw new runtime.RequiredError('memberUpdateParameters','Required parameter requestParameters.memberUpdateParameters was null or undefined when calling memberUpdate.');
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
            path: `/accounts/{account_id}/members/{id}`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: MemberUpdateParametersToJSON(requestParameters.memberUpdateParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberFromJSON(jsonValue));
    }

    /**
     * Update user permissions in the account. Developers and translators need <code>project_ids</code> and <code>locale_ids</code> assigned to access them. Access token scope must include <code>team.manage</code>.
     * Update a member
     */
    async memberUpdate(requestParameters: MemberUpdateRequest): Promise<Member> {
        const response = await this.memberUpdateRaw(requestParameters);
        return await response.value();
    }

    /**
     * Update user settings in the project. Access token scope must include <code>team.manage</code>.
     * Update a member\'s project settings
     */
    async memberUpdateSettingsRaw(requestParameters: MemberUpdateSettingsRequest): Promise<runtime.ApiResponse<MemberProjectDetail>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling memberUpdateSettings.');
        }

        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling memberUpdateSettings.');
        }

        if (requestParameters.memberUpdateSettingsParameters === null || requestParameters.memberUpdateSettingsParameters === undefined) {
            throw new runtime.RequiredError('memberUpdateSettingsParameters','Required parameter requestParameters.memberUpdateSettingsParameters was null or undefined when calling memberUpdateSettings.');
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
            path: `/projects/{project_id}/members/{id}`.replace(`{${"project_id"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: MemberUpdateSettingsParametersToJSON(requestParameters.memberUpdateSettingsParameters),
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => MemberProjectDetailFromJSON(jsonValue));
    }

    /**
     * Update user settings in the project. Access token scope must include <code>team.manage</code>.
     * Update a member\'s project settings
     */
    async memberUpdateSettings(requestParameters: MemberUpdateSettingsRequest): Promise<MemberProjectDetail> {
        const response = await this.memberUpdateSettingsRaw(requestParameters);
        return await response.value();
    }

    /**
     * Get all users active in the account. It also lists resources like projects and locales the member has access to. In case nothing is shown the default access from the role is used. Access token scope must include <code>team.manage</code>.
     * List members
     */
    async membersListRaw(requestParameters: MembersListRequest): Promise<runtime.ApiResponse<Array<Member>>> {
        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
            throw new runtime.RequiredError('accountId','Required parameter requestParameters.accountId was null or undefined when calling membersList.');
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
            path: `/accounts/{account_id}/members`.replace(`{${"account_id"}}`, encodeURIComponent(String(requestParameters.accountId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(MemberFromJSON));
    }

    /**
     * Get all users active in the account. It also lists resources like projects and locales the member has access to. In case nothing is shown the default access from the role is used. Access token scope must include <code>team.manage</code>.
     * List members
     */
    async membersList(requestParameters: MembersListRequest): Promise<Array<Member>> {
        const response = await this.membersListRaw(requestParameters);
        return await response.value();
    }

}
