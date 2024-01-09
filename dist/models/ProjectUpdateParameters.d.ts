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
/**
 *
 * @export
 * @interface ProjectUpdateParameters
 */
export interface ProjectUpdateParameters {
    /**
     * Required if the requesting user is a member of multiple accounts. Account ID to specify the actual account the project should be created in.
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    accountId?: string;
    /**
     * (Optional) Name of the project
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    name?: string;
    /**
     * (Optional) User ID of the point of contact for the project. Pass `null` to unset.
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    pointOfContact?: string;
    /**
     * (Optional) Main file format specified by its API Extension name. Used for locale downloads if no format is specified. For API Extension names of available file formats see <a href=\"https://support.phrase.com/hc/en-us/sections/6111343326364\">Format Guide</a> or our <a href=\"#formats\">Formats API Endpoint</a>.
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    mainFormat?: string;
    /**
     * (Optional) Main technology stack used in the project. It affects for example the suggested placeholder style. Predefined values include: `Ruby`, `JavaScript`, `AngularJS`, `React`, `iOS`, `Android`, `Python`, `PHP`, `Java`, `Go`, `Windows Phone`, `Rails`, `Node.js`, `.NET`, `Django`, `Symfony`, `Yii Framework`, `Zend Framework`, `Apple App Store Description`, `Google Play Description`, but it can also take any other value.
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    media?: string;
    /**
     * (Optional) Indicates whether the project should share the account\'s translation memory
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    sharesTranslationMemory?: boolean;
    /**
     * (Optional) Image to identify the project
     * @type {Blob}
     * @memberof ProjectUpdateParameters
     */
    projectImage?: Blob;
    /**
     * (Optional) Indicates whether the project image should be deleted.
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    removeProjectImage?: boolean;
    /**
     * (Optional) Review Workflow. \"simple\" / \"review\". <a href=\"https://support.phrase.com/hc/en-us/articles/5784094755484\">Read more</a>
     * @type {string}
     * @memberof ProjectUpdateParameters
     */
    workflow?: string;
    /**
     * (Optional) Enable machine translation support in the project. Required for Autopilot and Smart Suggest
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    machineTranslationEnabled?: boolean;
    /**
     * (Optional) Enable branching in the project
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    enableBranching?: boolean;
    /**
     * (Optional) Protect the master branch in project where branching is enabled
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    protectMasterBranch?: boolean;
    /**
     * (Optional) Otherwise, translators are not allowed to edit translations other than strings
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    enableAllDataTypeTranslationKeysForTranslators?: boolean;
    /**
     * (Optional) We can validate and highlight your ICU messages. <a href=\"https://support.phrase.com/hc/en-us/articles/5822319545116\">Read more</a>
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    enableIcuMessageFormat?: boolean;
    /**
     * (Optional) Displays the input fields for the \'ZERO\' plural form for every key as well although only some languages require the \'ZERO\' explicitly.
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    zeroPluralFormEnabled?: boolean;
    /**
     * (Optional) Autopilot, requires machine_translation_enabled. <a href=\"https://support.phrase.com/hc/en-us/articles/5822187934364\">Read more</a>
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateEnabled?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateCheckNewTranslationKeys?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateCheckNewUploads?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateCheckNewLocales?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateMarkAsUnverified?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateUseMachineTranslation?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    autotranslateUseTranslationMemory?: boolean;
    /**
     * (Optional) Smart Suggest, requires machine_translation_enabled
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    smartSuggestEnabled?: boolean;
    /**
     * (Optional) Requires smart_suggest_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    smartSuggestUseGlossary?: boolean;
    /**
     * (Optional) Requires smart_suggest_enabled to be true
     * @type {boolean}
     * @memberof ProjectUpdateParameters
     */
    smartSuggestUseMachineTranslation?: boolean;
}
export declare function ProjectUpdateParametersFromJSON(json: any): ProjectUpdateParameters;
export declare function ProjectUpdateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectUpdateParameters;
export declare function ProjectUpdateParametersToJSON(value?: ProjectUpdateParameters | null): any;