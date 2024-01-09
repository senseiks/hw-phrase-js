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
import { Team, TeamCreateParameters, TeamDetail, TeamUpdateParameters, TeamsProjectsCreateParameters, TeamsSpacesCreateParameters, TeamsUsersCreateParameters } from '../models';
export interface TeamCreateRequest {
    accountId: string;
    teamCreateParameters: TeamCreateParameters;
    xPhraseAppOTP?: string;
}
export interface TeamDeleteRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface TeamShowRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface TeamUpdateRequest {
    accountId: string;
    id: string;
    teamUpdateParameters: TeamUpdateParameters;
    xPhraseAppOTP?: string;
}
export interface TeamsListRequest {
    accountId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}
export interface TeamsProjectsCreateRequest {
    accountId: string;
    teamId: string;
    teamsProjectsCreateParameters: TeamsProjectsCreateParameters;
    xPhraseAppOTP?: string;
}
export interface TeamsProjectsDeleteRequest {
    accountId: string;
    teamId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface TeamsSpacesCreateRequest {
    accountId: string;
    teamId: string;
    teamsSpacesCreateParameters: TeamsSpacesCreateParameters;
    xPhraseAppOTP?: string;
}
export interface TeamsSpacesDeleteRequest {
    accountId: string;
    teamId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface TeamsUsersCreateRequest {
    accountId: string;
    teamId: string;
    teamsUsersCreateParameters: TeamsUsersCreateParameters;
    xPhraseAppOTP?: string;
}
export interface TeamsUsersDeleteRequest {
    accountId: string;
    teamId: string;
    id: string;
    xPhraseAppOTP?: string;
}
/**
 *
 */
export declare class TeamsApi extends runtime.BaseAPI {
    /**
     * Create a new Team.
     * Create a Team
     */
    teamCreateRaw(requestParameters: TeamCreateRequest): Promise<runtime.ApiResponse<TeamDetail>>;
    /**
     * Create a new Team.
     * Create a Team
     */
    teamCreate(requestParameters: TeamCreateRequest): Promise<TeamDetail>;
    /**
     * Delete the specified Team.
     * Delete Team
     */
    teamDeleteRaw(requestParameters: TeamDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete the specified Team.
     * Delete Team
     */
    teamDelete(requestParameters: TeamDeleteRequest): Promise<any>;
    /**
     * Show the specified Team.
     * Get Team
     */
    teamShowRaw(requestParameters: TeamShowRequest): Promise<runtime.ApiResponse<TeamDetail>>;
    /**
     * Show the specified Team.
     * Get Team
     */
    teamShow(requestParameters: TeamShowRequest): Promise<TeamDetail>;
    /**
     * Update the specified Team.
     * Update Team
     */
    teamUpdateRaw(requestParameters: TeamUpdateRequest): Promise<runtime.ApiResponse<TeamDetail>>;
    /**
     * Update the specified Team.
     * Update Team
     */
    teamUpdate(requestParameters: TeamUpdateRequest): Promise<TeamDetail>;
    /**
     * List all Teams for the given account.
     * List Teams
     */
    teamsListRaw(requestParameters: TeamsListRequest): Promise<runtime.ApiResponse<Array<Team>>>;
    /**
     * List all Teams for the given account.
     * List Teams
     */
    teamsList(requestParameters: TeamsListRequest): Promise<Array<Team>>;
    /**
     * Adds an existing project to the team.
     * Add Project to Team
     */
    teamsProjectsCreateRaw(requestParameters: TeamsProjectsCreateRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Adds an existing project to the team.
     * Add Project to Team
     */
    teamsProjectsCreate(requestParameters: TeamsProjectsCreateRequest): Promise<any>;
    /**
     * Removes a specified project from the specified team.
     * Remove Project from Team
     */
    teamsProjectsDeleteRaw(requestParameters: TeamsProjectsDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Removes a specified project from the specified team.
     * Remove Project from Team
     */
    teamsProjectsDelete(requestParameters: TeamsProjectsDeleteRequest): Promise<any>;
    /**
     * Adds an existing space to the team.
     * Add Space
     */
    teamsSpacesCreateRaw(requestParameters: TeamsSpacesCreateRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Adds an existing space to the team.
     * Add Space
     */
    teamsSpacesCreate(requestParameters: TeamsSpacesCreateRequest): Promise<any>;
    /**
     * Removes a specified space from the specified team.
     * Remove Space
     */
    teamsSpacesDeleteRaw(requestParameters: TeamsSpacesDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Removes a specified space from the specified team.
     * Remove Space
     */
    teamsSpacesDelete(requestParameters: TeamsSpacesDeleteRequest): Promise<any>;
    /**
     * Adds an existing user to the team.
     * Add User
     */
    teamsUsersCreateRaw(requestParameters: TeamsUsersCreateRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Adds an existing user to the team.
     * Add User
     */
    teamsUsersCreate(requestParameters: TeamsUsersCreateRequest): Promise<any>;
    /**
     * Removes a specified user from the specified team.
     * Remove User
     */
    teamsUsersDeleteRaw(requestParameters: TeamsUsersDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Removes a specified user from the specified team.
     * Remove User
     */
    teamsUsersDelete(requestParameters: TeamsUsersDeleteRequest): Promise<any>;
}