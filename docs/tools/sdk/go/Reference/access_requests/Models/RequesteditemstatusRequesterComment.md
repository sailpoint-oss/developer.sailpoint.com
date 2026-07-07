---
id: v1-requesteditemstatus-requester-comment
title: RequesteditemstatusRequesterComment
pagination_label: RequesteditemstatusRequesterComment
sidebar_label: RequesteditemstatusRequesterComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequesteditemstatusRequesterComment', 'V1RequesteditemstatusRequesterComment'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemstatus-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusRequesterComment', 'V1RequesteditemstatusRequesterComment']
---

# RequesteditemstatusRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Methods

### NewRequesteditemstatusRequesterComment

`func NewRequesteditemstatusRequesterComment() *RequesteditemstatusRequesterComment`

NewRequesteditemstatusRequesterComment instantiates a new RequesteditemstatusRequesterComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemstatusRequesterCommentWithDefaults

`func NewRequesteditemstatusRequesterCommentWithDefaults() *RequesteditemstatusRequesterComment`

NewRequesteditemstatusRequesterCommentWithDefaults instantiates a new RequesteditemstatusRequesterComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *RequesteditemstatusRequesterComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequesteditemstatusRequesterComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequesteditemstatusRequesterComment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequesteditemstatusRequesterComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *RequesteditemstatusRequesterComment) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *RequesteditemstatusRequesterComment) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *RequesteditemstatusRequesterComment) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RequesteditemstatusRequesterComment) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RequesteditemstatusRequesterComment) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RequesteditemstatusRequesterComment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *RequesteditemstatusRequesterComment) GetAuthor() CommentdtoAuthor`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *RequesteditemstatusRequesterComment) GetAuthorOk() (*CommentdtoAuthor, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *RequesteditemstatusRequesterComment) SetAuthor(v CommentdtoAuthor)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *RequesteditemstatusRequesterComment) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


