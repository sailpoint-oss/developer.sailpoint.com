---
id: v1-accountattributes
title: Accountattributes
pagination_label: Accountattributes
sidebar_label: Accountattributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountattributes', 'V1Accountattributes'] 
slug: /tools/sdk/go/accounts/models/accountattributes
tags: ['SDK', 'Software Development Kit', 'Accountattributes', 'V1Accountattributes']
---

# Accountattributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | **map[string]interface{}** | The schema attribute values for the account | 

## Methods

### NewAccountattributes

`func NewAccountattributes(attributes map[string]interface{}, ) *Accountattributes`

NewAccountattributes instantiates a new Accountattributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountattributesWithDefaults

`func NewAccountattributesWithDefaults() *Accountattributes`

NewAccountattributesWithDefaults instantiates a new Accountattributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributes

`func (o *Accountattributes) GetAttributes() map[string]interface{}`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *Accountattributes) GetAttributesOk() (*map[string]interface{}, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *Accountattributes) SetAttributes(v map[string]interface{})`

SetAttributes sets Attributes field to given value.



