---
id: v1-pendingapproval-owner
title: PendingapprovalOwner
pagination_label: PendingapprovalOwner
sidebar_label: PendingapprovalOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PendingapprovalOwner', 'V1PendingapprovalOwner'] 
slug: /tools/sdk/go/accessrequestapprovals/models/pendingapproval-owner
tags: ['SDK', 'Software Development Kit', 'PendingapprovalOwner', 'V1PendingapprovalOwner']
---

# PendingapprovalOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Access item owner's DTO type. | [optional] 
**Id** | Pointer to **string** | Access item owner's identity ID. | [optional] 
**Name** | Pointer to **string** | Access item owner's human-readable display name. | [optional] 

## Methods

### NewPendingapprovalOwner

`func NewPendingapprovalOwner() *PendingapprovalOwner`

NewPendingapprovalOwner instantiates a new PendingapprovalOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingapprovalOwnerWithDefaults

`func NewPendingapprovalOwnerWithDefaults() *PendingapprovalOwner`

NewPendingapprovalOwnerWithDefaults instantiates a new PendingapprovalOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *PendingapprovalOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *PendingapprovalOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *PendingapprovalOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *PendingapprovalOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *PendingapprovalOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PendingapprovalOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PendingapprovalOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PendingapprovalOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PendingapprovalOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PendingapprovalOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PendingapprovalOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PendingapprovalOwner) HasName() bool`

HasName returns a boolean if a field has been set.


