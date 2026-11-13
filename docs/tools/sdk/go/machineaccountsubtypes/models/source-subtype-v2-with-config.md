# SourceSubtypeV2WithConfig

# SourceSubtypeV2WithConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the subtype. | [optional] 
**TechnicalName** | Pointer to **string** | Technical name of the subtype. | [optional] 
**DisplayName** | Pointer to **string** | Display name of the subtype. | [optional] 
**Description** | Pointer to **string** | Description of the subtype. | [optional] 
**Type** | Pointer to **string** | Entity type of the subtype. | [optional] 
**TargetType** | Pointer to **string** | Tier the subtype is defined at. `SOURCE` subtypes apply to one source. `CONNECTOR` subtypes apply to every source of a connector type. `CONNECTOR_VARIANT` is reserved for future use. | [optional] 
**TargetId** | Pointer to **string** | Scope key of the subtype. The source ID for `SOURCE` subtypes, or the connector type for `CONNECTOR` subtypes. | [optional] 
**TargetName** | Pointer to **NullableString** | Display name of the target source or connector. | [optional] 
**Classification** | Pointer to **string** | Classification of the subtype. | [optional] 
**Origin** | Pointer to **NullableString** | Tier of the parent subtype this subtype overrides. Set to `CONNECTOR` when a source subtype replaces a connector subtype with the same technical name in a source's effective subtype list. Otherwise `null`. | [optional] 
**Profile** | Pointer to [**NullableSourceSubtypeV2Profile**](source-subtype-v2-profile) |  | [optional] 
**SystemManaged** | Pointer to **bool** | Indicates whether the subtype is managed by the system. | [optional] [readonly] [default to false]
**Created** | Pointer to **SailPointTime** | Creation timestamp. | [optional] 
**Modified** | Pointer to **SailPointTime** | Last modified timestamp. | [optional] 
**Target** | Pointer to [**SubtypeTarget**](subtype-target) |  | [optional] 
**Config** | Pointer to [**NullableSourceSubtypeV2WithConfigAllOfConfig**](source-subtype-v2-with-config-all-of-config) |  | [optional] 

## Methods

### NewSourceSubtypeV2WithConfig

`func NewSourceSubtypeV2WithConfig() *SourceSubtypeV2WithConfig`

NewSourceSubtypeV2WithConfig instantiates a new SourceSubtypeV2WithConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSubtypeV2WithConfigWithDefaults

`func NewSourceSubtypeV2WithConfigWithDefaults() *SourceSubtypeV2WithConfig`

NewSourceSubtypeV2WithConfigWithDefaults instantiates a new SourceSubtypeV2WithConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceSubtypeV2WithConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSubtypeV2WithConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSubtypeV2WithConfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceSubtypeV2WithConfig) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SourceSubtypeV2WithConfig) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SourceSubtypeV2WithConfig) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SourceSubtypeV2WithConfig) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.

### HasTechnicalName

`func (o *SourceSubtypeV2WithConfig) HasTechnicalName() bool`

HasTechnicalName returns a boolean if a field has been set.

### GetDisplayName

`func (o *SourceSubtypeV2WithConfig) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SourceSubtypeV2WithConfig) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SourceSubtypeV2WithConfig) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *SourceSubtypeV2WithConfig) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *SourceSubtypeV2WithConfig) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceSubtypeV2WithConfig) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceSubtypeV2WithConfig) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SourceSubtypeV2WithConfig) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *SourceSubtypeV2WithConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSubtypeV2WithConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSubtypeV2WithConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceSubtypeV2WithConfig) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *SourceSubtypeV2WithConfig) GetTargetType() string`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *SourceSubtypeV2WithConfig) GetTargetTypeOk() (*string, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *SourceSubtypeV2WithConfig) SetTargetType(v string)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *SourceSubtypeV2WithConfig) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *SourceSubtypeV2WithConfig) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *SourceSubtypeV2WithConfig) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *SourceSubtypeV2WithConfig) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.

### HasTargetId

`func (o *SourceSubtypeV2WithConfig) HasTargetId() bool`

HasTargetId returns a boolean if a field has been set.

### GetTargetName

`func (o *SourceSubtypeV2WithConfig) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SourceSubtypeV2WithConfig) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SourceSubtypeV2WithConfig) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SourceSubtypeV2WithConfig) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### SetTargetNameNil

`func (o *SourceSubtypeV2WithConfig) SetTargetNameNil(b bool)`

 SetTargetNameNil sets the value for TargetName to be an explicit nil

### UnsetTargetName
`func (o *SourceSubtypeV2WithConfig) UnsetTargetName()`

UnsetTargetName ensures that no value is present for TargetName, not even an explicit nil
### GetClassification

`func (o *SourceSubtypeV2WithConfig) GetClassification() string`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *SourceSubtypeV2WithConfig) GetClassificationOk() (*string, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *SourceSubtypeV2WithConfig) SetClassification(v string)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *SourceSubtypeV2WithConfig) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetOrigin

`func (o *SourceSubtypeV2WithConfig) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *SourceSubtypeV2WithConfig) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *SourceSubtypeV2WithConfig) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *SourceSubtypeV2WithConfig) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### SetOriginNil

`func (o *SourceSubtypeV2WithConfig) SetOriginNil(b bool)`

 SetOriginNil sets the value for Origin to be an explicit nil

### UnsetOrigin
`func (o *SourceSubtypeV2WithConfig) UnsetOrigin()`

UnsetOrigin ensures that no value is present for Origin, not even an explicit nil
### GetProfile

`func (o *SourceSubtypeV2WithConfig) GetProfile() SourceSubtypeV2Profile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *SourceSubtypeV2WithConfig) GetProfileOk() (*SourceSubtypeV2Profile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *SourceSubtypeV2WithConfig) SetProfile(v SourceSubtypeV2Profile)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *SourceSubtypeV2WithConfig) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### SetProfileNil

`func (o *SourceSubtypeV2WithConfig) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *SourceSubtypeV2WithConfig) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetSystemManaged

`func (o *SourceSubtypeV2WithConfig) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *SourceSubtypeV2WithConfig) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *SourceSubtypeV2WithConfig) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *SourceSubtypeV2WithConfig) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.

### GetCreated

`func (o *SourceSubtypeV2WithConfig) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceSubtypeV2WithConfig) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceSubtypeV2WithConfig) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceSubtypeV2WithConfig) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SourceSubtypeV2WithConfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceSubtypeV2WithConfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceSubtypeV2WithConfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceSubtypeV2WithConfig) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetTarget

`func (o *SourceSubtypeV2WithConfig) GetTarget() SubtypeTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SourceSubtypeV2WithConfig) GetTargetOk() (*SubtypeTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SourceSubtypeV2WithConfig) SetTarget(v SubtypeTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SourceSubtypeV2WithConfig) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetConfig

`func (o *SourceSubtypeV2WithConfig) GetConfig() SourceSubtypeV2WithConfigAllOfConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *SourceSubtypeV2WithConfig) GetConfigOk() (*SourceSubtypeV2WithConfigAllOfConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *SourceSubtypeV2WithConfig) SetConfig(v SourceSubtypeV2WithConfigAllOfConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *SourceSubtypeV2WithConfig) HasConfig() bool`

HasConfig returns a boolean if a field has been set.

### SetConfigNil

`func (o *SourceSubtypeV2WithConfig) SetConfigNil(b bool)`

 SetConfigNil sets the value for Config to be an explicit nil

### UnsetConfig
`func (o *SourceSubtypeV2WithConfig) UnsetConfig()`

UnsetConfig ensures that no value is present for Config, not even an explicit nil

