---
id: beta-comment
title: Comment
pagination_label: Comment
sidebar_label: Comment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Comment', 'BetaComment'] 
slug: /tools/sdk/go/beta/models/comment
tags: ['SDK', 'Software Development Kit', 'Comment', 'BetaComment']
---

# Comment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommenterId** | Pointer to **string** | Id of the identity making the comment | [optional] 
**CommenterName** | Pointer to **string** | Human-readable display name of the identity making the comment | [optional] 
**Body** | Pointer to **string** | Content of the comment | [optional] 
**Date** | Pointer to **SailPointTime** | Date and time comment was made | [optional] 

## Methods

### NewComment

`func NewComment() *Comment`

NewComment instantiates a new Comment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCommentWithDefaults

`func NewCommentWithDefaults() *Comment`

NewCommentWithDefaults instantiates a new Comment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCommenterId

`func (o *Comment) GetCommenterId() string`

GetCommenterId returns the CommenterId field if non-nil, zero value otherwise.

### GetCommenterIdOk

`func (o *Comment) GetCommenterIdOk() (*string, bool)`

GetCommenterIdOk returns a tuple with the CommenterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommenterId

`func (o *Comment) SetCommenterId(v string)`

SetCommenterId sets CommenterId field to given value.

### HasCommenterId

`func (o *Comment) HasCommenterId() bool`

HasCommenterId returns a boolean if a field has been set.

### GetCommenterName

`func (o *Comment) GetCommenterName() string`

GetCommenterName returns the CommenterName field if non-nil, zero value otherwise.

### GetCommenterNameOk

`func (o *Comment) GetCommenterNameOk() (*string, bool)`

GetCommenterNameOk returns a tuple with the CommenterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommenterName

`func (o *Comment) SetCommenterName(v string)`

SetCommenterName sets CommenterName field to given value.

### HasCommenterName

`func (o *Comment) HasCommenterName() bool`

HasCommenterName returns a boolean if a field has been set.

### GetBody

`func (o *Comment) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *Comment) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *Comment) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *Comment) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetDate

`func (o *Comment) GetDate() SailPointTime`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *Comment) GetDateOk() (*SailPointTime, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *Comment) SetDate(v SailPointTime)`

SetDate sets Date field to given value.

### HasDate

`func (o *Comment) HasDate() bool`

HasDate returns a boolean if a field has been set.


