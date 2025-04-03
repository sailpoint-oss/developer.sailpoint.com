---
id: v2025-transform
title: Transform
pagination_label: Transform
sidebar_label: Transform
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Transform', 'V2025Transform'] 
slug: /tools/sdk/go/v2025/models/transform
tags: ['SDK', 'Software Development Kit', 'Transform', 'V2025Transform']
---

# Transform

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Unique name of this transform | 
**Type** | **string** | The type of transform operation | 
**Attributes** | **map[string]interface{}** | Meta-data about the transform. Values in this list are specific to the type of transform to be executed. | 

## Methods

### NewTransform

`func NewTransform(name string, type_ string, attributes map[string]interface{}, ) *Transform`

NewTransform instantiates a new Transform object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformWithDefaults

`func NewTransformWithDefaults() *Transform`

NewTransformWithDefaults instantiates a new Transform object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Transform) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Transform) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Transform) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Transform) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Transform) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Transform) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *Transform) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Transform) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Transform) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### SetAttributesNil

`func (o *Transform) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *Transform) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil

