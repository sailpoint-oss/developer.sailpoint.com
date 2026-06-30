---
id: v1-dimensioncriterialevel2
title: Dimensioncriterialevel2
pagination_label: Dimensioncriterialevel2
sidebar_label: Dimensioncriterialevel2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensioncriterialevel2', 'V1Dimensioncriterialevel2'] 
slug: /tools/sdk/go/dimensions/models/dimensioncriterialevel2
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel2', 'V1Dimensioncriterialevel2']
---

# Dimensioncriterialevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**Key** | Pointer to [**NullableDimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is one of EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]Dimensioncriterialevel3**](dimensioncriterialevel3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewDimensioncriterialevel2

`func NewDimensioncriterialevel2() *Dimensioncriterialevel2`

NewDimensioncriterialevel2 instantiates a new Dimensioncriterialevel2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensioncriterialevel2WithDefaults

`func NewDimensioncriterialevel2WithDefaults() *Dimensioncriterialevel2`

NewDimensioncriterialevel2WithDefaults instantiates a new Dimensioncriterialevel2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Dimensioncriterialevel2) GetOperation() Dimensioncriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Dimensioncriterialevel2) GetOperationOk() (*Dimensioncriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Dimensioncriterialevel2) SetOperation(v Dimensioncriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Dimensioncriterialevel2) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *Dimensioncriterialevel2) GetKey() Dimensioncriteriakey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Dimensioncriterialevel2) GetKeyOk() (*Dimensioncriteriakey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Dimensioncriterialevel2) SetKey(v Dimensioncriteriakey)`

SetKey sets Key field to given value.

### HasKey

`func (o *Dimensioncriterialevel2) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Dimensioncriterialevel2) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Dimensioncriterialevel2) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *Dimensioncriterialevel2) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *Dimensioncriterialevel2) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *Dimensioncriterialevel2) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *Dimensioncriterialevel2) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *Dimensioncriterialevel2) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *Dimensioncriterialevel2) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *Dimensioncriterialevel2) GetChildren() []Dimensioncriterialevel3`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Dimensioncriterialevel2) GetChildrenOk() (*[]Dimensioncriterialevel3, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Dimensioncriterialevel2) SetChildren(v []Dimensioncriterialevel3)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Dimensioncriterialevel2) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Dimensioncriterialevel2) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Dimensioncriterialevel2) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

