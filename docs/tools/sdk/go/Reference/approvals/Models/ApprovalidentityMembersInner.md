---
id: v1-approvalidentity-members-inner
title: ApprovalidentityMembersInner
pagination_label: ApprovalidentityMembersInner
sidebar_label: ApprovalidentityMembersInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalidentityMembersInner', 'V1ApprovalidentityMembersInner'] 
slug: /tools/sdk/go/approvals/models/approvalidentity-members-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalidentityMembersInner', 'V1ApprovalidentityMembersInner']
---

# ApprovalidentityMembersInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to **string** | Email of the member. | [optional] 
**Id** | Pointer to **string** | ID of the member. | [optional] 
**Name** | Pointer to **string** | Name of the member. | [optional] 
**Type** | Pointer to **string** | Type of the member. | [optional] 

## Methods

### NewApprovalidentityMembersInner

`func NewApprovalidentityMembersInner() *ApprovalidentityMembersInner`

NewApprovalidentityMembersInner instantiates a new ApprovalidentityMembersInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalidentityMembersInnerWithDefaults

`func NewApprovalidentityMembersInnerWithDefaults() *ApprovalidentityMembersInner`

NewApprovalidentityMembersInnerWithDefaults instantiates a new ApprovalidentityMembersInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ApprovalidentityMembersInner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApprovalidentityMembersInner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApprovalidentityMembersInner) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ApprovalidentityMembersInner) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetId

`func (o *ApprovalidentityMembersInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalidentityMembersInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalidentityMembersInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalidentityMembersInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalidentityMembersInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalidentityMembersInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalidentityMembersInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalidentityMembersInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ApprovalidentityMembersInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalidentityMembersInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalidentityMembersInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalidentityMembersInner) HasType() bool`

HasType returns a boolean if a field has been set.


