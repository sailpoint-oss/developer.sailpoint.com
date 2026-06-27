---
id: v1-searchcriteria-filters-value-range
title: SearchcriteriaFiltersValueRange
pagination_label: SearchcriteriaFiltersValueRange
sidebar_label: SearchcriteriaFiltersValueRange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchcriteriaFiltersValueRange', 'V1SearchcriteriaFiltersValueRange'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria-filters-value-range
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRange', 'V1SearchcriteriaFiltersValueRange']
---

# SearchcriteriaFiltersValueRange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Lower** | Pointer to [**SearchcriteriaFiltersValueRangeLower**](searchcriteria-filters-value-range-lower) |  | [optional] 
**Upper** | Pointer to [**SearchcriteriaFiltersValueRangeUpper**](searchcriteria-filters-value-range-upper) |  | [optional] 

## Methods

### NewSearchcriteriaFiltersValueRange

`func NewSearchcriteriaFiltersValueRange() *SearchcriteriaFiltersValueRange`

NewSearchcriteriaFiltersValueRange instantiates a new SearchcriteriaFiltersValueRange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaFiltersValueRangeWithDefaults

`func NewSearchcriteriaFiltersValueRangeWithDefaults() *SearchcriteriaFiltersValueRange`

NewSearchcriteriaFiltersValueRangeWithDefaults instantiates a new SearchcriteriaFiltersValueRange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLower

`func (o *SearchcriteriaFiltersValueRange) GetLower() SearchcriteriaFiltersValueRangeLower`

GetLower returns the Lower field if non-nil, zero value otherwise.

### GetLowerOk

`func (o *SearchcriteriaFiltersValueRange) GetLowerOk() (*SearchcriteriaFiltersValueRangeLower, bool)`

GetLowerOk returns a tuple with the Lower field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLower

`func (o *SearchcriteriaFiltersValueRange) SetLower(v SearchcriteriaFiltersValueRangeLower)`

SetLower sets Lower field to given value.

### HasLower

`func (o *SearchcriteriaFiltersValueRange) HasLower() bool`

HasLower returns a boolean if a field has been set.

### GetUpper

`func (o *SearchcriteriaFiltersValueRange) GetUpper() SearchcriteriaFiltersValueRangeUpper`

GetUpper returns the Upper field if non-nil, zero value otherwise.

### GetUpperOk

`func (o *SearchcriteriaFiltersValueRange) GetUpperOk() (*SearchcriteriaFiltersValueRangeUpper, bool)`

GetUpperOk returns a tuple with the Upper field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpper

`func (o *SearchcriteriaFiltersValueRange) SetUpper(v SearchcriteriaFiltersValueRangeUpper)`

SetUpper sets Upper field to given value.

### HasUpper

`func (o *SearchcriteriaFiltersValueRange) HasUpper() bool`

HasUpper returns a boolean if a field has been set.


