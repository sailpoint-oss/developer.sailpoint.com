---
id: v1-dataaccess-categories-inner
title: DataaccessCategoriesInner
pagination_label: DataaccessCategoriesInner
sidebar_label: DataaccessCategoriesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataaccessCategoriesInner', 'V1DataaccessCategoriesInner'] 
slug: /tools/sdk/go/certifications/models/dataaccess-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataaccessCategoriesInner', 'V1DataaccessCategoriesInner']
---

# DataaccessCategoriesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Value of the category | [optional] 
**MatchCount** | Pointer to **int32** | Number of matched for each category | [optional] 

## Methods

### NewDataaccessCategoriesInner

`func NewDataaccessCategoriesInner() *DataaccessCategoriesInner`

NewDataaccessCategoriesInner instantiates a new DataaccessCategoriesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataaccessCategoriesInnerWithDefaults

`func NewDataaccessCategoriesInnerWithDefaults() *DataaccessCategoriesInner`

NewDataaccessCategoriesInnerWithDefaults instantiates a new DataaccessCategoriesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *DataaccessCategoriesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DataaccessCategoriesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DataaccessCategoriesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *DataaccessCategoriesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetMatchCount

`func (o *DataaccessCategoriesInner) GetMatchCount() int32`

GetMatchCount returns the MatchCount field if non-nil, zero value otherwise.

### GetMatchCountOk

`func (o *DataaccessCategoriesInner) GetMatchCountOk() (*int32, bool)`

GetMatchCountOk returns a tuple with the MatchCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchCount

`func (o *DataaccessCategoriesInner) SetMatchCount(v int32)`

SetMatchCount sets MatchCount field to given value.

### HasMatchCount

`func (o *DataaccessCategoriesInner) HasMatchCount() bool`

HasMatchCount returns a boolean if a field has been set.


