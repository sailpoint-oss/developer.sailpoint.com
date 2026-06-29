---
id: v1-approvalidentity-owner-of-inner
title: ApprovalidentityOwnerOfInner
pagination_label: ApprovalidentityOwnerOfInner
sidebar_label: ApprovalidentityOwnerOfInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalidentityOwnerOfInner', 'V1ApprovalidentityOwnerOfInner'] 
slug: /tools/sdk/go/approvals/models/approvalidentity-owner-of-inner
tags: ['SDK', 'Software Development Kit', 'ApprovalidentityOwnerOfInner', 'V1ApprovalidentityOwnerOfInner']
---

# ApprovalidentityOwnerOfInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the object that is owned. | [optional] 
**Name** | Pointer to **string** | Name of the object that is owned. | [optional] 
**Type** | Pointer to **string** | Type of the object that is owned. | [optional] 

## Methods

### NewApprovalidentityOwnerOfInner

`func NewApprovalidentityOwnerOfInner() *ApprovalidentityOwnerOfInner`

NewApprovalidentityOwnerOfInner instantiates a new ApprovalidentityOwnerOfInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalidentityOwnerOfInnerWithDefaults

`func NewApprovalidentityOwnerOfInnerWithDefaults() *ApprovalidentityOwnerOfInner`

NewApprovalidentityOwnerOfInnerWithDefaults instantiates a new ApprovalidentityOwnerOfInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApprovalidentityOwnerOfInner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApprovalidentityOwnerOfInner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApprovalidentityOwnerOfInner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApprovalidentityOwnerOfInner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *ApprovalidentityOwnerOfInner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ApprovalidentityOwnerOfInner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ApprovalidentityOwnerOfInner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ApprovalidentityOwnerOfInner) HasName() bool`

HasName returns a boolean if a field has been set.

### GetType

`func (o *ApprovalidentityOwnerOfInner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ApprovalidentityOwnerOfInner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ApprovalidentityOwnerOfInner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *ApprovalidentityOwnerOfInner) HasType() bool`

HasType returns a boolean if a field has been set.


