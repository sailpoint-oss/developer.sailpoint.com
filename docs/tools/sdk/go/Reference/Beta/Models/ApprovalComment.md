---
id: beta-approval-comment
title: ApprovalComment
pagination_label: ApprovalComment
sidebar_label: ApprovalComment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalComment', 'BetaApprovalComment'] 
slug: /tools/sdk/go/beta/models/approval-comment
tags: ['SDK', 'Software Development Kit', 'ApprovalComment', 'BetaApprovalComment']
---

# ApprovalComment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Comment** | Pointer to **string** | Comment to be left on an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the comment was created | [optional] 

## Methods

### NewApprovalComment

`func NewApprovalComment() *ApprovalComment`

NewApprovalComment instantiates a new ApprovalComment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalCommentWithDefaults

`func NewApprovalCommentWithDefaults() *ApprovalComment`

NewApprovalCommentWithDefaults instantiates a new ApprovalComment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthor

`func (o *ApprovalComment) GetAuthor() ApprovalIdentity`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *ApprovalComment) GetAuthorOk() (*ApprovalIdentity, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *ApprovalComment) SetAuthor(v ApprovalIdentity)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *ApprovalComment) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalComment) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalComment) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalComment) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalComment) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreatedDate

`func (o *ApprovalComment) GetCreatedDate() string`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *ApprovalComment) GetCreatedDateOk() (*string, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *ApprovalComment) SetCreatedDate(v string)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *ApprovalComment) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.


