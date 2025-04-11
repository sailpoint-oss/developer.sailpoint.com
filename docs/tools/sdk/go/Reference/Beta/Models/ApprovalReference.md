---
id: beta-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalReference', 'BetaApprovalReference'] 
slug: /tools/sdk/go/beta/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'BetaApprovalReference']
---

# ApprovalReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the reference object | [optional] 
**Type** | Pointer to **string** | What reference object does this ID correspond to | [optional] 

## Methods

### NewApprovalReference

`func NewApprovalReference() *ApprovalReference`

NewApprovalReference instantiates a new ApprovalReference object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalReferenceWithDefaults

`func NewApprovalReferenceWithDefaults() *ApprovalReference`

NewApprovalReferenceWithDefaults instantiates a new ApprovalReference object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApprovalReference) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalReference) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalReference) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalReference) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *ApprovalReference) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalReference) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalReference) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalReference) HasType() bool`

HasType returns a boolean if a field has been set.


