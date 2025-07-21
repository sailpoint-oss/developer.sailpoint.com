---
id: v2024-search-criteria-filters-value-range
title: SearchCriteriaFiltersValueRange
pagination_label: SearchCriteriaFiltersValueRange
sidebar_label: SearchCriteriaFiltersValueRange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteriaFiltersValueRange', 'V2024SearchCriteriaFiltersValueRange'] 
slug: /tools/sdk/go/v2024/models/search-criteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValueRange', 'V2024SearchCriteriaFiltersValueRange']
---

# SearchCriteriaFiltersValueRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | Pointer to [**SearchCriteriaFiltersValueRangeLower**](search-criteria-filters-value-range-lower) |  | [optional] 
**Upper** | Pointer to [**SearchCriteriaFiltersValueRangeUpper**](search-criteria-filters-value-range-upper) |  | [optional] 

## Methods

### NewSearchCriteriaFiltersValueRange

`func NewSearchCriteriaFiltersValueRange() *SearchCriteriaFiltersValueRange`

NewSearchCriteriaFiltersValueRange instantiates a new SearchCriteriaFiltersValueRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaFiltersValueRangeWithDefaults

`func NewSearchCriteriaFiltersValueRangeWithDefaults() *SearchCriteriaFiltersValueRange`

NewSearchCriteriaFiltersValueRangeWithDefaults instantiates a new SearchCriteriaFiltersValueRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLower

`func (o *SearchCriteriaFiltersValueRange) GetLower() SearchCriteriaFiltersValueRangeLower`

GetLower returns the Lower field if non-nil, zero value otherwise.

### GetLowerOk

`func (o *SearchCriteriaFiltersValueRange) GetLowerOk() (*SearchCriteriaFiltersValueRangeLower, bool)`

GetLowerOk returns a tuple with the Lower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLower

`func (o *SearchCriteriaFiltersValueRange) SetLower(v SearchCriteriaFiltersValueRangeLower)`

SetLower sets Lower field to given value.

### HasLower

`func (o *SearchCriteriaFiltersValueRange) HasLower() bool`

HasLower returns a boolean if a field has been set.

### GetUpper

`func (o *SearchCriteriaFiltersValueRange) GetUpper() SearchCriteriaFiltersValueRangeUpper`

GetUpper returns the Upper field if non-nil, zero value otherwise.

### GetUpperOk

`func (o *SearchCriteriaFiltersValueRange) GetUpperOk() (*SearchCriteriaFiltersValueRangeUpper, bool)`

GetUpperOk returns a tuple with the Upper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpper

`func (o *SearchCriteriaFiltersValueRange) SetUpper(v SearchCriteriaFiltersValueRangeUpper)`

SetUpper sets Upper field to given value.

### HasUpper

`func (o *SearchCriteriaFiltersValueRange) HasUpper() bool`

HasUpper returns a boolean if a field has been set.


