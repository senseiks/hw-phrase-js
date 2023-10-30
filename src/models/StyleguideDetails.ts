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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface StyleguideDetails
 */
export interface StyleguideDetails {
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    title?: string;
    /**
     * 
     * @type {Date}
     * @memberof StyleguideDetails
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof StyleguideDetails
     */
    updatedAt?: Date;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    publicUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    audience?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    targetAudience?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    grammaticalPerson?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    vocabularyType?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    business?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    companyBranding?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    formatting?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    glossaryTerms?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    grammarConsistency?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    literalTranslation?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    overallTone?: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideDetails
     */
    samples?: string;
}

export function StyleguideDetailsFromJSON(json: any): StyleguideDetails {
    return StyleguideDetailsFromJSONTyped(json, false);
}

export function StyleguideDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StyleguideDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': !exists(json, 'updated_at') ? undefined : (new Date(json['updated_at'])),
        'publicUrl': !exists(json, 'public_url') ? undefined : json['public_url'],
        'audience': !exists(json, 'audience') ? undefined : json['audience'],
        'targetAudience': !exists(json, 'target_audience') ? undefined : json['target_audience'],
        'grammaticalPerson': !exists(json, 'grammatical_person') ? undefined : json['grammatical_person'],
        'vocabularyType': !exists(json, 'vocabulary_type') ? undefined : json['vocabulary_type'],
        'business': !exists(json, 'business') ? undefined : json['business'],
        'companyBranding': !exists(json, 'company_branding') ? undefined : json['company_branding'],
        'formatting': !exists(json, 'formatting') ? undefined : json['formatting'],
        'glossaryTerms': !exists(json, 'glossary_terms') ? undefined : json['glossary_terms'],
        'grammarConsistency': !exists(json, 'grammar_consistency') ? undefined : json['grammar_consistency'],
        'literalTranslation': !exists(json, 'literal_translation') ? undefined : json['literal_translation'],
        'overallTone': !exists(json, 'overall_tone') ? undefined : json['overall_tone'],
        'samples': !exists(json, 'samples') ? undefined : json['samples'],
    };
}

export function StyleguideDetailsToJSON(value?: StyleguideDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'title': value.title,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
        'updated_at': value.updatedAt === undefined ? undefined : (value.updatedAt.toISOString()),
        'public_url': value.publicUrl,
        'audience': value.audience,
        'target_audience': value.targetAudience,
        'grammatical_person': value.grammaticalPerson,
        'vocabulary_type': value.vocabularyType,
        'business': value.business,
        'company_branding': value.companyBranding,
        'formatting': value.formatting,
        'glossary_terms': value.glossaryTerms,
        'grammar_consistency': value.grammarConsistency,
        'literal_translation': value.literalTranslation,
        'overall_tone': value.overallTone,
        'samples': value.samples,
    };
}


