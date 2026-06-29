---
id: v1-validatefilterinputdto
title: Validatefilterinputdto
pagination_label: Validatefilterinputdto
sidebar_label: Validatefilterinputdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Validatefilterinputdto', 'V1Validatefilterinputdto'] 
slug: /tools/sdk/go/triggers/models/validatefilterinputdto
tags: ['SDK', 'Software Development Kit', 'Validatefilterinputdto', 'V1Validatefilterinputdto']
---

# Validatefilterinputdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Input** | **map[string]interface{}** | Mock input to evaluate filter expression against. | 
**Filter** | **string** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | 

## Methods

### NewValidatefilterinputdto

`func NewValidatefilterinputdto(input map[string]interface{}, filter string, ) *Validatefilterinputdto`

NewValidatefilterinputdto instantiates a new Validatefilterinputdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewValidatefilterinputdtoWithDefaults

`func NewValidatefilterinputdtoWithDefaults() *Validatefilterinputdto`

NewValidatefilterinputdtoWithDefaults instantiates a new Validatefilterinputdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInput

`func (o *Validatefilterinputdto) GetInput() map[string]interface{}`

GetInput returns the Input field if non-nil, zero value otherwise.

### GetInputOk

`func (o *Validatefilterinputdto) GetInputOk() (*map[string]interface{}, bool)`

GetInputOk returns a tuple with the Input field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInput

`func (o *Validatefilterinputdto) SetInput(v map[string]interface{})`

SetInput sets Input field to given value.


### GetFilter

`func (o *Validatefilterinputdto) GetFilter() string`

GetFilter returns the Filter field if non-nil, zero value otherwise.

### GetFilterOk

`func (o *Validatefilterinputdto) GetFilterOk() (*string, bool)`

GetFilterOk returns a tuple with the Filter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFilter

`func (o *Validatefilterinputdto) SetFilter(v string)`

SetFilter sets Filter field to given value.



