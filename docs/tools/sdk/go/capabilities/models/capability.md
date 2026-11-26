# Capability

# Capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **string** | Description of the capability. | [optional] 
**Type** | Pointer to **string** | The capability type. UNDEFINED is returned when the source does not report a known type. | [optional] 
**Status** | Pointer to **string** | The capability status reported by the source. | [optional] 
**NativeIdentity** | Pointer to **string** | The capability's unique identifier on the source. | [optional] 
**Environment** | Pointer to **string** | The environment the capability belongs to. | [optional] 
**Source** | Pointer to [**CapabilityAllOfSource**](capability-all-of-source) |  | [optional] 
**Resource** | Pointer to [**CapabilityResource**](capability-resource) |  | [optional] 
**DatasetId** | Pointer to **string** | The ID of the source dataset the capability was retrieved from. | [optional] 
**Owners** | Pointer to [**CapabilityOwners**](capability-owners) |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of curated capability attributes. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface\{\}** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates if the capability has been manually edited. | [optional] [default to false]

## Methods

### NewCapability

`func NewCapability(name NullableString, ) *Capability`

NewCapability instantiates a new Capability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCapabilityWithDefaults

`func NewCapabilityWithDefaults() *Capability`

NewCapabilityWithDefaults instantiates a new Capability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Capability) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Capability) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Capability) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Capability) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Capability) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Capability) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Capability) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Capability) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Capability) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Capability) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Capability) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Capability) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Capability) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Capability) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Capability) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Capability) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Capability) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Capability) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Capability) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Capability) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Capability) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *Capability) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Capability) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Capability) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Capability) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *Capability) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Capability) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Capability) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Capability) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Capability) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Capability) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Capability) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Capability) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetEnvironment

`func (o *Capability) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Capability) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Capability) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Capability) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetSource

`func (o *Capability) GetSource() CapabilityAllOfSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Capability) GetSourceOk() (*CapabilityAllOfSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Capability) SetSource(v CapabilityAllOfSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Capability) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetResource

`func (o *Capability) GetResource() CapabilityResource`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *Capability) GetResourceOk() (*CapabilityResource, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *Capability) SetResource(v CapabilityResource)`

SetResource sets Resource field to given value.

### HasResource

`func (o *Capability) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetDatasetId

`func (o *Capability) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Capability) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Capability) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Capability) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetOwners

`func (o *Capability) GetOwners() CapabilityOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Capability) GetOwnersOk() (*CapabilityOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Capability) SetOwners(v CapabilityOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Capability) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetAttributes

`func (o *Capability) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Capability) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Capability) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Capability) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Capability) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Capability) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Capability) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Capability) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *Capability) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Capability) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Capability) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Capability) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.


