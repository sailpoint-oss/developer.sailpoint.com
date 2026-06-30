---
id: v1-source2
title: Source2
pagination_label: Source2
sidebar_label: Source2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Source2', 'V1Source2'] 
slug: /tools/sdk/go/identityattributes/models/source2
tags: ['SDK', 'Software Development Kit', 'Source2', 'V1Source2']
---

# Source2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Attribute mapping type. | [optional] 
**Properties** | Pointer to **map[string]interface{}** | Attribute mapping properties. | [optional] 

## Methods

### NewSource2

`func NewSource2() *Source2`

NewSource2 instantiates a new Source2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSource2WithDefaults

`func NewSource2WithDefaults() *Source2`

NewSource2WithDefaults instantiates a new Source2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Source2) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Source2) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Source2) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Source2) HasType() bool`

HasType returns a boolean if a field has been set.

### GetProperties

`func (o *Source2) GetProperties() map[string]interface{}`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *Source2) GetPropertiesOk() (*map[string]interface{}, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *Source2) SetProperties(v map[string]interface{})`

SetProperties sets Properties field to given value.

### HasProperties

`func (o *Source2) HasProperties() bool`

HasProperties returns a boolean if a field has been set.


