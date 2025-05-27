---
id: beta-requested-item-status-requester-comment
title: RequestedItemStatusRequesterComment
pagination_label: RequestedItemStatusRequesterComment
sidebar_label: RequestedItemStatusRequesterComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedItemStatusRequesterComment', 'BetaRequestedItemStatusRequesterComment'] 
slug: /tools/sdk/go/beta/models/requested-item-status-requester-comment
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusRequesterComment', 'BetaRequestedItemStatusRequesterComment']
---

# RequestedItemStatusRequesterComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentDto1Author**](comment-dto1-author) |  | [optional] 

## Methods

### NewRequestedItemStatusRequesterComment

`func NewRequestedItemStatusRequesterComment() *RequestedItemStatusRequesterComment`

NewRequestedItemStatusRequesterComment instantiates a new RequestedItemStatusRequesterComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemStatusRequesterCommentWithDefaults

`func NewRequestedItemStatusRequesterCommentWithDefaults() *RequestedItemStatusRequesterComment`

NewRequestedItemStatusRequesterCommentWithDefaults instantiates a new RequestedItemStatusRequesterComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *RequestedItemStatusRequesterComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequestedItemStatusRequesterComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequestedItemStatusRequesterComment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequestedItemStatusRequesterComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *RequestedItemStatusRequesterComment) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *RequestedItemStatusRequesterComment) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *RequestedItemStatusRequesterComment) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *RequestedItemStatusRequesterComment) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *RequestedItemStatusRequesterComment) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *RequestedItemStatusRequesterComment) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *RequestedItemStatusRequesterComment) GetAuthor() CommentDto1Author`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *RequestedItemStatusRequesterComment) GetAuthorOk() (*CommentDto1Author, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *RequestedItemStatusRequesterComment) SetAuthor(v CommentDto1Author)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *RequestedItemStatusRequesterComment) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


