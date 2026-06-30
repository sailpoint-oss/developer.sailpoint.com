---
id: v1-loadaccountstask-task-attributes
title: LoadaccountstaskTaskAttributes
pagination_label: LoadaccountstaskTaskAttributes
sidebar_label: LoadaccountstaskTaskAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadaccountstaskTaskAttributes', 'V1LoadaccountstaskTaskAttributes'] 
slug: /tools/sdk/go/sources/models/loadaccountstask-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadaccountstaskTaskAttributes', 'V1LoadaccountstaskTaskAttributes']
---

# LoadaccountstaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AppId** | Pointer to **string** | The id of the source | [optional] 
**OptimizedAggregation** | Pointer to **string** | The indicator if the aggregation process was enabled/disabled for the aggregation job | [optional] 

## Methods

### NewLoadaccountstaskTaskAttributes

`func NewLoadaccountstaskTaskAttributes() *LoadaccountstaskTaskAttributes`

NewLoadaccountstaskTaskAttributes instantiates a new LoadaccountstaskTaskAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadaccountstaskTaskAttributesWithDefaults

`func NewLoadaccountstaskTaskAttributesWithDefaults() *LoadaccountstaskTaskAttributes`

NewLoadaccountstaskTaskAttributesWithDefaults instantiates a new LoadaccountstaskTaskAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAppId

`func (o *LoadaccountstaskTaskAttributes) GetAppId() string`

GetAppId returns the AppId field if non-nil, zero value otherwise.

### GetAppIdOk

`func (o *LoadaccountstaskTaskAttributes) GetAppIdOk() (*string, bool)`

GetAppIdOk returns a tuple with the AppId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAppId

`func (o *LoadaccountstaskTaskAttributes) SetAppId(v string)`

SetAppId sets AppId field to given value.

### HasAppId

`func (o *LoadaccountstaskTaskAttributes) HasAppId() bool`

HasAppId returns a boolean if a field has been set.

### GetOptimizedAggregation

`func (o *LoadaccountstaskTaskAttributes) GetOptimizedAggregation() string`

GetOptimizedAggregation returns the OptimizedAggregation field if non-nil, zero value otherwise.

### GetOptimizedAggregationOk

`func (o *LoadaccountstaskTaskAttributes) GetOptimizedAggregationOk() (*string, bool)`

GetOptimizedAggregationOk returns a tuple with the OptimizedAggregation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOptimizedAggregation

`func (o *LoadaccountstaskTaskAttributes) SetOptimizedAggregation(v string)`

SetOptimizedAggregation sets OptimizedAggregation field to given value.

### HasOptimizedAggregation

`func (o *LoadaccountstaskTaskAttributes) HasOptimizedAggregation() bool`

HasOptimizedAggregation returns a boolean if a field has been set.


