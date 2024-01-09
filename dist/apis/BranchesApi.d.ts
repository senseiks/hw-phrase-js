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
import { Branch, BranchCreateParameters, BranchMergeParameters, BranchUpdateParameters } from '../models';
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
export declare class BranchesApi extends runtime.BaseAPI {
    /**
     * Compare branch with main branch. <br><br><i>Note: Comparing a branch may take several minutes depending on the project size.</i>
     * Compare branches
     */
    branchCompareRaw(requestParameters: BranchCompareRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Compare branch with main branch. <br><br><i>Note: Comparing a branch may take several minutes depending on the project size.</i>
     * Compare branches
     */
    branchCompare(requestParameters: BranchCompareRequest): Promise<any>;
    /**
     * Create a new branch. <br><br><i>Note: Creating a new branch may take several minutes depending on the project size.</i>
     * Create a branch
     */
    branchCreateRaw(requestParameters: BranchCreateRequest): Promise<runtime.ApiResponse<Branch>>;
    /**
     * Create a new branch. <br><br><i>Note: Creating a new branch may take several minutes depending on the project size.</i>
     * Create a branch
     */
    branchCreate(requestParameters: BranchCreateRequest): Promise<Branch>;
    /**
     * Delete an existing branch.
     * Delete a branch
     */
    branchDeleteRaw(requestParameters: BranchDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing branch.
     * Delete a branch
     */
    branchDelete(requestParameters: BranchDeleteRequest): Promise<any>;
    /**
     * Merge an existing branch. <br><br><i>Note: Merging a branch may take several minutes depending on diff size.</i>
     * Merge a branch
     */
    branchMergeRaw(requestParameters: BranchMergeRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Merge an existing branch. <br><br><i>Note: Merging a branch may take several minutes depending on diff size.</i>
     * Merge a branch
     */
    branchMerge(requestParameters: BranchMergeRequest): Promise<any>;
    /**
     * Get details on a single branch for a given project.
     * Get a single branch
     */
    branchShowRaw(requestParameters: BranchShowRequest): Promise<runtime.ApiResponse<Branch>>;
    /**
     * Get details on a single branch for a given project.
     * Get a single branch
     */
    branchShow(requestParameters: BranchShowRequest): Promise<Branch>;
    /**
     * Update an existing branch.
     * Update a branch
     */
    branchUpdateRaw(requestParameters: BranchUpdateRequest): Promise<runtime.ApiResponse<Branch>>;
    /**
     * Update an existing branch.
     * Update a branch
     */
    branchUpdate(requestParameters: BranchUpdateRequest): Promise<Branch>;
    /**
     * List all branches the of the current project.
     * List branches
     */
    branchesListRaw(requestParameters: BranchesListRequest): Promise<runtime.ApiResponse<Array<Branch>>>;
    /**
     * List all branches the of the current project.
     * List branches
     */
    branchesList(requestParameters: BranchesListRequest): Promise<Array<Branch>>;
}