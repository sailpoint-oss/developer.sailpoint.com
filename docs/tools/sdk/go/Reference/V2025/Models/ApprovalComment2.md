---
id: approval-comment2
title: ApprovalComment2
pagination_label: ApprovalComment2
sidebar_label: ApprovalComment2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalComment2', 'ApprovalComment2'] 
slug: /tools/sdk/go//models/approval-comment2
tags: ['SDK', 'Software Development Kit', 'ApprovalComment2', 'ApprovalComment2']
---

# ApprovalComment2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | The comment text | [optional] 
**Commenter** | Pointer to **string** | The name of the commenter | [optional] 
**Date** | Pointer to **NullableTime** | A date-time in ISO-8601 format | [optional] 

## Methods

### NewApprovalComment2

`func NewApprovalComment2() *ApprovalComment2`

NewApprovalComment2 instantiates a new ApprovalComment2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalComment2WithDefaults

`func NewApprovalComment2WithDefaults() *ApprovalComment2`

NewApprovalComment2WithDefaults instantiates a new ApprovalComment2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *ApprovalComment2) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalComment2) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalComment2) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalComment2) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCommenter

`func (o *ApprovalComment2) GetCommenter() string`

GetCommenter returns the Commenter field if non-nil, zero value otherwise.

### GetCommenterOk

`func (o *ApprovalComment2) GetCommenterOk() (*string, bool)`

GetCommenterOk returns a tuple with the Commenter field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommenter

`func (o *ApprovalComment2) SetCommenter(v string)`

SetCommenter sets Commenter field to given value.

### HasCommenter

`func (o *ApprovalComment2) HasCommenter() bool`

HasCommenter returns a boolean if a field has been set.

### GetDate

`func (o *ApprovalComment2) GetDate() SailPointTime`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *ApprovalComment2) GetDateOk() (*SailPointTime, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *ApprovalComment2) SetDate(v SailPointTime)`

SetDate sets Date field to given value.

### HasDate

`func (o *ApprovalComment2) HasDate() bool`

HasDate returns a boolean if a field has been set.

### SetDateNil

`func (o *ApprovalComment2) SetDateNil(b bool)`

 SetDateNil sets the value for Date to be an explicit nil

### UnsetDate
`func (o *ApprovalComment2) UnsetDate()`

UnsetDate ensures that no value is present for Date, not even an explicit nil

