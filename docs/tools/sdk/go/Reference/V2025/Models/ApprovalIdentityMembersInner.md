---
id: v2025-approval-identity-members-inner
title: ApprovalIdentityMembersInner
pagination_label: ApprovalIdentityMembersInner
sidebar_label: ApprovalIdentityMembersInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalIdentityMembersInner', 'V2025ApprovalIdentityMembersInner'] 
slug: /tools/sdk/go/v2025/models/approval-identity-members-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentityMembersInner', 'V2025ApprovalIdentityMembersInner']
---

# ApprovalIdentityMembersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to **string** | Email of the member. | [optional] 
**Id** | Pointer to **string** | ID of the member. | [optional] 
**Name** | Pointer to **string** | Name of the member. | [optional] 
**Type** | Pointer to **string** | Type of the member. | [optional] 

## Methods

### NewApprovalIdentityMembersInner

`func NewApprovalIdentityMembersInner() *ApprovalIdentityMembersInner`

NewApprovalIdentityMembersInner instantiates a new ApprovalIdentityMembersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalIdentityMembersInnerWithDefaults

`func NewApprovalIdentityMembersInnerWithDefaults() *ApprovalIdentityMembersInner`

NewApprovalIdentityMembersInnerWithDefaults instantiates a new ApprovalIdentityMembersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ApprovalIdentityMembersInner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApprovalIdentityMembersInner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApprovalIdentityMembersInner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ApprovalIdentityMembersInner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetId

`func (o *ApprovalIdentityMembersInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalIdentityMembersInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalIdentityMembersInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalIdentityMembersInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalIdentityMembersInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalIdentityMembersInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalIdentityMembersInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalIdentityMembersInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ApprovalIdentityMembersInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalIdentityMembersInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalIdentityMembersInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalIdentityMembersInner) HasType() bool`

HasType returns a boolean if a field has been set.


