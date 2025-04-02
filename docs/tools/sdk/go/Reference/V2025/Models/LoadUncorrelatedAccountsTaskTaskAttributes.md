---
id: load-uncorrelated-accounts-task-task-attributes
title: LoadUncorrelatedAccountsTaskTaskAttributes
pagination_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_label: LoadUncorrelatedAccountsTaskTaskAttributes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LoadUncorrelatedAccountsTaskTaskAttributes', 'LoadUncorrelatedAccountsTaskTaskAttributes'] 
slug: /tools/sdk/go//models/load-uncorrelated-accounts-task-task-attributes
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTaskAttributes', 'LoadUncorrelatedAccountsTaskTaskAttributes']
---

# LoadUncorrelatedAccountsTaskTaskAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**QpocJobId** | Pointer to **string** | The id of qpoc job | [optional] 
**TaskStartDelay** | Pointer to **map[string]interface{}** | the task start delay value | [optional] 

## Methods

### NewLoadUncorrelatedAccountsTaskTaskAttributes

`func NewLoadUncorrelatedAccountsTaskTaskAttributes() *LoadUncorrelatedAccountsTaskTaskAttributes`

NewLoadUncorrelatedAccountsTaskTaskAttributes instantiates a new LoadUncorrelatedAccountsTaskTaskAttributes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLoadUncorrelatedAccountsTaskTaskAttributesWithDefaults

`func NewLoadUncorrelatedAccountsTaskTaskAttributesWithDefaults() *LoadUncorrelatedAccountsTaskTaskAttributes`

NewLoadUncorrelatedAccountsTaskTaskAttributesWithDefaults instantiates a new LoadUncorrelatedAccountsTaskTaskAttributes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetQpocJobId

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) GetQpocJobId() string`

GetQpocJobId returns the QpocJobId field if non-nil, zero value otherwise.

### GetQpocJobIdOk

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) GetQpocJobIdOk() (*string, bool)`

GetQpocJobIdOk returns a tuple with the QpocJobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetQpocJobId

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) SetQpocJobId(v string)`

SetQpocJobId sets QpocJobId field to given value.

### HasQpocJobId

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) HasQpocJobId() bool`

HasQpocJobId returns a boolean if a field has been set.

### GetTaskStartDelay

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) GetTaskStartDelay() map[string]interface{}`

GetTaskStartDelay returns the TaskStartDelay field if non-nil, zero value otherwise.

### GetTaskStartDelayOk

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) GetTaskStartDelayOk() (*map[string]interface{}, bool)`

GetTaskStartDelayOk returns a tuple with the TaskStartDelay field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTaskStartDelay

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) SetTaskStartDelay(v map[string]interface{})`

SetTaskStartDelay sets TaskStartDelay field to given value.

### HasTaskStartDelay

`func (o *LoadUncorrelatedAccountsTaskTaskAttributes) HasTaskStartDelay() bool`

HasTaskStartDelay returns a boolean if a field has been set.


