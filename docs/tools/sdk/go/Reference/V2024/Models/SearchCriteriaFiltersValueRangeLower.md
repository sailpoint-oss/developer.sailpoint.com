---
id: v2024-search-criteria-filters-value-range-lower
title: SearchCriteriaFiltersValueRangeLower
pagination_label: SearchCriteriaFiltersValueRangeLower
sidebar_label: SearchCriteriaFiltersValueRangeLower
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteriaFiltersValueRangeLower', 'V2024SearchCriteriaFiltersValueRangeLower'] 
slug: /tools/sdk/go/v2024/models/search-criteria-filters-value-range-lower
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRangeLower', 'V2024SearchCriteriaFiltersValueRangeLower']
---

# SearchCriteriaFiltersValueRangeLower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The lower bound value. | [optional] 
**Inclusive** | Pointer to **bool** | Whether the lower bound is inclusive. | [optional] [default to false]

## Methods

### NewSearchCriteriaFiltersValueRangeLower

`func NewSearchCriteriaFiltersValueRangeLower() *SearchCriteriaFiltersValueRangeLower`

NewSearchCriteriaFiltersValueRangeLower instantiates a new SearchCriteriaFiltersValueRangeLower object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaFiltersValueRangeLowerWithDefaults

`func NewSearchCriteriaFiltersValueRangeLowerWithDefaults() *SearchCriteriaFiltersValueRangeLower`

NewSearchCriteriaFiltersValueRangeLowerWithDefaults instantiates a new SearchCriteriaFiltersValueRangeLower object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *SearchCriteriaFiltersValueRangeLower) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SearchCriteriaFiltersValueRangeLower) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SearchCriteriaFiltersValueRangeLower) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SearchCriteriaFiltersValueRangeLower) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetInclusive

`func (o *SearchCriteriaFiltersValueRangeLower) GetInclusive() bool`

GetInclusive returns the Inclusive field if non-nil, zero value otherwise.

### GetInclusiveOk

`func (o *SearchCriteriaFiltersValueRangeLower) GetInclusiveOk() (*bool, bool)`

GetInclusiveOk returns a tuple with the Inclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclusive

`func (o *SearchCriteriaFiltersValueRangeLower) SetInclusive(v bool)`

SetInclusive sets Inclusive field to given value.

### HasInclusive

`func (o *SearchCriteriaFiltersValueRangeLower) HasInclusive() bool`

HasInclusive returns a boolean if a field has been set.


