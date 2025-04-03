---
id: v2025-non-employee-approval-item-base
title: NonEmployeeApprovalItemBase
pagination_label: NonEmployeeApprovalItemBase
sidebar_label: NonEmployeeApprovalItemBase
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeApprovalItemBase', 'V2025NonEmployeeApprovalItemBase'] 
slug: /tools/sdk/go/v2025/models/non-employee-approval-item-base
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemBase', 'V2025NonEmployeeApprovalItemBase']
---

# NonEmployeeApprovalItemBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee approval item id | [optional] 
**Approver** | Pointer to [**NonEmployeeIdentityReferenceWithId**](non-employee-identity-reference-with-id) |  | [optional] 
**AccountName** | Pointer to **string** | Requested identity account name | [optional] 
**ApprovalStatus** | Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**ApprovalOrder** | Pointer to **float32** | Approval order | [optional] 
**Comment** | Pointer to **string** | comment of approver | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 

## Methods

### NewNonEmployeeApprovalItemBase

`func NewNonEmployeeApprovalItemBase() *NonEmployeeApprovalItemBase`

NewNonEmployeeApprovalItemBase instantiates a new NonEmployeeApprovalItemBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeApprovalItemBaseWithDefaults

`func NewNonEmployeeApprovalItemBaseWithDefaults() *NonEmployeeApprovalItemBase`

NewNonEmployeeApprovalItemBaseWithDefaults instantiates a new NonEmployeeApprovalItemBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeApprovalItemBase) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeApprovalItemBase) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeApprovalItemBase) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeApprovalItemBase) HasId() bool`

HasId returns a boolean if a field has been set.

### GetApprover

`func (o *NonEmployeeApprovalItemBase) GetApprover() NonEmployeeIdentityReferenceWithId`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *NonEmployeeApprovalItemBase) GetApproverOk() (*NonEmployeeIdentityReferenceWithId, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *NonEmployeeApprovalItemBase) SetApprover(v NonEmployeeIdentityReferenceWithId)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *NonEmployeeApprovalItemBase) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetAccountName

`func (o *NonEmployeeApprovalItemBase) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeApprovalItemBase) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeApprovalItemBase) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *NonEmployeeApprovalItemBase) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *NonEmployeeApprovalItemBase) GetApprovalStatus() ApprovalStatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *NonEmployeeApprovalItemBase) GetApprovalStatusOk() (*ApprovalStatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *NonEmployeeApprovalItemBase) SetApprovalStatus(v ApprovalStatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *NonEmployeeApprovalItemBase) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalOrder

`func (o *NonEmployeeApprovalItemBase) GetApprovalOrder() float32`

GetApprovalOrder returns the ApprovalOrder field if non-nil, zero value otherwise.

### GetApprovalOrderOk

`func (o *NonEmployeeApprovalItemBase) GetApprovalOrderOk() (*float32, bool)`

GetApprovalOrderOk returns a tuple with the ApprovalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalOrder

`func (o *NonEmployeeApprovalItemBase) SetApprovalOrder(v float32)`

SetApprovalOrder sets ApprovalOrder field to given value.

### HasApprovalOrder

`func (o *NonEmployeeApprovalItemBase) HasApprovalOrder() bool`

HasApprovalOrder returns a boolean if a field has been set.

### GetComment

`func (o *NonEmployeeApprovalItemBase) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *NonEmployeeApprovalItemBase) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *NonEmployeeApprovalItemBase) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *NonEmployeeApprovalItemBase) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeApprovalItemBase) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeApprovalItemBase) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeApprovalItemBase) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeApprovalItemBase) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeApprovalItemBase) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeApprovalItemBase) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeApprovalItemBase) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeApprovalItemBase) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


