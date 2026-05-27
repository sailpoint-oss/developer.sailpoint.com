---
id: v2026-intel-identity-not-found-body
title: IntelIdentityNotFoundBody
pagination_label: IntelIdentityNotFoundBody
sidebar_label: IntelIdentityNotFoundBody
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IntelIdentityNotFoundBody', 'V2026IntelIdentityNotFoundBody'] 
slug: /tools/sdk/go/v2026/models/intel-identity-not-found-body
tags: ['SDK', 'Software Development Kit', 'IntelIdentityNotFoundBody', 'V2026IntelIdentityNotFoundBody']
---

# IntelIdentityNotFoundBody

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailCode** | **string** | Constant detail code indicating that no identity matched the supplied filter. | 
**Message** | Pointer to **string** | Optional explanatory text describing why no identity was found. | [optional] 

## Methods

### NewIntelIdentityNotFoundBody

`func NewIntelIdentityNotFoundBody(detailCode string, ) *IntelIdentityNotFoundBody`

NewIntelIdentityNotFoundBody instantiates a new IntelIdentityNotFoundBody object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIntelIdentityNotFoundBodyWithDefaults

`func NewIntelIdentityNotFoundBodyWithDefaults() *IntelIdentityNotFoundBody`

NewIntelIdentityNotFoundBodyWithDefaults instantiates a new IntelIdentityNotFoundBody object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDetailCode

`func (o *IntelIdentityNotFoundBody) GetDetailCode() string`

GetDetailCode returns the DetailCode field if non-nil, zero value otherwise.

### GetDetailCodeOk

`func (o *IntelIdentityNotFoundBody) GetDetailCodeOk() (*string, bool)`

GetDetailCodeOk returns a tuple with the DetailCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDetailCode

`func (o *IntelIdentityNotFoundBody) SetDetailCode(v string)`

SetDetailCode sets DetailCode field to given value.


### GetMessage

`func (o *IntelIdentityNotFoundBody) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *IntelIdentityNotFoundBody) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *IntelIdentityNotFoundBody) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *IntelIdentityNotFoundBody) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


