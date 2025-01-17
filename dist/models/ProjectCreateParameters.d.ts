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
 * @interface ProjectCreateParameters
 */
export interface ProjectCreateParameters {
    /**
     * Name of the project
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    name?: string;
    /**
     * Main file format specified by its API Extension name. Used for locale downloads if no format is specified. For API Extension names of available file formats see <a href=\"https://support.phrase.com/hc/en-us/sections/6111343326364\">Format Guide</a> or our <a href=\"#formats\">Formats API Endpoint</a>.
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    mainFormat?: string;
    /**
     * (Optional) Main technology stack used in the project. It affects for example the suggested placeholder style. Predefined values include: `Ruby`, `JavaScript`, `AngularJS`, `React`, `iOS`, `Android`, `Python`, `PHP`, `Java`, `Go`, `Windows Phone`, `Rails`, `Node.js`, `.NET`, `Django`, `Symfony`, `Yii Framework`, `Zend Framework`, `Apple App Store Description`, `Google Play Description`, but it can also take any other value.
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    media?: string;
    /**
     * Indicates whether the project should share the account\'s translation memory
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    sharesTranslationMemory?: boolean;
    /**
     * Image to identify the project
     * @type {Blob}
     * @memberof ProjectCreateParameters
     */
    projectImage?: Blob;
    /**
     * Indicates whether the project image should be deleted.
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    removeProjectImage?: boolean;
    /**
     * Account ID to specify the actual account the project should be created in. Required if the requesting user is a member of multiple accounts.
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    accountId?: string;
    /**
     * (Optional) User ID of the point of contact for the project.
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    pointOfContact?: string;
    /**
     * When a source project ID is given, a clone of that project will be created, including all locales, keys and translations as well as the main project settings if they are not defined otherwise through the params.
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    sourceProjectId?: string;
    /**
     * (Optional) Review Workflow. \"simple\" / \"review\". <a href=\"https://support.phrase.com/hc/en-us/articles/5784094755484\">Read more</a>
     * @type {string}
     * @memberof ProjectCreateParameters
     */
    workflow?: string;
    /**
     * (Optional) Enable machine translation support in the project. Required for Autopilot and Smart Suggest
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    machineTranslationEnabled?: boolean;
    /**
     * (Optional) Enable branching in the project
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    enableBranching?: boolean;
    /**
     * (Optional) Protect the master branch in project where branching is enabled
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    protectMasterBranch?: boolean;
    /**
     * (Optional) Otherwise, translators are not allowed to edit translations other than strings
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    enableAllDataTypeTranslationKeysForTranslators?: boolean;
    /**
     * (Optional) We can validate and highlight your ICU messages. <a href=\"https://support.phrase.com/hc/en-us/articles/5822319545116\">Read more</a>
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    enableIcuMessageFormat?: boolean;
    /**
     * (Optional) Displays the input fields for the \'ZERO\' plural form for every key as well although only some languages require the \'ZERO\' explicitly.
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    zeroPluralFormEnabled?: boolean;
    /**
     * (Optional) Autopilot, requires machine_translation_enabled. <a href=\"https://support.phrase.com/hc/en-us/articles/5822187934364\">Read more</a>
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateEnabled?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateCheckNewTranslationKeys?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateCheckNewUploads?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateCheckNewLocales?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateMarkAsUnverified?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateUseMachineTranslation?: boolean;
    /**
     * (Optional) Requires autotranslate_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    autotranslateUseTranslationMemory?: boolean;
    /**
     * (Optional) Smart Suggest, requires machine_translation_enabled
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    smartSuggestEnabled?: boolean;
    /**
     * (Optional) Requires smart_suggest_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    smartSuggestUseGlossary?: boolean;
    /**
     * (Optional) Requires smart_suggest_enabled to be true
     * @type {boolean}
     * @memberof ProjectCreateParameters
     */
    smartSuggestUseMachineTranslation?: boolean;
}
export declare function ProjectCreateParametersFromJSON(json: any): ProjectCreateParameters;
export declare function ProjectCreateParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectCreateParameters;
export declare function ProjectCreateParametersToJSON(value?: ProjectCreateParameters | null): any;
