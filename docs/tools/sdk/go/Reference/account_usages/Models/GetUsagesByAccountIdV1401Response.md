---
id: v1-get-usages-by-account-id-v1401-response
title: GetUsagesByAccountIdV1401Response
pagination_label: GetUsagesByAccountIdV1401Response
sidebar_label: GetUsagesByAccountIdV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetUsagesByAccountIdV1401Response', 'V1GetUsagesByAccountIdV1401Response'] 
slug: /tools/sdk/go/accountusages/models/get-usages-by-account-id-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetUsagesByAccountIdV1401Response', 'V1GetUsagesByAccountIdV1401Response']
---

# GetUsagesByAccountIdV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetUsagesByAccountIdV1401Response

`func NewGetUsagesByAccountIdV1401Response() *GetUsagesByAccountIdV1401Response`

NewGetUsagesByAccountIdV1401Response instantiates a new GetUsagesByAccountIdV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetUsagesByAccountIdV1401ResponseWithDefaults

`func NewGetUsagesByAccountIdV1401ResponseWithDefaults() *GetUsagesByAccountIdV1401Response`

NewGetUsagesByAccountIdV1401ResponseWithDefaults instantiates a new GetUsagesByAccountIdV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetUsagesByAccountIdV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetUsagesByAccountIdV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetUsagesByAccountIdV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetUsagesByAccountIdV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetUsagesByAccountIdV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetUsagesByAccountIdV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

