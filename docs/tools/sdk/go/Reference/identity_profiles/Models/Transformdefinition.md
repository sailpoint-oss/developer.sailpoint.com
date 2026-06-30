---
id: v1-transformdefinition
title: Transformdefinition
pagination_label: Transformdefinition
sidebar_label: Transformdefinition
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Transformdefinition', 'V1Transformdefinition'] 
slug: /tools/sdk/go/identityprofiles/models/transformdefinition
tags: ['SDK', 'Software Development Kit', 'Transformdefinition', 'V1Transformdefinition']
---

# Transformdefinition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Transform definition type. | [optional] 
**Attributes** | Pointer to **map[string]interface{}** | Arbitrary key-value pairs to store any metadata for the object | [optional] 

## Methods

### NewTransformdefinition

`func NewTransformdefinition() *Transformdefinition`

NewTransformdefinition instantiates a new Transformdefinition object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTransformdefinitionWithDefaults

`func NewTransformdefinitionWithDefaults() *Transformdefinition`

NewTransformdefinitionWithDefaults instantiates a new Transformdefinition object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Transformdefinition) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Transformdefinition) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Transformdefinition) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Transformdefinition) HasType() bool`

HasType returns a boolean if a field has been set.

### GetAttributes

`func (o *Transformdefinition) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Transformdefinition) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Transformdefinition) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *Transformdefinition) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


