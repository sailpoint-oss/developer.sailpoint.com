---
id: v2025-approval-comments-request
title: ApprovalCommentsRequest
pagination_label: ApprovalCommentsRequest
sidebar_label: ApprovalCommentsRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalCommentsRequest', 'V2025ApprovalCommentsRequest'] 
slug: /tools/sdk/go/v2025/models/approval-comments-request
tags: ['SDK', 'Software Development Kit', 'ApprovalCommentsRequest', 'V2025ApprovalCommentsRequest']
---

# ApprovalCommentsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated with the request. | [optional] 

## Methods

### NewApprovalCommentsRequest

`func NewApprovalCommentsRequest() *ApprovalCommentsRequest`

NewApprovalCommentsRequest instantiates a new ApprovalCommentsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalCommentsRequestWithDefaults

`func NewApprovalCommentsRequestWithDefaults() *ApprovalCommentsRequest`

NewApprovalCommentsRequestWithDefaults instantiates a new ApprovalCommentsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ApprovalCommentsRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalCommentsRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalCommentsRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalCommentsRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.


