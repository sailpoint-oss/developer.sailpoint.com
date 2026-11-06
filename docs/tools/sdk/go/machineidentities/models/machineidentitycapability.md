# Machineidentitycapability

# Machineidentitycapability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Description** | Pointer to **string** | Description of the capability. | [optional] 
**Type** | Pointer to **string** | Type of the capability. `UNDEFINED` is returned when the type is missing or not recognized. | [optional] 
**Status** | Pointer to **NullableString** | Status of the capability, as reported by the source. `null` when the source does not report one. | [optional] 
**NativeIdentity** | Pointer to **string** | Unique identifier of the capability on the source. | [optional] 
**Environment** | Pointer to **string** | Environment the capability runs in. | [optional] 
**Source** | Pointer to [**MachineIdentityCapabilitySource**](machine-identity-capability-source) |  | [optional] 
**Resource** | Pointer to [**ResourceV2**](resource-v2) |  | [optional] 
**DatasetId** | Pointer to **string** | ID of the source dataset the capability was aggregated from. | [optional] 
**Owners** | Pointer to [**MachineIdentityOwnersV2**](machine-identity-owners-v2) |  | [optional] 
**Attributes** | Pointer to **map[string]interface\{\}** | A map of curated capability attributes. | [optional] 
**ConnectorAttributes** | Pointer to **map[string]interface\{\}** | A map of attributes sourced from the connector during aggregation. | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates whether the capability has been manually edited. | [optional] [default to false]

## Methods

### NewMachineidentitycapability

`func NewMachineidentitycapability(name NullableString, ) *Machineidentitycapability`

NewMachineidentitycapability instantiates a new Machineidentitycapability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentitycapabilityWithDefaults

`func NewMachineidentitycapabilityWithDefaults() *Machineidentitycapability`

NewMachineidentitycapabilityWithDefaults instantiates a new Machineidentitycapability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentitycapability) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentitycapability) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentitycapability) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentitycapability) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Machineidentitycapability) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Machineidentitycapability) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Machineidentitycapability) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Machineidentitycapability) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Machineidentitycapability) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Machineidentitycapability) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentitycapability) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentitycapability) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentitycapability) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineidentitycapability) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineidentitycapability) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineidentitycapability) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineidentitycapability) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Machineidentitycapability) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineidentitycapability) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineidentitycapability) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineidentitycapability) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetType

`func (o *Machineidentitycapability) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Machineidentitycapability) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Machineidentitycapability) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Machineidentitycapability) HasType() bool`

HasType returns a boolean if a field has been set.

### GetStatus

`func (o *Machineidentitycapability) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Machineidentitycapability) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Machineidentitycapability) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Machineidentitycapability) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### SetStatusNil

`func (o *Machineidentitycapability) SetStatusNil(b bool)`

 SetStatusNil sets the value for Status to be an explicit nil

### UnsetStatus
`func (o *Machineidentitycapability) UnsetStatus()`

UnsetStatus ensures that no value is present for Status, not even an explicit nil
### GetNativeIdentity

`func (o *Machineidentitycapability) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Machineidentitycapability) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Machineidentitycapability) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *Machineidentitycapability) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetEnvironment

`func (o *Machineidentitycapability) GetEnvironment() string`

GetEnvironment returns the Environment field if non-nil, zero value otherwise.

### GetEnvironmentOk

`func (o *Machineidentitycapability) GetEnvironmentOk() (*string, bool)`

GetEnvironmentOk returns a tuple with the Environment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnvironment

`func (o *Machineidentitycapability) SetEnvironment(v string)`

SetEnvironment sets Environment field to given value.

### HasEnvironment

`func (o *Machineidentitycapability) HasEnvironment() bool`

HasEnvironment returns a boolean if a field has been set.

### GetSource

`func (o *Machineidentitycapability) GetSource() MachineIdentityCapabilitySource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Machineidentitycapability) GetSourceOk() (*MachineIdentityCapabilitySource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Machineidentitycapability) SetSource(v MachineIdentityCapabilitySource)`

SetSource sets Source field to given value.

### HasSource

`func (o *Machineidentitycapability) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetResource

`func (o *Machineidentitycapability) GetResource() ResourceV2`

GetResource returns the Resource field if non-nil, zero value otherwise.

### GetResourceOk

`func (o *Machineidentitycapability) GetResourceOk() (*ResourceV2, bool)`

GetResourceOk returns a tuple with the Resource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResource

`func (o *Machineidentitycapability) SetResource(v ResourceV2)`

SetResource sets Resource field to given value.

### HasResource

`func (o *Machineidentitycapability) HasResource() bool`

HasResource returns a boolean if a field has been set.

### GetDatasetId

`func (o *Machineidentitycapability) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *Machineidentitycapability) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *Machineidentitycapability) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *Machineidentitycapability) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetOwners

`func (o *Machineidentitycapability) GetOwners() MachineIdentityOwnersV2`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Machineidentitycapability) GetOwnersOk() (*MachineIdentityOwnersV2, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Machineidentitycapability) SetOwners(v MachineIdentityOwnersV2)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Machineidentitycapability) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetAttributes

`func (o *Machineidentitycapability) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Machineidentitycapability) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Machineidentitycapability) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Machineidentitycapability) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetConnectorAttributes

`func (o *Machineidentitycapability) GetConnectorAttributes() map[string]interface{}`

GetConnectorAttributes returns the ConnectorAttributes field if non-nil, zero value otherwise.

### GetConnectorAttributesOk

`func (o *Machineidentitycapability) GetConnectorAttributesOk() (*map[string]interface{}, bool)`

GetConnectorAttributesOk returns a tuple with the ConnectorAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnectorAttributes

`func (o *Machineidentitycapability) SetConnectorAttributes(v map[string]interface{})`

SetConnectorAttributes sets ConnectorAttributes field to given value.

### HasConnectorAttributes

`func (o *Machineidentitycapability) HasConnectorAttributes() bool`

HasConnectorAttributes returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *Machineidentitycapability) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *Machineidentitycapability) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *Machineidentitycapability) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *Machineidentitycapability) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.


