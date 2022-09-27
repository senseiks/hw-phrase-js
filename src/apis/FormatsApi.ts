/* tslint:disable */
/* eslint-disable */
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
import {
    Format,
    FormatFromJSON,
    FormatToJSON,
} from '../models';

export interface FormatsListRequest {
    xPhraseAppOTP?: string;
}

/**
 * 
 */
export class FormatsApi extends runtime.BaseAPI {

    /**
     * Get a handy list of all localization file formats supported in Phrase.
     * List formats
     */
    async formatsListRaw(requestParameters: FormatsListRequest): Promise<runtime.ApiResponse<Array<Format>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
        }

        const response = await this.request({
            path: `/formats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(FormatFromJSON));
    }

    /**
     * Get a handy list of all localization file formats supported in Phrase.
     * List formats
     */
    async formatsList(requestParameters: FormatsListRequest): Promise<Array<Format>> {
        const response = await this.formatsListRaw(requestParameters);
        return await response.value();
    }

}
