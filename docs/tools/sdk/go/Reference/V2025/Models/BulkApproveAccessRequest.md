---
id: bulk-approve-access-request
title: BulkApproveAccessRequest
pagination_label: BulkApproveAccessRequest
sidebar_label: BulkApproveAccessRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkApproveAccessRequest', 'BulkApproveAccessRequest'] 
slug: /tools/sdk/go//models/bulk-approve-access-request
tags: ['SDK', 'Software Development Kit', 'BulkApproveAccessRequest', 'BulkApproveAccessRequest']
---

# BulkApproveAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalIds** | **[]string** | List of approval ids to approve the pending requests | 
**Comment** | **string** | Reason for approving the pending access request. | 

## Methods

### NewBulkApproveAccessRequest

`func NewBulkApproveAccessRequest(approvalIds []string, comment string, ) *BulkApproveAccessRequest`

NewBulkApproveAccessRequest instantiates a new BulkApproveAccessRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkApproveAccessRequestWithDefaults

`func NewBulkApproveAccessRequestWithDefaults() *BulkApproveAccessRequest`

NewBulkApproveAccessRequestWithDefaults instantiates a new BulkApproveAccessRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalIds

`func (o *BulkApproveAccessRequest) GetApprovalIds() []string`

GetApprovalIds returns the ApprovalIds field if non-nil, zero value otherwise.

### GetApprovalIdsOk

`func (o *BulkApproveAccessRequest) GetApprovalIdsOk() (*[]string, bool)`

GetApprovalIdsOk returns a tuple with the ApprovalIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalIds

`func (o *BulkApproveAccessRequest) SetApprovalIds(v []string)`

SetApprovalIds sets ApprovalIds field to given value.


### GetComment

`func (o *BulkApproveAccessRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *BulkApproveAccessRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *BulkApproveAccessRequest) SetComment(v string)`

SetComment sets Comment field to given value.



