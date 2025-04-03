---
id: filter-aggregation
title: FilterAggregation
pagination_label: FilterAggregation
sidebar_label: FilterAggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'FilterAggregation', 'FilterAggregation'] 
slug: /tools/sdk/go/v3/models/filter-aggregation
tags: ['SDK', 'Software Development Kit', 'FilterAggregation', 'FilterAggregation']
---

# FilterAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The name of the filter aggregate to be included in the result. | 
**Type** | Pointer to [**SearchFilterType**](search-filter-type) |  | [optional] [default to SEARCHFILTERTYPE_TERM]
**Field** | **string** | The search field to apply the filter to.  Prefix the field name with '@' to reference a nested object.  | 
**Value** | **string** | The value to filter on. | 

## Methods

### NewFilterAggregation

`func NewFilterAggregation(name string, field string, value string, ) *FilterAggregation`

NewFilterAggregation instantiates a new FilterAggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFilterAggregationWithDefaults

`func NewFilterAggregationWithDefaults() *FilterAggregation`

NewFilterAggregationWithDefaults instantiates a new FilterAggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *FilterAggregation) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *FilterAggregation) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *FilterAggregation) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *FilterAggregation) GetType() SearchFilterType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *FilterAggregation) GetTypeOk() (*SearchFilterType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *FilterAggregation) SetType(v SearchFilterType)`

SetType sets Type field to given value.

### HasType

`func (o *FilterAggregation) HasType() bool`

HasType returns a boolean if a field has been set.

### GetField

`func (o *FilterAggregation) GetField() string`

GetField returns the Field field if non-nil, zero value otherwise.

### GetFieldOk

`func (o *FilterAggregation) GetFieldOk() (*string, bool)`

GetFieldOk returns a tuple with the Field field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetField

`func (o *FilterAggregation) SetField(v string)`

SetField sets Field field to given value.


### GetValue

`func (o *FilterAggregation) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *FilterAggregation) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *FilterAggregation) SetValue(v string)`

SetValue sets Value field to given value.



