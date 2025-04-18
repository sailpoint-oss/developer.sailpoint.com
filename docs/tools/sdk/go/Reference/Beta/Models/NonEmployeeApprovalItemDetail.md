---
id: beta-non-employee-approval-item-detail
title: NonEmployeeApprovalItemDetail
pagination_label: NonEmployeeApprovalItemDetail
sidebar_label: NonEmployeeApprovalItemDetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'NonEmployeeApprovalItemDetail', 'BetaNonEmployeeApprovalItemDetail'] 
slug: /tools/sdk/go/beta/models/non-employee-approval-item-detail
tags: ['SDK', 'Software Development Kit', 'NonEmployeeApprovalItemDetail', 'BetaNonEmployeeApprovalItemDetail']
---

# NonEmployeeApprovalItemDetail

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
**NonEmployeeRequest** | Pointer to [**NonEmployeeRequestWithoutApprovalItem**](non-employee-request-without-approval-item) |  | [optional] 

## Methods

### NewNonEmployeeApprovalItemDetail

`func NewNonEmployeeApprovalItemDetail() *NonEmployeeApprovalItemDetail`

NewNonEmployeeApprovalItemDetail instantiates a new NonEmployeeApprovalItemDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonEmployeeApprovalItemDetailWithDefaults

`func NewNonEmployeeApprovalItemDetailWithDefaults() *NonEmployeeApprovalItemDetail`

NewNonEmployeeApprovalItemDetailWithDefaults instantiates a new NonEmployeeApprovalItemDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *NonEmployeeApprovalItemDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *NonEmployeeApprovalItemDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *NonEmployeeApprovalItemDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *NonEmployeeApprovalItemDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetApprover

`func (o *NonEmployeeApprovalItemDetail) GetApprover() IdentityReferenceWithId`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *NonEmployeeApprovalItemDetail) GetApproverOk() (*IdentityReferenceWithId, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *NonEmployeeApprovalItemDetail) SetApprover(v IdentityReferenceWithId)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *NonEmployeeApprovalItemDetail) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetAccountName

`func (o *NonEmployeeApprovalItemDetail) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *NonEmployeeApprovalItemDetail) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *NonEmployeeApprovalItemDetail) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *NonEmployeeApprovalItemDetail) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *NonEmployeeApprovalItemDetail) GetApprovalStatus() ApprovalStatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *NonEmployeeApprovalItemDetail) GetApprovalStatusOk() (*ApprovalStatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *NonEmployeeApprovalItemDetail) SetApprovalStatus(v ApprovalStatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *NonEmployeeApprovalItemDetail) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalOrder

`func (o *NonEmployeeApprovalItemDetail) GetApprovalOrder() float32`

GetApprovalOrder returns the ApprovalOrder field if non-nil, zero value otherwise.

### GetApprovalOrderOk

`func (o *NonEmployeeApprovalItemDetail) GetApprovalOrderOk() (*float32, bool)`

GetApprovalOrderOk returns a tuple with the ApprovalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalOrder

`func (o *NonEmployeeApprovalItemDetail) SetApprovalOrder(v float32)`

SetApprovalOrder sets ApprovalOrder field to given value.

### HasApprovalOrder

`func (o *NonEmployeeApprovalItemDetail) HasApprovalOrder() bool`

HasApprovalOrder returns a boolean if a field has been set.

### GetComment

`func (o *NonEmployeeApprovalItemDetail) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *NonEmployeeApprovalItemDetail) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *NonEmployeeApprovalItemDetail) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *NonEmployeeApprovalItemDetail) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetModified

`func (o *NonEmployeeApprovalItemDetail) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *NonEmployeeApprovalItemDetail) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *NonEmployeeApprovalItemDetail) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *NonEmployeeApprovalItemDetail) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *NonEmployeeApprovalItemDetail) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *NonEmployeeApprovalItemDetail) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *NonEmployeeApprovalItemDetail) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *NonEmployeeApprovalItemDetail) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeRequest

`func (o *NonEmployeeApprovalItemDetail) GetNonEmployeeRequest() NonEmployeeRequestWithoutApprovalItem`

GetNonEmployeeRequest returns the NonEmployeeRequest field if non-nil, zero value otherwise.

### GetNonEmployeeRequestOk

`func (o *NonEmployeeApprovalItemDetail) GetNonEmployeeRequestOk() (*NonEmployeeRequestWithoutApprovalItem, bool)`

GetNonEmployeeRequestOk returns a tuple with the NonEmployeeRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeRequest

`func (o *NonEmployeeApprovalItemDetail) SetNonEmployeeRequest(v NonEmployeeRequestWithoutApprovalItem)`

SetNonEmployeeRequest sets NonEmployeeRequest field to given value.

### HasNonEmployeeRequest

`func (o *NonEmployeeApprovalItemDetail) HasNonEmployeeRequest() bool`

HasNonEmployeeRequest returns a boolean if a field has been set.


