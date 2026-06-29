---
id: v1-attributedtolist
title: Attributedtolist
pagination_label: Attributedtolist
sidebar_label: Attributedtolist
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Attributedtolist', 'V1Attributedtolist'] 
slug: /tools/sdk/go/dimensions/models/attributedtolist
tags: ['SDK', 'Software Development Kit', 'Attributedtolist', 'V1Attributedtolist']
---

# Attributedtolist

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**[]Attributedto**](attributedto) |  | [optional] 

## Methods

### NewAttributedtolist

`func NewAttributedtolist() *Attributedtolist`

NewAttributedtolist instantiates a new Attributedtolist object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributedtolistWithDefaults

`func NewAttributedtolistWithDefaults() *Attributedtolist`

NewAttributedtolistWithDefaults instantiates a new Attributedtolist object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *Attributedtolist) GetAttributes() []Attributedto`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Attributedtolist) GetAttributesOk() (*[]Attributedto, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Attributedtolist) SetAttributes(v []Attributedto)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Attributedtolist) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *Attributedtolist) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Attributedtolist) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

