---
id: v1-searchcriteria-query
title: SearchcriteriaQuery
pagination_label: SearchcriteriaQuery
sidebar_label: SearchcriteriaQuery
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SearchcriteriaQuery', 'V1SearchcriteriaQuery'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/searchcriteria-query
tags: ['SDK', 'Software Development Kit', 'SearchcriteriaQuery', 'V1SearchcriteriaQuery']
---

# SearchcriteriaQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | Pointer to **string** | A structured query for advanced search. | [optional] 

## Methods

### NewSearchcriteriaQuery

`func NewSearchcriteriaQuery() *SearchcriteriaQuery`

NewSearchcriteriaQuery instantiates a new SearchcriteriaQuery object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSearchcriteriaQueryWithDefaults

`func NewSearchcriteriaQueryWithDefaults() *SearchcriteriaQuery`

NewSearchcriteriaQueryWithDefaults instantiates a new SearchcriteriaQuery object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQuery

`func (o *SearchcriteriaQuery) GetQuery() string`

GetQuery returns the Query field if non-nil, zero value otherwise.

### GetQueryOk

`func (o *SearchcriteriaQuery) GetQueryOk() (*string, bool)`

GetQueryOk returns a tuple with the Query field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQuery

`func (o *SearchcriteriaQuery) SetQuery(v string)`

SetQuery sets Query field to given value.

### HasQuery

`func (o *SearchcriteriaQuery) HasQuery() bool`

HasQuery returns a boolean if a field has been set.


