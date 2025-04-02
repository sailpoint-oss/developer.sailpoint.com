---
id: completed-approval-requester-comment
title: CompletedApprovalRequesterComment
pagination_label: CompletedApprovalRequesterComment
sidebar_label: CompletedApprovalRequesterComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CompletedApprovalRequesterComment', 'CompletedApprovalRequesterComment'] 
slug: /tools/sdk/go//models/completed-approval-requester-comment
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalRequesterComment', 'CompletedApprovalRequesterComment']
---

# CompletedApprovalRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Methods

### NewCompletedApprovalRequesterComment

`func NewCompletedApprovalRequesterComment() *CompletedApprovalRequesterComment`

NewCompletedApprovalRequesterComment instantiates a new CompletedApprovalRequesterComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompletedApprovalRequesterCommentWithDefaults

`func NewCompletedApprovalRequesterCommentWithDefaults() *CompletedApprovalRequesterComment`

NewCompletedApprovalRequesterCommentWithDefaults instantiates a new CompletedApprovalRequesterComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CompletedApprovalRequesterComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CompletedApprovalRequesterComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CompletedApprovalRequesterComment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CompletedApprovalRequesterComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CompletedApprovalRequesterComment) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CompletedApprovalRequesterComment) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *CompletedApprovalRequesterComment) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CompletedApprovalRequesterComment) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CompletedApprovalRequesterComment) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CompletedApprovalRequesterComment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *CompletedApprovalRequesterComment) GetAuthor() CommentDtoAuthor`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *CompletedApprovalRequesterComment) GetAuthorOk() (*CommentDtoAuthor, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *CompletedApprovalRequesterComment) SetAuthor(v CommentDtoAuthor)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *CompletedApprovalRequesterComment) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


