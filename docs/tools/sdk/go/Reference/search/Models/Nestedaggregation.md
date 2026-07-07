---
id: v1-nestedaggregation
title: Nestedaggregation
pagination_label: Nestedaggregation
sidebar_label: Nestedaggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nestedaggregation', 'V1Nestedaggregation'] 
slug: /tools/sdk/go/search/models/nestedaggregation
tags: ['SDK', 'Software Development Kit', 'Nestedaggregation', 'V1Nestedaggregation']
---

# Nestedaggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the nested aggregate to be included in the result. | 
**Type** | **string** | The type of the nested object. | 

## Methods

### NewNestedaggregation

`func NewNestedaggregation(name string, type_ string, ) *Nestedaggregation`

NewNestedaggregation instantiates a new Nestedaggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNestedaggregationWithDefaults

`func NewNestedaggregationWithDefaults() *Nestedaggregation`

NewNestedaggregationWithDefaults instantiates a new Nestedaggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Nestedaggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Nestedaggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Nestedaggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Nestedaggregation) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Nestedaggregation) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Nestedaggregation) SetType(v string)`

SetType sets Type field to given value.



