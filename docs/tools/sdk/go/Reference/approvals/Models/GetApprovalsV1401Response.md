---
id: v1-get-approvals-v1401-response
title: GetApprovalsV1401Response
pagination_label: GetApprovalsV1401Response
sidebar_label: GetApprovalsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetApprovalsV1401Response', 'V1GetApprovalsV1401Response'] 
slug: /tools/sdk/go/approvals/models/get-approvals-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetApprovalsV1401Response', 'V1GetApprovalsV1401Response']
---

# GetApprovalsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetApprovalsV1401Response

`func NewGetApprovalsV1401Response() *GetApprovalsV1401Response`

NewGetApprovalsV1401Response instantiates a new GetApprovalsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetApprovalsV1401ResponseWithDefaults

`func NewGetApprovalsV1401ResponseWithDefaults() *GetApprovalsV1401Response`

NewGetApprovalsV1401ResponseWithDefaults instantiates a new GetApprovalsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetApprovalsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetApprovalsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetApprovalsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetApprovalsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetApprovalsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetApprovalsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

