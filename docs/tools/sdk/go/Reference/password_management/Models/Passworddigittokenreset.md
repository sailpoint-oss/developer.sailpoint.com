---
id: v1-passworddigittokenreset
title: Passworddigittokenreset
pagination_label: Passworddigittokenreset
sidebar_label: Passworddigittokenreset
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passworddigittokenreset', 'V1Passworddigittokenreset'] 
slug: /tools/sdk/go/passwordmanagement/models/passworddigittokenreset
tags: ['SDK', 'Software Development Kit', 'Passworddigittokenreset', 'V1Passworddigittokenreset']
---

# Passworddigittokenreset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | **string** | The uid of the user requested for digit token | 
**Length** | Pointer to **int32** | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [optional] 
**DurationMinutes** | Pointer to **int32** | The time to live for the digit token in minutes. The default value is 5 minutes. | [optional] 

## Methods

### NewPassworddigittokenreset

`func NewPassworddigittokenreset(userId string, ) *Passworddigittokenreset`

NewPassworddigittokenreset instantiates a new Passworddigittokenreset object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPassworddigittokenresetWithDefaults

`func NewPassworddigittokenresetWithDefaults() *Passworddigittokenreset`

NewPassworddigittokenresetWithDefaults instantiates a new Passworddigittokenreset object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetUserId

`func (o *Passworddigittokenreset) GetUserId() string`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *Passworddigittokenreset) GetUserIdOk() (*string, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *Passworddigittokenreset) SetUserId(v string)`

SetUserId sets UserId field to given value.


### GetLength

`func (o *Passworddigittokenreset) GetLength() int32`

GetLength returns the Length field if non-nil, zero value otherwise.

### GetLengthOk

`func (o *Passworddigittokenreset) GetLengthOk() (*int32, bool)`

GetLengthOk returns a tuple with the Length field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLength

`func (o *Passworddigittokenreset) SetLength(v int32)`

SetLength sets Length field to given value.

### HasLength

`func (o *Passworddigittokenreset) HasLength() bool`

HasLength returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *Passworddigittokenreset) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *Passworddigittokenreset) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *Passworddigittokenreset) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *Passworddigittokenreset) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.


