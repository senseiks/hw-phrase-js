"use strict";
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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadsApi = void 0;
var runtime = require("../runtime");
var models_1 = require("../models");
/**
 *
 */
var UploadsApi = /** @class */ (function (_super) {
    __extends(UploadsApi, _super);
    function UploadsApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Upload a new language file. Creates necessary resources in your project.
     * Upload a new file
     */
    UploadsApi.prototype.uploadCreateRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, consumes, canConsumeForm, formParams, useForm, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                            throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling uploadCreate.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
                            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
                        }
                        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
                        }
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
                        }
                        consumes = [
                            { contentType: 'multipart/form-data' },
                        ];
                        canConsumeForm = runtime.canConsumeForm(consumes);
                        useForm = false;
                        // use FormData to transmit files using content-type "multipart/form-data"
                        useForm = canConsumeForm;
                        if (useForm) {
                            formParams = new FormData();
                        }
                        else {
                            formParams = new URLSearchParams();
                        }
                        if (requestParameters.branch !== undefined) {
                            formParams.append('branch', requestParameters.branch);
                        }
                        if (requestParameters.file !== undefined) {
                            formParams.append('file', requestParameters.file);
                        }
                        if (requestParameters.fileFormat !== undefined) {
                            formParams.append('file_format', requestParameters.fileFormat);
                        }
                        if (requestParameters.localeId !== undefined) {
                            formParams.append('locale_id', requestParameters.localeId);
                        }
                        if (requestParameters.tags !== undefined) {
                            formParams.append('tags', requestParameters.tags);
                        }
                        if (requestParameters.updateTranslations !== undefined) {
                            formParams.append('update_translations', requestParameters.updateTranslations);
                        }
                        if (requestParameters.updateDescriptions !== undefined) {
                            formParams.append('update_descriptions', requestParameters.updateDescriptions);
                        }
                        if (requestParameters.convertEmoji !== undefined) {
                            formParams.append('convert_emoji', requestParameters.convertEmoji);
                        }
                        if (requestParameters.skipUploadTags !== undefined) {
                            formParams.append('skip_upload_tags', requestParameters.skipUploadTags);
                        }
                        if (requestParameters.skipUnverification !== undefined) {
                            formParams.append('skip_unverification', requestParameters.skipUnverification);
                        }
                        if (requestParameters.fileEncoding !== undefined) {
                            formParams.append('file_encoding', requestParameters.fileEncoding);
                        }
                        if (requestParameters.localeMapping !== undefined) {
                            this.flattenDeepParams({
                                locale_mapping: requestParameters.localeMapping
                            }).forEach(function (_a) {
                                var name = _a[0], value = _a[1];
                                formParams.append(name, value);
                            });
                        }
                        if (requestParameters.formatOptions !== undefined) {
                            this.flattenDeepParams({
                                format_options: requestParameters.formatOptions
                            }).forEach(function (_a) {
                                var name = _a[0], value = _a[1];
                                formParams.append(name, value);
                            });
                        }
                        if (requestParameters.autotranslate !== undefined) {
                            formParams.append('autotranslate', requestParameters.autotranslate);
                        }
                        if (requestParameters.markReviewed !== undefined) {
                            formParams.append('mark_reviewed', requestParameters.markReviewed);
                        }
                        if (requestParameters.tagOnlyAffectedKeys !== undefined) {
                            formParams.append('tag_only_affected_keys', requestParameters.tagOnlyAffectedKeys);
                        }
                        return [4 /*yield*/, this.request({
                                path: "/projects/{project_id}/uploads".replace("{".concat("project_id", "}"), encodeURIComponent(String(requestParameters.projectId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: formParams,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.UploadFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Upload a new language file. Creates necessary resources in your project.
     * Upload a new file
     */
    UploadsApi.prototype.uploadCreate = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadCreateRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * View details and summary for a single upload.
     * Get a single upload
     */
    UploadsApi.prototype.uploadShowRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                            throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling uploadShow.');
                        }
                        if (requestParameters.id === null || requestParameters.id === undefined) {
                            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling uploadShow.');
                        }
                        queryParameters = {};
                        if (requestParameters.branch !== undefined) {
                            queryParameters['branch'] = requestParameters.branch;
                        }
                        headerParameters = {};
                        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
                            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
                        }
                        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
                        }
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/projects/{project_id}/uploads/{id}".replace("{".concat("project_id", "}"), encodeURIComponent(String(requestParameters.projectId))).replace("{".concat("id", "}"), encodeURIComponent(String(requestParameters.id))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.UploadFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * View details and summary for a single upload.
     * Get a single upload
     */
    UploadsApi.prototype.uploadShow = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadShowRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * List all uploads for the given project.
     * List uploads
     */
    UploadsApi.prototype.uploadsListRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                            throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling uploadsList.');
                        }
                        queryParameters = {};
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.perPage !== undefined) {
                            queryParameters['per_page'] = requestParameters.perPage;
                        }
                        if (requestParameters.branch !== undefined) {
                            queryParameters['branch'] = requestParameters.branch;
                        }
                        headerParameters = {};
                        if (requestParameters.xPhraseAppOTP !== undefined && requestParameters.xPhraseAppOTP !== null) {
                            headerParameters['X-PhraseApp-OTP'] = String(requestParameters.xPhraseAppOTP);
                        }
                        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
                            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
                        }
                        if (this.configuration && this.configuration.apiKey) {
                            headerParameters["Authorization"] = this.configuration.apiKey("Authorization"); // Token authentication
                        }
                        return [4 /*yield*/, this.request({
                                path: "/projects/{project_id}/uploads".replace("{".concat("project_id", "}"), encodeURIComponent(String(requestParameters.projectId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(models_1.UploadFromJSON); })];
                }
            });
        });
    };
    /**
     * List all uploads for the given project.
     * List uploads
     */
    UploadsApi.prototype.uploadsList = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.uploadsListRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UploadsApi;
}(runtime.BaseAPI));
exports.UploadsApi = UploadsApi;
