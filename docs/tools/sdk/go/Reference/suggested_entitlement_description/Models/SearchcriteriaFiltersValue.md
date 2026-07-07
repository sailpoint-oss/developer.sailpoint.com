---
id: v1-searchcriteria-filters-value
title: SearchcriteriaFiltersValue
pagination_label: SearchcriteriaFiltersValue
sidebar_label: SearchcriteriaFiltersValue
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchcriteriaFiltersValue', 'V1SearchcriteriaFiltersValue'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria-filters-value
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaFiltersValue', 'V1SearchcriteriaFiltersValue']
---

# SearchcriteriaFiltersValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of filter, e.g., \"TERMS\" or \"RANGE\". | [optional] 
**Terms** | Pointer to **[]string** | Terms to filter by (for \"TERMS\" type). | [optional] 
**Range** | Pointer to [**SearchcriteriaFiltersValueRange**](searchcriteria-filters-value-range) |  | [optional] 

## Methods

### NewSearchcriteriaFiltersValue

`func NewSearchcriteriaFiltersValue() *SearchcriteriaFiltersValue`

NewSearchcriteriaFiltersValue instantiates a new SearchcriteriaFiltersValue object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaFiltersValueWithDefaults

`func NewSearchcriteriaFiltersValueWithDefaults() *SearchcriteriaFiltersValue`

NewSearchcriteriaFiltersValueWithDefaults instantiates a new SearchcriteriaFiltersValue object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SearchcriteriaFiltersValue) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SearchcriteriaFiltersValue) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SearchcriteriaFiltersValue) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SearchcriteriaFiltersValue) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTerms

`func (o *SearchcriteriaFiltersValue) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *SearchcriteriaFiltersValue) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *SearchcriteriaFiltersValue) SetTerms(v []string)`

SetTerms sets Terms field to given value.

### HasTerms

`func (o *SearchcriteriaFiltersValue) HasTerms() bool`

HasTerms returns a boolean if a field has been set.

### GetRange

`func (o *SearchcriteriaFiltersValue) GetRange() SearchcriteriaFiltersValueRange`

GetRange returns the Range field if non-nil, zero value otherwise.

### GetRangeOk

`func (o *SearchcriteriaFiltersValue) GetRangeOk() (*SearchcriteriaFiltersValueRange, bool)`

GetRangeOk returns a tuple with the Range field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRange

`func (o *SearchcriteriaFiltersValue) SetRange(v SearchcriteriaFiltersValueRange)`

SetRange sets Range field to given value.

### HasRange

`func (o *SearchcriteriaFiltersValue) HasRange() bool`

HasRange returns a boolean if a field has been set.


