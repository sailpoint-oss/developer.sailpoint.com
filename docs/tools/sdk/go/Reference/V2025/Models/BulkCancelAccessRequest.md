---
id: bulk-cancel-access-request
title: BulkCancelAccessRequest
pagination_label: BulkCancelAccessRequest
sidebar_label: BulkCancelAccessRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BulkCancelAccessRequest', 'BulkCancelAccessRequest'] 
slug: /tools/sdk/go//models/bulk-cancel-access-request
tags: ['SDK', 'Software Development Kit', 'BulkCancelAccessRequest', 'BulkCancelAccessRequest']
---

# BulkCancelAccessRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestIds** | **[]string** | List of access requests ids to cancel the pending requests | 
**Comment** | **string** | Reason for cancelling the pending access request. | 

## Methods

### NewBulkCancelAccessRequest

`func NewBulkCancelAccessRequest(accessRequestIds []string, comment string, ) *BulkCancelAccessRequest`

NewBulkCancelAccessRequest instantiates a new BulkCancelAccessRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkCancelAccessRequestWithDefaults

`func NewBulkCancelAccessRequestWithDefaults() *BulkCancelAccessRequest`

NewBulkCancelAccessRequestWithDefaults instantiates a new BulkCancelAccessRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestIds

`func (o *BulkCancelAccessRequest) GetAccessRequestIds() []string`

GetAccessRequestIds returns the AccessRequestIds field if non-nil, zero value otherwise.

### GetAccessRequestIdsOk

`func (o *BulkCancelAccessRequest) GetAccessRequestIdsOk() (*[]string, bool)`

GetAccessRequestIdsOk returns a tuple with the AccessRequestIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestIds

`func (o *BulkCancelAccessRequest) SetAccessRequestIds(v []string)`

SetAccessRequestIds sets AccessRequestIds field to given value.


### GetComment

`func (o *BulkCancelAccessRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *BulkCancelAccessRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *BulkCancelAccessRequest) SetComment(v string)`

SetComment sets Comment field to given value.



