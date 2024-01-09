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
import { Glossary, GlossaryCreateParameters, GlossaryUpdateParameters } from '../models';
export interface GlossariesListRequest {
    accountId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
}
export interface GlossaryCreateRequest {
    accountId: string;
    glossaryCreateParameters: GlossaryCreateParameters;
    xPhraseAppOTP?: string;
}
export interface GlossaryDeleteRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface GlossaryShowRequest {
    accountId: string;
    id: string;
    xPhraseAppOTP?: string;
}
export interface GlossaryUpdateRequest {
    accountId: string;
    id: string;
    glossaryUpdateParameters: GlossaryUpdateParameters;
    xPhraseAppOTP?: string;
}
/**
 *
 */
export declare class GlossariesApi extends runtime.BaseAPI {
    /**
     * List all term bases (previously: glossaries) the current user has access to.
     * List term bases
     */
    glossariesListRaw(requestParameters: GlossariesListRequest): Promise<runtime.ApiResponse<Array<Glossary>>>;
    /**
     * List all term bases (previously: glossaries) the current user has access to.
     * List term bases
     */
    glossariesList(requestParameters: GlossariesListRequest): Promise<Array<Glossary>>;
    /**
     * Create a new term base (previously: glossary).
     * Create a term base
     */
    glossaryCreateRaw(requestParameters: GlossaryCreateRequest): Promise<runtime.ApiResponse<Glossary>>;
    /**
     * Create a new term base (previously: glossary).
     * Create a term base
     */
    glossaryCreate(requestParameters: GlossaryCreateRequest): Promise<Glossary>;
    /**
     * Delete an existing term base (previously: glossary).
     * Delete a term base
     */
    glossaryDeleteRaw(requestParameters: GlossaryDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing term base (previously: glossary).
     * Delete a term base
     */
    glossaryDelete(requestParameters: GlossaryDeleteRequest): Promise<any>;
    /**
     * Get details on a single term base (previously: glossary).
     * Get a single term base
     */
    glossaryShowRaw(requestParameters: GlossaryShowRequest): Promise<runtime.ApiResponse<Glossary>>;
    /**
     * Get details on a single term base (previously: glossary).
     * Get a single term base
     */
    glossaryShow(requestParameters: GlossaryShowRequest): Promise<Glossary>;
    /**
     * Update an existing term base (previously: glossary).
     * Update a term base
     */
    glossaryUpdateRaw(requestParameters: GlossaryUpdateRequest): Promise<runtime.ApiResponse<Glossary>>;
    /**
     * Update an existing term base (previously: glossary).
     * Update a term base
     */
    glossaryUpdate(requestParameters: GlossaryUpdateRequest): Promise<Glossary>;
}