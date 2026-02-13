---
id: v2025-machine-identity-deleted-machine-identity
title: MachineIdentityDeletedMachineIdentity
pagination_label: MachineIdentityDeletedMachineIdentity
sidebar_label: MachineIdentityDeletedMachineIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityDeletedMachineIdentity', 'V2025MachineIdentityDeletedMachineIdentity'] 
slug: /tools/sdk/go/v2025/models/machine-identity-deleted-machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentityDeletedMachineIdentity', 'V2025MachineIdentityDeletedMachineIdentity']
---

# MachineIdentityDeletedMachineIdentity

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

### NewMachineIdentityDeletedMachineIdentity

`func NewMachineIdentityDeletedMachineIdentity(id string, created SailPointTime, modified SailPointTime, subtype string, manuallyEdited bool, ) *MachineIdentityDeletedMachineIdentity`

NewMachineIdentityDeletedMachineIdentity instantiates a new MachineIdentityDeletedMachineIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityDeletedMachineIdentityWithDefaults

`func NewMachineIdentityDeletedMachineIdentityWithDefaults() *MachineIdentityDeletedMachineIdentity`

NewMachineIdentityDeletedMachineIdentityWithDefaults instantiates a new MachineIdentityDeletedMachineIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityDeletedMachineIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityDeletedMachineIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityDeletedMachineIdentity) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *MachineIdentityDeletedMachineIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityDeletedMachineIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityDeletedMachineIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MachineIdentityDeletedMachineIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *MachineIdentityDeletedMachineIdentity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentityDeletedMachineIdentity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentityDeletedMachineIdentity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *MachineIdentityDeletedMachineIdentity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineIdentityDeletedMachineIdentity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineIdentityDeletedMachineIdentity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetBusinessApplication

`func (o *MachineIdentityDeletedMachineIdentity) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *MachineIdentityDeletedMachineIdentity) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *MachineIdentityDeletedMachineIdentity) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.

### HasBusinessApplication

`func (o *MachineIdentityDeletedMachineIdentity) HasBusinessApplication() bool`

HasBusinessApplication returns a boolean if a field has been set.

### GetDescription

`func (o *MachineIdentityDeletedMachineIdentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineIdentityDeletedMachineIdentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineIdentityDeletedMachineIdentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineIdentityDeletedMachineIdentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineIdentityDeletedMachineIdentity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineIdentityDeletedMachineIdentity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineIdentityDeletedMachineIdentity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineIdentityDeletedMachineIdentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *MachineIdentityDeletedMachineIdentity) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *MachineIdentityDeletedMachineIdentity) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *MachineIdentityDeletedMachineIdentity) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *MachineIdentityDeletedMachineIdentity) GetOwners() []MachineIdentityOwnerReference`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *MachineIdentityDeletedMachineIdentity) GetOwnersOk() (*[]MachineIdentityOwnerReference, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *MachineIdentityDeletedMachineIdentity) SetOwners(v []MachineIdentityOwnerReference)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *MachineIdentityDeletedMachineIdentity) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *MachineIdentityDeletedMachineIdentity) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *MachineIdentityDeletedMachineIdentity) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *MachineIdentityDeletedMachineIdentity) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *MachineIdentityDeletedMachineIdentity) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *MachineIdentityDeletedMachineIdentity) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *MachineIdentityDeletedMachineIdentity) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *MachineIdentityDeletedMachineIdentity) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *MachineIdentityDeletedMachineIdentity) HasUuid() bool`

HasUuid returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *MachineIdentityDeletedMachineIdentity) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *MachineIdentityDeletedMachineIdentity) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *MachineIdentityDeletedMachineIdentity) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *MachineIdentityDeletedMachineIdentity) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *MachineIdentityDeletedMachineIdentity) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *MachineIdentityDeletedMachineIdentity) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *MachineIdentityDeletedMachineIdentity) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.


### GetManuallyCreated

`func (o *MachineIdentityDeletedMachineIdentity) GetManuallyCreated() bool`

GetManuallyCreated returns the ManuallyCreated field if non-nil, zero value otherwise.

### GetManuallyCreatedOk

`func (o *MachineIdentityDeletedMachineIdentity) GetManuallyCreatedOk() (*bool, bool)`

GetManuallyCreatedOk returns a tuple with the ManuallyCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyCreated

`func (o *MachineIdentityDeletedMachineIdentity) SetManuallyCreated(v bool)`

SetManuallyCreated sets ManuallyCreated field to given value.

### HasManuallyCreated

`func (o *MachineIdentityDeletedMachineIdentity) HasManuallyCreated() bool`

HasManuallyCreated returns a boolean if a field has been set.

### GetDatasetId

`func (o *MachineIdentityDeletedMachineIdentity) GetDatasetId() string`

GetDatasetId returns the DatasetId field if non-nil, zero value otherwise.

### GetDatasetIdOk

`func (o *MachineIdentityDeletedMachineIdentity) GetDatasetIdOk() (*string, bool)`

GetDatasetIdOk returns a tuple with the DatasetId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDatasetId

`func (o *MachineIdentityDeletedMachineIdentity) SetDatasetId(v string)`

SetDatasetId sets DatasetId field to given value.

### HasDatasetId

`func (o *MachineIdentityDeletedMachineIdentity) HasDatasetId() bool`

HasDatasetId returns a boolean if a field has been set.

### GetSource

`func (o *MachineIdentityDeletedMachineIdentity) GetSource() MachineIdentitySourceReference`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *MachineIdentityDeletedMachineIdentity) GetSourceOk() (*MachineIdentitySourceReference, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *MachineIdentityDeletedMachineIdentity) SetSource(v MachineIdentitySourceReference)`

SetSource sets Source field to given value.

### HasSource

`func (o *MachineIdentityDeletedMachineIdentity) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetUserEntitlements

`func (o *MachineIdentityDeletedMachineIdentity) GetUserEntitlements() []MachineIdentityUserEntitlements`

GetUserEntitlements returns the UserEntitlements field if non-nil, zero value otherwise.

### GetUserEntitlementsOk

`func (o *MachineIdentityDeletedMachineIdentity) GetUserEntitlementsOk() (*[]MachineIdentityUserEntitlements, bool)`

GetUserEntitlementsOk returns a tuple with the UserEntitlements field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserEntitlements

`func (o *MachineIdentityDeletedMachineIdentity) SetUserEntitlements(v []MachineIdentityUserEntitlements)`

SetUserEntitlements sets UserEntitlements field to given value.

### HasUserEntitlements

`func (o *MachineIdentityDeletedMachineIdentity) HasUserEntitlements() bool`

HasUserEntitlements returns a boolean if a field has been set.

### GetExistsOnSource

`func (o *MachineIdentityDeletedMachineIdentity) GetExistsOnSource() string`

GetExistsOnSource returns the ExistsOnSource field if non-nil, zero value otherwise.

### GetExistsOnSourceOk

`func (o *MachineIdentityDeletedMachineIdentity) GetExistsOnSourceOk() (*string, bool)`

GetExistsOnSourceOk returns a tuple with the ExistsOnSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExistsOnSource

`func (o *MachineIdentityDeletedMachineIdentity) SetExistsOnSource(v string)`

SetExistsOnSource sets ExistsOnSource field to given value.

### HasExistsOnSource

`func (o *MachineIdentityDeletedMachineIdentity) HasExistsOnSource() bool`

HasExistsOnSource returns a boolean if a field has been set.


