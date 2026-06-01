---
id: v2026-intel-machine
title: IntelMachine
pagination_label: IntelMachine
sidebar_label: IntelMachine
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelMachine', 'V2026IntelMachine'] 
slug: /tools/sdk/go/v2026/models/intel-machine
tags: ['SDK', 'Software Development Kit', 'IntelMachine', 'V2026IntelMachine']
---

# IntelMachine

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BusinessApplication** | Pointer to **string** | Business application name associated with the non-human identity. | [optional] 
**NativeIdentity** | Pointer to **string** | Native identifier value on the authoritative source for the machine identity. | [optional] 
**Uuid** | Pointer to **NullableString** | Optional globally unique identifier for the machine identity when assigned. | [optional] 
**SourceId** | Pointer to **string** | Identifier of the correlated source for this machine identity. | [optional] 
**Source** | Pointer to [**IntelMachineSource**](intel-machine-source) | Correlated source summary for the machine identity when available. | [optional] 
**DatasetId** | Pointer to **string** | Dataset identifier used by machine identity correlation logic. | [optional] 
**ExistsOnSource** | Pointer to **bool** | True when a matching account still exists on the connected source. | [optional] [default to false]
**ManuallyCreated** | Pointer to **bool** | True when the machine identity was created through a manual administrative action. | [optional] [default to false]
**ManuallyEdited** | Pointer to **bool** | True when the machine identity attributes were manually edited after creation. | [optional] [default to false]
**Owners** | Pointer to **map[string]interface{}** | Structured owner references for the machine identity when populated by the service. | [optional] 
**UserEntitlements** | Pointer to **[]map[string]interface{}** | Entitlements or fine-grained rights linked to the machine identity when available. | [optional] 

## Methods

### NewIntelMachine

`func NewIntelMachine() *IntelMachine`

NewIntelMachine instantiates a new IntelMachine object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelMachineWithDefaults

`func NewIntelMachineWithDefaults() *IntelMachine`

NewIntelMachineWithDefaults instantiates a new IntelMachine object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBusinessApplication

`func (o *IntelMachine) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *IntelMachine) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *IntelMachine) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.

### HasBusinessApplication

`func (o *IntelMachine) HasBusinessApplication() bool`

HasBusinessApplication returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *IntelMachine) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *IntelMachine) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *IntelMachine) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *IntelMachine) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetUuid

`func (o *IntelMachine) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *IntelMachine) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *IntelMachine) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *IntelMachine) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### SetUuidNil

`func (o *IntelMachine) SetUuidNil(b bool)`

 SetUuidNil sets the value for Uuid to be an explicit nil

### UnsetUuid
`func (o *IntelMachine) UnsetUuid()`

UnsetUuid ensures that no value is present for Uuid, not even an explicit nil
### GetSourceId

`func (o *IntelMachine) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *IntelMachine) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *IntelMachine) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *IntelMachine) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSource

`func (o *IntelMachine) GetSource() IntelMachineSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *IntelMachine) GetSourceOk() (*IntelMachineSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *IntelMachine) SetSource(v IntelMachineSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *IntelMachine) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetDatasetId

`func (o *IntelMachine) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *IntelMachine) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *IntelMachine) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *IntelMachine) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetExistsOnSource

`func (o *IntelMachine) GetExistsOnSource() bool`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *IntelMachine) GetExistsOnSourceOk() (*bool, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *IntelMachine) SetExistsOnSource(v bool)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *IntelMachine) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.

### GetManuallyCreated

`func (o *IntelMachine) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *IntelMachine) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *IntelMachine) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *IntelMachine) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *IntelMachine) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *IntelMachine) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *IntelMachine) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *IntelMachine) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetOwners

`func (o *IntelMachine) GetOwners() map[string]interface{}`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *IntelMachine) GetOwnersOk() (*map[string]interface{}, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *IntelMachine) SetOwners(v map[string]interface{})`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *IntelMachine) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *IntelMachine) GetUserEntitlements() []map[string]interface{}`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *IntelMachine) GetUserEntitlementsOk() (*[]map[string]interface{}, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *IntelMachine) SetUserEntitlements(v []map[string]interface{})`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *IntelMachine) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.


