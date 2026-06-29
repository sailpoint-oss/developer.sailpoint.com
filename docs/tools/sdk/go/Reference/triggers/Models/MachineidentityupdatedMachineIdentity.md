---
id: v1-machineidentityupdated-machine-identity
title: MachineidentityupdatedMachineIdentity
pagination_label: MachineidentityupdatedMachineIdentity
sidebar_label: MachineidentityupdatedMachineIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineidentityupdatedMachineIdentity', 'V1MachineidentityupdatedMachineIdentity'] 
slug: /tools/sdk/go/triggers/models/machineidentityupdated-machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedMachineIdentity', 'V1MachineidentityupdatedMachineIdentity']
---

# MachineidentityupdatedMachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier for the machine identity. | 
**Name** | Pointer to **string** | Name of the machine identity. | [optional] 
**Created** | **SailPointTime** | Creation timestamp. | 
**Modified** | **SailPointTime** | Last modified timestamp. | 
**BusinessApplication** | Pointer to **string** | Associated business application. | [optional] 
**Description** | Pointer to **string** | Description of the machine identity. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | The attributes assigned to the identity. | [optional] 
**Subtype** | **string** | Subtype of the machine identity. | 
**Owners** | Pointer to [**[]Machineidentityownerreference**](machineidentityownerreference) | List of owners. | [optional] 
**SourceId** | Pointer to **string** | Source identifier. | [optional] 
**Uuid** | Pointer to **string** | UUID of the machine identity. | [optional] 
**NativeIdentity** | Pointer to **string** | Native identity value. | [optional] 
**ManuallyEdited** | **bool** | Indicates if manually edited. | [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates if manually created. | [optional] [default to false]
**DatasetId** | Pointer to **string** | Dataset identifier. | [optional] 
**Source** | Pointer to [**Machineidentitysourcereference**](machineidentitysourcereference) |  | [optional] 
**UserEntitlements** | Pointer to [**[]Machineidentityuserentitlements**](machineidentityuserentitlements) | List of user entitlements. | [optional] 
**ExistsOnSource** | Pointer to **string** | Existence status on source. | [optional] 

## Methods

### NewMachineidentityupdatedMachineIdentity

`func NewMachineidentityupdatedMachineIdentity(id string, created SailPointTime, modified SailPointTime, subtype string, manuallyEdited bool, ) *MachineidentityupdatedMachineIdentity`

NewMachineidentityupdatedMachineIdentity instantiates a new MachineidentityupdatedMachineIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityupdatedMachineIdentityWithDefaults

`func NewMachineidentityupdatedMachineIdentityWithDefaults() *MachineidentityupdatedMachineIdentity`

NewMachineidentityupdatedMachineIdentityWithDefaults instantiates a new MachineidentityupdatedMachineIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineidentityupdatedMachineIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineidentityupdatedMachineIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineidentityupdatedMachineIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MachineidentityupdatedMachineIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineidentityupdatedMachineIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineidentityupdatedMachineIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineidentityupdatedMachineIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *MachineidentityupdatedMachineIdentity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineidentityupdatedMachineIdentity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineidentityupdatedMachineIdentity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *MachineidentityupdatedMachineIdentity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineidentityupdatedMachineIdentity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineidentityupdatedMachineIdentity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetBusinessApplication

`func (o *MachineidentityupdatedMachineIdentity) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *MachineidentityupdatedMachineIdentity) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *MachineidentityupdatedMachineIdentity) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.

### HasBusinessApplication

`func (o *MachineidentityupdatedMachineIdentity) HasBusinessApplication() bool`

HasBusinessApplication returns a boolean if a field has been set.

### GetDescription

`func (o *MachineidentityupdatedMachineIdentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineidentityupdatedMachineIdentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineidentityupdatedMachineIdentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineidentityupdatedMachineIdentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineidentityupdatedMachineIdentity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineidentityupdatedMachineIdentity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineidentityupdatedMachineIdentity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineidentityupdatedMachineIdentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *MachineidentityupdatedMachineIdentity) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *MachineidentityupdatedMachineIdentity) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *MachineidentityupdatedMachineIdentity) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *MachineidentityupdatedMachineIdentity) GetOwners() []Machineidentityownerreference`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *MachineidentityupdatedMachineIdentity) GetOwnersOk() (*[]Machineidentityownerreference, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *MachineidentityupdatedMachineIdentity) SetOwners(v []Machineidentityownerreference)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *MachineidentityupdatedMachineIdentity) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *MachineidentityupdatedMachineIdentity) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineidentityupdatedMachineIdentity) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineidentityupdatedMachineIdentity) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineidentityupdatedMachineIdentity) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *MachineidentityupdatedMachineIdentity) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *MachineidentityupdatedMachineIdentity) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *MachineidentityupdatedMachineIdentity) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *MachineidentityupdatedMachineIdentity) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *MachineidentityupdatedMachineIdentity) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *MachineidentityupdatedMachineIdentity) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *MachineidentityupdatedMachineIdentity) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *MachineidentityupdatedMachineIdentity) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *MachineidentityupdatedMachineIdentity) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *MachineidentityupdatedMachineIdentity) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *MachineidentityupdatedMachineIdentity) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.


### GetManuallyCreated

`func (o *MachineidentityupdatedMachineIdentity) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *MachineidentityupdatedMachineIdentity) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *MachineidentityupdatedMachineIdentity) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *MachineidentityupdatedMachineIdentity) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetDatasetId

`func (o *MachineidentityupdatedMachineIdentity) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *MachineidentityupdatedMachineIdentity) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *MachineidentityupdatedMachineIdentity) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *MachineidentityupdatedMachineIdentity) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetSource

`func (o *MachineidentityupdatedMachineIdentity) GetSource() Machineidentitysourcereference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineidentityupdatedMachineIdentity) GetSourceOk() (*Machineidentitysourcereference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineidentityupdatedMachineIdentity) SetSource(v Machineidentitysourcereference)`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineidentityupdatedMachineIdentity) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *MachineidentityupdatedMachineIdentity) GetUserEntitlements() []Machineidentityuserentitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *MachineidentityupdatedMachineIdentity) GetUserEntitlementsOk() (*[]Machineidentityuserentitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *MachineidentityupdatedMachineIdentity) SetUserEntitlements(v []Machineidentityuserentitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *MachineidentityupdatedMachineIdentity) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetExistsOnSource

`func (o *MachineidentityupdatedMachineIdentity) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *MachineidentityupdatedMachineIdentity) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *MachineidentityupdatedMachineIdentity) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *MachineidentityupdatedMachineIdentity) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.


