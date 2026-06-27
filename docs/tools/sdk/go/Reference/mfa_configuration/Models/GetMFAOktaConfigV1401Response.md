---
id: v1-get-mfa-okta-config-v1401-response
title: GetMFAOktaConfigV1401Response
pagination_label: GetMFAOktaConfigV1401Response
sidebar_label: GetMFAOktaConfigV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetMFAOktaConfigV1401Response', 'V1GetMFAOktaConfigV1401Response'] 
slug: /tools/sdk/go/mfaconfiguration/models/get-mfa-okta-config-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetMFAOktaConfigV1401Response', 'V1GetMFAOktaConfigV1401Response']
---

# GetMFAOktaConfigV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetMFAOktaConfigV1401Response

`func NewGetMFAOktaConfigV1401Response() *GetMFAOktaConfigV1401Response`

NewGetMFAOktaConfigV1401Response instantiates a new GetMFAOktaConfigV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetMFAOktaConfigV1401ResponseWithDefaults

`func NewGetMFAOktaConfigV1401ResponseWithDefaults() *GetMFAOktaConfigV1401Response`

NewGetMFAOktaConfigV1401ResponseWithDefaults instantiates a new GetMFAOktaConfigV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetMFAOktaConfigV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetMFAOktaConfigV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetMFAOktaConfigV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetMFAOktaConfigV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetMFAOktaConfigV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetMFAOktaConfigV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

