---
id: v2024-search-criteria-text-query
title: SearchCriteriaTextQuery
pagination_label: SearchCriteriaTextQuery
sidebar_label: SearchCriteriaTextQuery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteriaTextQuery', 'V2024SearchCriteriaTextQuery'] 
slug: /tools/sdk/go/v2024/models/search-criteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaTextQuery', 'V2024SearchCriteriaTextQuery']
---

# SearchCriteriaTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | Pointer to **[]string** | Terms to search for. | [optional] 
**Fields** | Pointer to **[]string** | Fields to search within. | [optional] 
**MatchAny** | Pointer to **bool** | Whether to match any of the terms. | [optional] [default to false]

## Methods

### NewSearchCriteriaTextQuery

`func NewSearchCriteriaTextQuery() *SearchCriteriaTextQuery`

NewSearchCriteriaTextQuery instantiates a new SearchCriteriaTextQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaTextQueryWithDefaults

`func NewSearchCriteriaTextQueryWithDefaults() *SearchCriteriaTextQuery`

NewSearchCriteriaTextQueryWithDefaults instantiates a new SearchCriteriaTextQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerms

`func (o *SearchCriteriaTextQuery) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *SearchCriteriaTextQuery) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *SearchCriteriaTextQuery) SetTerms(v []string)`

SetTerms sets Terms field to given value.

### HasTerms

`func (o *SearchCriteriaTextQuery) HasTerms() bool`

HasTerms returns a boolean if a field has been set.

### GetFields

`func (o *SearchCriteriaTextQuery) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *SearchCriteriaTextQuery) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *SearchCriteriaTextQuery) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *SearchCriteriaTextQuery) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetMatchAny

`func (o *SearchCriteriaTextQuery) GetMatchAny() bool`

GetMatchAny returns the MatchAny field if non-nil, zero value otherwise.

### GetMatchAnyOk

`func (o *SearchCriteriaTextQuery) GetMatchAnyOk() (*bool, bool)`

GetMatchAnyOk returns a tuple with the MatchAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAny

`func (o *SearchCriteriaTextQuery) SetMatchAny(v bool)`

SetMatchAny sets MatchAny field to given value.

### HasMatchAny

`func (o *SearchCriteriaTextQuery) HasMatchAny() bool`

HasMatchAny returns a boolean if a field has been set.


