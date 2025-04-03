---
id: v2025-machine-identity
title: MachineIdentity
pagination_label: MachineIdentity
sidebar_label: MachineIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentity', 'V2025MachineIdentity'] 
slug: /tools/sdk/go/v2025/models/machine-identity
tags: ['SDK', 'Software Development Kit', 'MachineIdentity', 'V2025MachineIdentity']
---

# MachineIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**BusinessApplication** | **string** | The business application that the identity represents | 
**Description** | Pointer to **string** | Description of machine identity | [optional] 
**ManuallyEdited** | Pointer to **bool** | Indicates if the machine identity has been manually edited | [optional] [default to false]
**Attributes** | Pointer to **map[string]interface{}** | A map of custom machine identity attributes | [optional] 

## Methods

### NewMachineIdentity

`func NewMachineIdentity(name NullableString, businessApplication string, ) *MachineIdentity`

NewMachineIdentity instantiates a new MachineIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityWithDefaults

`func NewMachineIdentityWithDefaults() *MachineIdentity`

NewMachineIdentityWithDefaults instantiates a new MachineIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *MachineIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentity) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *MachineIdentity) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *MachineIdentity) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *MachineIdentity) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *MachineIdentity) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *MachineIdentity) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *MachineIdentity) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *MachineIdentity) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *MachineIdentity) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *MachineIdentity) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *MachineIdentity) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetBusinessApplication

`func (o *MachineIdentity) GetBusinessApplication() string`

GetBusinessApplication returns the BusinessApplication field if non-nil, zero value otherwise.

### GetBusinessApplicationOk

`func (o *MachineIdentity) GetBusinessApplicationOk() (*string, bool)`

GetBusinessApplicationOk returns a tuple with the BusinessApplication field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBusinessApplication

`func (o *MachineIdentity) SetBusinessApplication(v string)`

SetBusinessApplication sets BusinessApplication field to given value.


### GetDescription

`func (o *MachineIdentity) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *MachineIdentity) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *MachineIdentity) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *MachineIdentity) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetManuallyEdited

`func (o *MachineIdentity) GetManuallyEdited() bool`

GetManuallyEdited returns the ManuallyEdited field if non-nil, zero value otherwise.

### GetManuallyEditedOk

`func (o *MachineIdentity) GetManuallyEditedOk() (*bool, bool)`

GetManuallyEditedOk returns a tuple with the ManuallyEdited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManuallyEdited

`func (o *MachineIdentity) SetManuallyEdited(v bool)`

SetManuallyEdited sets ManuallyEdited field to given value.

### HasManuallyEdited

`func (o *MachineIdentity) HasManuallyEdited() bool`

HasManuallyEdited returns a boolean if a field has been set.

### GetAttributes

`func (o *MachineIdentity) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *MachineIdentity) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *MachineIdentity) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *MachineIdentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


