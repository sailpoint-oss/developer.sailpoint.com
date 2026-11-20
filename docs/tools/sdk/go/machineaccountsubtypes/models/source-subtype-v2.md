# SourceSubtypeV2

# SourceSubtypeV2

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

## Methods

### NewSourceSubtypeV2

`func NewSourceSubtypeV2(technicalName string, displayName string, description string, targetId string, ) *SourceSubtypeV2`

NewSourceSubtypeV2 instantiates a new SourceSubtypeV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSubtypeV2WithDefaults

`func NewSourceSubtypeV2WithDefaults() *SourceSubtypeV2`

NewSourceSubtypeV2WithDefaults instantiates a new SourceSubtypeV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceSubtypeV2) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSubtypeV2) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSubtypeV2) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceSubtypeV2) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SourceSubtypeV2) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SourceSubtypeV2) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SourceSubtypeV2) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *SourceSubtypeV2) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SourceSubtypeV2) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SourceSubtypeV2) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *SourceSubtypeV2) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SourceSubtypeV2) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SourceSubtypeV2) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *SourceSubtypeV2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceSubtypeV2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceSubtypeV2) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceSubtypeV2) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *SourceSubtypeV2) GetTargetType() SubtypeTargetType`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *SourceSubtypeV2) GetTargetTypeOk() (*SubtypeTargetType, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *SourceSubtypeV2) SetTargetType(v SubtypeTargetType)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *SourceSubtypeV2) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *SourceSubtypeV2) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *SourceSubtypeV2) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *SourceSubtypeV2) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetTargetName

`func (o *SourceSubtypeV2) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SourceSubtypeV2) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SourceSubtypeV2) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SourceSubtypeV2) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetClassification

`func (o *SourceSubtypeV2) GetClassification() SubtypeClassification`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *SourceSubtypeV2) GetClassificationOk() (*SubtypeClassification, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *SourceSubtypeV2) SetClassification(v SubtypeClassification)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *SourceSubtypeV2) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetOrigin

`func (o *SourceSubtypeV2) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *SourceSubtypeV2) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *SourceSubtypeV2) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *SourceSubtypeV2) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### SetOriginNil

`func (o *SourceSubtypeV2) SetOriginNil(b bool)`

 SetOriginNil sets the value for Origin to be an explicit nil

### UnsetOrigin
`func (o *SourceSubtypeV2) UnsetOrigin()`

UnsetOrigin ensures that no value is present for Origin, not even an explicit nil
### GetProfile

`func (o *SourceSubtypeV2) GetProfile() ConnectorVariantProfile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *SourceSubtypeV2) GetProfileOk() (*ConnectorVariantProfile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *SourceSubtypeV2) SetProfile(v ConnectorVariantProfile)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *SourceSubtypeV2) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### SetProfileNil

`func (o *SourceSubtypeV2) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *SourceSubtypeV2) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetSystemManaged

`func (o *SourceSubtypeV2) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *SourceSubtypeV2) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *SourceSubtypeV2) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *SourceSubtypeV2) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.

### GetCreated

`func (o *SourceSubtypeV2) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceSubtypeV2) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceSubtypeV2) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SourceSubtypeV2) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SourceSubtypeV2) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SourceSubtypeV2) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SourceSubtypeV2) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SourceSubtypeV2) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SourceSubtypeV2) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SourceSubtypeV2) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SourceSubtypeV2) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SourceSubtypeV2) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil

