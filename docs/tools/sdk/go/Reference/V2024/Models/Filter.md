---
id: v2024-filter
title: Filter
pagination_label: Filter
sidebar_label: Filter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Filter', 'V2024Filter'] 
slug: /tools/sdk/go/v2024/models/filter
tags: ['SDK', 'Software Development Kit', 'Filter', 'V2024Filter']
---

# Filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to [**FilterType**](filter-type) |  | [optional] 
**Range** | Pointer to [**Range**](range) |  | [optional] 
**Terms** | Pointer to **[]string** | The terms to be filtered. | [optional] 
**Exclude** | Pointer to **bool** | Indicates if the filter excludes results. | [optional] [default to false]

## Methods

### NewFilter

`func NewFilter() *Filter`

NewFilter instantiates a new Filter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFilterWithDefaults

`func NewFilterWithDefaults() *Filter`

NewFilterWithDefaults instantiates a new Filter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Filter) GetType() FilterType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Filter) GetTypeOk() (*FilterType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Filter) SetType(v FilterType)`

SetType sets Type field to given value.

### HasType

`func (o *Filter) HasType() bool`

HasType returns a boolean if a field has been set.

### GetRange

`func (o *Filter) GetRange() Range`

GetRange returns the Range field if non-nil, zero value otherwise.

### GetRangeOk

`func (o *Filter) GetRangeOk() (*Range, bool)`

GetRangeOk returns a tuple with the Range field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRange

`func (o *Filter) SetRange(v Range)`

SetRange sets Range field to given value.

### HasRange

`func (o *Filter) HasRange() bool`

HasRange returns a boolean if a field has been set.

### GetTerms

`func (o *Filter) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *Filter) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *Filter) SetTerms(v []string)`

SetTerms sets Terms field to given value.

### HasTerms

`func (o *Filter) HasTerms() bool`

HasTerms returns a boolean if a field has been set.

### GetExclude

`func (o *Filter) GetExclude() bool`

GetExclude returns the Exclude field if non-nil, zero value otherwise.

### GetExcludeOk

`func (o *Filter) GetExcludeOk() (*bool, bool)`

GetExcludeOk returns a tuple with the Exclude field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExclude

`func (o *Filter) SetExclude(v bool)`

SetExclude sets Exclude field to given value.

### HasExclude

`func (o *Filter) HasExclude() bool`

HasExclude returns a boolean if a field has been set.


