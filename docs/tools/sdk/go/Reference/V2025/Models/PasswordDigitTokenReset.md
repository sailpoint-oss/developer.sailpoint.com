---
id: password-digit-token-reset
title: PasswordDigitTokenReset
pagination_label: PasswordDigitTokenReset
sidebar_label: PasswordDigitTokenReset
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordDigitTokenReset', 'PasswordDigitTokenReset'] 
slug: /tools/sdk/go//models/password-digit-token-reset
tags: ['SDK', 'Software Development Kit', 'PasswordDigitTokenReset', 'PasswordDigitTokenReset']
---

# PasswordDigitTokenReset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | **string** | The uid of the user requested for digit token | 
**Length** | Pointer to **int32** | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [optional] 
**DurationMinutes** | Pointer to **int32** | The time to live for the digit token in minutes. The default value is 5 minutes. | [optional] 

## Methods

### NewPasswordDigitTokenReset

`func NewPasswordDigitTokenReset(userId string, ) *PasswordDigitTokenReset`

NewPasswordDigitTokenReset instantiates a new PasswordDigitTokenReset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordDigitTokenResetWithDefaults

`func NewPasswordDigitTokenResetWithDefaults() *PasswordDigitTokenReset`

NewPasswordDigitTokenResetWithDefaults instantiates a new PasswordDigitTokenReset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *PasswordDigitTokenReset) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *PasswordDigitTokenReset) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *PasswordDigitTokenReset) SetUserId(v string)`

SetUserId sets UserId field to given value.


### GetLength

`func (o *PasswordDigitTokenReset) GetLength() int32`

GetLength returns the Length field if non-nil, zero value otherwise.

### GetLengthOk

`func (o *PasswordDigitTokenReset) GetLengthOk() (*int32, bool)`

GetLengthOk returns a tuple with the Length field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLength

`func (o *PasswordDigitTokenReset) SetLength(v int32)`

SetLength sets Length field to given value.

### HasLength

`func (o *PasswordDigitTokenReset) HasLength() bool`

HasLength returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *PasswordDigitTokenReset) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *PasswordDigitTokenReset) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *PasswordDigitTokenReset) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *PasswordDigitTokenReset) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.


