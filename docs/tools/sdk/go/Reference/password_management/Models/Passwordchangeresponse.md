---
id: v1-passwordchangeresponse
title: Passwordchangeresponse
pagination_label: Passwordchangeresponse
sidebar_label: Passwordchangeresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Passwordchangeresponse', 'V1Passwordchangeresponse'] 
slug: /tools/sdk/go/passwordmanagement/models/passwordchangeresponse
tags: ['SDK', 'Software Development Kit', 'Passwordchangeresponse', 'V1Passwordchangeresponse']
---

# Passwordchangeresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | Pointer to **NullableString** | The password change request ID | [optional] 
**State** | Pointer to **string** | Password change state | [optional] 

## Methods

### NewPasswordchangeresponse

`func NewPasswordchangeresponse() *Passwordchangeresponse`

NewPasswordchangeresponse instantiates a new Passwordchangeresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPasswordchangeresponseWithDefaults

`func NewPasswordchangeresponseWithDefaults() *Passwordchangeresponse`

NewPasswordchangeresponseWithDefaults instantiates a new Passwordchangeresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRequestId

`func (o *Passwordchangeresponse) GetRequestId() string`

GetRequestId returns the RequestId field if non-nil, zero value otherwise.

### GetRequestIdOk

`func (o *Passwordchangeresponse) GetRequestIdOk() (*string, bool)`

GetRequestIdOk returns a tuple with the RequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestId

`func (o *Passwordchangeresponse) SetRequestId(v string)`

SetRequestId sets RequestId field to given value.

### HasRequestId

`func (o *Passwordchangeresponse) HasRequestId() bool`

HasRequestId returns a boolean if a field has been set.

### SetRequestIdNil

`func (o *Passwordchangeresponse) SetRequestIdNil(b bool)`

 SetRequestIdNil sets the value for RequestId to be an explicit nil

### UnsetRequestId
`func (o *Passwordchangeresponse) UnsetRequestId()`

UnsetRequestId ensures that no value is present for RequestId, not even an explicit nil
### GetState

`func (o *Passwordchangeresponse) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Passwordchangeresponse) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Passwordchangeresponse) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Passwordchangeresponse) HasState() bool`

HasState returns a boolean if a field has been set.


