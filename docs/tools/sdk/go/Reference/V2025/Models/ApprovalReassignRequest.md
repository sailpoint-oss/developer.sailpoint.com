---
id: v2025-approval-reassign-request
title: ApprovalReassignRequest
pagination_label: ApprovalReassignRequest
sidebar_label: ApprovalReassignRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalReassignRequest', 'V2025ApprovalReassignRequest'] 
slug: /tools/sdk/go/v2025/models/approval-reassign-request
tags: ['SDK', 'Software Development Kit', 'ApprovalReassignRequest', 'V2025ApprovalReassignRequest']
---

# ApprovalReassignRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment associated with the reassign request. | [optional] 
**ReassignFrom** | Pointer to **string** | Identity from which the approval is being reassigned. If left blank, and the approval is currently assigned to the user calling this endpoint, it will use the calling user's identity. If left blank, and the approval is not currently assigned to the user calling this endpoint, you need to be an admin, which would add the reassignTo as a new approver. | [optional] 
**ReassignTo** | Pointer to **string** | Identity to which the approval is being reassigned. | [optional] 

## Methods

### NewApprovalReassignRequest

`func NewApprovalReassignRequest() *ApprovalReassignRequest`

NewApprovalReassignRequest instantiates a new ApprovalReassignRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalReassignRequestWithDefaults

`func NewApprovalReassignRequestWithDefaults() *ApprovalReassignRequest`

NewApprovalReassignRequestWithDefaults instantiates a new ApprovalReassignRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ApprovalReassignRequest) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalReassignRequest) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalReassignRequest) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalReassignRequest) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReassignFrom

`func (o *ApprovalReassignRequest) GetReassignFrom() string`

GetReassignFrom returns the ReassignFrom field if non-nil, zero value otherwise.

### GetReassignFromOk

`func (o *ApprovalReassignRequest) GetReassignFromOk() (*string, bool)`

GetReassignFromOk returns a tuple with the ReassignFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignFrom

`func (o *ApprovalReassignRequest) SetReassignFrom(v string)`

SetReassignFrom sets ReassignFrom field to given value.

### HasReassignFrom

`func (o *ApprovalReassignRequest) HasReassignFrom() bool`

HasReassignFrom returns a boolean if a field has been set.

### GetReassignTo

`func (o *ApprovalReassignRequest) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *ApprovalReassignRequest) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *ApprovalReassignRequest) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.

### HasReassignTo

`func (o *ApprovalReassignRequest) HasReassignTo() bool`

HasReassignTo returns a boolean if a field has been set.


