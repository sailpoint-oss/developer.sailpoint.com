---
id: nested-aggregation
title: NestedAggregation
pagination_label: NestedAggregation
sidebar_label: NestedAggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NestedAggregation', 'NestedAggregation'] 
slug: /tools/sdk/go/v3/models/nested-aggregation
tags: ['SDK', 'Software Development Kit', 'NestedAggregation', 'NestedAggregation']
---

# NestedAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the nested aggregate to be included in the result. | 
**Type** | **string** | The type of the nested object. | 

## Methods

### NewNestedAggregation

`func NewNestedAggregation(name string, type_ string, ) *NestedAggregation`

NewNestedAggregation instantiates a new NestedAggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNestedAggregationWithDefaults

`func NewNestedAggregationWithDefaults() *NestedAggregation`

NewNestedAggregationWithDefaults instantiates a new NestedAggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *NestedAggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *NestedAggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *NestedAggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *NestedAggregation) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *NestedAggregation) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *NestedAggregation) SetType(v string)`

SetType sets Type field to given value.



