---
id: beta-children
title: Children
pagination_label: Children
sidebar_label: Children
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Children', 'BetaChildren'] 
slug: /tools/sdk/go/beta/models/children
tags: ['SDK', 'Software Development Kit', 'Children', 'BetaChildren']
---

# Children

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** | Pointer to **string** |  | [optional] 
**Attribute** | Pointer to **string** |  | [optional] 
**Value** | Pointer to [**NullableValue**](value) |  | [optional] 
**Children** | Pointer to **NullableString** |  | [optional] 

## Methods

### NewChildren

`func NewChildren() *Children`

NewChildren instantiates a new Children object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChildrenWithDefaults

`func NewChildrenWithDefaults() *Children`

NewChildrenWithDefaults instantiates a new Children object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperator

`func (o *Children) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Children) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Children) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *Children) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetAttribute

`func (o *Children) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Children) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Children) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Children) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Children) GetValue() Value`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Children) GetValueOk() (*Value, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Children) SetValue(v Value)`

SetValue sets Value field to given value.

### HasValue

`func (o *Children) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Children) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Children) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *Children) GetChildren() string`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Children) GetChildrenOk() (*string, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Children) SetChildren(v string)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Children) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Children) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Children) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

