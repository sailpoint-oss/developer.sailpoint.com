---
id: v1-formelementvalidationsset
title: Formelementvalidationsset
pagination_label: Formelementvalidationsset
sidebar_label: Formelementvalidationsset
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Formelementvalidationsset', 'V1Formelementvalidationsset'] 
slug: /tools/sdk/go/customforms/models/formelementvalidationsset
tags: ['SDK', 'Software Development Kit', 'Formelementvalidationsset', 'V1Formelementvalidationsset']
---

# Formelementvalidationsset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidationType** | Pointer to **string** | The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc. | [optional] 

## Methods

### NewFormelementvalidationsset

`func NewFormelementvalidationsset() *Formelementvalidationsset`

NewFormelementvalidationsset instantiates a new Formelementvalidationsset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormelementvalidationssetWithDefaults

`func NewFormelementvalidationssetWithDefaults() *Formelementvalidationsset`

NewFormelementvalidationssetWithDefaults instantiates a new Formelementvalidationsset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValidationType

`func (o *Formelementvalidationsset) GetValidationType() string`

GetValidationType returns the ValidationType field if non-nil, zero value otherwise.

### GetValidationTypeOk

`func (o *Formelementvalidationsset) GetValidationTypeOk() (*string, bool)`

GetValidationTypeOk returns a tuple with the ValidationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationType

`func (o *Formelementvalidationsset) SetValidationType(v string)`

SetValidationType sets ValidationType field to given value.

### HasValidationType

`func (o *Formelementvalidationsset) HasValidationType() bool`

HasValidationType returns a boolean if a field has been set.


