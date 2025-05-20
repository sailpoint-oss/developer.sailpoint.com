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
**Id** | Pointer to **string** | The identity ID | [optional] 
**Type** | Pointer to **string** | Indication of what group the identity belongs to. Ie, IDENTITY, GOVERNANCE_GROUP, etc | [optional] 
**Name** | Pointer to **string** | Name of the identity | [optional] 

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

### GetId

`func (o *ApprovalIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

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


