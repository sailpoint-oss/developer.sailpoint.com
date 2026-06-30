---
id: v1-dimensioncriterialevel1
title: Dimensioncriterialevel1
pagination_label: Dimensioncriterialevel1
sidebar_label: Dimensioncriterialevel1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dimensioncriterialevel1', 'V1Dimensioncriterialevel1'] 
slug: /tools/sdk/go/dimensions/models/dimensioncriterialevel1
tags: ['SDK', 'Software Development Kit', 'Dimensioncriterialevel1', 'V1Dimensioncriterialevel1']
---

# Dimensioncriterialevel1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** | Pointer to [**Dimensioncriteriaoperation**](dimensioncriteriaoperation) |  | [optional] 
**Key** | Pointer to [**NullableDimensioncriteriakey**](dimensioncriteriakey) |  | [optional] 
**StringValue** | Pointer to **NullableString** | String value to test the Identity attribute specified in the key w/r/t the specified operation. If this criteria is a leaf node, that is, if the operation is  EQUALS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Children** | Pointer to [**[]Dimensioncriterialevel2**](dimensioncriterialevel2) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. Additionally, AND nodes can only be children or OR nodes and vice-versa. | [optional] 

## Methods

### NewDimensioncriterialevel1

`func NewDimensioncriterialevel1() *Dimensioncriterialevel1`

NewDimensioncriterialevel1 instantiates a new Dimensioncriterialevel1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDimensioncriterialevel1WithDefaults

`func NewDimensioncriterialevel1WithDefaults() *Dimensioncriterialevel1`

NewDimensioncriterialevel1WithDefaults instantiates a new Dimensioncriterialevel1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *Dimensioncriterialevel1) GetOperation() Dimensioncriteriaoperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Dimensioncriterialevel1) GetOperationOk() (*Dimensioncriteriaoperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Dimensioncriterialevel1) SetOperation(v Dimensioncriteriaoperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Dimensioncriterialevel1) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetKey

`func (o *Dimensioncriterialevel1) GetKey() Dimensioncriteriakey`

GetKey returns the Key field if non-nil, zero value otherwise.

### GetKeyOk

`func (o *Dimensioncriterialevel1) GetKeyOk() (*Dimensioncriteriakey, bool)`

GetKeyOk returns a tuple with the Key field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetKey

`func (o *Dimensioncriterialevel1) SetKey(v Dimensioncriteriakey)`

SetKey sets Key field to given value.

### HasKey

`func (o *Dimensioncriterialevel1) HasKey() bool`

HasKey returns a boolean if a field has been set.

### SetKeyNil

`func (o *Dimensioncriterialevel1) SetKeyNil(b bool)`

 SetKeyNil sets the value for Key to be an explicit nil

### UnsetKey
`func (o *Dimensioncriterialevel1) UnsetKey()`

UnsetKey ensures that no value is present for Key, not even an explicit nil
### GetStringValue

`func (o *Dimensioncriterialevel1) GetStringValue() string`

GetStringValue returns the StringValue field if non-nil, zero value otherwise.

### GetStringValueOk

`func (o *Dimensioncriterialevel1) GetStringValueOk() (*string, bool)`

GetStringValueOk returns a tuple with the StringValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStringValue

`func (o *Dimensioncriterialevel1) SetStringValue(v string)`

SetStringValue sets StringValue field to given value.

### HasStringValue

`func (o *Dimensioncriterialevel1) HasStringValue() bool`

HasStringValue returns a boolean if a field has been set.

### SetStringValueNil

`func (o *Dimensioncriterialevel1) SetStringValueNil(b bool)`

 SetStringValueNil sets the value for StringValue to be an explicit nil

### UnsetStringValue
`func (o *Dimensioncriterialevel1) UnsetStringValue()`

UnsetStringValue ensures that no value is present for StringValue, not even an explicit nil
### GetChildren

`func (o *Dimensioncriterialevel1) GetChildren() []Dimensioncriterialevel2`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Dimensioncriterialevel1) GetChildrenOk() (*[]Dimensioncriterialevel2, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Dimensioncriterialevel1) SetChildren(v []Dimensioncriterialevel2)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Dimensioncriterialevel1) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Dimensioncriterialevel1) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Dimensioncriterialevel1) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

