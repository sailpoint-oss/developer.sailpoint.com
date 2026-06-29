---
id: v1-get-account-deletion-requests-v1429-response
title: GetAccountDeletionRequestsV1429Response
pagination_label: GetAccountDeletionRequestsV1429Response
sidebar_label: GetAccountDeletionRequestsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'GetAccountDeletionRequestsV1429Response', 'V1GetAccountDeletionRequestsV1429Response'] 
slug: /tools/sdk/go/accountdeletionrequests/models/get-account-deletion-requests-v1429-response
tags: ['SDK', 'Software Development Kit', 'GetAccountDeletionRequestsV1429Response', 'V1GetAccountDeletionRequestsV1429Response']
---

# GetAccountDeletionRequestsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewGetAccountDeletionRequestsV1429Response

`func NewGetAccountDeletionRequestsV1429Response() *GetAccountDeletionRequestsV1429Response`

NewGetAccountDeletionRequestsV1429Response instantiates a new GetAccountDeletionRequestsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGetAccountDeletionRequestsV1429ResponseWithDefaults

`func NewGetAccountDeletionRequestsV1429ResponseWithDefaults() *GetAccountDeletionRequestsV1429Response`

NewGetAccountDeletionRequestsV1429ResponseWithDefaults instantiates a new GetAccountDeletionRequestsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *GetAccountDeletionRequestsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *GetAccountDeletionRequestsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *GetAccountDeletionRequestsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *GetAccountDeletionRequestsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *GetAccountDeletionRequestsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *GetAccountDeletionRequestsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

