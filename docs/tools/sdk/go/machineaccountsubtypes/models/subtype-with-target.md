# SubtypeWithTarget

# SubtypeWithTarget

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

## Methods

### NewSubtypeWithTarget

`func NewSubtypeWithTarget(technicalName string, displayName string, description string, targetId string, ) *SubtypeWithTarget`

NewSubtypeWithTarget instantiates a new SubtypeWithTarget object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeWithTargetWithDefaults

`func NewSubtypeWithTargetWithDefaults() *SubtypeWithTarget`

NewSubtypeWithTargetWithDefaults instantiates a new SubtypeWithTarget object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubtypeWithTarget) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubtypeWithTarget) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubtypeWithTarget) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SubtypeWithTarget) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SubtypeWithTarget) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SubtypeWithTarget) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SubtypeWithTarget) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *SubtypeWithTarget) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SubtypeWithTarget) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SubtypeWithTarget) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *SubtypeWithTarget) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubtypeWithTarget) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubtypeWithTarget) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *SubtypeWithTarget) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubtypeWithTarget) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubtypeWithTarget) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SubtypeWithTarget) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *SubtypeWithTarget) GetTargetType() SubtypeTargetType`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *SubtypeWithTarget) GetTargetTypeOk() (*SubtypeTargetType, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *SubtypeWithTarget) SetTargetType(v SubtypeTargetType)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *SubtypeWithTarget) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *SubtypeWithTarget) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *SubtypeWithTarget) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *SubtypeWithTarget) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetTargetName

`func (o *SubtypeWithTarget) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SubtypeWithTarget) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SubtypeWithTarget) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SubtypeWithTarget) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetClassification

`func (o *SubtypeWithTarget) GetClassification() SubtypeClassification`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *SubtypeWithTarget) GetClassificationOk() (*SubtypeClassification, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *SubtypeWithTarget) SetClassification(v SubtypeClassification)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *SubtypeWithTarget) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetOrigin

`func (o *SubtypeWithTarget) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *SubtypeWithTarget) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *SubtypeWithTarget) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *SubtypeWithTarget) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### SetOriginNil

`func (o *SubtypeWithTarget) SetOriginNil(b bool)`

 SetOriginNil sets the value for Origin to be an explicit nil

### UnsetOrigin
`func (o *SubtypeWithTarget) UnsetOrigin()`

UnsetOrigin ensures that no value is present for Origin, not even an explicit nil
### GetProfile

`func (o *SubtypeWithTarget) GetProfile() ConnectorVariantProfile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *SubtypeWithTarget) GetProfileOk() (*ConnectorVariantProfile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *SubtypeWithTarget) SetProfile(v ConnectorVariantProfile)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *SubtypeWithTarget) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### SetProfileNil

`func (o *SubtypeWithTarget) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *SubtypeWithTarget) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetSystemManaged

`func (o *SubtypeWithTarget) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *SubtypeWithTarget) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *SubtypeWithTarget) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *SubtypeWithTarget) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.

### GetCreated

`func (o *SubtypeWithTarget) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SubtypeWithTarget) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SubtypeWithTarget) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SubtypeWithTarget) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SubtypeWithTarget) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SubtypeWithTarget) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SubtypeWithTarget) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SubtypeWithTarget) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SubtypeWithTarget) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SubtypeWithTarget) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SubtypeWithTarget) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SubtypeWithTarget) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetTarget

`func (o *SubtypeWithTarget) GetTarget() SubtypeTargetRef`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SubtypeWithTarget) GetTargetOk() (*SubtypeTargetRef, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SubtypeWithTarget) SetTarget(v SubtypeTargetRef)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SubtypeWithTarget) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


