---
id: v1-list-pending-approvals-v1401-response
title: ListPendingApprovalsV1401Response
pagination_label: ListPendingApprovalsV1401Response
sidebar_label: ListPendingApprovalsV1401Response
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ListPendingApprovalsV1401Response', 'V1ListPendingApprovalsV1401Response'] 
slug: /tools/sdk/go/accessrequestapprovals/models/list-pending-approvals-v1401-response
tags: ['SDK', 'Software Development Kit', 'ListPendingApprovalsV1401Response', 'V1ListPendingApprovalsV1401Response']
---

# ListPendingApprovalsV1401Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | Pointer to **interface{}** | A message describing the error | [optional] 

## Methods

### NewListPendingApprovalsV1401Response

`func NewListPendingApprovalsV1401Response() *ListPendingApprovalsV1401Response`

NewListPendingApprovalsV1401Response instantiates a new ListPendingApprovalsV1401Response object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewListPendingApprovalsV1401ResponseWithDefaults

`func NewListPendingApprovalsV1401ResponseWithDefaults() *ListPendingApprovalsV1401Response`

NewListPendingApprovalsV1401ResponseWithDefaults instantiates a new ListPendingApprovalsV1401Response object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *ListPendingApprovalsV1401Response) GetError() interface{}`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *ListPendingApprovalsV1401Response) GetErrorOk() (*interface{}, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *ListPendingApprovalsV1401Response) SetError(v interface{})`

SetError sets Error field to given value.

### HasError

`func (o *ListPendingApprovalsV1401Response) HasError() bool`

HasError returns a boolean if a field has been set.

### SetErrorNil

`func (o *ListPendingApprovalsV1401Response) SetErrorNil(b bool)`

 SetErrorNil sets the value for Error to be an explicit nil

### UnsetError
`func (o *ListPendingApprovalsV1401Response) UnsetError()`

UnsetError ensures that no value is present for Error, not even an explicit nil

