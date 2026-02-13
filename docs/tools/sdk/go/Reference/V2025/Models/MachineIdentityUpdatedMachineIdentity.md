---
id: v2025-machine-identity-updated-machine-identity
title: MachineIdentityUpdatedMachineIdentity
pagination_label: MachineIdentityUpdatedMachineIdentity
sidebar_label: MachineIdentityUpdatedMachineIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUpdatedMachineIdentity', 'V2025MachineIdentityUpdatedMachineIdentity'] 
slug: /tools/sdk/go/v2025/models/machine-identity-updated-machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdatedMachineIdentity', 'V2025MachineIdentityUpdatedMachineIdentity']
---

# MachineIdentityUpdatedMachineIdentity

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
**Owners** | Pointer to [**[]MachineIdentityOwnerReference**](machine-identity-owner-reference) | List of owners. | [optional] 
**SourceId** | Pointer to **string** | Source identifier. | [optional] 
**Uuid** | Pointer to **string** | UUID of the machine identity. | [optional] 
**NativeIdentity** | Pointer to **string** | Native identity value. | [optional] 
**ManuallyEdited** | **bool** | Indicates if manually edited. | [default to false]
**ManuallyCreated** | Pointer to **bool** | Indicates if manually created. | [optional] [default to false]
**DatasetId** | Pointer to **string** | Dataset identifier. | [optional] 
**Source** | Pointer to [**MachineIdentitySourceReference**](machine-identity-source-reference) |  | [optional] 
**UserEntitlements** | Pointer to [**[]MachineIdentityUserEntitlements**](machine-identity-user-entitlements) | List of user entitlements. | [optional] 
**ExistsOnSource** | Pointer to **string** | Existence status on source. | [optional] 

## Methods

### NewMachineIdentityUpdatedMachineIdentity

`func NewMachineIdentityUpdatedMachineIdentity(id string, created SailPointTime, modified SailPointTime, subtype string, manuallyEdited bool, ) *MachineIdentityUpdatedMachineIdentity`

NewMachineIdentityUpdatedMachineIdentity instantiates a new MachineIdentityUpdatedMachineIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUpdatedMachineIdentityWithDefaults

`func NewMachineIdentityUpdatedMachineIdentityWithDefaults() *MachineIdentityUpdatedMachineIdentity`

NewMachineIdentityUpdatedMachineIdentityWithDefaults instantiates a new MachineIdentityUpdatedMachineIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityUpdatedMachineIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityUpdatedMachineIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MachineIdentityUpdatedMachineIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityUpdatedMachineIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineIdentityUpdatedMachineIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *MachineIdentityUpdatedMachineIdentity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentityUpdatedMachineIdentity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *MachineIdentityUpdatedMachineIdentity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineIdentityUpdatedMachineIdentity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetBusinessApplication

`func (o *MachineIdentityUpdatedMachineIdentity) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *MachineIdentityUpdatedMachineIdentity) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.

### HasBusinessApplication

`func (o *MachineIdentityUpdatedMachineIdentity) HasBusinessApplication() bool`

HasBusinessApplication returns a boolean if a field has been set.

### GetDescription

`func (o *MachineIdentityUpdatedMachineIdentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineIdentityUpdatedMachineIdentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineIdentityUpdatedMachineIdentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineIdentityUpdatedMachineIdentity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineIdentityUpdatedMachineIdentity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineIdentityUpdatedMachineIdentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *MachineIdentityUpdatedMachineIdentity) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *MachineIdentityUpdatedMachineIdentity) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *MachineIdentityUpdatedMachineIdentity) GetOwners() []MachineIdentityOwnerReference`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetOwnersOk() (*[]MachineIdentityOwnerReference, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *MachineIdentityUpdatedMachineIdentity) SetOwners(v []MachineIdentityOwnerReference)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *MachineIdentityUpdatedMachineIdentity) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *MachineIdentityUpdatedMachineIdentity) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineIdentityUpdatedMachineIdentity) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineIdentityUpdatedMachineIdentity) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *MachineIdentityUpdatedMachineIdentity) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *MachineIdentityUpdatedMachineIdentity) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *MachineIdentityUpdatedMachineIdentity) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *MachineIdentityUpdatedMachineIdentity) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *MachineIdentityUpdatedMachineIdentity) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *MachineIdentityUpdatedMachineIdentity) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *MachineIdentityUpdatedMachineIdentity) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *MachineIdentityUpdatedMachineIdentity) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.


### GetManuallyCreated

`func (o *MachineIdentityUpdatedMachineIdentity) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *MachineIdentityUpdatedMachineIdentity) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *MachineIdentityUpdatedMachineIdentity) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetDatasetId

`func (o *MachineIdentityUpdatedMachineIdentity) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *MachineIdentityUpdatedMachineIdentity) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *MachineIdentityUpdatedMachineIdentity) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetSource

`func (o *MachineIdentityUpdatedMachineIdentity) GetSource() MachineIdentitySourceReference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetSourceOk() (*MachineIdentitySourceReference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineIdentityUpdatedMachineIdentity) SetSource(v MachineIdentitySourceReference)`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineIdentityUpdatedMachineIdentity) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *MachineIdentityUpdatedMachineIdentity) GetUserEntitlements() []MachineIdentityUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetUserEntitlementsOk() (*[]MachineIdentityUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *MachineIdentityUpdatedMachineIdentity) SetUserEntitlements(v []MachineIdentityUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *MachineIdentityUpdatedMachineIdentity) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetExistsOnSource

`func (o *MachineIdentityUpdatedMachineIdentity) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *MachineIdentityUpdatedMachineIdentity) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *MachineIdentityUpdatedMachineIdentity) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *MachineIdentityUpdatedMachineIdentity) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.


