---
id: v1-approvalcomment3
title: Approvalcomment3
pagination_label: Approvalcomment3
sidebar_label: Approvalcomment3
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalcomment3', 'V1Approvalcomment3'] 
slug: /tools/sdk/go/approvals/models/approvalcomment3
tags: ['SDK', 'Software Development Kit', 'Approvalcomment3', 'V1Approvalcomment3']
---

# Approvalcomment3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | Pointer to [**Approvalidentity**](approvalidentity) |  | [optional] 
**Comment** | Pointer to **string** | Comment to be left on an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the comment was created | [optional] 
**CommentId** | Pointer to **string** | ID of the comment | [optional] 

## Methods

### NewApprovalcomment3

`func NewApprovalcomment3() *Approvalcomment3`

NewApprovalcomment3 instantiates a new Approvalcomment3 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalcomment3WithDefaults

`func NewApprovalcomment3WithDefaults() *Approvalcomment3`

NewApprovalcomment3WithDefaults instantiates a new Approvalcomment3 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthor

`func (o *Approvalcomment3) GetAuthor() Approvalidentity`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *Approvalcomment3) GetAuthorOk() (*Approvalidentity, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *Approvalcomment3) SetAuthor(v Approvalidentity)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *Approvalcomment3) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetComment

`func (o *Approvalcomment3) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Approvalcomment3) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Approvalcomment3) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Approvalcomment3) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreatedDate

`func (o *Approvalcomment3) GetCreatedDate() string`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *Approvalcomment3) GetCreatedDateOk() (*string, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *Approvalcomment3) SetCreatedDate(v string)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *Approvalcomment3) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.

### GetCommentId

`func (o *Approvalcomment3) GetCommentId() string`

GetCommentId returns the CommentId field if non-nil, zero value otherwise.

### GetCommentIdOk

`func (o *Approvalcomment3) GetCommentIdOk() (*string, bool)`

GetCommentIdOk returns a tuple with the CommentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentId

`func (o *Approvalcomment3) SetCommentId(v string)`

SetCommentId sets CommentId field to given value.

### HasCommentId

`func (o *Approvalcomment3) HasCommentId() bool`

HasCommentId returns a boolean if a field has been set.


