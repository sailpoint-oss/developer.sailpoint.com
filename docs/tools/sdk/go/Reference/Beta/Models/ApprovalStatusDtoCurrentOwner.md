---
id: beta-approval-status-dto-current-owner
title: ApprovalStatusDtoCurrentOwner
pagination_label: ApprovalStatusDtoCurrentOwner
sidebar_label: ApprovalStatusDtoCurrentOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalStatusDtoCurrentOwner', 'BetaApprovalStatusDtoCurrentOwner'] 
slug: /tools/sdk/go/beta/models/approval-status-dto-current-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalStatusDtoCurrentOwner', 'BetaApprovalStatusDtoCurrentOwner']
---

# ApprovalStatusDtoCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | Pointer to **string** | ID of identity who reviewed the access item request. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Methods

### NewApprovalStatusDtoCurrentOwner

`func NewApprovalStatusDtoCurrentOwner() *ApprovalStatusDtoCurrentOwner`

NewApprovalStatusDtoCurrentOwner instantiates a new ApprovalStatusDtoCurrentOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalStatusDtoCurrentOwnerWithDefaults

`func NewApprovalStatusDtoCurrentOwnerWithDefaults() *ApprovalStatusDtoCurrentOwner`

NewApprovalStatusDtoCurrentOwnerWithDefaults instantiates a new ApprovalStatusDtoCurrentOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ApprovalStatusDtoCurrentOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalStatusDtoCurrentOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalStatusDtoCurrentOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalStatusDtoCurrentOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ApprovalStatusDtoCurrentOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalStatusDtoCurrentOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalStatusDtoCurrentOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalStatusDtoCurrentOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalStatusDtoCurrentOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalStatusDtoCurrentOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalStatusDtoCurrentOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalStatusDtoCurrentOwner) HasName() bool`

HasName returns a boolean if a field has been set.


