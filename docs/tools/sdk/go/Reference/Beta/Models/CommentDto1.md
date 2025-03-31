---
id: beta-comment-dto1
title: CommentDto1
pagination_label: CommentDto1
sidebar_label: CommentDto1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CommentDto1', 'BetaCommentDto1'] 
slug: /tools/sdk/go/beta/models/comment-dto1
tags: ['SDK', 'Software Development Kit', 'CommentDto1', 'BetaCommentDto1']
---

# CommentDto1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **time.Time** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentDto1Author**](comment-dto1-author) |  | [optional] 

## Methods

### NewCommentDto1

`func NewCommentDto1() *CommentDto1`

NewCommentDto1 instantiates a new CommentDto1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentDto1WithDefaults

`func NewCommentDto1WithDefaults() *CommentDto1`

NewCommentDto1WithDefaults instantiates a new CommentDto1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CommentDto1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CommentDto1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CommentDto1) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CommentDto1) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CommentDto1) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CommentDto1) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *CommentDto1) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CommentDto1) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CommentDto1) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CommentDto1) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *CommentDto1) GetAuthor() CommentDto1Author`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *CommentDto1) GetAuthorOk() (*CommentDto1Author, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *CommentDto1) SetAuthor(v CommentDto1Author)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *CommentDto1) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


