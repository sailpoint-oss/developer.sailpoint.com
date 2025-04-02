---
id: v2024-password-change-response
title: PasswordChangeResponse
pagination_label: PasswordChangeResponse
sidebar_label: PasswordChangeResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordChangeResponse', 'V2024PasswordChangeResponse'] 
slug: /tools/sdk/go/v2024/models/password-change-response
tags: ['SDK', 'Software Development Kit', 'PasswordChangeResponse', 'V2024PasswordChangeResponse']
---

# PasswordChangeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **NullableString** | The password change request ID | [optional] 
**State** | Pointer to **string** | Password change state | [optional] 

## Methods

### NewPasswordChangeResponse

`func NewPasswordChangeResponse() *PasswordChangeResponse`

NewPasswordChangeResponse instantiates a new PasswordChangeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordChangeResponseWithDefaults

`func NewPasswordChangeResponseWithDefaults() *PasswordChangeResponse`

NewPasswordChangeResponseWithDefaults instantiates a new PasswordChangeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *PasswordChangeResponse) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *PasswordChangeResponse) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *PasswordChangeResponse) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *PasswordChangeResponse) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *PasswordChangeResponse) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *PasswordChangeResponse) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetState

`func (o *PasswordChangeResponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *PasswordChangeResponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *PasswordChangeResponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *PasswordChangeResponse) HasState() bool`

HasState returns a boolean if a field has been set.


