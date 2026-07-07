---
id: v1-completedapproval-reviewer-comment
title: CompletedapprovalReviewerComment
pagination_label: CompletedapprovalReviewerComment
sidebar_label: CompletedapprovalReviewerComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CompletedapprovalReviewerComment', 'V1CompletedapprovalReviewerComment'] 
slug: /tools/sdk/go/accessrequestapprovals/models/completedapproval-reviewer-comment
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalReviewerComment', 'V1CompletedapprovalReviewerComment']
---

# CompletedapprovalReviewerComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Methods

### NewCompletedapprovalReviewerComment

`func NewCompletedapprovalReviewerComment() *CompletedapprovalReviewerComment`

NewCompletedapprovalReviewerComment instantiates a new CompletedapprovalReviewerComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompletedapprovalReviewerCommentWithDefaults

`func NewCompletedapprovalReviewerCommentWithDefaults() *CompletedapprovalReviewerComment`

NewCompletedapprovalReviewerCommentWithDefaults instantiates a new CompletedapprovalReviewerComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CompletedapprovalReviewerComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CompletedapprovalReviewerComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CompletedapprovalReviewerComment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CompletedapprovalReviewerComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CompletedapprovalReviewerComment) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CompletedapprovalReviewerComment) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *CompletedapprovalReviewerComment) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CompletedapprovalReviewerComment) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CompletedapprovalReviewerComment) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CompletedapprovalReviewerComment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *CompletedapprovalReviewerComment) GetAuthor() CommentdtoAuthor`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *CompletedapprovalReviewerComment) GetAuthorOk() (*CommentdtoAuthor, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *CompletedapprovalReviewerComment) SetAuthor(v CommentdtoAuthor)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *CompletedapprovalReviewerComment) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


