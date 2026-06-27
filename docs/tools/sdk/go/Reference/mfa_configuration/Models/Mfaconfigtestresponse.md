---
id: v1-mfaconfigtestresponse
title: Mfaconfigtestresponse
pagination_label: Mfaconfigtestresponse
sidebar_label: Mfaconfigtestresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Mfaconfigtestresponse', 'V1Mfaconfigtestresponse'] 
slug: /tools/sdk/go/mfaconfiguration/models/mfaconfigtestresponse
tags: ['SDK', 'Software Development Kit', 'Mfaconfigtestresponse', 'V1Mfaconfigtestresponse']
---

# Mfaconfigtestresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** | Pointer to **string** | The configuration test result. | [optional] [readonly] 
**Error** | Pointer to **string** | The error message to indicate the failure of configuration test. | [optional] [readonly] 

## Methods

### NewMfaconfigtestresponse

`func NewMfaconfigtestresponse() *Mfaconfigtestresponse`

NewMfaconfigtestresponse instantiates a new Mfaconfigtestresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMfaconfigtestresponseWithDefaults

`func NewMfaconfigtestresponseWithDefaults() *Mfaconfigtestresponse`

NewMfaconfigtestresponseWithDefaults instantiates a new Mfaconfigtestresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetState

`func (o *Mfaconfigtestresponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Mfaconfigtestresponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Mfaconfigtestresponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Mfaconfigtestresponse) HasState() bool`

HasState returns a boolean if a field has been set.

### GetError

`func (o *Mfaconfigtestresponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *Mfaconfigtestresponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *Mfaconfigtestresponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *Mfaconfigtestresponse) HasError() bool`

HasError returns a boolean if a field has been set.


