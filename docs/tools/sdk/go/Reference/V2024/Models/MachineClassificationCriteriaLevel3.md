---
id: v2024-machine-classification-criteria-level3
title: MachineClassificationCriteriaLevel3
pagination_label: MachineClassificationCriteriaLevel3
sidebar_label: MachineClassificationCriteriaLevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineClassificationCriteriaLevel3', 'V2024MachineClassificationCriteriaLevel3'] 
slug: /tools/sdk/go/v2024/models/machine-classification-criteria-level3
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel3', 'V2024MachineClassificationCriteriaLevel3']
---

# MachineClassificationCriteriaLevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**CaseSensitive** | Pointer to **bool** | Indicates whether or not case matters when evaluating the criteria | [optional] [default to false]
**DataType** | Pointer to **NullableString** | The data type of the attribute being evaluated | [optional] 
**Attribute** | Pointer to **NullableString** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | Pointer to **NullableString** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | Pointer to **[]string** | An array of child classification criteria objects | [optional] 

## Methods

### NewMachineClassificationCriteriaLevel3

`func NewMachineClassificationCriteriaLevel3() *MachineClassificationCriteriaLevel3`

NewMachineClassificationCriteriaLevel3 instantiates a new MachineClassificationCriteriaLevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineClassificationCriteriaLevel3WithDefaults

`func NewMachineClassificationCriteriaLevel3WithDefaults() *MachineClassificationCriteriaLevel3`

NewMachineClassificationCriteriaLevel3WithDefaults instantiates a new MachineClassificationCriteriaLevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *MachineClassificationCriteriaLevel3) GetOperation() MachineClassificationCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *MachineClassificationCriteriaLevel3) GetOperationOk() (*MachineClassificationCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *MachineClassificationCriteriaLevel3) SetOperation(v MachineClassificationCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *MachineClassificationCriteriaLevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetCaseSensitive

`func (o *MachineClassificationCriteriaLevel3) GetCaseSensitive() bool`

GetCaseSensitive returns the CaseSensitive field if non-nil, zero value otherwise.

### GetCaseSensitiveOk

`func (o *MachineClassificationCriteriaLevel3) GetCaseSensitiveOk() (*bool, bool)`

GetCaseSensitiveOk returns a tuple with the CaseSensitive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseSensitive

`func (o *MachineClassificationCriteriaLevel3) SetCaseSensitive(v bool)`

SetCaseSensitive sets CaseSensitive field to given value.

### HasCaseSensitive

`func (o *MachineClassificationCriteriaLevel3) HasCaseSensitive() bool`

HasCaseSensitive returns a boolean if a field has been set.

### GetDataType

`func (o *MachineClassificationCriteriaLevel3) GetDataType() string`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *MachineClassificationCriteriaLevel3) GetDataTypeOk() (*string, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *MachineClassificationCriteriaLevel3) SetDataType(v string)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *MachineClassificationCriteriaLevel3) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### SetDataTypeNil

`func (o *MachineClassificationCriteriaLevel3) SetDataTypeNil(b bool)`

 SetDataTypeNil sets the value for DataType to be an explicit nil

### UnsetDataType
`func (o *MachineClassificationCriteriaLevel3) UnsetDataType()`

UnsetDataType ensures that no value is present for DataType, not even an explicit nil
### GetAttribute

`func (o *MachineClassificationCriteriaLevel3) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *MachineClassificationCriteriaLevel3) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *MachineClassificationCriteriaLevel3) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *MachineClassificationCriteriaLevel3) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *MachineClassificationCriteriaLevel3) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *MachineClassificationCriteriaLevel3) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *MachineClassificationCriteriaLevel3) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *MachineClassificationCriteriaLevel3) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *MachineClassificationCriteriaLevel3) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *MachineClassificationCriteriaLevel3) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *MachineClassificationCriteriaLevel3) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *MachineClassificationCriteriaLevel3) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *MachineClassificationCriteriaLevel3) GetChildren() []string`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *MachineClassificationCriteriaLevel3) GetChildrenOk() (*[]string, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *MachineClassificationCriteriaLevel3) SetChildren(v []string)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *MachineClassificationCriteriaLevel3) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *MachineClassificationCriteriaLevel3) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *MachineClassificationCriteriaLevel3) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

