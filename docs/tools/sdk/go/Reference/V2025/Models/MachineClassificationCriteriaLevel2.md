---
id: v2025-machine-classification-criteria-level2
title: MachineClassificationCriteriaLevel2
pagination_label: MachineClassificationCriteriaLevel2
sidebar_label: MachineClassificationCriteriaLevel2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MachineClassificationCriteriaLevel2', 'V2025MachineClassificationCriteriaLevel2'] 
slug: /tools/sdk/go/v2025/models/machine-classification-criteria-level2
tags: ['SDK', 'Software Development Kit', 'MachineClassificationCriteriaLevel2', 'V2025MachineClassificationCriteriaLevel2']
---

# MachineClassificationCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**MachineClassificationCriteriaOperation**](machine-classification-criteria-operation) |  | [optional] 
**CaseSensitive** | Pointer to **bool** | Indicates whether case matters when evaluating the criteria | [optional] [default to false]
**DataType** | Pointer to **NullableString** | The data type of the attribute being evaluated | [optional] 
**Attribute** | Pointer to **NullableString** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | Pointer to **NullableString** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | Pointer to [**[]MachineClassificationCriteriaLevel3**](machine-classification-criteria-level3) | An array of child classification criteria objects | [optional] 

## Methods

### NewMachineClassificationCriteriaLevel2

`func NewMachineClassificationCriteriaLevel2() *MachineClassificationCriteriaLevel2`

NewMachineClassificationCriteriaLevel2 instantiates a new MachineClassificationCriteriaLevel2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineClassificationCriteriaLevel2WithDefaults

`func NewMachineClassificationCriteriaLevel2WithDefaults() *MachineClassificationCriteriaLevel2`

NewMachineClassificationCriteriaLevel2WithDefaults instantiates a new MachineClassificationCriteriaLevel2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *MachineClassificationCriteriaLevel2) GetOperation() MachineClassificationCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *MachineClassificationCriteriaLevel2) GetOperationOk() (*MachineClassificationCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *MachineClassificationCriteriaLevel2) SetOperation(v MachineClassificationCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *MachineClassificationCriteriaLevel2) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetCaseSensitive

`func (o *MachineClassificationCriteriaLevel2) GetCaseSensitive() bool`

GetCaseSensitive returns the CaseSensitive field if non-nil, zero value otherwise.

### GetCaseSensitiveOk

`func (o *MachineClassificationCriteriaLevel2) GetCaseSensitiveOk() (*bool, bool)`

GetCaseSensitiveOk returns a tuple with the CaseSensitive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseSensitive

`func (o *MachineClassificationCriteriaLevel2) SetCaseSensitive(v bool)`

SetCaseSensitive sets CaseSensitive field to given value.

### HasCaseSensitive

`func (o *MachineClassificationCriteriaLevel2) HasCaseSensitive() bool`

HasCaseSensitive returns a boolean if a field has been set.

### GetDataType

`func (o *MachineClassificationCriteriaLevel2) GetDataType() string`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *MachineClassificationCriteriaLevel2) GetDataTypeOk() (*string, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *MachineClassificationCriteriaLevel2) SetDataType(v string)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *MachineClassificationCriteriaLevel2) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### SetDataTypeNil

`func (o *MachineClassificationCriteriaLevel2) SetDataTypeNil(b bool)`

 SetDataTypeNil sets the value for DataType to be an explicit nil

### UnsetDataType
`func (o *MachineClassificationCriteriaLevel2) UnsetDataType()`

UnsetDataType ensures that no value is present for DataType, not even an explicit nil
### GetAttribute

`func (o *MachineClassificationCriteriaLevel2) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *MachineClassificationCriteriaLevel2) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *MachineClassificationCriteriaLevel2) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *MachineClassificationCriteriaLevel2) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *MachineClassificationCriteriaLevel2) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *MachineClassificationCriteriaLevel2) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *MachineClassificationCriteriaLevel2) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *MachineClassificationCriteriaLevel2) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *MachineClassificationCriteriaLevel2) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *MachineClassificationCriteriaLevel2) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *MachineClassificationCriteriaLevel2) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *MachineClassificationCriteriaLevel2) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *MachineClassificationCriteriaLevel2) GetChildren() []MachineClassificationCriteriaLevel3`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *MachineClassificationCriteriaLevel2) GetChildrenOk() (*[]MachineClassificationCriteriaLevel3, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *MachineClassificationCriteriaLevel2) SetChildren(v []MachineClassificationCriteriaLevel3)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *MachineClassificationCriteriaLevel2) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *MachineClassificationCriteriaLevel2) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *MachineClassificationCriteriaLevel2) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

