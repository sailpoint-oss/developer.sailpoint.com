---
id: v2024-identity-attribute-transform
title: IdentityAttributeTransform
pagination_label: IdentityAttributeTransform
sidebar_label: IdentityAttributeTransform
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityAttributeTransform', 'V2024IdentityAttributeTransform'] 
slug: /tools/sdk/go/v2024/models/identity-attribute-transform
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeTransform', 'V2024IdentityAttributeTransform']
---

# IdentityAttributeTransform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** | Pointer to **string** | Identity attribute&#39;s name. | [optional] 
**TransformDefinition** | Pointer to [**TransformDefinition**](transform-definition) |  | [optional] 

## Methods

### NewIdentityAttributeTransform

`func NewIdentityAttributeTransform() *IdentityAttributeTransform`

NewIdentityAttributeTransform instantiates a new IdentityAttributeTransform object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityAttributeTransformWithDefaults

`func NewIdentityAttributeTransformWithDefaults() *IdentityAttributeTransform`

NewIdentityAttributeTransformWithDefaults instantiates a new IdentityAttributeTransform object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityAttributeName

`func (o *IdentityAttributeTransform) GetIdentityAttributeName() string`

GetIdentityAttributeName returns the IdentityAttributeName field if non-nil, zero value otherwise.

### GetIdentityAttributeNameOk

`func (o *IdentityAttributeTransform) GetIdentityAttributeNameOk() (*string, bool)`

GetIdentityAttributeNameOk returns a tuple with the IdentityAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeName

`func (o *IdentityAttributeTransform) SetIdentityAttributeName(v string)`

SetIdentityAttributeName sets IdentityAttributeName field to given value.

### HasIdentityAttributeName

`func (o *IdentityAttributeTransform) HasIdentityAttributeName() bool`

HasIdentityAttributeName returns a boolean if a field has been set.

### GetTransformDefinition

`func (o *IdentityAttributeTransform) GetTransformDefinition() TransformDefinition`

GetTransformDefinition returns the TransformDefinition field if non-nil, zero value otherwise.

### GetTransformDefinitionOk

`func (o *IdentityAttributeTransform) GetTransformDefinitionOk() (*TransformDefinition, bool)`

GetTransformDefinitionOk returns a tuple with the TransformDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformDefinition

`func (o *IdentityAttributeTransform) SetTransformDefinition(v TransformDefinition)`

SetTransformDefinition sets TransformDefinition field to given value.

### HasTransformDefinition

`func (o *IdentityAttributeTransform) HasTransformDefinition() bool`

HasTransformDefinition returns a boolean if a field has been set.


