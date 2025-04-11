---
id: send-token-response
title: SendTokenResponse
pagination_label: SendTokenResponse
sidebar_label: SendTokenResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SendTokenResponse', 'SendTokenResponse'] 
slug: /tools/sdk/go/v3/models/send-token-response
tags: ['SDK', 'Software Development Kit', 'SendTokenResponse', 'SendTokenResponse']
---

# SendTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **NullableString** | The token request ID | [optional] 
**Status** | Pointer to **string** | Status of sending token | [optional] 
**ErrorMessage** | Pointer to **NullableString** | Error messages from token send request | [optional] 

## Methods

### NewSendTokenResponse

`func NewSendTokenResponse() *SendTokenResponse`

NewSendTokenResponse instantiates a new SendTokenResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSendTokenResponseWithDefaults

`func NewSendTokenResponseWithDefaults() *SendTokenResponse`

NewSendTokenResponseWithDefaults instantiates a new SendTokenResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *SendTokenResponse) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *SendTokenResponse) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *SendTokenResponse) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *SendTokenResponse) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *SendTokenResponse) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *SendTokenResponse) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetStatus

`func (o *SendTokenResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SendTokenResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SendTokenResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *SendTokenResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetErrorMessage

`func (o *SendTokenResponse) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *SendTokenResponse) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *SendTokenResponse) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *SendTokenResponse) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *SendTokenResponse) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *SendTokenResponse) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil

