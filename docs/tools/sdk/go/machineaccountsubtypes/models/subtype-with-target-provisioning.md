# SubtypeWithTargetProvisioning

# SubtypeWithTargetProvisioning

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
**Target** | Pointer to [**SubtypeTarget**](subtype-target) |  | [optional] 

## Methods

### NewSubtypeWithTargetProvisioning

`func NewSubtypeWithTargetProvisioning(technicalName string, displayName string, description string, targetId string, ) *SubtypeWithTargetProvisioning`

NewSubtypeWithTargetProvisioning instantiates a new SubtypeWithTargetProvisioning object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSubtypeWithTargetProvisioningWithDefaults

`func NewSubtypeWithTargetProvisioningWithDefaults() *SubtypeWithTargetProvisioning`

NewSubtypeWithTargetProvisioningWithDefaults instantiates a new SubtypeWithTargetProvisioning object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SubtypeWithTargetProvisioning) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SubtypeWithTargetProvisioning) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SubtypeWithTargetProvisioning) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SubtypeWithTargetProvisioning) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *SubtypeWithTargetProvisioning) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *SubtypeWithTargetProvisioning) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *SubtypeWithTargetProvisioning) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDisplayName

`func (o *SubtypeWithTargetProvisioning) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *SubtypeWithTargetProvisioning) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *SubtypeWithTargetProvisioning) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetDescription

`func (o *SubtypeWithTargetProvisioning) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SubtypeWithTargetProvisioning) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SubtypeWithTargetProvisioning) SetDescription(v string)`

SetDescription sets Description field to given value.


### GetType

`func (o *SubtypeWithTargetProvisioning) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SubtypeWithTargetProvisioning) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SubtypeWithTargetProvisioning) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SubtypeWithTargetProvisioning) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTargetType

`func (o *SubtypeWithTargetProvisioning) GetTargetType() SubtypeTargetType`

GetTargetType returns the TargetType field if non-nil, zero value otherwise.

### GetTargetTypeOk

`func (o *SubtypeWithTargetProvisioning) GetTargetTypeOk() (*SubtypeTargetType, bool)`

GetTargetTypeOk returns a tuple with the TargetType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetType

`func (o *SubtypeWithTargetProvisioning) SetTargetType(v SubtypeTargetType)`

SetTargetType sets TargetType field to given value.

### HasTargetType

`func (o *SubtypeWithTargetProvisioning) HasTargetType() bool`

HasTargetType returns a boolean if a field has been set.

### GetTargetId

`func (o *SubtypeWithTargetProvisioning) GetTargetId() string`

GetTargetId returns the TargetId field if non-nil, zero value otherwise.

### GetTargetIdOk

`func (o *SubtypeWithTargetProvisioning) GetTargetIdOk() (*string, bool)`

GetTargetIdOk returns a tuple with the TargetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetId

`func (o *SubtypeWithTargetProvisioning) SetTargetId(v string)`

SetTargetId sets TargetId field to given value.


### GetTargetName

`func (o *SubtypeWithTargetProvisioning) GetTargetName() string`

GetTargetName returns the TargetName field if non-nil, zero value otherwise.

### GetTargetNameOk

`func (o *SubtypeWithTargetProvisioning) GetTargetNameOk() (*string, bool)`

GetTargetNameOk returns a tuple with the TargetName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTargetName

`func (o *SubtypeWithTargetProvisioning) SetTargetName(v string)`

SetTargetName sets TargetName field to given value.

### HasTargetName

`func (o *SubtypeWithTargetProvisioning) HasTargetName() bool`

HasTargetName returns a boolean if a field has been set.

### GetClassification

`func (o *SubtypeWithTargetProvisioning) GetClassification() SubtypeClassification`

GetClassification returns the Classification field if non-nil, zero value otherwise.

### GetClassificationOk

`func (o *SubtypeWithTargetProvisioning) GetClassificationOk() (*SubtypeClassification, bool)`

GetClassificationOk returns a tuple with the Classification field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassification

`func (o *SubtypeWithTargetProvisioning) SetClassification(v SubtypeClassification)`

SetClassification sets Classification field to given value.

### HasClassification

`func (o *SubtypeWithTargetProvisioning) HasClassification() bool`

HasClassification returns a boolean if a field has been set.

### GetOrigin

`func (o *SubtypeWithTargetProvisioning) GetOrigin() string`

GetOrigin returns the Origin field if non-nil, zero value otherwise.

### GetOriginOk

`func (o *SubtypeWithTargetProvisioning) GetOriginOk() (*string, bool)`

GetOriginOk returns a tuple with the Origin field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrigin

`func (o *SubtypeWithTargetProvisioning) SetOrigin(v string)`

SetOrigin sets Origin field to given value.

### HasOrigin

`func (o *SubtypeWithTargetProvisioning) HasOrigin() bool`

HasOrigin returns a boolean if a field has been set.

### SetOriginNil

`func (o *SubtypeWithTargetProvisioning) SetOriginNil(b bool)`

 SetOriginNil sets the value for Origin to be an explicit nil

### UnsetOrigin
`func (o *SubtypeWithTargetProvisioning) UnsetOrigin()`

UnsetOrigin ensures that no value is present for Origin, not even an explicit nil
### GetProfile

`func (o *SubtypeWithTargetProvisioning) GetProfile() ConnectorVariantProfile`

GetProfile returns the Profile field if non-nil, zero value otherwise.

### GetProfileOk

`func (o *SubtypeWithTargetProvisioning) GetProfileOk() (*ConnectorVariantProfile, bool)`

GetProfileOk returns a tuple with the Profile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProfile

`func (o *SubtypeWithTargetProvisioning) SetProfile(v ConnectorVariantProfile)`

SetProfile sets Profile field to given value.

### HasProfile

`func (o *SubtypeWithTargetProvisioning) HasProfile() bool`

HasProfile returns a boolean if a field has been set.

### SetProfileNil

`func (o *SubtypeWithTargetProvisioning) SetProfileNil(b bool)`

 SetProfileNil sets the value for Profile to be an explicit nil

### UnsetProfile
`func (o *SubtypeWithTargetProvisioning) UnsetProfile()`

UnsetProfile ensures that no value is present for Profile, not even an explicit nil
### GetSystemManaged

`func (o *SubtypeWithTargetProvisioning) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *SubtypeWithTargetProvisioning) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *SubtypeWithTargetProvisioning) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *SubtypeWithTargetProvisioning) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.

### GetCreated

`func (o *SubtypeWithTargetProvisioning) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SubtypeWithTargetProvisioning) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SubtypeWithTargetProvisioning) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SubtypeWithTargetProvisioning) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *SubtypeWithTargetProvisioning) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *SubtypeWithTargetProvisioning) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *SubtypeWithTargetProvisioning) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SubtypeWithTargetProvisioning) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SubtypeWithTargetProvisioning) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SubtypeWithTargetProvisioning) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *SubtypeWithTargetProvisioning) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *SubtypeWithTargetProvisioning) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetTarget

`func (o *SubtypeWithTargetProvisioning) GetTarget() SubtypeTarget`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *SubtypeWithTargetProvisioning) GetTargetOk() (*SubtypeTarget, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *SubtypeWithTargetProvisioning) SetTarget(v SubtypeTarget)`

SetTarget sets Target field to given value.

### HasTarget

`func (o *SubtypeWithTargetProvisioning) HasTarget() bool`

HasTarget returns a boolean if a field has been set.


