---
id: v1-contextattributedto
title: Contextattributedto
pagination_label: Contextattributedto
sidebar_label: Contextattributedto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Contextattributedto', 'V1Contextattributedto'] 
slug: /tools/sdk/go/identities/models/contextattributedto
tags: ['SDK', 'Software Development Kit', 'Contextattributedto', 'V1Contextattributedto']
---

# Contextattributedto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | Pointer to **string** | The name of the attribute | [optional] 
**Value** | Pointer to [**ContextattributedtoValue**](contextattributedto-value) |  | [optional] 
**Derived** | Pointer to **bool** | True if the attribute was derived. | [optional] [default to false]

## Methods

### NewContextattributedto

`func NewContextattributedto() *Contextattributedto`

NewContextattributedto instantiates a new Contextattributedto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewContextattributedtoWithDefaults

`func NewContextattributedtoWithDefaults() *Contextattributedto`

NewContextattributedtoWithDefaults instantiates a new Contextattributedto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttribute

`func (o *Contextattributedto) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Contextattributedto) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Contextattributedto) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Contextattributedto) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Contextattributedto) GetValue() ContextattributedtoValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Contextattributedto) GetValueOk() (*ContextattributedtoValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Contextattributedto) SetValue(v ContextattributedtoValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *Contextattributedto) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetDerived

`func (o *Contextattributedto) GetDerived() bool`

GetDerived returns the Derived field if non-nil, zero value otherwise.

### GetDerivedOk

`func (o *Contextattributedto) GetDerivedOk() (*bool, bool)`

GetDerivedOk returns a tuple with the Derived field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDerived

`func (o *Contextattributedto) SetDerived(v bool)`

SetDerived sets Derived field to given value.

### HasDerived

`func (o *Contextattributedto) HasDerived() bool`

HasDerived returns a boolean if a field has been set.


