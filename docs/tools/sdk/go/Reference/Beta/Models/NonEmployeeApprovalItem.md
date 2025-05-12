---
id: beta-non-employee-approval-item
title: NonEmployeeApprovalItem
pagination_label: NonEmployeeApprovalItem
sidebar_label: NonEmployeeApprovalItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeApprovalItem', 'BetaNonEmployeeApprovalItem'] 
slug: /tools/sdk/go/beta/models/non-employee-approval-item
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItem', 'BetaNonEmployeeApprovalItem']
---

# NonEmployeeApprovalItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee approval item id | [optional] 
**Approver** | Pointer to [**IdentityReferenceWithId**](identity-reference-with-id) |  | [optional] 
**AccountName** | Pointer to **string** | Requested identity account name | [optional] 
**ApprovalStatus** | Pointer to [**ApprovalStatus**](approval-status) |  | [optional] 
**ApprovalOrder** | Pointer to **float32** | Approval order | [optional] 
**Comment** | Pointer to **string** | comment of approver | [optional] 
**Modified** | Pointer to **time.Time** | When the request was last modified. | [optional] 
**Created** | Pointer to **time.Time** | When the request was created. | [optional] 
**NonEmployeeRequest** | Pointer to [**NonEmployeeRequestLite**](non-employee-request-lite) |  | [optional] 

## Methods

### NewNonEmployeeApprovalItem

`func NewNonEmployeeApprovalItem() *NonEmployeeApprovalItem`

NewNonEmployeeApprovalItem instantiates a new NonEmployeeApprovalItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeApprovalItemWithDefaults

`func NewNonEmployeeApprovalItemWithDefaults() *NonEmployeeApprovalItem`

NewNonEmployeeApprovalItemWithDefaults instantiates a new NonEmployeeApprovalItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeApprovalItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeApprovalItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeApprovalItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeApprovalItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetApprover

`func (o *NonEmployeeApprovalItem) GetApprover() IdentityReferenceWithId`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *NonEmployeeApprovalItem) GetApproverOk() (*IdentityReferenceWithId, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *NonEmployeeApprovalItem) SetApprover(v IdentityReferenceWithId)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *NonEmployeeApprovalItem) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetAccountName

`func (o *NonEmployeeApprovalItem) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeApprovalItem) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeApprovalItem) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *NonEmployeeApprovalItem) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *NonEmployeeApprovalItem) GetApprovalStatus() ApprovalStatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *NonEmployeeApprovalItem) GetApprovalStatusOk() (*ApprovalStatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *NonEmployeeApprovalItem) SetApprovalStatus(v ApprovalStatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *NonEmployeeApprovalItem) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalOrder

`func (o *NonEmployeeApprovalItem) GetApprovalOrder() float32`

GetApprovalOrder returns the ApprovalOrder field if non-nil, zero value otherwise.

### GetApprovalOrderOk

`func (o *NonEmployeeApprovalItem) GetApprovalOrderOk() (*float32, bool)`

GetApprovalOrderOk returns a tuple with the ApprovalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalOrder

`func (o *NonEmployeeApprovalItem) SetApprovalOrder(v float32)`

SetApprovalOrder sets ApprovalOrder field to given value.

### HasApprovalOrder

`func (o *NonEmployeeApprovalItem) HasApprovalOrder() bool`

HasApprovalOrder returns a boolean if a field has been set.

### GetComment

`func (o *NonEmployeeApprovalItem) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *NonEmployeeApprovalItem) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *NonEmployeeApprovalItem) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *NonEmployeeApprovalItem) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeApprovalItem) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeApprovalItem) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeApprovalItem) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeApprovalItem) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeApprovalItem) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeApprovalItem) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeApprovalItem) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeApprovalItem) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeRequest

`func (o *NonEmployeeApprovalItem) GetNonEmployeeRequest() NonEmployeeRequestLite`

GetNonEmployeeRequest returns the NonEmployeeRequest field if non-nil, zero value otherwise.

### GetNonEmployeeRequestOk

`func (o *NonEmployeeApprovalItem) GetNonEmployeeRequestOk() (*NonEmployeeRequestLite, bool)`

GetNonEmployeeRequestOk returns a tuple with the NonEmployeeRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeRequest

`func (o *NonEmployeeApprovalItem) SetNonEmployeeRequest(v NonEmployeeRequestLite)`

SetNonEmployeeRequest sets NonEmployeeRequest field to given value.

### HasNonEmployeeRequest

`func (o *NonEmployeeApprovalItem) HasNonEmployeeRequest() bool`

HasNonEmployeeRequest returns a boolean if a field has been set.


