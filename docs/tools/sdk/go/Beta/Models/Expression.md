---
id: expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'Expression'] 
slug: /tools/sdk/go/beta/models/expression
tags: ['SDK', 'Software Development Kit', 'Expression']
---

# Expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  Pointer to **string** | Operator for the expression | [optional] 
**Attribute** |  Pointer to **string** | Name for the attribute | [optional] 
**Value** |  Pointer to [**Value**](value) |  | [optional] 
**Children** |  Pointer to [**[]Value**](value) | List of expressions | [optional] 

## Methods

### NewExpression

`func NewExpression() *Expression`

NewExpression instantiates a new Expression object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExpressionWithDefaults

`func NewExpressionWithDefaults() *Expression`

NewExpressionWithDefaults instantiates a new Expression object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperator

`func (o *Expression) GetOperator() string`

GetOperator returns the Operator field if non-nil, zero value otherwise.

### GetOperatorOk

`func (o *Expression) GetOperatorOk() (*string, bool)`

GetOperatorOk returns a tuple with the Operator field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperator

`func (o *Expression) SetOperator(v string)`

SetOperator sets Operator field to given value.

### HasOperator

`func (o *Expression) HasOperator() bool`

HasOperator returns a boolean if a field has been set.

### GetAttribute

`func (o *Expression) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Expression) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Expression) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Expression) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Expression) GetValue() Value`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Expression) GetValueOk() (*Value, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Expression) SetValue(v Value)`

SetValue sets Value field to given value.

### HasValue

`func (o *Expression) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetChildren

`func (o *Expression) GetChildren() []Value`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Expression) GetChildrenOk() (*[]Value, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Expression) SetChildren(v []Value)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Expression) HasChildren() bool`

HasChildren returns a boolean if a field has been set.


[[Back to top]](#) 


