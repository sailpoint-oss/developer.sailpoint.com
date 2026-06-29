---
id: v1-searchcriteria-text-query
title: SearchcriteriaTextQuery
pagination_label: SearchcriteriaTextQuery
sidebar_label: SearchcriteriaTextQuery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchcriteriaTextQuery', 'V1SearchcriteriaTextQuery'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria-text-query
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaTextQuery', 'V1SearchcriteriaTextQuery']
---

# SearchcriteriaTextQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Terms** | Pointer to **[]string** | Terms to search for. | [optional] 
**Fields** | Pointer to **[]string** | Fields to search within. | [optional] 
**MatchAny** | Pointer to **bool** | Whether to match any of the terms. | [optional] [default to false]

## Methods

### NewSearchcriteriaTextQuery

`func NewSearchcriteriaTextQuery() *SearchcriteriaTextQuery`

NewSearchcriteriaTextQuery instantiates a new SearchcriteriaTextQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaTextQueryWithDefaults

`func NewSearchcriteriaTextQueryWithDefaults() *SearchcriteriaTextQuery`

NewSearchcriteriaTextQueryWithDefaults instantiates a new SearchcriteriaTextQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTerms

`func (o *SearchcriteriaTextQuery) GetTerms() []string`

GetTerms returns the Terms field if non-nil, zero value otherwise.

### GetTermsOk

`func (o *SearchcriteriaTextQuery) GetTermsOk() (*[]string, bool)`

GetTermsOk returns a tuple with the Terms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTerms

`func (o *SearchcriteriaTextQuery) SetTerms(v []string)`

SetTerms sets Terms field to given value.

### HasTerms

`func (o *SearchcriteriaTextQuery) HasTerms() bool`

HasTerms returns a boolean if a field has been set.

### GetFields

`func (o *SearchcriteriaTextQuery) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *SearchcriteriaTextQuery) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *SearchcriteriaTextQuery) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *SearchcriteriaTextQuery) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetMatchAny

`func (o *SearchcriteriaTextQuery) GetMatchAny() bool`

GetMatchAny returns the MatchAny field if non-nil, zero value otherwise.

### GetMatchAnyOk

`func (o *SearchcriteriaTextQuery) GetMatchAnyOk() (*bool, bool)`

GetMatchAnyOk returns a tuple with the MatchAny field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchAny

`func (o *SearchcriteriaTextQuery) SetMatchAny(v bool)`

SetMatchAny sets MatchAny field to given value.

### HasMatchAny

`func (o *SearchcriteriaTextQuery) HasMatchAny() bool`

HasMatchAny returns a boolean if a field has been set.


