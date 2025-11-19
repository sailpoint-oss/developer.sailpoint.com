---
id: v2025-approval-identity
title: ApprovalIdentity
pagination_label: ApprovalIdentity
sidebar_label: ApprovalIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalIdentity', 'V2025ApprovalIdentity'] 
slug: /tools/sdk/go/v2025/models/approval-identity
tags: ['SDK', 'Software Development Kit', 'ApprovalIdentity', 'V2025ApprovalIdentity']
---

# ApprovalIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to **string** | Email address. | [optional] 
**IdentityID** | Pointer to **string** | Identity ID. | [optional] 
**Members** | Pointer to [**[]ApprovalIdentityMembersInner**](approval-identity-members-inner) | List of members of a governance group. Will be omitted if the identity is not a governance group. | [optional] 
**Name** | Pointer to **string** | Name of the identity. | [optional] 
**OwnerOf** | Pointer to [**[]ApprovalIdentityOwnerOfInner**](approval-identity-owner-of-inner) | List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything. | [optional] 
**SerialOrder** | Pointer to **int64** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**Type** | Pointer to **string** | Type of identity. | [optional] 

## Methods

### NewApprovalIdentity

`func NewApprovalIdentity() *ApprovalIdentity`

NewApprovalIdentity instantiates a new ApprovalIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalIdentityWithDefaults

`func NewApprovalIdentityWithDefaults() *ApprovalIdentity`

NewApprovalIdentityWithDefaults instantiates a new ApprovalIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *ApprovalIdentity) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *ApprovalIdentity) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *ApprovalIdentity) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *ApprovalIdentity) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIdentityID

`func (o *ApprovalIdentity) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *ApprovalIdentity) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *ApprovalIdentity) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *ApprovalIdentity) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetMembers

`func (o *ApprovalIdentity) GetMembers() []ApprovalIdentityMembersInner`

GetMembers returns the Members field if non-nil, zero value otherwise.

### GetMembersOk

`func (o *ApprovalIdentity) GetMembersOk() (*[]ApprovalIdentityMembersInner, bool)`

GetMembersOk returns a tuple with the Members field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembers

`func (o *ApprovalIdentity) SetMembers(v []ApprovalIdentityMembersInner)`

SetMembers sets Members field to given value.

### HasMembers

`func (o *ApprovalIdentity) HasMembers() bool`

HasMembers returns a boolean if a field has been set.

### GetName

`func (o *ApprovalIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwnerOf

`func (o *ApprovalIdentity) GetOwnerOf() []ApprovalIdentityOwnerOfInner`

GetOwnerOf returns the OwnerOf field if non-nil, zero value otherwise.

### GetOwnerOfOk

`func (o *ApprovalIdentity) GetOwnerOfOk() (*[]ApprovalIdentityOwnerOfInner, bool)`

GetOwnerOfOk returns a tuple with the OwnerOf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOf

`func (o *ApprovalIdentity) SetOwnerOf(v []ApprovalIdentityOwnerOfInner)`

SetOwnerOf sets OwnerOf field to given value.

### HasOwnerOf

`func (o *ApprovalIdentity) HasOwnerOf() bool`

HasOwnerOf returns a boolean if a field has been set.

### GetSerialOrder

`func (o *ApprovalIdentity) GetSerialOrder() int64`

GetSerialOrder returns the SerialOrder field if non-nil, zero value otherwise.

### GetSerialOrderOk

`func (o *ApprovalIdentity) GetSerialOrderOk() (*int64, bool)`

GetSerialOrderOk returns a tuple with the SerialOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialOrder

`func (o *ApprovalIdentity) SetSerialOrder(v int64)`

SetSerialOrder sets SerialOrder field to given value.

### HasSerialOrder

`func (o *ApprovalIdentity) HasSerialOrder() bool`

HasSerialOrder returns a boolean if a field has been set.

### GetType

`func (o *ApprovalIdentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalIdentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalIdentity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalIdentity) HasType() bool`

HasType returns a boolean if a field has been set.


