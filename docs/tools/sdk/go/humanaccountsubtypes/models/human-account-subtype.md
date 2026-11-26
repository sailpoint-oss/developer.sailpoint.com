# HumanAccountSubtype

# HumanAccountSubtype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Unique identifier for the subtype. | [optional] [readonly] 
**SourceId** | Pointer to **string** | The ID of the source the subtype belongs to. | [optional] [readonly] 
**TechnicalName** | Pointer to **string** | Technical name of the subtype. | [optional] 
**DisplayName** | Pointer to **string** | Display name of the subtype. | [optional] 
**Description** | Pointer to **NullableString** | Description of the subtype. | [optional] 
**EntityType** | Pointer to **string** | Entity type the subtype applies to. Human account subtypes apply to accounts. | [optional] [readonly] 
**Default** | Pointer to **bool** | Whether this subtype is the default human account subtype of the source. | [optional] [default to false]
**SystemManaged** | Pointer to **bool** | Indicates if the subtype is managed by the system. Read-only. | [optional] [readonly] [default to false]
**Created** | Pointer to **SailPointTime** | Creation timestamp. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modified timestamp. | [optional] [readonly] 

## Methods

### NewHumanAccountSubtype

`func NewHumanAccountSubtype() *HumanAccountSubtype`

NewHumanAccountSubtype instantiates a new HumanAccountSubtype object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHumanAccountSubtypeWithDefaults

`func NewHumanAccountSubtypeWithDefaults() *HumanAccountSubtype`

NewHumanAccountSubtypeWithDefaults instantiates a new HumanAccountSubtype object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *HumanAccountSubtype) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *HumanAccountSubtype) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *HumanAccountSubtype) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *HumanAccountSubtype) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSourceId

`func (o *HumanAccountSubtype) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *HumanAccountSubtype) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *HumanAccountSubtype) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *HumanAccountSubtype) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetTechnicalName

`func (o *HumanAccountSubtype) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *HumanAccountSubtype) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *HumanAccountSubtype) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.

### HasTechnicalName

`func (o *HumanAccountSubtype) HasTechnicalName() bool`

HasTechnicalName returns a boolean if a field has been set.

### GetDisplayName

`func (o *HumanAccountSubtype) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *HumanAccountSubtype) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *HumanAccountSubtype) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *HumanAccountSubtype) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *HumanAccountSubtype) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HumanAccountSubtype) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HumanAccountSubtype) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HumanAccountSubtype) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *HumanAccountSubtype) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *HumanAccountSubtype) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetEntityType

`func (o *HumanAccountSubtype) GetEntityType() string`

GetEntityType returns the EntityType field if non-nil, zero value otherwise.

### GetEntityTypeOk

`func (o *HumanAccountSubtype) GetEntityTypeOk() (*string, bool)`

GetEntityTypeOk returns a tuple with the EntityType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntityType

`func (o *HumanAccountSubtype) SetEntityType(v string)`

SetEntityType sets EntityType field to given value.

### HasEntityType

`func (o *HumanAccountSubtype) HasEntityType() bool`

HasEntityType returns a boolean if a field has been set.

### GetDefault

`func (o *HumanAccountSubtype) GetDefault() bool`

GetDefault returns the Default field if non-nil, zero value otherwise.

### GetDefaultOk

`func (o *HumanAccountSubtype) GetDefaultOk() (*bool, bool)`

GetDefaultOk returns a tuple with the Default field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefault

`func (o *HumanAccountSubtype) SetDefault(v bool)`

SetDefault sets Default field to given value.

### HasDefault

`func (o *HumanAccountSubtype) HasDefault() bool`

HasDefault returns a boolean if a field has been set.

### GetSystemManaged

`func (o *HumanAccountSubtype) GetSystemManaged() bool`

GetSystemManaged returns the SystemManaged field if non-nil, zero value otherwise.

### GetSystemManagedOk

`func (o *HumanAccountSubtype) GetSystemManagedOk() (*bool, bool)`

GetSystemManagedOk returns a tuple with the SystemManaged field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSystemManaged

`func (o *HumanAccountSubtype) SetSystemManaged(v bool)`

SetSystemManaged sets SystemManaged field to given value.

### HasSystemManaged

`func (o *HumanAccountSubtype) HasSystemManaged() bool`

HasSystemManaged returns a boolean if a field has been set.

### GetCreated

`func (o *HumanAccountSubtype) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *HumanAccountSubtype) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *HumanAccountSubtype) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *HumanAccountSubtype) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *HumanAccountSubtype) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *HumanAccountSubtype) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *HumanAccountSubtype) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *HumanAccountSubtype) HasModified() bool`

HasModified returns a boolean if a field has been set.


