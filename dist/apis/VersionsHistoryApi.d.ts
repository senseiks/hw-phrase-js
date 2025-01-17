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
import { TranslationVersion, TranslationVersionWithUser } from '../models';
export interface VersionShowRequest {
    projectId: string;
    translationId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface VersionsListRequest {
    projectId: string;
    translationId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}
/**
 *
 */
export declare class VersionsHistoryApi extends runtime.BaseAPI {
    /**
     * Get details on a single version.
     * Get a single version
     */
    versionShowRaw(requestParameters: VersionShowRequest): Promise<runtime.ApiResponse<TranslationVersionWithUser>>;
    /**
     * Get details on a single version.
     * Get a single version
     */
    versionShow(requestParameters: VersionShowRequest): Promise<TranslationVersionWithUser>;
    /**
     * List all changes done to a given translation.
     * List all versions
     */
    versionsListRaw(requestParameters: VersionsListRequest): Promise<runtime.ApiResponse<Array<TranslationVersion>>>;
    /**
     * List all changes done to a given translation.
     * List all versions
     */
    versionsList(requestParameters: VersionsListRequest): Promise<Array<TranslationVersion>>;
}
