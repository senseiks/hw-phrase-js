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
import { Locale, LocaleCreateParameters, LocaleDetails, LocalePreview1, LocaleUpdateParameters } from '../models';
export interface AccountLocalesRequest {
    id: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}
export interface LocaleCreateRequest {
    projectId: string;
    localeCreateParameters: LocaleCreateParameters;
    xPhraseAppOTP?: string;
}
export interface LocaleDeleteRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface LocaleDownloadRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    ifModifiedSince?: string;
    ifNoneMatch?: string;
    branch?: string;
    fileFormat?: string;
    tags?: string;
    tag?: string;
    includeEmptyTranslations?: boolean;
    excludeEmptyZeroForms?: boolean;
    includeTranslatedKeys?: boolean;
    keepNotranslateTags?: boolean;
    convertEmoji?: boolean;
    formatOptions?: object;
    encoding?: string;
    skipUnverifiedTranslations?: boolean;
    includeUnverifiedTranslations?: boolean;
    useLastReviewedVersion?: boolean;
    fallbackLocaleId?: string;
    sourceLocaleId?: string;
    customMetadataFilters?: object;
}
export interface LocaleShowRequest {
    projectId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface LocaleUpdateRequest {
    projectId: string;
    id: string;
    localeUpdateParameters: LocaleUpdateParameters;
    xPhraseAppOTP?: string;
}
export interface LocalesListRequest {
    projectId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    sortBy?: string;
    branch?: string;
}
/**
 *
 */
export declare class LocalesApi extends runtime.BaseAPI {
    /**
     * List all locales unique by locale code used across all projects within an account.
     * List locales used in account
     */
    accountLocalesRaw(requestParameters: AccountLocalesRequest): Promise<runtime.ApiResponse<Array<LocalePreview1>>>;
    /**
     * List all locales unique by locale code used across all projects within an account.
     * List locales used in account
     */
    accountLocales(requestParameters: AccountLocalesRequest): Promise<Array<LocalePreview1>>;
    /**
     * Create a new locale.
     * Create a locale
     */
    localeCreateRaw(requestParameters: LocaleCreateRequest): Promise<runtime.ApiResponse<LocaleDetails>>;
    /**
     * Create a new locale.
     * Create a locale
     */
    localeCreate(requestParameters: LocaleCreateRequest): Promise<LocaleDetails>;
    /**
     * Delete an existing locale.
     * Delete a locale
     */
    localeDeleteRaw(requestParameters: LocaleDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing locale.
     * Delete a locale
     */
    localeDelete(requestParameters: LocaleDeleteRequest): Promise<any>;
    /**
     * Download a locale in a specific file format.
     * Download a locale
     */
    localeDownloadRaw(requestParameters: LocaleDownloadRequest): Promise<runtime.ApiResponse<Blob>>;
    /**
     * Download a locale in a specific file format.
     * Download a locale
     */
    localeDownload(requestParameters: LocaleDownloadRequest): Promise<Blob>;
    /**
     * Get details on a single locale for a given project.
     * Get a single locale
     */
    localeShowRaw(requestParameters: LocaleShowRequest): Promise<runtime.ApiResponse<LocaleDetails>>;
    /**
     * Get details on a single locale for a given project.
     * Get a single locale
     */
    localeShow(requestParameters: LocaleShowRequest): Promise<LocaleDetails>;
    /**
     * Update an existing locale.
     * Update a locale
     */
    localeUpdateRaw(requestParameters: LocaleUpdateRequest): Promise<runtime.ApiResponse<LocaleDetails>>;
    /**
     * Update an existing locale.
     * Update a locale
     */
    localeUpdate(requestParameters: LocaleUpdateRequest): Promise<LocaleDetails>;
    /**
     * List all locales for the given project.
     * List locales
     */
    localesListRaw(requestParameters: LocalesListRequest): Promise<runtime.ApiResponse<Array<Locale>>>;
    /**
     * List all locales for the given project.
     * List locales
     */
    localesList(requestParameters: LocalesListRequest): Promise<Array<Locale>>;
}
