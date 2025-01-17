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
import { CommentReaction } from '../models';
export interface ReactionCreateRequest {
    projectId: string;
    keyId: string;
    commentId: string;
    xPhraseAppOTP?: string;
    branch?: string;
    emoji?: string;
}
export interface ReactionDeleteRequest {
    projectId: string;
    keyId: string;
    commentId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface ReactionShowRequest {
    projectId: string;
    keyId: string;
    commentId: string;
    id: string;
    xPhraseAppOTP?: string;
    branch?: string;
}
export interface ReactionsListRequest {
    projectId: string;
    keyId: string;
    commentId: string;
    xPhraseAppOTP?: string;
    page?: number;
    perPage?: number;
    branch?: string;
}
/**
 *
 */
export declare class CommentReactionsApi extends runtime.BaseAPI {
    /**
     * Create a new reaction for a comment.
     * Create a reaction
     */
    reactionCreateRaw(requestParameters: ReactionCreateRequest): Promise<runtime.ApiResponse<CommentReaction>>;
    /**
     * Create a new reaction for a comment.
     * Create a reaction
     */
    reactionCreate(requestParameters: ReactionCreateRequest): Promise<CommentReaction>;
    /**
     * Delete an existing reaction.
     * Delete a reaction
     */
    reactionDeleteRaw(requestParameters: ReactionDeleteRequest): Promise<runtime.ApiResponse<any>>;
    /**
     * Delete an existing reaction.
     * Delete a reaction
     */
    reactionDelete(requestParameters: ReactionDeleteRequest): Promise<any>;
    /**
     * Get details on a single reaction.
     * Get a single reaction
     */
    reactionShowRaw(requestParameters: ReactionShowRequest): Promise<runtime.ApiResponse<CommentReaction>>;
    /**
     * Get details on a single reaction.
     * Get a single reaction
     */
    reactionShow(requestParameters: ReactionShowRequest): Promise<CommentReaction>;
    /**
     * List all reactions for a comment.
     * List reactions
     */
    reactionsListRaw(requestParameters: ReactionsListRequest): Promise<runtime.ApiResponse<Array<CommentReaction>>>;
    /**
     * List all reactions for a comment.
     * List reactions
     */
    reactionsList(requestParameters: ReactionsListRequest): Promise<Array<CommentReaction>>;
}
