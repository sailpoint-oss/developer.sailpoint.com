---
id: approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalComment', 'ApprovalComment'] 
slug: /tools/sdk/go/v3/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'ApprovalComment']
---

# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | The comment text | [optional] 
**Commenter** | Pointer to **string** | The name of the commenter | [optional] 
**Date** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 

## Methods

### NewApprovalComment

`func NewApprovalComment() *ApprovalComment`

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

### HasComment

`func (o *ApprovalComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCommenter

`func (o *ApprovalComment) GetCommenter() string`

GetCommenter returns the Commenter field if non-nil, zero value otherwise.

### GetCommenterOk

`func (o *ApprovalComment) GetCommenterOk() (*string, bool)`

GetCommenterOk returns a tuple with the Commenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommenter

`func (o *ApprovalComment) SetCommenter(v string)`

SetCommenter sets Commenter field to given value.

### HasCommenter

`func (o *ApprovalComment) HasCommenter() bool`

HasCommenter returns a boolean if a field has been set.

### GetDate

`func (o *ApprovalComment) GetDate() SailPointTime`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ApprovalComment) GetDateOk() (*SailPointTime, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ApprovalComment) SetDate(v SailPointTime)`

SetDate sets Date field to given value.

### HasDate

`func (o *ApprovalComment) HasDate() bool`

HasDate returns a boolean if a field has been set.

### SetDateNil

`func (o *ApprovalComment) SetDateNil(b bool)`

 SetDateNil sets the value for Date to be an explicit nil

### UnsetDate
`func (o *ApprovalComment) UnsetDate()`

UnsetDate ensures that no value is present for Date, not even an explicit nil

