---
id: v2025-approval-reassignment-history
title: ApprovalReassignmentHistory
pagination_label: ApprovalReassignmentHistory
sidebar_label: ApprovalReassignmentHistory
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalReassignmentHistory', 'V2025ApprovalReassignmentHistory'] 
slug: /tools/sdk/go/v2025/models/approval-reassignment-history
tags: ['SDK', 'Software Development Kit', 'ApprovalReassignmentHistory', 'V2025ApprovalReassignmentHistory']
---

# ApprovalReassignmentHistory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommentID** | Pointer to **string** | Unique identifier for the comment associated with the reassignment. | [optional] 
**ReassignedFrom** | Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**ReassignedTo** | Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Reassigner** | Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**ReassignmentDate** | Pointer to **SailPointTime** | Date and time when the reassignment occurred. | [optional] 
**ReassignmentType** | Pointer to **string** | Type of reassignment, such as escalation or manual reassignment. | [optional] 

## Methods

### NewApprovalReassignmentHistory

`func NewApprovalReassignmentHistory() *ApprovalReassignmentHistory`

NewApprovalReassignmentHistory instantiates a new ApprovalReassignmentHistory object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalReassignmentHistoryWithDefaults

`func NewApprovalReassignmentHistoryWithDefaults() *ApprovalReassignmentHistory`

NewApprovalReassignmentHistoryWithDefaults instantiates a new ApprovalReassignmentHistory object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommentID

`func (o *ApprovalReassignmentHistory) GetCommentID() string`

GetCommentID returns the CommentID field if non-nil, zero value otherwise.

### GetCommentIDOk

`func (o *ApprovalReassignmentHistory) GetCommentIDOk() (*string, bool)`

GetCommentIDOk returns a tuple with the CommentID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentID

`func (o *ApprovalReassignmentHistory) SetCommentID(v string)`

SetCommentID sets CommentID field to given value.

### HasCommentID

`func (o *ApprovalReassignmentHistory) HasCommentID() bool`

HasCommentID returns a boolean if a field has been set.

### GetReassignedFrom

`func (o *ApprovalReassignmentHistory) GetReassignedFrom() ApprovalIdentity`

GetReassignedFrom returns the ReassignedFrom field if non-nil, zero value otherwise.

### GetReassignedFromOk

`func (o *ApprovalReassignmentHistory) GetReassignedFromOk() (*ApprovalIdentity, bool)`

GetReassignedFromOk returns a tuple with the ReassignedFrom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedFrom

`func (o *ApprovalReassignmentHistory) SetReassignedFrom(v ApprovalIdentity)`

SetReassignedFrom sets ReassignedFrom field to given value.

### HasReassignedFrom

`func (o *ApprovalReassignmentHistory) HasReassignedFrom() bool`

HasReassignedFrom returns a boolean if a field has been set.

### GetReassignedTo

`func (o *ApprovalReassignmentHistory) GetReassignedTo() ApprovalIdentity`

GetReassignedTo returns the ReassignedTo field if non-nil, zero value otherwise.

### GetReassignedToOk

`func (o *ApprovalReassignmentHistory) GetReassignedToOk() (*ApprovalIdentity, bool)`

GetReassignedToOk returns a tuple with the ReassignedTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignedTo

`func (o *ApprovalReassignmentHistory) SetReassignedTo(v ApprovalIdentity)`

SetReassignedTo sets ReassignedTo field to given value.

### HasReassignedTo

`func (o *ApprovalReassignmentHistory) HasReassignedTo() bool`

HasReassignedTo returns a boolean if a field has been set.

### GetReassigner

`func (o *ApprovalReassignmentHistory) GetReassigner() ApprovalIdentity`

GetReassigner returns the Reassigner field if non-nil, zero value otherwise.

### GetReassignerOk

`func (o *ApprovalReassignmentHistory) GetReassignerOk() (*ApprovalIdentity, bool)`

GetReassignerOk returns a tuple with the Reassigner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassigner

`func (o *ApprovalReassignmentHistory) SetReassigner(v ApprovalIdentity)`

SetReassigner sets Reassigner field to given value.

### HasReassigner

`func (o *ApprovalReassignmentHistory) HasReassigner() bool`

HasReassigner returns a boolean if a field has been set.

### GetReassignmentDate

`func (o *ApprovalReassignmentHistory) GetReassignmentDate() SailPointTime`

GetReassignmentDate returns the ReassignmentDate field if non-nil, zero value otherwise.

### GetReassignmentDateOk

`func (o *ApprovalReassignmentHistory) GetReassignmentDateOk() (*SailPointTime, bool)`

GetReassignmentDateOk returns a tuple with the ReassignmentDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentDate

`func (o *ApprovalReassignmentHistory) SetReassignmentDate(v SailPointTime)`

SetReassignmentDate sets ReassignmentDate field to given value.

### HasReassignmentDate

`func (o *ApprovalReassignmentHistory) HasReassignmentDate() bool`

HasReassignmentDate returns a boolean if a field has been set.

### GetReassignmentType

`func (o *ApprovalReassignmentHistory) GetReassignmentType() string`

GetReassignmentType returns the ReassignmentType field if non-nil, zero value otherwise.

### GetReassignmentTypeOk

`func (o *ApprovalReassignmentHistory) GetReassignmentTypeOk() (*string, bool)`

GetReassignmentTypeOk returns a tuple with the ReassignmentType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignmentType

`func (o *ApprovalReassignmentHistory) SetReassignmentType(v string)`

SetReassignmentType sets ReassignmentType field to given value.

### HasReassignmentType

`func (o *ApprovalReassignmentHistory) HasReassignmentType() bool`

HasReassignmentType returns a boolean if a field has been set.


