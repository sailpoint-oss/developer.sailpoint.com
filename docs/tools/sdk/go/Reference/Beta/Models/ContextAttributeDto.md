---
id: beta-context-attribute-dto
title: ContextAttributeDto
pagination_label: ContextAttributeDto
sidebar_label: ContextAttributeDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ContextAttributeDto', 'BetaContextAttributeDto'] 
slug: /tools/sdk/go/beta/models/context-attribute-dto
tags: ['SDK', 'Software Development Kit', 'ContextAttributeDto', 'BetaContextAttributeDto']
---

# ContextAttributeDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | Pointer to **string** | The name of the attribute | [optional] 
**Value** | Pointer to [**ContextAttributeDtoValue**](context-attribute-dto-value) |  | [optional] 
**Derived** | Pointer to **bool** | True if the attribute was derived. | [optional] [default to false]

## Methods

### NewContextAttributeDto

`func NewContextAttributeDto() *ContextAttributeDto`

NewContextAttributeDto instantiates a new ContextAttributeDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContextAttributeDtoWithDefaults

`func NewContextAttributeDtoWithDefaults() *ContextAttributeDto`

NewContextAttributeDtoWithDefaults instantiates a new ContextAttributeDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *ContextAttributeDto) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *ContextAttributeDto) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *ContextAttributeDto) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *ContextAttributeDto) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *ContextAttributeDto) GetValue() ContextAttributeDtoValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ContextAttributeDto) GetValueOk() (*ContextAttributeDtoValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ContextAttributeDto) SetValue(v ContextAttributeDtoValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *ContextAttributeDto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDerived

`func (o *ContextAttributeDto) GetDerived() bool`

GetDerived returns the Derived field if non-nil, zero value otherwise.

### GetDerivedOk

`func (o *ContextAttributeDto) GetDerivedOk() (*bool, bool)`

GetDerivedOk returns a tuple with the Derived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDerived

`func (o *ContextAttributeDto) SetDerived(v bool)`

SetDerived sets Derived field to given value.

### HasDerived

`func (o *ContextAttributeDto) HasDerived() bool`

HasDerived returns a boolean if a field has been set.


