---
id: query-result-filter
title: QueryResultFilter
pagination_label: QueryResultFilter
sidebar_label: QueryResultFilter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'QueryResultFilter', 'QueryResultFilter'] 
slug: /tools/sdk/go//models/query-result-filter
tags: ['SDK', 'Software Development Kit', 'QueryResultFilter', 'QueryResultFilter']
---

# QueryResultFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Includes** | Pointer to **[]string** | The list of field names to include in the result documents. | [optional] 
**Excludes** | Pointer to **[]string** | The list of field names to exclude from the result documents. | [optional] 

## Methods

### NewQueryResultFilter

`func NewQueryResultFilter() *QueryResultFilter`

NewQueryResultFilter instantiates a new QueryResultFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryResultFilterWithDefaults

`func NewQueryResultFilterWithDefaults() *QueryResultFilter`

NewQueryResultFilterWithDefaults instantiates a new QueryResultFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludes

`func (o *QueryResultFilter) GetIncludes() []string`

GetIncludes returns the Includes field if non-nil, zero value otherwise.

### GetIncludesOk

`func (o *QueryResultFilter) GetIncludesOk() (*[]string, bool)`

GetIncludesOk returns a tuple with the Includes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludes

`func (o *QueryResultFilter) SetIncludes(v []string)`

SetIncludes sets Includes field to given value.

### HasIncludes

`func (o *QueryResultFilter) HasIncludes() bool`

HasIncludes returns a boolean if a field has been set.

### GetExcludes

`func (o *QueryResultFilter) GetExcludes() []string`

GetExcludes returns the Excludes field if non-nil, zero value otherwise.

### GetExcludesOk

`func (o *QueryResultFilter) GetExcludesOk() (*[]string, bool)`

GetExcludesOk returns a tuple with the Excludes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludes

`func (o *QueryResultFilter) SetExcludes(v []string)`

SetExcludes sets Excludes field to given value.

### HasExcludes

`func (o *QueryResultFilter) HasExcludes() bool`

HasExcludes returns a boolean if a field has been set.


