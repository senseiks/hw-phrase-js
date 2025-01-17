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
import { AccountSearchResult, SearchInAccountParameters } from '../models';
export interface SearchInAccountRequest {
    accountId: string;
    searchInAccountParameters: SearchInAccountParameters;
    xPhraseAppOTP?: string;
}
/**
 *
 */
export declare class SearchApi extends runtime.BaseAPI {
    /**
     * Search for keys and translations in all account projects <br><br><i>Note: Search is limited to 10000 results and may not include recently updated data depending on the project sizes.</i>
     * Search across projects
     */
    searchInAccountRaw(requestParameters: SearchInAccountRequest): Promise<runtime.ApiResponse<AccountSearchResult>>;
    /**
     * Search for keys and translations in all account projects <br><br><i>Note: Search is limited to 10000 results and may not include recently updated data depending on the project sizes.</i>
     * Search across projects
     */
    searchInAccount(requestParameters: SearchInAccountRequest): Promise<AccountSearchResult>;
}
