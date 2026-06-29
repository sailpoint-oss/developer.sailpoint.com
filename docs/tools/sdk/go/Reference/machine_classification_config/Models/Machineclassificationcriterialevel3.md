---
id: v1-machineclassificationcriterialevel3
title: Machineclassificationcriterialevel3
pagination_label: Machineclassificationcriterialevel3
sidebar_label: Machineclassificationcriterialevel3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Machineclassificationcriterialevel3', 'V1Machineclassificationcriterialevel3'] 
slug: /tools/sdk/go/machineclassificationconfig/models/machineclassificationcriterialevel3
tags: ['SDK', 'Software Development Kit', 'Machineclassificationcriterialevel3', 'V1Machineclassificationcriterialevel3']
---

# Machineclassificationcriterialevel3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Machineclassificationcriteriaoperation**](machineclassificationcriteriaoperation) |  | [optional] 
**CaseSensitive** | Pointer to **bool** | Indicates whether or not case matters when evaluating the criteria | [optional] [default to false]
**DataType** | Pointer to **NullableString** | The data type of the attribute being evaluated | [optional] 
**Attribute** | Pointer to **NullableString** | The attribute to evaluate in the classification criteria | [optional] 
**Value** | Pointer to **NullableString** | The value to compare against the attribute in the classification criteria | [optional] 
**Children** | Pointer to **[]map[string]interface{}** | An array of child classification criteria objects | [optional] 

## Methods

### NewMachineclassificationcriterialevel3

`func NewMachineclassificationcriterialevel3() *Machineclassificationcriterialevel3`

NewMachineclassificationcriterialevel3 instantiates a new Machineclassificationcriterialevel3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineclassificationcriterialevel3WithDefaults

`func NewMachineclassificationcriterialevel3WithDefaults() *Machineclassificationcriterialevel3`

NewMachineclassificationcriterialevel3WithDefaults instantiates a new Machineclassificationcriterialevel3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Machineclassificationcriterialevel3) GetOperation() Machineclassificationcriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Machineclassificationcriterialevel3) GetOperationOk() (*Machineclassificationcriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Machineclassificationcriterialevel3) SetOperation(v Machineclassificationcriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Machineclassificationcriterialevel3) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetCaseSensitive

`func (o *Machineclassificationcriterialevel3) GetCaseSensitive() bool`

GetCaseSensitive returns the CaseSensitive field if non-nil, zero value otherwise.

### GetCaseSensitiveOk

`func (o *Machineclassificationcriterialevel3) GetCaseSensitiveOk() (*bool, bool)`

GetCaseSensitiveOk returns a tuple with the CaseSensitive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseSensitive

`func (o *Machineclassificationcriterialevel3) SetCaseSensitive(v bool)`

SetCaseSensitive sets CaseSensitive field to given value.

### HasCaseSensitive

`func (o *Machineclassificationcriterialevel3) HasCaseSensitive() bool`

HasCaseSensitive returns a boolean if a field has been set.

### GetDataType

`func (o *Machineclassificationcriterialevel3) GetDataType() string`

GetDataType returns the DataType field if non-nil, zero value otherwise.

### GetDataTypeOk

`func (o *Machineclassificationcriterialevel3) GetDataTypeOk() (*string, bool)`

GetDataTypeOk returns a tuple with the DataType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataType

`func (o *Machineclassificationcriterialevel3) SetDataType(v string)`

SetDataType sets DataType field to given value.

### HasDataType

`func (o *Machineclassificationcriterialevel3) HasDataType() bool`

HasDataType returns a boolean if a field has been set.

### SetDataTypeNil

`func (o *Machineclassificationcriterialevel3) SetDataTypeNil(b bool)`

 SetDataTypeNil sets the value for DataType to be an explicit nil

### UnsetDataType
`func (o *Machineclassificationcriterialevel3) UnsetDataType()`

UnsetDataType ensures that no value is present for DataType, not even an explicit nil
### GetAttribute

`func (o *Machineclassificationcriterialevel3) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Machineclassificationcriterialevel3) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Machineclassificationcriterialevel3) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Machineclassificationcriterialevel3) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *Machineclassificationcriterialevel3) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *Machineclassificationcriterialevel3) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *Machineclassificationcriterialevel3) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Machineclassificationcriterialevel3) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Machineclassificationcriterialevel3) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Machineclassificationcriterialevel3) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Machineclassificationcriterialevel3) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Machineclassificationcriterialevel3) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *Machineclassificationcriterialevel3) GetChildren() []map[string]interface{}`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Machineclassificationcriterialevel3) GetChildrenOk() (*[]map[string]interface{}, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Machineclassificationcriterialevel3) SetChildren(v []map[string]interface{})`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Machineclassificationcriterialevel3) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Machineclassificationcriterialevel3) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Machineclassificationcriterialevel3) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

