---
id: v1-passworddigittoken
title: Passworddigittoken
pagination_label: Passworddigittoken
sidebar_label: Passworddigittoken
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passworddigittoken', 'V1Passworddigittoken'] 
slug: /tools/sdk/go/passwordmanagement/models/passworddigittoken
tags: ['SDK', 'Software Development Kit', 'Passworddigittoken', 'V1Passworddigittoken']
---

# Passworddigittoken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DigitToken** | Pointer to **string** | The digit token for password management | [optional] 
**RequestId** | Pointer to **string** | The reference ID of the digit token generation request | [optional] 

## Methods

### NewPassworddigittoken

`func NewPassworddigittoken() *Passworddigittoken`

NewPassworddigittoken instantiates a new Passworddigittoken object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPassworddigittokenWithDefaults

`func NewPassworddigittokenWithDefaults() *Passworddigittoken`

NewPassworddigittokenWithDefaults instantiates a new Passworddigittoken object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDigitToken

`func (o *Passworddigittoken) GetDigitToken() string`

GetDigitToken returns the DigitToken field if non-nil, zero value otherwise.

### GetDigitTokenOk

`func (o *Passworddigittoken) GetDigitTokenOk() (*string, bool)`

GetDigitTokenOk returns a tuple with the DigitToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDigitToken

`func (o *Passworddigittoken) SetDigitToken(v string)`

SetDigitToken sets DigitToken field to given value.

### HasDigitToken

`func (o *Passworddigittoken) HasDigitToken() bool`

HasDigitToken returns a boolean if a field has been set.

### GetRequestId

`func (o *Passworddigittoken) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Passworddigittoken) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Passworddigittoken) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *Passworddigittoken) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.


