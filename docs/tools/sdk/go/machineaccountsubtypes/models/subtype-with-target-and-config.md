# SubtypeWithTargetAndConfig

# SubtypeWithTargetAndConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Server-generated subtype identifier. Must not be supplied on create. | [optional] [readonly] 
**TechnicalName** | **string** | Technical name of the subtype. Unique within the target tier scope. | 
**DisplayName** | **string** | Display name of the subtype. | 
**Description** | **string** | Description of the subtype. | 
**Type** | Pointer to **string** | Entity type of the subtype. Defaults to `MACHINE` when omitted. | [optional] [default to "MACHINE"]
**TargetType** | Pointer to **SubtypeTargetType** |  | [optional] 
**TargetId** | **string** | Scope key for the subtype. Source id when `targetType` is `SOURCE`. Connector type or connector specification id when `targetType` is `CONNECTOR`. | 
**TargetName** | Pointer to **string** | Human-readable target label. May be omitted on create; the service persists a display name. | [optional] [default to ""]
**Classification** | Pointer to **SubtypeClassification** |  | [optional] 
**Origin** | Pointer to **NullableString** | Response-only origin badge. Set on effective-set list reads: `CONNECTOR` when a SOURCE winner overrides a CONNECTOR parent of the same technical name. `null` on connector-only and source-only winners, and on plain CRUD list, create, patch, and get-by-id. | [optional] [readonly] 
**Profile** | Pointer to [**NullableConnectorVariantProfile**](connector-variant-profile) |  | [optional] 
**SystemManaged** | Pointer to **bool** | Server-set flag indicating the subtype is managed by the system. Incoming values are ignored. | [optional] [readonly] [default to false]
**Created** | Pointer to **NullableTime** | Creation timestamp. | [optional] [readonly] 
**Modified** | Pointer to **NullableTime** | Last modified timestamp. | [optional] [readonly] 
**Target** | Pointer to [**SubtypeTargetRef**](subtype-target-ref) |  | [optional] 
**Config** | Pointer to [**MachineAccountSubtypeListConfig**](machine-account-subtype-list-config) |  | [optional] 

## Methods

### NewSubtypeWithTargetAndConfig

`func NewSubtypeWithTargetAndConfig(technicalName string, displayName string, description string, targetId string, ) *SubtypeWithTargetAndConfig`

NewSubtypeWithTargetAndConfig instantiates a new SubtypeWithTargetAndConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeWithTargetAndConfigWithDefaults

`func NewSubtypeWithTargetAndConfigWithDefaults() *SubtypeWithTargetAndConfig`

NewSubtypeWithTargetAndConfigWithDefaults instantiates a new SubtypeWithTargetAndConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubtypeWithTargetAndConfig) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubtypeWithTargetAndConfig) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubtypeWithTargetAndConfig) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SubtypeWithTargetAndConfig) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SubtypeWithTargetAndConfig) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SubtypeWithTargetAndConfig) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SubtypeWithTargetAndConfig) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *SubtypeWithTargetAndConfig) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SubtypeWithTargetAndConfig) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SubtypeWithTargetAndConfig) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *SubtypeWithTargetAndConfig) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubtypeWithTargetAndConfig) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubtypeWithTargetAndConfig) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *SubtypeWithTargetAndConfig) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubtypeWithTargetAndConfig) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubtypeWithTargetAndConfig) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SubtypeWithTargetAndConfig) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *SubtypeWithTargetAndConfig) GetTargetType() SubtypeTargetType`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *SubtypeWithTargetAndConfig) GetTargetTypeOk() (*SubtypeTargetType, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *SubtypeWithTargetAndConfig) SetTargetType(v SubtypeTargetType)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *SubtypeWithTargetAndConfig) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *SubtypeWithTargetAndConfig) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *SubtypeWithTargetAndConfig) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *SubtypeWithTargetAndConfig) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetTargetName

`func (o *SubtypeWithTargetAndConfig) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SubtypeWithTargetAndConfig) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SubtypeWithTargetAndConfig) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SubtypeWithTargetAndConfig) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetClassification

`func (o *SubtypeWithTargetAndConfig) GetClassification() SubtypeClassification`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *SubtypeWithTargetAndConfig) GetClassificationOk() (*SubtypeClassification, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *SubtypeWithTargetAndConfig) SetClassification(v SubtypeClassification)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *SubtypeWithTargetAndConfig) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetOrigin

`func (o *SubtypeWithTargetAndConfig) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *SubtypeWithTargetAndConfig) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *SubtypeWithTargetAndConfig) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *SubtypeWithTargetAndConfig) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### SetOriginNil

`func (o *SubtypeWithTargetAndConfig) SetOriginNil(b bool)`

 SetOriginNil sets the value for Origin to be an explicit nil

### UnsetOrigin
`func (o *SubtypeWithTargetAndConfig) UnsetOrigin()`

UnsetOrigin ensures that no value is present for Origin, not even an explicit nil
### GetProfile

`func (o *SubtypeWithTargetAndConfig) GetProfile() ConnectorVariantProfile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *SubtypeWithTargetAndConfig) GetProfileOk() (*ConnectorVariantProfile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *SubtypeWithTargetAndConfig) SetProfile(v ConnectorVariantProfile)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *SubtypeWithTargetAndConfig) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### SetProfileNil

`func (o *SubtypeWithTargetAndConfig) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *SubtypeWithTargetAndConfig) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetSystemManaged

`func (o *SubtypeWithTargetAndConfig) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *SubtypeWithTargetAndConfig) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *SubtypeWithTargetAndConfig) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *SubtypeWithTargetAndConfig) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.

### GetCreated

`func (o *SubtypeWithTargetAndConfig) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SubtypeWithTargetAndConfig) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SubtypeWithTargetAndConfig) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SubtypeWithTargetAndConfig) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SubtypeWithTargetAndConfig) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SubtypeWithTargetAndConfig) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SubtypeWithTargetAndConfig) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SubtypeWithTargetAndConfig) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SubtypeWithTargetAndConfig) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SubtypeWithTargetAndConfig) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SubtypeWithTargetAndConfig) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SubtypeWithTargetAndConfig) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetTarget

`func (o *SubtypeWithTargetAndConfig) GetTarget() SubtypeTargetRef`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SubtypeWithTargetAndConfig) GetTargetOk() (*SubtypeTargetRef, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SubtypeWithTargetAndConfig) SetTarget(v SubtypeTargetRef)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SubtypeWithTargetAndConfig) HasTarget() bool`

HasTarget returns a boolean if a field has been set.

### GetConfig

`func (o *SubtypeWithTargetAndConfig) GetConfig() MachineAccountSubtypeListConfig`

GetConfig returns the Config field if non-nil, zero value otherwise.

### GetConfigOk

`func (o *SubtypeWithTargetAndConfig) GetConfigOk() (*MachineAccountSubtypeListConfig, bool)`

GetConfigOk returns a tuple with the Config field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConfig

`func (o *SubtypeWithTargetAndConfig) SetConfig(v MachineAccountSubtypeListConfig)`

SetConfig sets Config field to given value.

### HasConfig

`func (o *SubtypeWithTargetAndConfig) HasConfig() bool`

HasConfig returns a boolean if a field has been set.


