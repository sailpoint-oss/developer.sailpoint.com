---
id: beta-form-element-validations-set
title: FormElementValidationsSet
pagination_label: FormElementValidationsSet
sidebar_label: FormElementValidationsSet
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FormElementValidationsSet', 'BetaFormElementValidationsSet'] 
slug: /tools/sdk/go/beta/models/form-element-validations-set
tags: ['SDK', 'Software Development Kit', 'FormElementValidationsSet', 'BetaFormElementValidationsSet']
---

# FormElementValidationsSet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ValidationType** | Pointer to **string** | The type of data validation that you wish to enforce, e.g., a required field, a minimum length, etc. | [optional] 

## Methods

### NewFormElementValidationsSet

`func NewFormElementValidationsSet() *FormElementValidationsSet`

NewFormElementValidationsSet instantiates a new FormElementValidationsSet object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFormElementValidationsSetWithDefaults

`func NewFormElementValidationsSetWithDefaults() *FormElementValidationsSet`

NewFormElementValidationsSetWithDefaults instantiates a new FormElementValidationsSet object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValidationType

`func (o *FormElementValidationsSet) GetValidationType() string`

GetValidationType returns the ValidationType field if non-nil, zero value otherwise.

### GetValidationTypeOk

`func (o *FormElementValidationsSet) GetValidationTypeOk() (*string, bool)`

GetValidationTypeOk returns a tuple with the ValidationType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValidationType

`func (o *FormElementValidationsSet) SetValidationType(v string)`

SetValidationType sets ValidationType field to given value.

### HasValidationType

`func (o *FormElementValidationsSet) HasValidationType() bool`

HasValidationType returns a boolean if a field has been set.


