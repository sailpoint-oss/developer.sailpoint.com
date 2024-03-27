---
id: transform-definition1
title: TransformDefinition1
pagination_label: TransformDefinition1
sidebar_label: TransformDefinition1
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TransformDefinition1'] 
slug: /tools/sdk/go/beta/models/transform-definition1
tags: ['SDK', 'Software Development Kit', 'TransformDefinition1']
---

# TransformDefinition1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | The type of the transform definition. | [optional] 
**Attributes** |  Pointer to [**map[string]TransformDefinition1AttributesValue**](transform-definition1-attributes-value) | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Methods

### NewTransformDefinition1

`func NewTransformDefinition1() *TransformDefinition1`

NewTransformDefinition1 instantiates a new TransformDefinition1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformDefinition1WithDefaults

`func NewTransformDefinition1WithDefaults() *TransformDefinition1`

NewTransformDefinition1WithDefaults instantiates a new TransformDefinition1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TransformDefinition1) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransformDefinition1) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransformDefinition1) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TransformDefinition1) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *TransformDefinition1) GetAttributes() map[string]TransformDefinition1AttributesValue`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TransformDefinition1) GetAttributesOk() (*map[string]TransformDefinition1AttributesValue, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TransformDefinition1) SetAttributes(v map[string]TransformDefinition1AttributesValue)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *TransformDefinition1) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


[[Back to top]](#) 


