---
id: v1-get-password-policy-by-id-v1429-response
title: GetPasswordPolicyByIdV1429Response
pagination_label: GetPasswordPolicyByIdV1429Response
sidebar_label: GetPasswordPolicyByIdV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPasswordPolicyByIdV1429Response', 'V1GetPasswordPolicyByIdV1429Response'] 
slug: /tools/sdk/go/passwordpolicies/models/get-password-policy-by-id-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordPolicyByIdV1429Response', 'V1GetPasswordPolicyByIdV1429Response']
---

# GetPasswordPolicyByIdV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPasswordPolicyByIdV1429Response

`func NewGetPasswordPolicyByIdV1429Response() *GetPasswordPolicyByIdV1429Response`

NewGetPasswordPolicyByIdV1429Response instantiates a new GetPasswordPolicyByIdV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPasswordPolicyByIdV1429ResponseWithDefaults

`func NewGetPasswordPolicyByIdV1429ResponseWithDefaults() *GetPasswordPolicyByIdV1429Response`

NewGetPasswordPolicyByIdV1429ResponseWithDefaults instantiates a new GetPasswordPolicyByIdV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetPasswordPolicyByIdV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetPasswordPolicyByIdV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetPasswordPolicyByIdV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetPasswordPolicyByIdV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetPasswordPolicyByIdV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetPasswordPolicyByIdV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

