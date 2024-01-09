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
import { Invitation, InvitationCreateParameters, InvitationUpdateParameters, InvitationUpdateSettingsParameters } from '../models';
export interface InvitationCreateRequest {
    accountId: string;
    invitationCreateParameters: InvitationCreateParameters;
    xPhraseAppOTP?: string;
}
export interface InvitationDeleteRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface InvitationResendRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface InvitationShowRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface InvitationUpdateRequest {
    accountId: string;
    id: string;
    invitationUpdateParameters: InvitationUpdateParameters;
    xPhraseAppOTP?: string;
}
export interface InvitationUpdateSettingsRequest {
    projectId: string;
    id: string;
    invitationUpdateSettingsParameters: InvitationUpdateSettingsParameters;
    xPhraseAppOTP?: string;
}
export interface InvitationsListRequest {
    accountId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}
/**
 *
 */
export declare class InvitationsApi extends runtime.BaseAPI {
    /**
     * Invite a person to an account. Developers and translators need <code>project_ids</code> and <code>locale_ids</code> assigned to access them. Access token scope must include <code>team.manage</code>.
     * Create a new invitation
     */
    invitationCreateRaw(requestParameters: InvitationCreateRequest): Promise<runtime.ApiResponse<Invitation>>;
    /**
     * Invite a person to an account. Developers and translators need <code>project_ids</code> and <code>locale_ids</code> assigned to access them. Access token scope must include <code>team.manage</code>.
     * Create a new invitation
     */
    invitationCreate(requestParameters: InvitationCreateRequest): Promise<Invitation>;
    /**
     * Delete an existing invitation (must not be accepted yet). Access token scope must include <code>team.manage</code>.
     * Delete an invitation
     */
    invitationDeleteRaw(requestParameters: InvitationDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing invitation (must not be accepted yet). Access token scope must include <code>team.manage</code>.
     * Delete an invitation
     */
    invitationDelete(requestParameters: InvitationDeleteRequest): Promise<any>;
    /**
     * Resend the invitation email (must not be accepted yet). Access token scope must include <code>team.manage</code>.
     * Resend an invitation
     */
    invitationResendRaw(requestParameters: InvitationResendRequest): Promise<runtime.ApiResponse<Invitation>>;
    /**
     * Resend the invitation email (must not be accepted yet). Access token scope must include <code>team.manage</code>.
     * Resend an invitation
     */
    invitationResend(requestParameters: InvitationResendRequest): Promise<Invitation>;
    /**
     * Get details on a single invitation. Access token scope must include <code>team.manage</code>.
     * Get a single invitation
     */
    invitationShowRaw(requestParameters: InvitationShowRequest): Promise<runtime.ApiResponse<Invitation>>;
    /**
     * Get details on a single invitation. Access token scope must include <code>team.manage</code>.
     * Get a single invitation
     */
    invitationShow(requestParameters: InvitationShowRequest): Promise<Invitation>;
    /**
     * Update an existing invitation (must not be accepted yet). The <code>email</code> cannot be updated. Developers and translators need <code>project_ids</code> and <code>locale_ids</code> assigned to access them. Access token scope must include <code>team.manage</code>.
     * Update an invitation
     */
    invitationUpdateRaw(requestParameters: InvitationUpdateRequest): Promise<runtime.ApiResponse<Invitation>>;
    /**
     * Update an existing invitation (must not be accepted yet). The <code>email</code> cannot be updated. Developers and translators need <code>project_ids</code> and <code>locale_ids</code> assigned to access them. Access token scope must include <code>team.manage</code>.
     * Update an invitation
     */
    invitationUpdate(requestParameters: InvitationUpdateRequest): Promise<Invitation>;
    /**
     * Update member\'s settings in the invitations. Access token scope must include <code>team.manage</code>.
     * Update a member\'s invitation access
     */
    invitationUpdateSettingsRaw(requestParameters: InvitationUpdateSettingsRequest): Promise<runtime.ApiResponse<Invitation>>;
    /**
     * Update member\'s settings in the invitations. Access token scope must include <code>team.manage</code>.
     * Update a member\'s invitation access
     */
    invitationUpdateSettings(requestParameters: InvitationUpdateSettingsRequest): Promise<Invitation>;
    /**
     * List invitations for an account. It will also list the accessible resources like projects and locales the invited user has access to. In case nothing is shown the default access from the role is used. Access token scope must include <code>team.manage</code>.
     * List invitations
     */
    invitationsListRaw(requestParameters: InvitationsListRequest): Promise<runtime.ApiResponse<Array<Invitation>>>;
    /**
     * List invitations for an account. It will also list the accessible resources like projects and locales the invited user has access to. In case nothing is shown the default access from the role is used. Access token scope must include <code>team.manage</code>.
     * List invitations
     */
    invitationsList(requestParameters: InvitationsListRequest): Promise<Array<Invitation>>;
}
