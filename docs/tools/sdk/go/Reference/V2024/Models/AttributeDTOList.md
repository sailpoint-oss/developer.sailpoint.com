---
id: v2024-attribute-dto-list
title: AttributeDTOList
pagination_label: AttributeDTOList
sidebar_label: AttributeDTOList
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttributeDTOList', 'V2024AttributeDTOList'] 
slug: /tools/sdk/go/v2024/models/attribute-dto-list
tags: ['SDK', 'Software Development Kit', 'AttributeDTOList', 'V2024AttributeDTOList']
---

# AttributeDTOList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | Pointer to [**[]AttributeDTO**](attribute-dto) |  | [optional] 

## Methods

### NewAttributeDTOList

`func NewAttributeDTOList() *AttributeDTOList`

NewAttributeDTOList instantiates a new AttributeDTOList object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttributeDTOListWithDefaults

`func NewAttributeDTOListWithDefaults() *AttributeDTOList`

NewAttributeDTOListWithDefaults instantiates a new AttributeDTOList object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *AttributeDTOList) GetAttributes() []AttributeDTO`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AttributeDTOList) GetAttributesOk() (*[]AttributeDTO, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AttributeDTOList) SetAttributes(v []AttributeDTO)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *AttributeDTOList) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *AttributeDTOList) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *AttributeDTOList) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

