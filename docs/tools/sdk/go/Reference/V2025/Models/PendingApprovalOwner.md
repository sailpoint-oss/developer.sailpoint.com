---
id: pending-approval-owner
title: PendingApprovalOwner
pagination_label: PendingApprovalOwner
sidebar_label: PendingApprovalOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PendingApprovalOwner', 'PendingApprovalOwner'] 
slug: /tools/sdk/go//models/pending-approval-owner
tags: ['SDK', 'Software Development Kit', 'PendingApprovalOwner', 'PendingApprovalOwner']
---

# PendingApprovalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Access item owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Access item owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Access item owner's human-readable display name. | [optional] 

## Methods

### NewPendingApprovalOwner

`func NewPendingApprovalOwner() *PendingApprovalOwner`

NewPendingApprovalOwner instantiates a new PendingApprovalOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingApprovalOwnerWithDefaults

`func NewPendingApprovalOwnerWithDefaults() *PendingApprovalOwner`

NewPendingApprovalOwnerWithDefaults instantiates a new PendingApprovalOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PendingApprovalOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PendingApprovalOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PendingApprovalOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PendingApprovalOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *PendingApprovalOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PendingApprovalOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PendingApprovalOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PendingApprovalOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PendingApprovalOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PendingApprovalOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PendingApprovalOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PendingApprovalOwner) HasName() bool`

HasName returns a boolean if a field has been set.


