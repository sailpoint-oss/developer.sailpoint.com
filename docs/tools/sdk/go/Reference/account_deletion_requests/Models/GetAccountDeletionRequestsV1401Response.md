---
id: v1-get-account-deletion-requests-v1401-response
title: GetAccountDeletionRequestsV1401Response
pagination_label: GetAccountDeletionRequestsV1401Response
sidebar_label: GetAccountDeletionRequestsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccountDeletionRequestsV1401Response', 'V1GetAccountDeletionRequestsV1401Response'] 
slug: /tools/sdk/go/accountdeletionrequests/models/get-account-deletion-requests-v1401-response
tags: ['SDK', 'Software Development Kit', 'GetAccountDeletionRequestsV1401Response', 'V1GetAccountDeletionRequestsV1401Response']
---

# GetAccountDeletionRequestsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccountDeletionRequestsV1401Response

`func NewGetAccountDeletionRequestsV1401Response() *GetAccountDeletionRequestsV1401Response`

NewGetAccountDeletionRequestsV1401Response instantiates a new GetAccountDeletionRequestsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountDeletionRequestsV1401ResponseWithDefaults

`func NewGetAccountDeletionRequestsV1401ResponseWithDefaults() *GetAccountDeletionRequestsV1401Response`

NewGetAccountDeletionRequestsV1401ResponseWithDefaults instantiates a new GetAccountDeletionRequestsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *GetAccountDeletionRequestsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *GetAccountDeletionRequestsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *GetAccountDeletionRequestsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *GetAccountDeletionRequestsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *GetAccountDeletionRequestsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *GetAccountDeletionRequestsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

