---
id: v2024-search-criteria-query
title: SearchCriteriaQuery
pagination_label: SearchCriteriaQuery
sidebar_label: SearchCriteriaQuery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchCriteriaQuery', 'V2024SearchCriteriaQuery'] 
slug: /tools/sdk/go/v2024/models/search-criteria-query
tags: ['SDK', 'Software Development Kit', 'SearchCriteriaQuery', 'V2024SearchCriteriaQuery']
---

# SearchCriteriaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** | A structured query for advanced search. | [optional] 

## Methods

### NewSearchCriteriaQuery

`func NewSearchCriteriaQuery() *SearchCriteriaQuery`

NewSearchCriteriaQuery instantiates a new SearchCriteriaQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchCriteriaQueryWithDefaults

`func NewSearchCriteriaQueryWithDefaults() *SearchCriteriaQuery`

NewSearchCriteriaQueryWithDefaults instantiates a new SearchCriteriaQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *SearchCriteriaQuery) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SearchCriteriaQuery) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SearchCriteriaQuery) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *SearchCriteriaQuery) HasQuery() bool`

HasQuery returns a boolean if a field has been set.


