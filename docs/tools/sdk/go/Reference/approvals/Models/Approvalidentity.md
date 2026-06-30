---
id: v1-approvalidentity
title: Approvalidentity
pagination_label: Approvalidentity
sidebar_label: Approvalidentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalidentity', 'V1Approvalidentity'] 
slug: /tools/sdk/go/approvals/models/approvalidentity
tags: ['SDK', 'Software Development Kit', 'Approvalidentity', 'V1Approvalidentity']
---

# Approvalidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Email** | Pointer to **string** | Email address. | [optional] 
**IdentityID** | Pointer to **string** | Identity ID of the type of identity defined in the 'type' field. | [optional] 
**Members** | Pointer to [**[]ApprovalidentityMembersInner**](approvalidentity-members-inner) | List of members of a governance group. Will be omitted if the identity is not a governance group. | [optional] 
**Name** | Pointer to **string** | Name of the identity. | [optional] 
**OwnerOf** | Pointer to [**[]ApprovalidentityOwnerOfInner**](approvalidentity-owner-of-inner) | List of owned items. For example, will show the items in which a ROLE_OWNER owns. Omitted if not an owner of anything. | [optional] 
**SerialOrder** | Pointer to **int64** | The serial step of the identity in the approval. For example serialOrder 1 is the first identity to action in an approval request chain. Parallel approvals are set to 0. | [optional] 
**Type** | Pointer to **string** | Type of identityID. | [optional] 

## Methods

### NewApprovalidentity

`func NewApprovalidentity() *Approvalidentity`

NewApprovalidentity instantiates a new Approvalidentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalidentityWithDefaults

`func NewApprovalidentityWithDefaults() *Approvalidentity`

NewApprovalidentityWithDefaults instantiates a new Approvalidentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEmail

`func (o *Approvalidentity) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Approvalidentity) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Approvalidentity) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Approvalidentity) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetIdentityID

`func (o *Approvalidentity) GetIdentityID() string`

GetIdentityID returns the IdentityID field if non-nil, zero value otherwise.

### GetIdentityIDOk

`func (o *Approvalidentity) GetIdentityIDOk() (*string, bool)`

GetIdentityIDOk returns a tuple with the IdentityID field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityID

`func (o *Approvalidentity) SetIdentityID(v string)`

SetIdentityID sets IdentityID field to given value.

### HasIdentityID

`func (o *Approvalidentity) HasIdentityID() bool`

HasIdentityID returns a boolean if a field has been set.

### GetMembers

`func (o *Approvalidentity) GetMembers() []ApprovalidentityMembersInner`

GetMembers returns the Members field if non-nil, zero value otherwise.

### GetMembersOk

`func (o *Approvalidentity) GetMembersOk() (*[]ApprovalidentityMembersInner, bool)`

GetMembersOk returns a tuple with the Members field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembers

`func (o *Approvalidentity) SetMembers(v []ApprovalidentityMembersInner)`

SetMembers sets Members field to given value.

### HasMembers

`func (o *Approvalidentity) HasMembers() bool`

HasMembers returns a boolean if a field has been set.

### GetName

`func (o *Approvalidentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approvalidentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approvalidentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approvalidentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetOwnerOf

`func (o *Approvalidentity) GetOwnerOf() []ApprovalidentityOwnerOfInner`

GetOwnerOf returns the OwnerOf field if non-nil, zero value otherwise.

### GetOwnerOfOk

`func (o *Approvalidentity) GetOwnerOfOk() (*[]ApprovalidentityOwnerOfInner, bool)`

GetOwnerOfOk returns a tuple with the OwnerOf field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerOf

`func (o *Approvalidentity) SetOwnerOf(v []ApprovalidentityOwnerOfInner)`

SetOwnerOf sets OwnerOf field to given value.

### HasOwnerOf

`func (o *Approvalidentity) HasOwnerOf() bool`

HasOwnerOf returns a boolean if a field has been set.

### GetSerialOrder

`func (o *Approvalidentity) GetSerialOrder() int64`

GetSerialOrder returns the SerialOrder field if non-nil, zero value otherwise.

### GetSerialOrderOk

`func (o *Approvalidentity) GetSerialOrderOk() (*int64, bool)`

GetSerialOrderOk returns a tuple with the SerialOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSerialOrder

`func (o *Approvalidentity) SetSerialOrder(v int64)`

SetSerialOrder sets SerialOrder field to given value.

### HasSerialOrder

`func (o *Approvalidentity) HasSerialOrder() bool`

HasSerialOrder returns a boolean if a field has been set.

### GetType

`func (o *Approvalidentity) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Approvalidentity) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Approvalidentity) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Approvalidentity) HasType() bool`

HasType returns a boolean if a field has been set.


