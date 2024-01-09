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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentReactionToJSON = exports.CommentReactionFromJSONTyped = exports.CommentReactionFromJSON = void 0;
var runtime_1 = require("../runtime");
var _1 = require("./");
function CommentReactionFromJSON(json) {
    return CommentReactionFromJSONTyped(json, false);
}
exports.CommentReactionFromJSON = CommentReactionFromJSON;
function CommentReactionFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'emoji': !(0, runtime_1.exists)(json, 'emoji') ? undefined : json['emoji'],
        'createdAt': !(0, runtime_1.exists)(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !(0, runtime_1.exists)(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : (0, _1.CommentFromJSON)(json['comment']),
        'user': !(0, runtime_1.exists)(json, 'user') ? undefined : (0, _1.UserPreviewFromJSON)(json['user']),
    };
}
exports.CommentReactionFromJSONTyped = CommentReactionFromJSONTyped;
function CommentReactionToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'emoji': value.emoji,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'comment': (0, _1.CommentToJSON)(value.comment),
        'user': (0, _1.UserPreviewToJSON)(value.user),
    };
}
exports.CommentReactionToJSON = CommentReactionToJSON;