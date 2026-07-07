---
id: v1-machineidentity
title: Machineidentity
pagination_label: Machineidentity
sidebar_label: Machineidentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineidentity', 'V1Machineidentity'] 
slug: /tools/sdk/go/machineidentities/models/machineidentity
tags: ['SDK', 'Software Development Kit', 'Machineidentity', 'V1Machineidentity']
---

# Machineidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | **string** | The native identity associated to the machine identity directly aggregated from a source | 
**Description** | Pointer to **string** | Description of machine identity | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | A map of custom machine identity attributes | [optional] 
**Subtype** | **string** | The subtype value associated to the machine identity | 
**Owners** | Pointer to [**MachineIdentityDtoOwners**](machine-identity-dto-owners) |  | [optional] 
**SourceId** | Pointer to **string** | The source id associated to the machine identity | [optional] 
**Uuid** | Pointer to **string** | The UUID associated to the machine identity directly aggregated from a source | [optional] 

## Methods

### NewMachineidentity

`func NewMachineidentity(name NullableString, nativeIdentity string, subtype string, ) *Machineidentity`

NewMachineidentity instantiates a new Machineidentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityWithDefaults

`func NewMachineidentityWithDefaults() *Machineidentity`

NewMachineidentityWithDefaults instantiates a new Machineidentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Machineidentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Machineidentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Machineidentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Machineidentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Machineidentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Machineidentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Machineidentity) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Machineidentity) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Machineidentity) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Machineidentity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Machineidentity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Machineidentity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Machineidentity) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Machineidentity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Machineidentity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Machineidentity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Machineidentity) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetNativeIdentity

`func (o *Machineidentity) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *Machineidentity) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *Machineidentity) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.


### GetDescription

`func (o *Machineidentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Machineidentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Machineidentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Machineidentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetAttributes

`func (o *Machineidentity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Machineidentity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Machineidentity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Machineidentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### GetSubtype

`func (o *Machineidentity) GetSubtype() string`

GetSubtype returns the Subtype field if non-nil, zero value otherwise.

### GetSubtypeOk

`func (o *Machineidentity) GetSubtypeOk() (*string, bool)`

GetSubtypeOk returns a tuple with the Subtype field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSubtype

`func (o *Machineidentity) SetSubtype(v string)`

SetSubtype sets Subtype field to given value.


### GetOwners

`func (o *Machineidentity) GetOwners() MachineIdentityDtoOwners`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Machineidentity) GetOwnersOk() (*MachineIdentityDtoOwners, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Machineidentity) SetOwners(v MachineIdentityDtoOwners)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Machineidentity) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetSourceId

`func (o *Machineidentity) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Machineidentity) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Machineidentity) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Machineidentity) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetUuid

`func (o *Machineidentity) GetUuid() string`

GetUuid returns the Uuid field if non-nil, zero value otherwise.

### GetUuidOk

`func (o *Machineidentity) GetUuidOk() (*string, bool)`

GetUuidOk returns a tuple with the Uuid field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUuid

`func (o *Machineidentity) SetUuid(v string)`

SetUuid sets Uuid field to given value.

### HasUuid

`func (o *Machineidentity) HasUuid() bool`

HasUuid returns a boolean if a field has been set.


