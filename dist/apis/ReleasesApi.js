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
exports.ReleasesApi = void 0;
var runtime = require("../runtime");
var models_1 = require("../models");
/**
 *
 */
var ReleasesApi = /** @class */ (function (_super) {
    __extends(ReleasesApi, _super);
    function ReleasesApi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Create a new release.
     * Create a release
     */
    ReleasesApi.prototype.releaseCreateRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling releaseCreate.');
                        }
                        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
                            throw new runtime.RequiredError('distributionId', 'Required parameter requestParameters.distributionId was null or undefined when calling releaseCreate.');
                        }
                        if (requestParameters.releaseCreateParameters === null || requestParameters.releaseCreateParameters === undefined) {
                            throw new runtime.RequiredError('releaseCreateParameters', 'Required parameter requestParameters.releaseCreateParameters was null or undefined when calling releaseCreate.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
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
                                path: "/accounts/{account_id}/distributions/{distribution_id}/releases".replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))).replace("{".concat("distribution_id", "}"), encodeURIComponent(String(requestParameters.distributionId))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.ReleaseCreateParametersToJSON)(requestParameters.releaseCreateParameters),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.ReleaseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Create a new release.
     * Create a release
     */
    ReleasesApi.prototype.releaseCreate = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.releaseCreateRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Delete an existing release.
     * Delete a release
     */
    ReleasesApi.prototype.releaseDeleteRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling releaseDelete.');
                        }
                        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
                            throw new runtime.RequiredError('distributionId', 'Required parameter requestParameters.distributionId was null or undefined when calling releaseDelete.');
                        }
                        if (requestParameters.id === null || requestParameters.id === undefined) {
                            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling releaseDelete.');
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
                        return [4 /*yield*/, this.request({
                                path: "/accounts/{account_id}/distributions/{distribution_id}/releases/{id}".replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))).replace("{".concat("distribution_id", "}"), encodeURIComponent(String(requestParameters.distributionId))).replace("{".concat("id", "}"), encodeURIComponent(String(requestParameters.id))),
                                method: 'DELETE',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.TextApiResponse(response)];
                }
            });
        });
    };
    /**
     * Delete an existing release.
     * Delete a release
     */
    ReleasesApi.prototype.releaseDelete = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.releaseDeleteRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Publish a release for production.
     * Publish a release
     */
    ReleasesApi.prototype.releasePublishRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling releasePublish.');
                        }
                        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
                            throw new runtime.RequiredError('distributionId', 'Required parameter requestParameters.distributionId was null or undefined when calling releasePublish.');
                        }
                        if (requestParameters.id === null || requestParameters.id === undefined) {
                            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling releasePublish.');
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
                        return [4 /*yield*/, this.request({
                                path: "/accounts/{account_id}/distributions/{distribution_id}/releases/{id}/publish".replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))).replace("{".concat("distribution_id", "}"), encodeURIComponent(String(requestParameters.distributionId))).replace("{".concat("id", "}"), encodeURIComponent(String(requestParameters.id))),
                                method: 'POST',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.ReleaseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Publish a release for production.
     * Publish a release
     */
    ReleasesApi.prototype.releasePublish = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.releasePublishRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Get details on a single release.
     * Get a single release
     */
    ReleasesApi.prototype.releaseShowRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling releaseShow.');
                        }
                        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
                            throw new runtime.RequiredError('distributionId', 'Required parameter requestParameters.distributionId was null or undefined when calling releaseShow.');
                        }
                        if (requestParameters.id === null || requestParameters.id === undefined) {
                            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling releaseShow.');
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
                        return [4 /*yield*/, this.request({
                                path: "/accounts/{account_id}/distributions/{distribution_id}/releases/{id}".replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))).replace("{".concat("distribution_id", "}"), encodeURIComponent(String(requestParameters.distributionId))).replace("{".concat("id", "}"), encodeURIComponent(String(requestParameters.id))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.ReleaseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Get details on a single release.
     * Get a single release
     */
    ReleasesApi.prototype.releaseShow = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.releaseShowRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * Update an existing release.
     * Update a release
     */
    ReleasesApi.prototype.releaseUpdateRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling releaseUpdate.');
                        }
                        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
                            throw new runtime.RequiredError('distributionId', 'Required parameter requestParameters.distributionId was null or undefined when calling releaseUpdate.');
                        }
                        if (requestParameters.id === null || requestParameters.id === undefined) {
                            throw new runtime.RequiredError('id', 'Required parameter requestParameters.id was null or undefined when calling releaseUpdate.');
                        }
                        if (requestParameters.releaseUpdateParameters === null || requestParameters.releaseUpdateParameters === undefined) {
                            throw new runtime.RequiredError('releaseUpdateParameters', 'Required parameter requestParameters.releaseUpdateParameters was null or undefined when calling releaseUpdate.');
                        }
                        queryParameters = {};
                        headerParameters = {};
                        headerParameters['Content-Type'] = 'application/json';
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
                                path: "/accounts/{account_id}/distributions/{distribution_id}/releases/{id}".replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))).replace("{".concat("distribution_id", "}"), encodeURIComponent(String(requestParameters.distributionId))).replace("{".concat("id", "}"), encodeURIComponent(String(requestParameters.id))),
                                method: 'PATCH',
                                headers: headerParameters,
                                query: queryParameters,
                                body: (0, models_1.ReleaseUpdateParametersToJSON)(requestParameters.releaseUpdateParameters),
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return (0, models_1.ReleaseFromJSON)(jsonValue); })];
                }
            });
        });
    };
    /**
     * Update an existing release.
     * Update a release
     */
    ReleasesApi.prototype.releaseUpdate = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.releaseUpdateRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * List all releases for the given distribution.
     * List releases
     */
    ReleasesApi.prototype.releasesListRaw = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryParameters, headerParameters, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (requestParameters.accountId === null || requestParameters.accountId === undefined) {
                            throw new runtime.RequiredError('accountId', 'Required parameter requestParameters.accountId was null or undefined when calling releasesList.');
                        }
                        if (requestParameters.distributionId === null || requestParameters.distributionId === undefined) {
                            throw new runtime.RequiredError('distributionId', 'Required parameter requestParameters.distributionId was null or undefined when calling releasesList.');
                        }
                        queryParameters = {};
                        if (requestParameters.page !== undefined) {
                            queryParameters['page'] = requestParameters.page;
                        }
                        if (requestParameters.perPage !== undefined) {
                            queryParameters['per_page'] = requestParameters.perPage;
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
                                path: "/accounts/{account_id}/distributions/{distribution_id}/releases".replace("{".concat("account_id", "}"), encodeURIComponent(String(requestParameters.accountId))).replace("{".concat("distribution_id", "}"), encodeURIComponent(String(requestParameters.distributionId))),
                                method: 'GET',
                                headers: headerParameters,
                                query: queryParameters,
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, new runtime.JSONApiResponse(response, function (jsonValue) { return jsonValue.map(models_1.ReleasePreviewFromJSON); })];
                }
            });
        });
    };
    /**
     * List all releases for the given distribution.
     * List releases
     */
    ReleasesApi.prototype.releasesList = function (requestParameters) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.releasesListRaw(requestParameters)];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.value()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ReleasesApi;
}(runtime.BaseAPI));
exports.ReleasesApi = ReleasesApi;
