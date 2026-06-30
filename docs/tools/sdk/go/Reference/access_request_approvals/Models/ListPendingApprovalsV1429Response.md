---
id: v1-list-pending-approvals-v1429-response
title: ListPendingApprovalsV1429Response
pagination_label: ListPendingApprovalsV1429Response
sidebar_label: ListPendingApprovalsV1429Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListPendingApprovalsV1429Response', 'V1ListPendingApprovalsV1429Response'] 
slug: /tools/sdk/go/accessrequestapprovals/models/list-pending-approvals-v1429-response
tags: ['SDK', 'Software Development Kit', 'ListPendingApprovalsV1429Response', 'V1ListPendingApprovalsV1429Response']
---

# ListPendingApprovalsV1429Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Message** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListPendingApprovalsV1429Response

`func NewListPendingApprovalsV1429Response() *ListPendingApprovalsV1429Response`

NewListPendingApprovalsV1429Response instantiates a new ListPendingApprovalsV1429Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPendingApprovalsV1429ResponseWithDefaults

`func NewListPendingApprovalsV1429ResponseWithDefaults() *ListPendingApprovalsV1429Response`

NewListPendingApprovalsV1429ResponseWithDefaults instantiates a new ListPendingApprovalsV1429Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMessage

`func (o *ListPendingApprovalsV1429Response) GetMessage() interface{}`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *ListPendingApprovalsV1429Response) GetMessageOk() (*interface{}, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *ListPendingApprovalsV1429Response) SetMessage(v interface{})`

SetMessage sets Message field to given value.

### HasMessage

`func (o *ListPendingApprovalsV1429Response) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### SetMessageNil

`func (o *ListPendingApprovalsV1429Response) SetMessageNil(b bool)`

 SetMessageNil sets the value for Message to be an explicit nil

### UnsetMessage
`func (o *ListPendingApprovalsV1429Response) UnsetMessage()`

UnsetMessage ensures that no value is present for Message, not even an explicit nil

