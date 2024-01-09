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
import { Project, ProjectCreateParameters, ProjectDetails, ProjectUpdateParameters } from '../models';
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
export declare class ProjectsApi extends runtime.BaseAPI {
    /**
     * Create a new project.
     * Create a project
     */
    projectCreateRaw(requestParameters: ProjectCreateRequest): Promise<runtime.ApiResponse<ProjectDetails>>;
    /**
     * Create a new project.
     * Create a project
     */
    projectCreate(requestParameters: ProjectCreateRequest): Promise<ProjectDetails>;
    /**
     * Delete an existing project.
     * Delete a project
     */
    projectDeleteRaw(requestParameters: ProjectDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing project.
     * Delete a project
     */
    projectDelete(requestParameters: ProjectDeleteRequest): Promise<any>;
    /**
     * Get details on a single project.
     * Get a single project
     */
    projectShowRaw(requestParameters: ProjectShowRequest): Promise<runtime.ApiResponse<ProjectDetails>>;
    /**
     * Get details on a single project.
     * Get a single project
     */
    projectShow(requestParameters: ProjectShowRequest): Promise<ProjectDetails>;
    /**
     * Update an existing project.
     * Update a project
     */
    projectUpdateRaw(requestParameters: ProjectUpdateRequest): Promise<runtime.ApiResponse<ProjectDetails>>;
    /**
     * Update an existing project.
     * Update a project
     */
    projectUpdate(requestParameters: ProjectUpdateRequest): Promise<ProjectDetails>;
    /**
     * List all projects the current user has access to.
     * List projects
     */
    projectsListRaw(requestParameters: ProjectsListRequest): Promise<runtime.ApiResponse<Array<Project>>>;
    /**
     * List all projects the current user has access to.
     * List projects
     */
    projectsList(requestParameters: ProjectsListRequest): Promise<Array<Project>>;
}