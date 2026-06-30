---
id: v1-get-password-policy-by-id-v1401-response
title: GetPasswordPolicyByIdV1401Response
pagination_label: GetPasswordPolicyByIdV1401Response
sidebar_label: GetPasswordPolicyByIdV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPasswordPolicyByIdV1401Response', 'V1GetPasswordPolicyByIdV1401Response'] 
slug: /tools/sdk/go/passwordpolicies/models/get-password-policy-by-id-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPasswordPolicyByIdV1401Response', 'V1GetPasswordPolicyByIdV1401Response']
---

# GetPasswordPolicyByIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPasswordPolicyByIdV1401Response

`func NewGetPasswordPolicyByIdV1401Response() *GetPasswordPolicyByIdV1401Response`

NewGetPasswordPolicyByIdV1401Response instantiates a new GetPasswordPolicyByIdV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPasswordPolicyByIdV1401ResponseWithDefaults

`func NewGetPasswordPolicyByIdV1401ResponseWithDefaults() *GetPasswordPolicyByIdV1401Response`

NewGetPasswordPolicyByIdV1401ResponseWithDefaults instantiates a new GetPasswordPolicyByIdV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetPasswordPolicyByIdV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetPasswordPolicyByIdV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetPasswordPolicyByIdV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetPasswordPolicyByIdV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetPasswordPolicyByIdV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetPasswordPolicyByIdV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

