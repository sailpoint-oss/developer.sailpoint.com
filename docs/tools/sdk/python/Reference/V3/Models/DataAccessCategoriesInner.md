---
id: data-access-categories-inner
title: DataAccessCategoriesInner
pagination_label: DataAccessCategoriesInner
sidebar_label: DataAccessCategoriesInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataAccessCategoriesInner', 'DataAccessCategoriesInner'] 
slug: /tools/sdk/go/v3/models/data-access-categories-inner
tags: ['SDK', 'Software Development Kit', 'DataAccessCategoriesInner', 'DataAccessCategoriesInner']
---

# DataAccessCategoriesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Value of the category | [optional] 
**MatchCount** | Pointer to **int32** | Number of matched for each category | [optional] 

## Methods

### NewDataAccessCategoriesInner

`func NewDataAccessCategoriesInner() *DataAccessCategoriesInner`

NewDataAccessCategoriesInner instantiates a new DataAccessCategoriesInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataAccessCategoriesInnerWithDefaults

`func NewDataAccessCategoriesInnerWithDefaults() *DataAccessCategoriesInner`

NewDataAccessCategoriesInnerWithDefaults instantiates a new DataAccessCategoriesInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *DataAccessCategoriesInner) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *DataAccessCategoriesInner) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *DataAccessCategoriesInner) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *DataAccessCategoriesInner) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetMatchCount

`func (o *DataAccessCategoriesInner) GetMatchCount() int32`

GetMatchCount returns the MatchCount field if non-nil, zero value otherwise.

### GetMatchCountOk

`func (o *DataAccessCategoriesInner) GetMatchCountOk() (*int32, bool)`

GetMatchCountOk returns a tuple with the MatchCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMatchCount

`func (o *DataAccessCategoriesInner) SetMatchCount(v int32)`

SetMatchCount sets MatchCount field to given value.

### HasMatchCount

`func (o *DataAccessCategoriesInner) HasMatchCount() bool`

HasMatchCount returns a boolean if a field has been set.


