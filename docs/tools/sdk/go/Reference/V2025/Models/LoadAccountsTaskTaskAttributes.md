---
id: load-accounts-task-task-attributes
title: LoadAccountsTaskTaskAttributes
pagination_label: LoadAccountsTaskTaskAttributes
sidebar_label: LoadAccountsTaskTaskAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadAccountsTaskTaskAttributes', 'LoadAccountsTaskTaskAttributes'] 
slug: /tools/sdk/go//models/load-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTaskAttributes', 'LoadAccountsTaskTaskAttributes']
---

# LoadAccountsTaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | Pointer to **string** | The id of the source | [optional] 
**OptimizedAggregation** | Pointer to **string** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 

## Methods

### NewLoadAccountsTaskTaskAttributes

`func NewLoadAccountsTaskTaskAttributes() *LoadAccountsTaskTaskAttributes`

NewLoadAccountsTaskTaskAttributes instantiates a new LoadAccountsTaskTaskAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadAccountsTaskTaskAttributesWithDefaults

`func NewLoadAccountsTaskTaskAttributesWithDefaults() *LoadAccountsTaskTaskAttributes`

NewLoadAccountsTaskTaskAttributesWithDefaults instantiates a new LoadAccountsTaskTaskAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppId

`func (o *LoadAccountsTaskTaskAttributes) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *LoadAccountsTaskTaskAttributes) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *LoadAccountsTaskTaskAttributes) SetAppId(v string)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *LoadAccountsTaskTaskAttributes) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetOptimizedAggregation

`func (o *LoadAccountsTaskTaskAttributes) GetOptimizedAggregation() string`

GetOptimizedAggregation returns the OptimizedAggregation field if non-nil, zero value otherwise.

### GetOptimizedAggregationOk

`func (o *LoadAccountsTaskTaskAttributes) GetOptimizedAggregationOk() (*string, bool)`

GetOptimizedAggregationOk returns a tuple with the OptimizedAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptimizedAggregation

`func (o *LoadAccountsTaskTaskAttributes) SetOptimizedAggregation(v string)`

SetOptimizedAggregation sets OptimizedAggregation field to given value.

### HasOptimizedAggregation

`func (o *LoadAccountsTaskTaskAttributes) HasOptimizedAggregation() bool`

HasOptimizedAggregation returns a boolean if a field has been set.


