---
id: v2025-result
title: Result
pagination_label: Result
sidebar_label: Result
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Result', 'V2025Result'] 
slug: /tools/sdk/go/v2025/models/result
tags: ['SDK', 'Software Development Kit', 'Result', 'V2025Result']
---

# Result

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | Pointer to **string** | Request result status | [optional] 

## Methods

### NewResult

`func NewResult() *Result`

NewResult instantiates a new Result object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResultWithDefaults

`func NewResultWithDefaults() *Result`

NewResultWithDefaults instantiates a new Result object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatus

`func (o *Result) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Result) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Result) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Result) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


