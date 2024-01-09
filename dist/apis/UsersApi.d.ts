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
import { CurrentUser } from '../models';
export interface ShowUserRequest {
    xPhraseAppOTP?: string;
}
/**
 *
 */
export declare class UsersApi extends runtime.BaseAPI {
    /**
     * Show details for current User.
     * Show current User
     */
    showUserRaw(requestParameters: ShowUserRequest): Promise<runtime.ApiResponse<CurrentUser>>;
    /**
     * Show details for current User.
     * Show current User
     */
    showUser(requestParameters: ShowUserRequest): Promise<CurrentUser>;
}
