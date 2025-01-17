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
import { JobLocale, JobLocaleCompleteParameters, JobLocaleCompleteReviewParameters, JobLocaleReopenParameters, JobLocaleUpdateParameters, JobLocalesCreateParameters } from '../models';
export interface JobLocaleCompleteRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleCompleteParameters: JobLocaleCompleteParameters;
    xPhraseAppOTP?: string;
}
export interface JobLocaleCompleteReviewRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleCompleteReviewParameters: JobLocaleCompleteReviewParameters;
    xPhraseAppOTP?: string;
}
export interface JobLocaleDeleteRequest {
    projectId: string;
    jobId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface JobLocaleReopenRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleReopenParameters: JobLocaleReopenParameters;
    xPhraseAppOTP?: string;
}
export interface JobLocaleShowRequest {
    projectId: string;
    jobId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface JobLocaleUpdateRequest {
    projectId: string;
    jobId: string;
    id: string;
    jobLocaleUpdateParameters: JobLocaleUpdateParameters;
    xPhraseAppOTP?: string;
}
export interface JobLocalesCreateRequest {
    projectId: string;
    jobId: string;
    jobLocalesCreateParameters: JobLocalesCreateParameters;
    xPhraseAppOTP?: string;
}
export interface JobLocalesListRequest {
    projectId: string;
    jobId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}
/**
 *
 */
export declare class JobLocalesApi extends runtime.BaseAPI {
    /**
     * Mark a job locale as completed.
     * Complete a job locale
     */
    jobLocaleCompleteRaw(requestParameters: JobLocaleCompleteRequest): Promise<runtime.ApiResponse<JobLocale>>;
    /**
     * Mark a job locale as completed.
     * Complete a job locale
     */
    jobLocaleComplete(requestParameters: JobLocaleCompleteRequest): Promise<JobLocale>;
    /**
     * Mark job locale as reviewed.
     * Review a job locale
     */
    jobLocaleCompleteReviewRaw(requestParameters: JobLocaleCompleteReviewRequest): Promise<runtime.ApiResponse<JobLocale>>;
    /**
     * Mark job locale as reviewed.
     * Review a job locale
     */
    jobLocaleCompleteReview(requestParameters: JobLocaleCompleteReviewRequest): Promise<JobLocale>;
    /**
     * Removes a target locale from a job.
     * Remove a target locale from a job
     */
    jobLocaleDeleteRaw(requestParameters: JobLocaleDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Removes a target locale from a job.
     * Remove a target locale from a job
     */
    jobLocaleDelete(requestParameters: JobLocaleDeleteRequest): Promise<any>;
    /**
     * Mark a job locale as uncompleted.
     * Reopen a job locale
     */
    jobLocaleReopenRaw(requestParameters: JobLocaleReopenRequest): Promise<runtime.ApiResponse<JobLocale>>;
    /**
     * Mark a job locale as uncompleted.
     * Reopen a job locale
     */
    jobLocaleReopen(requestParameters: JobLocaleReopenRequest): Promise<JobLocale>;
    /**
     * Get a single target locale for a given job.
     * Show single job target locale
     */
    jobLocaleShowRaw(requestParameters: JobLocaleShowRequest): Promise<runtime.ApiResponse<JobLocale>>;
    /**
     * Get a single target locale for a given job.
     * Show single job target locale
     */
    jobLocaleShow(requestParameters: JobLocaleShowRequest): Promise<JobLocale>;
    /**
     * Update an existing job target locale.
     * Update a job target locale
     */
    jobLocaleUpdateRaw(requestParameters: JobLocaleUpdateRequest): Promise<runtime.ApiResponse<JobLocale>>;
    /**
     * Update an existing job target locale.
     * Update a job target locale
     */
    jobLocaleUpdate(requestParameters: JobLocaleUpdateRequest): Promise<JobLocale>;
    /**
     * Adds a target locale to a job.
     * Add a target locale to a job
     */
    jobLocalesCreateRaw(requestParameters: JobLocalesCreateRequest): Promise<runtime.ApiResponse<JobLocale>>;
    /**
     * Adds a target locale to a job.
     * Add a target locale to a job
     */
    jobLocalesCreate(requestParameters: JobLocalesCreateRequest): Promise<JobLocale>;
    /**
     * List all target locales for a given job.
     * List job target locales
     */
    jobLocalesListRaw(requestParameters: JobLocalesListRequest): Promise<runtime.ApiResponse<Array<JobLocale>>>;
    /**
     * List all target locales for a given job.
     * List job target locales
     */
    jobLocalesList(requestParameters: JobLocalesListRequest): Promise<Array<JobLocale>>;
}
