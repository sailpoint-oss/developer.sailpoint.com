---
id: v2024-transform-read
title: TransformRead
pagination_label: TransformRead
sidebar_label: TransformRead
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'TransformRead', 'V2024TransformRead'] 
slug: /tools/sdk/go/v2024/models/transform-read
tags: ['SDK', 'Software Development Kit', 'TransformRead', 'V2024TransformRead']
---

# TransformRead

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Unique name of this transform | 
**Type** | **string** | The type of transform operation | 
**Attributes** | **map[string]interface{}** | Meta-data about the transform. Values in this list are specific to the type of transform to be executed. | 
**Id** | **string** | Unique ID of this transform | 
**Internal** | **bool** | Indicates whether this is an internal SailPoint-created transform or a customer-created transform | [default to false]

## Methods

### NewTransformRead

`func NewTransformRead(name string, type_ string, attributes map[string]interface{}, id string, internal bool, ) *TransformRead`

NewTransformRead instantiates a new TransformRead object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformReadWithDefaults

`func NewTransformReadWithDefaults() *TransformRead`

NewTransformReadWithDefaults instantiates a new TransformRead object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *TransformRead) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *TransformRead) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *TransformRead) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *TransformRead) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *TransformRead) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *TransformRead) SetType(v string)`

SetType sets Type field to given value.


### GetAttributes

`func (o *TransformRead) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *TransformRead) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *TransformRead) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.


### SetAttributesNil

`func (o *TransformRead) SetAttributesNil(b bool)`

 SetAttributesNil sets the value for Attributes to be an explicit nil

### UnsetAttributes
`func (o *TransformRead) UnsetAttributes()`

UnsetAttributes ensures that no value is present for Attributes, not even an explicit nil
### GetId

`func (o *TransformRead) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *TransformRead) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *TransformRead) SetId(v string)`

SetId sets Id field to given value.


### GetInternal

`func (o *TransformRead) GetInternal() bool`

GetInternal returns the Internal field if non-nil, zero value otherwise.

### GetInternalOk

`func (o *TransformRead) GetInternalOk() (*bool, bool)`

GetInternalOk returns a tuple with the Internal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternal

`func (o *TransformRead) SetInternal(v bool)`

SetInternal sets Internal field to given value.



