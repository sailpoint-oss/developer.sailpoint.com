---
id: v2024-approval-comment1
title: ApprovalComment1
pagination_label: ApprovalComment1
sidebar_label: ApprovalComment1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalComment1', 'V2024ApprovalComment1'] 
slug: /tools/sdk/go/v2024/models/approval-comment1
tags: ['SDK', 'Software Development Kit', 'ApprovalComment1', 'V2024ApprovalComment1']
---

# ApprovalComment1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Author** | Pointer to [**ApprovalIdentity**](approval-identity) |  | [optional] 
**Comment** | Pointer to **string** | Comment to be left on an approval | [optional] 
**CreatedDate** | Pointer to **string** | Date the comment was created | [optional] 

## Methods

### NewApprovalComment1

`func NewApprovalComment1() *ApprovalComment1`

NewApprovalComment1 instantiates a new ApprovalComment1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalComment1WithDefaults

`func NewApprovalComment1WithDefaults() *ApprovalComment1`

NewApprovalComment1WithDefaults instantiates a new ApprovalComment1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAuthor

`func (o *ApprovalComment1) GetAuthor() ApprovalIdentity`

GetAuthor returns the Author field if non-nil, zero value otherwise.

### GetAuthorOk

`func (o *ApprovalComment1) GetAuthorOk() (*ApprovalIdentity, bool)`

GetAuthorOk returns a tuple with the Author field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAuthor

`func (o *ApprovalComment1) SetAuthor(v ApprovalIdentity)`

SetAuthor sets Author field to given value.

### HasAuthor

`func (o *ApprovalComment1) HasAuthor() bool`

HasAuthor returns a boolean if a field has been set.

### GetComment

`func (o *ApprovalComment1) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *ApprovalComment1) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *ApprovalComment1) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *ApprovalComment1) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetCreatedDate

`func (o *ApprovalComment1) GetCreatedDate() string`

GetCreatedDate returns the CreatedDate field if non-nil, zero value otherwise.

### GetCreatedDateOk

`func (o *ApprovalComment1) GetCreatedDateOk() (*string, bool)`

GetCreatedDateOk returns a tuple with the CreatedDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedDate

`func (o *ApprovalComment1) SetCreatedDate(v string)`

SetCreatedDate sets CreatedDate field to given value.

### HasCreatedDate

`func (o *ApprovalComment1) HasCreatedDate() bool`

HasCreatedDate returns a boolean if a field has been set.


