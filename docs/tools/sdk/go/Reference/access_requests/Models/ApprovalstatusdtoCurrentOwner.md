---
id: v1-approvalstatusdto-current-owner
title: ApprovalstatusdtoCurrentOwner
pagination_label: ApprovalstatusdtoCurrentOwner
sidebar_label: ApprovalstatusdtoCurrentOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalstatusdtoCurrentOwner', 'V1ApprovalstatusdtoCurrentOwner'] 
slug: /tools/sdk/go/accessrequests/models/approvalstatusdto-current-owner
tags: ['SDK', 'Software Development Kit', 'ApprovalstatusdtoCurrentOwner', 'V1ApprovalstatusdtoCurrentOwner']
---

# ApprovalstatusdtoCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | Pointer to **string** | ID of identity who reviewed the access item request. | [optional] 
**Name** | Pointer to **string** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Methods

### NewApprovalstatusdtoCurrentOwner

`func NewApprovalstatusdtoCurrentOwner() *ApprovalstatusdtoCurrentOwner`

NewApprovalstatusdtoCurrentOwner instantiates a new ApprovalstatusdtoCurrentOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalstatusdtoCurrentOwnerWithDefaults

`func NewApprovalstatusdtoCurrentOwnerWithDefaults() *ApprovalstatusdtoCurrentOwner`

NewApprovalstatusdtoCurrentOwnerWithDefaults instantiates a new ApprovalstatusdtoCurrentOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *ApprovalstatusdtoCurrentOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalstatusdtoCurrentOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalstatusdtoCurrentOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalstatusdtoCurrentOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ApprovalstatusdtoCurrentOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalstatusdtoCurrentOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalstatusdtoCurrentOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalstatusdtoCurrentOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalstatusdtoCurrentOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalstatusdtoCurrentOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalstatusdtoCurrentOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalstatusdtoCurrentOwner) HasName() bool`

HasName returns a boolean if a field has been set.


