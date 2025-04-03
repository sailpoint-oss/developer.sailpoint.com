---
id: v2024-match-term
title: MatchTerm
pagination_label: MatchTerm
sidebar_label: MatchTerm
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'MatchTerm', 'V2024MatchTerm'] 
slug: /tools/sdk/go/v2024/models/match-term
tags: ['SDK', 'Software Development Kit', 'MatchTerm', 'V2024MatchTerm']
---

# MatchTerm

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

### NewMatchTerm

`func NewMatchTerm() *MatchTerm`

NewMatchTerm instantiates a new MatchTerm object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMatchTermWithDefaults

`func NewMatchTermWithDefaults() *MatchTerm`

NewMatchTermWithDefaults instantiates a new MatchTerm object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *MatchTerm) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *MatchTerm) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *MatchTerm) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *MatchTerm) HasName() bool`

HasName returns a boolean if a field has been set.

### GetValue

`func (o *MatchTerm) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *MatchTerm) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *MatchTerm) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *MatchTerm) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetOp

`func (o *MatchTerm) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *MatchTerm) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *MatchTerm) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *MatchTerm) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetContainer

`func (o *MatchTerm) GetContainer() bool`

GetContainer returns the Container field if non-nil, zero value otherwise.

### GetContainerOk

`func (o *MatchTerm) GetContainerOk() (*bool, bool)`

GetContainerOk returns a tuple with the Container field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContainer

`func (o *MatchTerm) SetContainer(v bool)`

SetContainer sets Container field to given value.

### HasContainer

`func (o *MatchTerm) HasContainer() bool`

HasContainer returns a boolean if a field has been set.

### GetAnd

`func (o *MatchTerm) GetAnd() bool`

GetAnd returns the And field if non-nil, zero value otherwise.

### GetAndOk

`func (o *MatchTerm) GetAndOk() (*bool, bool)`

GetAndOk returns a tuple with the And field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAnd

`func (o *MatchTerm) SetAnd(v bool)`

SetAnd sets And field to given value.

### HasAnd

`func (o *MatchTerm) HasAnd() bool`

HasAnd returns a boolean if a field has been set.

### GetChildren

`func (o *MatchTerm) GetChildren() []map[string]interface{}`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *MatchTerm) GetChildrenOk() (*[]map[string]interface{}, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *MatchTerm) SetChildren(v []map[string]interface{})`

SetChildren sets Children field to given value.

### HasChildren

`func (o *MatchTerm) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *MatchTerm) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *MatchTerm) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

