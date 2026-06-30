---
id: v1-approvalcomment
title: Approvalcomment
pagination_label: Approvalcomment
sidebar_label: Approvalcomment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalcomment', 'V1Approvalcomment'] 
slug: /tools/sdk/go/configurationhub/models/approvalcomment
tags: ['SDK', 'Software Development Kit', 'Approvalcomment', 'V1Approvalcomment']
---

# Approvalcomment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | **string** | Comment provided either by the approval requester or the approver. | 
**Timestamp** | **SailPointTime** | The time when this comment was provided. | 
**User** | **string** | Name of the user that provided this comment. | 
**Id** | **string** | Id of the user that provided this comment. | 
**ChangedToStatus** | **string** | Status transition of the draft. | 

## Methods

### NewApprovalcomment

`func NewApprovalcomment(comment string, timestamp SailPointTime, user string, id string, changedToStatus string, ) *Approvalcomment`

NewApprovalcomment instantiates a new Approvalcomment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalcommentWithDefaults

`func NewApprovalcommentWithDefaults() *Approvalcomment`

NewApprovalcommentWithDefaults instantiates a new Approvalcomment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Approvalcomment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalcomment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalcomment) SetComment(v string)`

SetComment sets Comment field to given value.


### GetTimestamp

`func (o *Approvalcomment) GetTimestamp() SailPointTime`

GetTimestamp returns the Timestamp field if non-nil, zero value otherwise.

### GetTimestampOk

`func (o *Approvalcomment) GetTimestampOk() (*SailPointTime, bool)`

GetTimestampOk returns a tuple with the Timestamp field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimestamp

`func (o *Approvalcomment) SetTimestamp(v SailPointTime)`

SetTimestamp sets Timestamp field to given value.


### GetUser

`func (o *Approvalcomment) GetUser() string`

GetUser returns the User field if non-nil, zero value otherwise.

### GetUserOk

`func (o *Approvalcomment) GetUserOk() (*string, bool)`

GetUserOk returns a tuple with the User field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUser

`func (o *Approvalcomment) SetUser(v string)`

SetUser sets User field to given value.


### GetId

`func (o *Approvalcomment) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approvalcomment) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approvalcomment) SetId(v string)`

SetId sets Id field to given value.


### GetChangedToStatus

`func (o *Approvalcomment) GetChangedToStatus() string`

GetChangedToStatus returns the ChangedToStatus field if non-nil, zero value otherwise.

### GetChangedToStatusOk

`func (o *Approvalcomment) GetChangedToStatusOk() (*string, bool)`

GetChangedToStatusOk returns a tuple with the ChangedToStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChangedToStatus

`func (o *Approvalcomment) SetChangedToStatus(v string)`

SetChangedToStatus sets ChangedToStatus field to given value.



