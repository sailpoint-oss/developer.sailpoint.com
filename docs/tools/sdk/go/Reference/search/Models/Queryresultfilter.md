---
id: v1-queryresultfilter
title: Queryresultfilter
pagination_label: Queryresultfilter
sidebar_label: Queryresultfilter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Queryresultfilter', 'V1Queryresultfilter'] 
slug: /tools/sdk/go/search/models/queryresultfilter
tags: ['SDK', 'Software Development Kit', 'Queryresultfilter', 'V1Queryresultfilter']
---

# Queryresultfilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Includes** | Pointer to **[]string** | The list of field names to include in the result documents. | [optional] 
**Excludes** | Pointer to **[]string** | The list of field names to exclude from the result documents. | [optional] 

## Methods

### NewQueryresultfilter

`func NewQueryresultfilter() *Queryresultfilter`

NewQueryresultfilter instantiates a new Queryresultfilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQueryresultfilterWithDefaults

`func NewQueryresultfilterWithDefaults() *Queryresultfilter`

NewQueryresultfilterWithDefaults instantiates a new Queryresultfilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIncludes

`func (o *Queryresultfilter) GetIncludes() []string`

GetIncludes returns the Includes field if non-nil, zero value otherwise.

### GetIncludesOk

`func (o *Queryresultfilter) GetIncludesOk() (*[]string, bool)`

GetIncludesOk returns a tuple with the Includes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIncludes

`func (o *Queryresultfilter) SetIncludes(v []string)`

SetIncludes sets Includes field to given value.

### HasIncludes

`func (o *Queryresultfilter) HasIncludes() bool`

HasIncludes returns a boolean if a field has been set.

### GetExcludes

`func (o *Queryresultfilter) GetExcludes() []string`

GetExcludes returns the Excludes field if non-nil, zero value otherwise.

### GetExcludesOk

`func (o *Queryresultfilter) GetExcludesOk() (*[]string, bool)`

GetExcludesOk returns a tuple with the Excludes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludes

`func (o *Queryresultfilter) SetExcludes(v []string)`

SetExcludes sets Excludes field to given value.

### HasExcludes

`func (o *Queryresultfilter) HasExcludes() bool`

HasExcludes returns a boolean if a field has been set.


