---
id: v2025-machine-identity-updated-single-value-attribute-changes-inner
title: MachineIdentityUpdatedSingleValueAttributeChangesInner
pagination_label: MachineIdentityUpdatedSingleValueAttributeChangesInner
sidebar_label: MachineIdentityUpdatedSingleValueAttributeChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineIdentityUpdatedSingleValueAttributeChangesInner', 'V2025MachineIdentityUpdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/go/v2025/models/machine-identity-updated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'MachineIdentityUpdatedSingleValueAttributeChangesInner', 'V2025MachineIdentityUpdatedSingleValueAttributeChangesInner']
---

# MachineIdentityUpdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the attribute that was changed. | 
**OldValue** | [**NullableMachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue**](machine-identity-updated-single-value-attribute-changes-inner-old-value) |  | 
**NewValue** | [**NullableMachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue**](machine-identity-updated-single-value-attribute-changes-inner-new-value) |  | 

## Methods

### NewMachineIdentityUpdatedSingleValueAttributeChangesInner

`func NewMachineIdentityUpdatedSingleValueAttributeChangesInner(name string, oldValue NullableMachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue, newValue NullableMachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue, ) *MachineIdentityUpdatedSingleValueAttributeChangesInner`

NewMachineIdentityUpdatedSingleValueAttributeChangesInner instantiates a new MachineIdentityUpdatedSingleValueAttributeChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityUpdatedSingleValueAttributeChangesInnerWithDefaults

`func NewMachineIdentityUpdatedSingleValueAttributeChangesInnerWithDefaults() *MachineIdentityUpdatedSingleValueAttributeChangesInner`

NewMachineIdentityUpdatedSingleValueAttributeChangesInnerWithDefaults instantiates a new MachineIdentityUpdatedSingleValueAttributeChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) SetName(v string)`

SetName sets Name field to given value.


### GetOldValue

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) GetOldValue() MachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) GetOldValueOk() (*MachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) SetOldValue(v MachineIdentityUpdatedSingleValueAttributeChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.


### SetOldValueNil

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) GetNewValue() MachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) GetNewValueOk() (*MachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) SetNewValue(v MachineIdentityUpdatedSingleValueAttributeChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.


### SetNewValueNil

`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) SetNewValueNil(b bool)`

 SetNewValueNil sets the value for NewValue to be an explicit nil

### UnsetNewValue
`func (o *MachineIdentityUpdatedSingleValueAttributeChangesInner) UnsetNewValue()`

UnsetNewValue ensures that no value is present for NewValue, not even an explicit nil

