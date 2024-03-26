---
id: sod-violation-check
title: SodViolationCheck
pagination_label: SodViolationCheck
sidebar_label: SodViolationCheck
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'SodViolationCheck'] 
slug: /tools/sdk/go/v3/models/sod-violation-check
tags: ['SDK', 'Software Development Kit', 'SodViolationCheck']
---

# SodViolationCheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** |  **string** | The id of the original request | 
**Created** |  Pointer to **time.Time** | The date-time when this request was created. | [optional] [readonly] 

## Methods

### NewSodViolationCheck

`func NewSodViolationCheck(requestId string, ) *SodViolationCheck`

NewSodViolationCheck instantiates a new SodViolationCheck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodViolationCheckWithDefaults

`func NewSodViolationCheckWithDefaults() *SodViolationCheck`

NewSodViolationCheckWithDefaults instantiates a new SodViolationCheck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *SodViolationCheck) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *SodViolationCheck) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *SodViolationCheck) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetCreated

`func (o *SodViolationCheck) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SodViolationCheck) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SodViolationCheck) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SodViolationCheck) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


[[Back to top]](#) 


