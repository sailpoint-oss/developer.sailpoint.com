---
id: v1-nonemployeeapprovalitem
title: Nonemployeeapprovalitem
pagination_label: Nonemployeeapprovalitem
sidebar_label: Nonemployeeapprovalitem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeeapprovalitem', 'V1Nonemployeeapprovalitem'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeeapprovalitem
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalitem', 'V1Nonemployeeapprovalitem']
---

# Nonemployeeapprovalitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Non-Employee approval item id | [optional] 
**Approver** | Pointer to [**Nonemployeeidentityreferencewithid**](nonemployeeidentityreferencewithid) |  | [optional] 
**AccountName** | Pointer to **string** | Requested identity account name | [optional] 
**ApprovalStatus** | Pointer to [**Approvalstatus**](approvalstatus) |  | [optional] 
**ApprovalOrder** | Pointer to **float32** | Approval order | [optional] 
**Comment** | Pointer to **string** | comment of approver | [optional] 
**Modified** | Pointer to **SailPointTime** | When the request was last modified. | [optional] 
**Created** | Pointer to **SailPointTime** | When the request was created. | [optional] 
**NonEmployeeRequest** | Pointer to [**Nonemployeerequestlite**](nonemployeerequestlite) |  | [optional] 

## Methods

### NewNonemployeeapprovalitem

`func NewNonemployeeapprovalitem() *Nonemployeeapprovalitem`

NewNonemployeeapprovalitem instantiates a new Nonemployeeapprovalitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeeapprovalitemWithDefaults

`func NewNonemployeeapprovalitemWithDefaults() *Nonemployeeapprovalitem`

NewNonemployeeapprovalitemWithDefaults instantiates a new Nonemployeeapprovalitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeeapprovalitem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeeapprovalitem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeeapprovalitem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeeapprovalitem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetApprover

`func (o *Nonemployeeapprovalitem) GetApprover() Nonemployeeidentityreferencewithid`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *Nonemployeeapprovalitem) GetApproverOk() (*Nonemployeeidentityreferencewithid, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *Nonemployeeapprovalitem) SetApprover(v Nonemployeeidentityreferencewithid)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *Nonemployeeapprovalitem) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetAccountName

`func (o *Nonemployeeapprovalitem) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeeapprovalitem) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeeapprovalitem) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Nonemployeeapprovalitem) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *Nonemployeeapprovalitem) GetApprovalStatus() Approvalstatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *Nonemployeeapprovalitem) GetApprovalStatusOk() (*Approvalstatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *Nonemployeeapprovalitem) SetApprovalStatus(v Approvalstatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *Nonemployeeapprovalitem) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalOrder

`func (o *Nonemployeeapprovalitem) GetApprovalOrder() float32`

GetApprovalOrder returns the ApprovalOrder field if non-nil, zero value otherwise.

### GetApprovalOrderOk

`func (o *Nonemployeeapprovalitem) GetApprovalOrderOk() (*float32, bool)`

GetApprovalOrderOk returns a tuple with the ApprovalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalOrder

`func (o *Nonemployeeapprovalitem) SetApprovalOrder(v float32)`

SetApprovalOrder sets ApprovalOrder field to given value.

### HasApprovalOrder

`func (o *Nonemployeeapprovalitem) HasApprovalOrder() bool`

HasApprovalOrder returns a boolean if a field has been set.

### GetComment

`func (o *Nonemployeeapprovalitem) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Nonemployeeapprovalitem) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Nonemployeeapprovalitem) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Nonemployeeapprovalitem) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeeapprovalitem) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeeapprovalitem) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeeapprovalitem) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeeapprovalitem) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeeapprovalitem) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeeapprovalitem) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeeapprovalitem) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeeapprovalitem) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeRequest

`func (o *Nonemployeeapprovalitem) GetNonEmployeeRequest() Nonemployeerequestlite`

GetNonEmployeeRequest returns the NonEmployeeRequest field if non-nil, zero value otherwise.

### GetNonEmployeeRequestOk

`func (o *Nonemployeeapprovalitem) GetNonEmployeeRequestOk() (*Nonemployeerequestlite, bool)`

GetNonEmployeeRequestOk returns a tuple with the NonEmployeeRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeRequest

`func (o *Nonemployeeapprovalitem) SetNonEmployeeRequest(v Nonemployeerequestlite)`

SetNonEmployeeRequest sets NonEmployeeRequest field to given value.

### HasNonEmployeeRequest

`func (o *Nonemployeeapprovalitem) HasNonEmployeeRequest() bool`

HasNonEmployeeRequest returns a boolean if a field has been set.


