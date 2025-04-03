---
id: v2025-comment-dto
title: CommentDto
pagination_label: CommentDto
sidebar_label: CommentDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CommentDto', 'V2025CommentDto'] 
slug: /tools/sdk/go/v2025/models/comment-dto
tags: ['SDK', 'Software Development Kit', 'CommentDto', 'V2025CommentDto']
---

# CommentDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentDtoAuthor**](comment-dto-author) |  | [optional] 

## Methods

### NewCommentDto

`func NewCommentDto() *CommentDto`

NewCommentDto instantiates a new CommentDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentDtoWithDefaults

`func NewCommentDtoWithDefaults() *CommentDto`

NewCommentDtoWithDefaults instantiates a new CommentDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CommentDto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CommentDto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CommentDto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CommentDto) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *CommentDto) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *CommentDto) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *CommentDto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CommentDto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CommentDto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CommentDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *CommentDto) GetAuthor() CommentDtoAuthor`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *CommentDto) GetAuthorOk() (*CommentDtoAuthor, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *CommentDto) SetAuthor(v CommentDtoAuthor)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *CommentDto) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


