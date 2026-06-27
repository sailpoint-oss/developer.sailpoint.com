---
id: v1-searchcriteria-filters-value-range-lower
title: SearchcriteriaFiltersValueRangeLower
pagination_label: SearchcriteriaFiltersValueRangeLower
sidebar_label: SearchcriteriaFiltersValueRangeLower
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchcriteriaFiltersValueRangeLower', 'V1SearchcriteriaFiltersValueRangeLower'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria-filters-value-range-lower
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValueRangeLower', 'V1SearchcriteriaFiltersValueRangeLower']
---

# SearchcriteriaFiltersValueRangeLower

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | The lower bound value. | [optional] 
**Inclusive** | Pointer to **bool** | Whether the lower bound is inclusive. | [optional] [default to false]

## Methods

### NewSearchcriteriaFiltersValueRangeLower

`func NewSearchcriteriaFiltersValueRangeLower() *SearchcriteriaFiltersValueRangeLower`

NewSearchcriteriaFiltersValueRangeLower instantiates a new SearchcriteriaFiltersValueRangeLower object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaFiltersValueRangeLowerWithDefaults

`func NewSearchcriteriaFiltersValueRangeLowerWithDefaults() *SearchcriteriaFiltersValueRangeLower`

NewSearchcriteriaFiltersValueRangeLowerWithDefaults instantiates a new SearchcriteriaFiltersValueRangeLower object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *SearchcriteriaFiltersValueRangeLower) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SearchcriteriaFiltersValueRangeLower) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SearchcriteriaFiltersValueRangeLower) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *SearchcriteriaFiltersValueRangeLower) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetInclusive

`func (o *SearchcriteriaFiltersValueRangeLower) GetInclusive() bool`

GetInclusive returns the Inclusive field if non-nil, zero value otherwise.

### GetInclusiveOk

`func (o *SearchcriteriaFiltersValueRangeLower) GetInclusiveOk() (*bool, bool)`

GetInclusiveOk returns a tuple with the Inclusive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInclusive

`func (o *SearchcriteriaFiltersValueRangeLower) SetInclusive(v bool)`

SetInclusive sets Inclusive field to given value.

### HasInclusive

`func (o *SearchcriteriaFiltersValueRangeLower) HasInclusive() bool`

HasInclusive returns a boolean if a field has been set.


