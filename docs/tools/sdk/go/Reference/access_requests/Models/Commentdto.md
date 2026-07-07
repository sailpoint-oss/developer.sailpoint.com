---
id: v1-commentdto
title: Commentdto
pagination_label: Commentdto
sidebar_label: Commentdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Commentdto', 'V1Commentdto'] 
slug: /tools/sdk/go/accessrequests/models/commentdto
tags: ['SDK', 'Software Development Kit', 'Commentdto', 'V1Commentdto']
---

# Commentdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **NullableString** | Comment content. | [optional] 
**Created** | Pointer to **SailPointTime** | Date and time comment was created. | [optional] 
**Author** | Pointer to [**CommentdtoAuthor**](commentdto-author) |  | [optional] 

## Methods

### NewCommentdto

`func NewCommentdto() *Commentdto`

NewCommentdto instantiates a new Commentdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentdtoWithDefaults

`func NewCommentdtoWithDefaults() *Commentdto`

NewCommentdtoWithDefaults instantiates a new Commentdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Commentdto) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Commentdto) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Commentdto) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Commentdto) HasComment() bool`

HasComment returns a boolean if a field has been set.

### SetCommentNil

`func (o *Commentdto) SetCommentNil(b bool)`

 SetCommentNil sets the value for Comment to be an explicit nil

### UnsetComment
`func (o *Commentdto) UnsetComment()`

UnsetComment ensures that no value is present for Comment, not even an explicit nil
### GetCreated

`func (o *Commentdto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Commentdto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Commentdto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Commentdto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetAuthor

`func (o *Commentdto) GetAuthor() CommentdtoAuthor`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *Commentdto) GetAuthorOk() (*CommentdtoAuthor, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *Commentdto) SetAuthor(v CommentdtoAuthor)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *Commentdto) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.


