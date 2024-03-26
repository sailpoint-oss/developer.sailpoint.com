---
id: cancel-access-request
title: CancelAccessRequest
pagination_label: CancelAccessRequest
sidebar_label: CancelAccessRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'CancelAccessRequest'] 
slug: /tools/sdk/go/v3/models/cancel-access-request
tags: ['SDK', 'Software Development Kit', 'CancelAccessRequest']
---

# CancelAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** |  **string** | This refers to the identityRequestId. To successfully cancel an access request, you must provide the identityRequestId. | 
**Comment** |  **string** | Reason for cancelling the pending access request. | 

## Methods

### NewCancelAccessRequest

`func NewCancelAccessRequest(accountActivityId string, comment string, ) *CancelAccessRequest`

NewCancelAccessRequest instantiates a new CancelAccessRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCancelAccessRequestWithDefaults

`func NewCancelAccessRequestWithDefaults() *CancelAccessRequest`

NewCancelAccessRequestWithDefaults instantiates a new CancelAccessRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountActivityId

`func (o *CancelAccessRequest) GetAccountActivityId() string`

GetAccountActivityId returns the AccountActivityId field if non-nil, zero value otherwise.

### GetAccountActivityIdOk

`func (o *CancelAccessRequest) GetAccountActivityIdOk() (*string, bool)`

GetAccountActivityIdOk returns a tuple with the AccountActivityId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActivityId

`func (o *CancelAccessRequest) SetAccountActivityId(v string)`

SetAccountActivityId sets AccountActivityId field to given value.


### GetComment

`func (o *CancelAccessRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CancelAccessRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CancelAccessRequest) SetComment(v string)`

SetComment sets Comment field to given value.



[[Back to top]](#) 


