---
id: v1-searchcriteria-filters-value-range-upper
title: SearchcriteriaFiltersValueRangeUpper
pagination_label: SearchcriteriaFiltersValueRangeUpper
sidebar_label: SearchcriteriaFiltersValueRangeUpper
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchcriteriaFiltersValueRangeUpper', 'V1SearchcriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRangeUpper', 'V1SearchcriteriaFiltersValueRangeUpper']
---

# SearchcriteriaFiltersValueRangeUpper

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The upper bound value. | [optional] 
**Inclusive** | Pointer to **bool** | Whether the upper bound is inclusive. | [optional] [default to false]

## Methods

### NewSearchcriteriaFiltersValueRangeUpper

`func NewSearchcriteriaFiltersValueRangeUpper() *SearchcriteriaFiltersValueRangeUpper`

NewSearchcriteriaFiltersValueRangeUpper instantiates a new SearchcriteriaFiltersValueRangeUpper object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaFiltersValueRangeUpperWithDefaults

`func NewSearchcriteriaFiltersValueRangeUpperWithDefaults() *SearchcriteriaFiltersValueRangeUpper`

NewSearchcriteriaFiltersValueRangeUpperWithDefaults instantiates a new SearchcriteriaFiltersValueRangeUpper object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *SearchcriteriaFiltersValueRangeUpper) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SearchcriteriaFiltersValueRangeUpper) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SearchcriteriaFiltersValueRangeUpper) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SearchcriteriaFiltersValueRangeUpper) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetInclusive

`func (o *SearchcriteriaFiltersValueRangeUpper) GetInclusive() bool`

GetInclusive returns the Inclusive field if non-nil, zero value otherwise.

### GetInclusiveOk

`func (o *SearchcriteriaFiltersValueRangeUpper) GetInclusiveOk() (*bool, bool)`

GetInclusiveOk returns a tuple with the Inclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclusive

`func (o *SearchcriteriaFiltersValueRangeUpper) SetInclusive(v bool)`

SetInclusive sets Inclusive field to given value.

### HasInclusive

`func (o *SearchcriteriaFiltersValueRangeUpper) HasInclusive() bool`

HasInclusive returns a boolean if a field has been set.


