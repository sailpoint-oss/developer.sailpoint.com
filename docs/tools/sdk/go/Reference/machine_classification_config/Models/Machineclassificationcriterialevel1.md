---
id: v1-machineclassificationcriterialevel1
title: Machineclassificationcriterialevel1
pagination_label: Machineclassificationcriterialevel1
sidebar_label: Machineclassificationcriterialevel1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineclassificationcriterialevel1', 'V1Machineclassificationcriterialevel1'] 
slug: /tools/sdk/go/machineclassificationconfig/models/machineclassificationcriterialevel1
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel1', 'V1Machineclassificationcriterialevel1']
---

# Machineclassificationcriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**CaseSensitive** | Pointer to **bool** | Indicates whether case matters when evaluating the criteria | [optional] [default to false]
**DataType** | Pointer to **NullableString** | The data type of the attribute being evaluated | [optional] 
**Attribute** | Pointer to **NullableString** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | Pointer to **NullableString** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | Pointer to [**[]Machineclassificationcriterialevel2**](machineclassificationcriterialevel2) | An array of child classification criteria objects | [optional] 

## Methods

### NewMachineclassificationcriterialevel1

`func NewMachineclassificationcriterialevel1() *Machineclassificationcriterialevel1`

NewMachineclassificationcriterialevel1 instantiates a new Machineclassificationcriterialevel1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineclassificationcriterialevel1WithDefaults

`func NewMachineclassificationcriterialevel1WithDefaults() *Machineclassificationcriterialevel1`

NewMachineclassificationcriterialevel1WithDefaults instantiates a new Machineclassificationcriterialevel1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Machineclassificationcriterialevel1) GetOperation() Machineclassificationcriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Machineclassificationcriterialevel1) GetOperationOk() (*Machineclassificationcriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Machineclassificationcriterialevel1) SetOperation(v Machineclassificationcriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Machineclassificationcriterialevel1) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetCaseSensitive

`func (o *Machineclassificationcriterialevel1) GetCaseSensitive() bool`

GetCaseSensitive returns the CaseSensitive field if non-nil, zero value otherwise.

### GetCaseSensitiveOk

`func (o *Machineclassificationcriterialevel1) GetCaseSensitiveOk() (*bool, bool)`

GetCaseSensitiveOk returns a tuple with the CaseSensitive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseSensitive

`func (o *Machineclassificationcriterialevel1) SetCaseSensitive(v bool)`

SetCaseSensitive sets CaseSensitive field to given value.

### HasCaseSensitive

`func (o *Machineclassificationcriterialevel1) HasCaseSensitive() bool`

HasCaseSensitive returns a boolean if a field has been set.

### GetDataType

`func (o *Machineclassificationcriterialevel1) GetDataType() string`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *Machineclassificationcriterialevel1) GetDataTypeOk() (*string, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *Machineclassificationcriterialevel1) SetDataType(v string)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *Machineclassificationcriterialevel1) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### SetDataTypeNil

`func (o *Machineclassificationcriterialevel1) SetDataTypeNil(b bool)`

 SetDataTypeNil sets the value for DataType to be an explicit nil

### UnsetDataType
`func (o *Machineclassificationcriterialevel1) UnsetDataType()`

UnsetDataType ensures that no value is present for DataType, not even an explicit nil
### GetAttribute

`func (o *Machineclassificationcriterialevel1) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Machineclassificationcriterialevel1) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Machineclassificationcriterialevel1) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Machineclassificationcriterialevel1) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *Machineclassificationcriterialevel1) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *Machineclassificationcriterialevel1) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *Machineclassificationcriterialevel1) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Machineclassificationcriterialevel1) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Machineclassificationcriterialevel1) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Machineclassificationcriterialevel1) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Machineclassificationcriterialevel1) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Machineclassificationcriterialevel1) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *Machineclassificationcriterialevel1) GetChildren() []Machineclassificationcriterialevel2`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Machineclassificationcriterialevel1) GetChildrenOk() (*[]Machineclassificationcriterialevel2, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Machineclassificationcriterialevel1) SetChildren(v []Machineclassificationcriterialevel2)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Machineclassificationcriterialevel1) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Machineclassificationcriterialevel1) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Machineclassificationcriterialevel1) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

