---
id: v1-identityattributetransform
title: Identityattributetransform
pagination_label: Identityattributetransform
sidebar_label: Identityattributetransform
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identityattributetransform', 'V1Identityattributetransform'] 
slug: /tools/sdk/go/identityprofiles/models/identityattributetransform
tags: ['SDK', 'Software Development Kit', 'Identityattributetransform', 'V1Identityattributetransform']
---

# Identityattributetransform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityAttributeName** | Pointer to **string** | Identity attribute's name. | [optional] 
**TransformDefinition** | Pointer to [**Transformdefinition**](transformdefinition) |  | [optional] 

## Methods

### NewIdentityattributetransform

`func NewIdentityattributetransform() *Identityattributetransform`

NewIdentityattributetransform instantiates a new Identityattributetransform object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityattributetransformWithDefaults

`func NewIdentityattributetransformWithDefaults() *Identityattributetransform`

NewIdentityattributetransformWithDefaults instantiates a new Identityattributetransform object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIdentityAttributeName

`func (o *Identityattributetransform) GetIdentityAttributeName() string`

GetIdentityAttributeName returns the IdentityAttributeName field if non-nil, zero value otherwise.

### GetIdentityAttributeNameOk

`func (o *Identityattributetransform) GetIdentityAttributeNameOk() (*string, bool)`

GetIdentityAttributeNameOk returns a tuple with the IdentityAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityAttributeName

`func (o *Identityattributetransform) SetIdentityAttributeName(v string)`

SetIdentityAttributeName sets IdentityAttributeName field to given value.

### HasIdentityAttributeName

`func (o *Identityattributetransform) HasIdentityAttributeName() bool`

HasIdentityAttributeName returns a boolean if a field has been set.

### GetTransformDefinition

`func (o *Identityattributetransform) GetTransformDefinition() Transformdefinition`

GetTransformDefinition returns the TransformDefinition field if non-nil, zero value otherwise.

### GetTransformDefinitionOk

`func (o *Identityattributetransform) GetTransformDefinitionOk() (*Transformdefinition, bool)`

GetTransformDefinitionOk returns a tuple with the TransformDefinition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTransformDefinition

`func (o *Identityattributetransform) SetTransformDefinition(v Transformdefinition)`

SetTransformDefinition sets TransformDefinition field to given value.

### HasTransformDefinition

`func (o *Identityattributetransform) HasTransformDefinition() bool`

HasTransformDefinition returns a boolean if a field has been set.


