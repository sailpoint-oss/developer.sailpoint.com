---
id: v1-get-public-identities-v1401-response
title: GetPublicIdentitiesV1401Response
pagination_label: GetPublicIdentitiesV1401Response
sidebar_label: GetPublicIdentitiesV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetPublicIdentitiesV1401Response', 'V1GetPublicIdentitiesV1401Response'] 
slug: /tools/sdk/go/publicidentities/models/get-public-identities-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetPublicIdentitiesV1401Response', 'V1GetPublicIdentitiesV1401Response']
---

# GetPublicIdentitiesV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetPublicIdentitiesV1401Response

`func NewGetPublicIdentitiesV1401Response() *GetPublicIdentitiesV1401Response`

NewGetPublicIdentitiesV1401Response instantiates a new GetPublicIdentitiesV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetPublicIdentitiesV1401ResponseWithDefaults

`func NewGetPublicIdentitiesV1401ResponseWithDefaults() *GetPublicIdentitiesV1401Response`

NewGetPublicIdentitiesV1401ResponseWithDefaults instantiates a new GetPublicIdentitiesV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetPublicIdentitiesV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetPublicIdentitiesV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetPublicIdentitiesV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetPublicIdentitiesV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetPublicIdentitiesV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetPublicIdentitiesV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

