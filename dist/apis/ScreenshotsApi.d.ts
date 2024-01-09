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
import { Screenshot, ScreenshotUpdateParameters } from '../models';
export interface ScreenshotCreateRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    branch?: string;
    name?: string;
    description?: string;
    filename?: Blob;
}
export interface ScreenshotDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface ScreenshotShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
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
    branch?: string;
    keyId?: string;
}
/**
 *
 */
export declare class ScreenshotsApi extends runtime.BaseAPI {
    /**
     * Create a new screenshot.
     * Create a screenshot
     */
    screenshotCreateRaw(requestParameters: ScreenshotCreateRequest): Promise<runtime.ApiResponse<Screenshot>>;
    /**
     * Create a new screenshot.
     * Create a screenshot
     */
    screenshotCreate(requestParameters: ScreenshotCreateRequest): Promise<Screenshot>;
    /**
     * Delete an existing screenshot.
     * Delete a screenshot
     */
    screenshotDeleteRaw(requestParameters: ScreenshotDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing screenshot.
     * Delete a screenshot
     */
    screenshotDelete(requestParameters: ScreenshotDeleteRequest): Promise<any>;
    /**
     * Get details on a single screenshot for a given project.
     * Get a single screenshot
     */
    screenshotShowRaw(requestParameters: ScreenshotShowRequest): Promise<runtime.ApiResponse<Screenshot>>;
    /**
     * Get details on a single screenshot for a given project.
     * Get a single screenshot
     */
    screenshotShow(requestParameters: ScreenshotShowRequest): Promise<Screenshot>;
    /**
     * Update an existing screenshot.
     * Update a screenshot
     */
    screenshotUpdateRaw(requestParameters: ScreenshotUpdateRequest): Promise<runtime.ApiResponse<Screenshot>>;
    /**
     * Update an existing screenshot.
     * Update a screenshot
     */
    screenshotUpdate(requestParameters: ScreenshotUpdateRequest): Promise<Screenshot>;
    /**
     * List all screenshots for the given project.
     * List screenshots
     */
    screenshotsListRaw(requestParameters: ScreenshotsListRequest): Promise<runtime.ApiResponse<Array<Screenshot>>>;
    /**
     * List all screenshots for the given project.
     * List screenshots
     */
    screenshotsList(requestParameters: ScreenshotsListRequest): Promise<Array<Screenshot>>;
}
