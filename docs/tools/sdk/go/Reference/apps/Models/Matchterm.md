---
id: v1-matchterm
title: Matchterm
pagination_label: Matchterm
sidebar_label: Matchterm
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Matchterm', 'V1Matchterm'] 
slug: /tools/sdk/go/apps/models/matchterm
tags: ['SDK', 'Software Development Kit', 'Matchterm', 'V1Matchterm']
---

# Matchterm

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The attribute name | [optional] 
**Value** | Pointer to **string** | The attribute value | [optional] 
**Op** | Pointer to **string** | The operator between name and value | [optional] 
**Container** | Pointer to **bool** | If it is a container or a real match term | [optional] [default to false]
**And** | Pointer to **bool** | If it is AND logical operator for the children match terms | [optional] [default to false]
**Children** | Pointer to **[]map[string]interface{}** | The children under this match term | [optional] 

## Methods

### NewMatchterm

`func NewMatchterm() *Matchterm`

NewMatchterm instantiates a new Matchterm object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMatchtermWithDefaults

`func NewMatchtermWithDefaults() *Matchterm`

NewMatchtermWithDefaults instantiates a new Matchterm object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Matchterm) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Matchterm) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Matchterm) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Matchterm) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *Matchterm) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Matchterm) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Matchterm) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Matchterm) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetOp

`func (o *Matchterm) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *Matchterm) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *Matchterm) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *Matchterm) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetContainer

`func (o *Matchterm) GetContainer() bool`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *Matchterm) GetContainerOk() (*bool, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *Matchterm) SetContainer(v bool)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *Matchterm) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetAnd

`func (o *Matchterm) GetAnd() bool`

GetAnd returns the And field if non-nil, zero value otherwise.

### GetAndOk

`func (o *Matchterm) GetAndOk() (*bool, bool)`

GetAndOk returns a tuple with the And field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnd

`func (o *Matchterm) SetAnd(v bool)`

SetAnd sets And field to given value.

### HasAnd

`func (o *Matchterm) HasAnd() bool`

HasAnd returns a boolean if a field has been set.

### GetChildren

`func (o *Matchterm) GetChildren() []map[string]interface{}`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *Matchterm) GetChildrenOk() (*[]map[string]interface{}, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *Matchterm) SetChildren(v []map[string]interface{})`

SetChildren sets Children field to given value.

### HasChildren

`func (o *Matchterm) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *Matchterm) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *Matchterm) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

