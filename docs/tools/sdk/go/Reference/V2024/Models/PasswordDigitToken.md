---
id: v2024-password-digit-token
title: PasswordDigitToken
pagination_label: PasswordDigitToken
sidebar_label: PasswordDigitToken
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordDigitToken', 'V2024PasswordDigitToken'] 
slug: /tools/sdk/go/v2024/models/password-digit-token
tags: ['SDK', 'Software Development Kit', 'PasswordDigitToken', 'V2024PasswordDigitToken']
---

# PasswordDigitToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DigitToken** | Pointer to **string** | The digit token for password management | [optional] 
**RequestId** | Pointer to **string** | The reference ID of the digit token generation request | [optional] 

## Methods

### NewPasswordDigitToken

`func NewPasswordDigitToken() *PasswordDigitToken`

NewPasswordDigitToken instantiates a new PasswordDigitToken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordDigitTokenWithDefaults

`func NewPasswordDigitTokenWithDefaults() *PasswordDigitToken`

NewPasswordDigitTokenWithDefaults instantiates a new PasswordDigitToken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDigitToken

`func (o *PasswordDigitToken) GetDigitToken() string`

GetDigitToken returns the DigitToken field if non-nil, zero value otherwise.

### GetDigitTokenOk

`func (o *PasswordDigitToken) GetDigitTokenOk() (*string, bool)`

GetDigitTokenOk returns a tuple with the DigitToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitToken

`func (o *PasswordDigitToken) SetDigitToken(v string)`

SetDigitToken sets DigitToken field to given value.

### HasDigitToken

`func (o *PasswordDigitToken) HasDigitToken() bool`

HasDigitToken returns a boolean if a field has been set.

### GetRequestId

`func (o *PasswordDigitToken) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *PasswordDigitToken) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *PasswordDigitToken) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *PasswordDigitToken) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.


