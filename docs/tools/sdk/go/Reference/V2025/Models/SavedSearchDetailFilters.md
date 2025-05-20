---
id: v2025-saved-search-detail-filters
title: SavedSearchDetailFilters
pagination_label: SavedSearchDetailFilters
sidebar_label: SavedSearchDetailFilters
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SavedSearchDetailFilters', 'V2025SavedSearchDetailFilters'] 
slug: /tools/sdk/go/v2025/models/saved-search-detail-filters
tags: ['SDK', 'Software Development Kit', 'SavedSearchDetailFilters', 'V2025SavedSearchDetailFilters']
---

# SavedSearchDetailFilters

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**FilterType**](filter-type) |  | [optional] 
**Range** | Pointer to [**Range**](range) |  | [optional] 
**Terms** | Pointer to **[]string** | The terms to be filtered. | [optional] 
**Exclude** | Pointer to **bool** | Indicates if the filter excludes results. | [optional] [default to false]

## Methods

### NewSavedSearchDetailFilters

`func NewSavedSearchDetailFilters() *SavedSearchDetailFilters`

NewSavedSearchDetailFilters instantiates a new SavedSearchDetailFilters object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSavedSearchDetailFiltersWithDefaults

`func NewSavedSearchDetailFiltersWithDefaults() *SavedSearchDetailFilters`

NewSavedSearchDetailFiltersWithDefaults instantiates a new SavedSearchDetailFilters object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SavedSearchDetailFilters) GetType() FilterType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SavedSearchDetailFilters) GetTypeOk() (*FilterType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SavedSearchDetailFilters) SetType(v FilterType)`

SetType sets Type field to given value.

### HasType

`func (o *SavedSearchDetailFilters) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRange

`func (o *SavedSearchDetailFilters) GetRange() Range`

GetRange returns the Range field if non-nil, zero value otherwise.

### GetRangeOk

`func (o *SavedSearchDetailFilters) GetRangeOk() (*Range, bool)`

GetRangeOk returns a tuple with the Range field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRange

`func (o *SavedSearchDetailFilters) SetRange(v Range)`

SetRange sets Range field to given value.

### HasRange

`func (o *SavedSearchDetailFilters) HasRange() bool`

HasRange returns a boolean if a field has been set.

### GetTerms

`func (o *SavedSearchDetailFilters) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *SavedSearchDetailFilters) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *SavedSearchDetailFilters) SetTerms(v []string)`

SetTerms sets Terms field to given value.

### HasTerms

`func (o *SavedSearchDetailFilters) HasTerms() bool`

HasTerms returns a boolean if a field has been set.

### GetExclude

`func (o *SavedSearchDetailFilters) GetExclude() bool`

GetExclude returns the Exclude field if non-nil, zero value otherwise.

### GetExcludeOk

`func (o *SavedSearchDetailFilters) GetExcludeOk() (*bool, bool)`

GetExcludeOk returns a tuple with the Exclude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExclude

`func (o *SavedSearchDetailFilters) SetExclude(v bool)`

SetExclude sets Exclude field to given value.

### HasExclude

`func (o *SavedSearchDetailFilters) HasExclude() bool`

HasExclude returns a boolean if a field has been set.


