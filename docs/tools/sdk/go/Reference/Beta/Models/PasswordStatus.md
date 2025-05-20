---
id: beta-password-status
title: PasswordStatus
pagination_label: PasswordStatus
sidebar_label: PasswordStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PasswordStatus', 'BetaPasswordStatus'] 
slug: /tools/sdk/go/beta/models/password-status
tags: ['SDK', 'Software Development Kit', 'PasswordStatus', 'BetaPasswordStatus']
---

# PasswordStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **NullableString** | The password change request ID | [optional] 
**State** | Pointer to **string** | Password change state | [optional] 
**Errors** | Pointer to **[]string** | The errors during the password change request | [optional] 
**SourceIds** | Pointer to **[]string** | List of source IDs in the password change request | [optional] 

## Methods

### NewPasswordStatus

`func NewPasswordStatus() *PasswordStatus`

NewPasswordStatus instantiates a new PasswordStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordStatusWithDefaults

`func NewPasswordStatusWithDefaults() *PasswordStatus`

NewPasswordStatusWithDefaults instantiates a new PasswordStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *PasswordStatus) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *PasswordStatus) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *PasswordStatus) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *PasswordStatus) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *PasswordStatus) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *PasswordStatus) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetState

`func (o *PasswordStatus) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *PasswordStatus) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *PasswordStatus) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *PasswordStatus) HasState() bool`

HasState returns a boolean if a field has been set.

### GetErrors

`func (o *PasswordStatus) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *PasswordStatus) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *PasswordStatus) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *PasswordStatus) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetSourceIds

`func (o *PasswordStatus) GetSourceIds() []string`

GetSourceIds returns the SourceIds field if non-nil, zero value otherwise.

### GetSourceIdsOk

`func (o *PasswordStatus) GetSourceIdsOk() (*[]string, bool)`

GetSourceIdsOk returns a tuple with the SourceIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceIds

`func (o *PasswordStatus) SetSourceIds(v []string)`

SetSourceIds sets SourceIds field to given value.

### HasSourceIds

`func (o *PasswordStatus) HasSourceIds() bool`

HasSourceIds returns a boolean if a field has been set.


