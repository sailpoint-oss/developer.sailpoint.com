---
id: beta-verification-response
title: VerificationResponse
pagination_label: VerificationResponse
sidebar_label: VerificationResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'VerificationResponse', 'BetaVerificationResponse'] 
slug: /tools/sdk/go/beta/models/verification-response
tags: ['SDK', 'Software Development Kit', 'VerificationResponse', 'BetaVerificationResponse']
---

# VerificationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **NullableString** | The verificationPollRequest request ID | [optional] 
**Status** | Pointer to **string** | MFA Authentication status | [optional] 
**Error** | Pointer to **NullableString** | Error messages from MFA verification request | [optional] 

## Methods

### NewVerificationResponse

`func NewVerificationResponse() *VerificationResponse`

NewVerificationResponse instantiates a new VerificationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewVerificationResponseWithDefaults

`func NewVerificationResponseWithDefaults() *VerificationResponse`

NewVerificationResponseWithDefaults instantiates a new VerificationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *VerificationResponse) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *VerificationResponse) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *VerificationResponse) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *VerificationResponse) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *VerificationResponse) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *VerificationResponse) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetStatus

`func (o *VerificationResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *VerificationResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *VerificationResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *VerificationResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetError

`func (o *VerificationResponse) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *VerificationResponse) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *VerificationResponse) SetError(v string)`

SetError sets Error field to given value.

### HasError

`func (o *VerificationResponse) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *VerificationResponse) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *VerificationResponse) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

