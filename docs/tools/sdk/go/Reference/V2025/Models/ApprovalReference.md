---
id: v2025-approval-reference
title: ApprovalReference
pagination_label: ApprovalReference
sidebar_label: ApprovalReference
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalReference', 'V2025ApprovalReference'] 
slug: /tools/sdk/go/v2025/models/approval-reference
tags: ['SDK', 'Software Development Kit', 'ApprovalReference', 'V2025ApprovalReference']
---

# ApprovalReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the reference object | [optional] 
**Type** | Pointer to **string** | What reference object does this ID correspond to | [optional] 
**Name** | Pointer to **string** | Name of the reference object | [optional] 
**Email** | Pointer to **string** | Email associated with the reference object | [optional] 
**SerialOrder** | Pointer to **int64** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 

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

### GetName

`func (o *ApprovalReference) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalReference) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalReference) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalReference) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *ApprovalReference) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApprovalReference) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApprovalReference) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ApprovalReference) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetSerialOrder

`func (o *ApprovalReference) GetSerialOrder() int64`

GetSerialOrder returns the SerialOrder field if non-nil, zero value otherwise.

### GetSerialOrderOk

`func (o *ApprovalReference) GetSerialOrderOk() (*int64, bool)`

GetSerialOrderOk returns a tuple with the SerialOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialOrder

`func (o *ApprovalReference) SetSerialOrder(v int64)`

SetSerialOrder sets SerialOrder field to given value.

### HasSerialOrder

`func (o *ApprovalReference) HasSerialOrder() bool`

HasSerialOrder returns a boolean if a field has been set.


