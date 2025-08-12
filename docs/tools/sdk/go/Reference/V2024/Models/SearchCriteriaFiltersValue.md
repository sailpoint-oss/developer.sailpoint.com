---
id: v2024-search-criteria-filters-value
title: SearchCriteriaFiltersValue
pagination_label: SearchCriteriaFiltersValue
sidebar_label: SearchCriteriaFiltersValue
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteriaFiltersValue', 'V2024SearchCriteriaFiltersValue'] 
slug: /tools/sdk/go/v2024/models/search-criteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaFiltersValue', 'V2024SearchCriteriaFiltersValue']
---

# SearchCriteriaFiltersValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of filter, e.g., \"TERMS\" or \"RANGE\". | [optional] 
**Terms** | Pointer to **[]string** | Terms to filter by (for \"TERMS\" type). | [optional] 
**Range** | Pointer to [**SearchCriteriaFiltersValueRange**](search-criteria-filters-value-range) |  | [optional] 

## Methods

### NewSearchCriteriaFiltersValue

`func NewSearchCriteriaFiltersValue() *SearchCriteriaFiltersValue`

NewSearchCriteriaFiltersValue instantiates a new SearchCriteriaFiltersValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaFiltersValueWithDefaults

`func NewSearchCriteriaFiltersValueWithDefaults() *SearchCriteriaFiltersValue`

NewSearchCriteriaFiltersValueWithDefaults instantiates a new SearchCriteriaFiltersValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SearchCriteriaFiltersValue) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SearchCriteriaFiltersValue) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SearchCriteriaFiltersValue) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SearchCriteriaFiltersValue) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTerms

`func (o *SearchCriteriaFiltersValue) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *SearchCriteriaFiltersValue) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *SearchCriteriaFiltersValue) SetTerms(v []string)`

SetTerms sets Terms field to given value.

### HasTerms

`func (o *SearchCriteriaFiltersValue) HasTerms() bool`

HasTerms returns a boolean if a field has been set.

### GetRange

`func (o *SearchCriteriaFiltersValue) GetRange() SearchCriteriaFiltersValueRange`

GetRange returns the Range field if non-nil, zero value otherwise.

### GetRangeOk

`func (o *SearchCriteriaFiltersValue) GetRangeOk() (*SearchCriteriaFiltersValueRange, bool)`

GetRangeOk returns a tuple with the Range field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRange

`func (o *SearchCriteriaFiltersValue) SetRange(v SearchCriteriaFiltersValueRange)`

SetRange sets Range field to given value.

### HasRange

`func (o *SearchCriteriaFiltersValue) HasRange() bool`

HasRange returns a boolean if a field has been set.


