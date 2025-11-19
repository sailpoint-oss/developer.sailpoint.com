---
id: v2024-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalComment', 'V2024ApprovalComment'] 
slug: /tools/sdk/go/v2024/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'V2024ApprovalComment']
---

# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **string** | Comment provided either by the approval requester or the approver. | 
**Timestamp** | **SailPointTime** | The time when this comment was provided. | 
**User** | **string** | Name of the user that provided this comment. | 
**Id** | **string** | Id of the user that provided this comment. | 
**ChangedToStatus** | **string** | Status transition of the draft. | 

## Methods

### NewApprovalComment

`func NewApprovalComment(comment string, timestamp SailPointTime, user string, id string, changedToStatus string, ) *ApprovalComment`

NewApprovalComment instantiates a new ApprovalComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalCommentWithDefaults

`func NewApprovalCommentWithDefaults() *ApprovalComment`

NewApprovalCommentWithDefaults instantiates a new ApprovalComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ApprovalComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalComment) SetComment(v string)`

SetComment sets Comment field to given value.


### GetTimestamp

`func (o *ApprovalComment) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *ApprovalComment) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *ApprovalComment) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.


### GetUser

`func (o *ApprovalComment) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *ApprovalComment) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *ApprovalComment) SetUser(v string)`

SetUser sets User field to given value.


### GetId

`func (o *ApprovalComment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalComment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalComment) SetId(v string)`

SetId sets Id field to given value.


### GetChangedToStatus

`func (o *ApprovalComment) GetChangedToStatus() string`

GetChangedToStatus returns the ChangedToStatus field if non-nil, zero value otherwise.

### GetChangedToStatusOk

`func (o *ApprovalComment) GetChangedToStatusOk() (*string, bool)`

GetChangedToStatusOk returns a tuple with the ChangedToStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangedToStatus

`func (o *ApprovalComment) SetChangedToStatus(v string)`

SetChangedToStatus sets ChangedToStatus field to given value.



