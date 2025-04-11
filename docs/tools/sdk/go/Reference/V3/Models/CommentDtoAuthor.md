---
id: comment-dto-author
title: CommentDtoAuthor
pagination_label: CommentDtoAuthor
sidebar_label: CommentDtoAuthor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CommentDtoAuthor', 'CommentDtoAuthor'] 
slug: /tools/sdk/go/v3/models/comment-dto-author
tags: ['SDK', 'Software Development Kit', 'CommentDtoAuthor', 'CommentDtoAuthor']
---

# CommentDtoAuthor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | The type of object | [optional] 
**Id** | Pointer to **string** | The unique ID of the object | [optional] 
**Name** | Pointer to **string** | The display name of the object | [optional] 

## Methods

### NewCommentDtoAuthor

`func NewCommentDtoAuthor() *CommentDtoAuthor`

NewCommentDtoAuthor instantiates a new CommentDtoAuthor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentDtoAuthorWithDefaults

`func NewCommentDtoAuthorWithDefaults() *CommentDtoAuthor`

NewCommentDtoAuthorWithDefaults instantiates a new CommentDtoAuthor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *CommentDtoAuthor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CommentDtoAuthor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CommentDtoAuthor) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CommentDtoAuthor) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *CommentDtoAuthor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CommentDtoAuthor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CommentDtoAuthor) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CommentDtoAuthor) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CommentDtoAuthor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CommentDtoAuthor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CommentDtoAuthor) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CommentDtoAuthor) HasName() bool`

HasName returns a boolean if a field has been set.


