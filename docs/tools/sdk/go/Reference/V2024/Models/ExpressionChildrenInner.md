---
id: v2024-expression-children-inner
title: ExpressionChildrenInner
pagination_label: ExpressionChildrenInner
sidebar_label: ExpressionChildrenInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ExpressionChildrenInner', 'V2024ExpressionChildrenInner'] 
slug: /tools/sdk/go/v2024/models/expression-children-inner
tags: ['SDK', 'Software Development Kit', 'ExpressionChildrenInner', 'V2024ExpressionChildrenInner']
---

# ExpressionChildrenInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** | Pointer to **string** | Operator for the expression | [optional] 
**Attribute** | Pointer to **NullableString** | Name for the attribute | [optional] 
**Value** | Pointer to [**NullableValue**](value) |  | [optional] 
**Children** | Pointer to **NullableString** | There cannot be anymore nested children. This will always be null. | [optional] 

## Methods

### NewExpressionChildrenInner

`func NewExpressionChildrenInner() *ExpressionChildrenInner`

NewExpressionChildrenInner instantiates a new ExpressionChildrenInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExpressionChildrenInnerWithDefaults

`func NewExpressionChildrenInnerWithDefaults() *ExpressionChildrenInner`

NewExpressionChildrenInnerWithDefaults instantiates a new ExpressionChildrenInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperator

`func (o *ExpressionChildrenInner) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *ExpressionChildrenInner) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *ExpressionChildrenInner) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *ExpressionChildrenInner) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetAttribute

`func (o *ExpressionChildrenInner) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *ExpressionChildrenInner) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *ExpressionChildrenInner) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *ExpressionChildrenInner) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *ExpressionChildrenInner) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *ExpressionChildrenInner) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *ExpressionChildrenInner) GetValue() Value`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ExpressionChildrenInner) GetValueOk() (*Value, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ExpressionChildrenInner) SetValue(v Value)`

SetValue sets Value field to given value.

### HasValue

`func (o *ExpressionChildrenInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *ExpressionChildrenInner) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *ExpressionChildrenInner) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *ExpressionChildrenInner) GetChildren() string`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *ExpressionChildrenInner) GetChildrenOk() (*string, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *ExpressionChildrenInner) SetChildren(v string)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *ExpressionChildrenInner) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *ExpressionChildrenInner) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *ExpressionChildrenInner) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

