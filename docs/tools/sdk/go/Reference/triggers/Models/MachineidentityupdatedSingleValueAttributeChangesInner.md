---
id: v1-machineidentityupdated-single-value-attribute-changes-inner
title: MachineidentityupdatedSingleValueAttributeChangesInner
pagination_label: MachineidentityupdatedSingleValueAttributeChangesInner
sidebar_label: MachineidentityupdatedSingleValueAttributeChangesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineidentityupdatedSingleValueAttributeChangesInner', 'V1MachineidentityupdatedSingleValueAttributeChangesInner'] 
slug: /tools/sdk/go/triggers/models/machineidentityupdated-single-value-attribute-changes-inner
tags: ['SDK', 'Software Development Kit', 'MachineidentityupdatedSingleValueAttributeChangesInner', 'V1MachineidentityupdatedSingleValueAttributeChangesInner']
---

# MachineidentityupdatedSingleValueAttributeChangesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the attribute that was changed. | 
**OldValue** | [**NullableMachineidentityupdatedSingleValueAttributeChangesInnerOldValue**](machineidentityupdated-single-value-attribute-changes-inner-old-value) |  | 
**NewValue** | [**NullableMachineidentityupdatedSingleValueAttributeChangesInnerNewValue**](machineidentityupdated-single-value-attribute-changes-inner-new-value) |  | 

## Methods

### NewMachineidentityupdatedSingleValueAttributeChangesInner

`func NewMachineidentityupdatedSingleValueAttributeChangesInner(name string, oldValue NullableMachineidentityupdatedSingleValueAttributeChangesInnerOldValue, newValue NullableMachineidentityupdatedSingleValueAttributeChangesInnerNewValue, ) *MachineidentityupdatedSingleValueAttributeChangesInner`

NewMachineidentityupdatedSingleValueAttributeChangesInner instantiates a new MachineidentityupdatedSingleValueAttributeChangesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineidentityupdatedSingleValueAttributeChangesInnerWithDefaults

`func NewMachineidentityupdatedSingleValueAttributeChangesInnerWithDefaults() *MachineidentityupdatedSingleValueAttributeChangesInner`

NewMachineidentityupdatedSingleValueAttributeChangesInnerWithDefaults instantiates a new MachineidentityupdatedSingleValueAttributeChangesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) SetName(v string)`

SetName sets Name field to given value.


### GetOldValue

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) GetOldValue() MachineidentityupdatedSingleValueAttributeChangesInnerOldValue`

GetOldValue returns the OldValue field if non-nil, zero value otherwise.

### GetOldValueOk

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) GetOldValueOk() (*MachineidentityupdatedSingleValueAttributeChangesInnerOldValue, bool)`

GetOldValueOk returns a tuple with the OldValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOldValue

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) SetOldValue(v MachineidentityupdatedSingleValueAttributeChangesInnerOldValue)`

SetOldValue sets OldValue field to given value.


### SetOldValueNil

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) SetOldValueNil(b bool)`

 SetOldValueNil sets the value for OldValue to be an explicit nil

### UnsetOldValue
`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) UnsetOldValue()`

UnsetOldValue ensures that no value is present for OldValue, not even an explicit nil
### GetNewValue

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) GetNewValue() MachineidentityupdatedSingleValueAttributeChangesInnerNewValue`

GetNewValue returns the NewValue field if non-nil, zero value otherwise.

### GetNewValueOk

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) GetNewValueOk() (*MachineidentityupdatedSingleValueAttributeChangesInnerNewValue, bool)`

GetNewValueOk returns a tuple with the NewValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewValue

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) SetNewValue(v MachineidentityupdatedSingleValueAttributeChangesInnerNewValue)`

SetNewValue sets NewValue field to given value.


### SetNewValueNil

`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) SetNewValueNil(b bool)`

 SetNewValueNil sets the value for NewValue to be an explicit nil

### UnsetNewValue
`func (o *MachineidentityupdatedSingleValueAttributeChangesInner) UnsetNewValue()`

UnsetNewValue ensures that no value is present for NewValue, not even an explicit nil

