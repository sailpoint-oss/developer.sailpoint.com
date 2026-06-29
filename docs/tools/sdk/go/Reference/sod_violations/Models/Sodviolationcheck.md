---
id: v1-sodviolationcheck
title: Sodviolationcheck
pagination_label: Sodviolationcheck
sidebar_label: Sodviolationcheck
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodviolationcheck', 'V1Sodviolationcheck'] 
slug: /tools/sdk/go/sodviolations/models/sodviolationcheck
tags: ['SDK', 'Software Development Kit', 'Sodviolationcheck', 'V1Sodviolationcheck']
---

# Sodviolationcheck

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **string** | The id of the original request | 
**Created** | Pointer to **SailPointTime** | The date-time when this request was created. | [optional] [readonly] 

## Methods

### NewSodviolationcheck

`func NewSodviolationcheck(requestId string, ) *Sodviolationcheck`

NewSodviolationcheck instantiates a new Sodviolationcheck object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodviolationcheckWithDefaults

`func NewSodviolationcheckWithDefaults() *Sodviolationcheck`

NewSodviolationcheckWithDefaults instantiates a new Sodviolationcheck object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *Sodviolationcheck) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Sodviolationcheck) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Sodviolationcheck) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.


### GetCreated

`func (o *Sodviolationcheck) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sodviolationcheck) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sodviolationcheck) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sodviolationcheck) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


