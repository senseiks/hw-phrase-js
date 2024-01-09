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
export interface FigmaAttachmentAttachToKeyRequest {
    projectId: string;
    figmaAttachmentId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface FigmaAttachmentDetachFromKeyRequest {
    projectId: string;
    figmaAttachmentId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
/**
 *
 */
export declare class KeysFigmaAttachmentsApi extends runtime.BaseAPI {
    /**
     * Attach the Figma attachment to a key
     * Attach the Figma attachment to a key
     */
    figmaAttachmentAttachToKeyRaw(requestParameters: FigmaAttachmentAttachToKeyRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Attach the Figma attachment to a key
     * Attach the Figma attachment to a key
     */
    figmaAttachmentAttachToKey(requestParameters: FigmaAttachmentAttachToKeyRequest): Promise<any>;
    /**
     * Detach the Figma attachment from a key
     * Detach the Figma attachment from a key
     */
    figmaAttachmentDetachFromKeyRaw(requestParameters: FigmaAttachmentDetachFromKeyRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Detach the Figma attachment from a key
     * Detach the Figma attachment from a key
     */
    figmaAttachmentDetachFromKey(requestParameters: FigmaAttachmentDetachFromKeyRequest): Promise<any>;
}