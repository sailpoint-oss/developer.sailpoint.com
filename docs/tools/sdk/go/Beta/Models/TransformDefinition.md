---
id: transform-definition
title: TransformDefinition
pagination_label: TransformDefinition
sidebar_label: TransformDefinition
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'TransformDefinition'] 
slug: /tools/sdk/go/beta/models/transform-definition
tags: ['SDK', 'Software Development Kit', 'TransformDefinition']
---

# TransformDefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to **string** | The type of the transform definition. | [optional] 
**Attributes** |  Pointer to **map[string]interface{}** | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Methods

### NewTransformDefinition

`func NewTransformDefinition() *TransformDefinition`

NewTransformDefinition instantiates a new TransformDefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformDefinitionWithDefaults

`func NewTransformDefinitionWithDefaults() *TransformDefinition`

NewTransformDefinitionWithDefaults instantiates a new TransformDefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *TransformDefinition) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransformDefinition) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransformDefinition) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *TransformDefinition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *TransformDefinition) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TransformDefinition) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TransformDefinition) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *TransformDefinition) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.

### SetAttributesNil

`func (o *TransformDefinition) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *TransformDefinition) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

[[Back to top]](#) 


