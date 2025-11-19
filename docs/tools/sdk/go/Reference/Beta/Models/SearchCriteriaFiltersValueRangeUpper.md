---
id: beta-search-criteria-filters-value-range-upper
title: SearchCriteriaFiltersValueRangeUpper
pagination_label: SearchCriteriaFiltersValueRangeUpper
sidebar_label: SearchCriteriaFiltersValueRangeUpper
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteriaFiltersValueRangeUpper', 'BetaSearchCriteriaFiltersValueRangeUpper'] 
slug: /tools/sdk/go/beta/models/search-criteria-filters-value-range-upper
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeUpper', 'BetaSearchCriteriaFiltersValueRangeUpper']
---

# SearchCriteriaFiltersValueRangeUpper

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The upper bound value. | [optional] 
**Inclusive** | Pointer to **bool** | Whether the upper bound is inclusive. | [optional] [default to false]

## Methods

### NewSearchCriteriaFiltersValueRangeUpper

`func NewSearchCriteriaFiltersValueRangeUpper() *SearchCriteriaFiltersValueRangeUpper`

NewSearchCriteriaFiltersValueRangeUpper instantiates a new SearchCriteriaFiltersValueRangeUpper object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaFiltersValueRangeUpperWithDefaults

`func NewSearchCriteriaFiltersValueRangeUpperWithDefaults() *SearchCriteriaFiltersValueRangeUpper`

NewSearchCriteriaFiltersValueRangeUpperWithDefaults instantiates a new SearchCriteriaFiltersValueRangeUpper object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *SearchCriteriaFiltersValueRangeUpper) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SearchCriteriaFiltersValueRangeUpper) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SearchCriteriaFiltersValueRangeUpper) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SearchCriteriaFiltersValueRangeUpper) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetInclusive

`func (o *SearchCriteriaFiltersValueRangeUpper) GetInclusive() bool`

GetInclusive returns the Inclusive field if non-nil, zero value otherwise.

### GetInclusiveOk

`func (o *SearchCriteriaFiltersValueRangeUpper) GetInclusiveOk() (*bool, bool)`

GetInclusiveOk returns a tuple with the Inclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclusive

`func (o *SearchCriteriaFiltersValueRangeUpper) SetInclusive(v bool)`

SetInclusive sets Inclusive field to given value.

### HasInclusive

`func (o *SearchCriteriaFiltersValueRangeUpper) HasInclusive() bool`

HasInclusive returns a boolean if a field has been set.


