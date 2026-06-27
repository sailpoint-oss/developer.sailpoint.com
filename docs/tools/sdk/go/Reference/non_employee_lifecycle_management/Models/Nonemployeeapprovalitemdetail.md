---
id: v1-nonemployeeapprovalitemdetail
title: Nonemployeeapprovalitemdetail
pagination_label: Nonemployeeapprovalitemdetail
sidebar_label: Nonemployeeapprovalitemdetail
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeeapprovalitemdetail', 'V1Nonemployeeapprovalitemdetail'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeeapprovalitemdetail
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalitemdetail', 'V1Nonemployeeapprovalitemdetail']
---

# Nonemployeeapprovalitemdetail

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
**NonEmployeeRequest** | Pointer to [**Nonemployeerequestwithoutapprovalitem**](nonemployeerequestwithoutapprovalitem) |  | [optional] 

## Methods

### NewNonemployeeapprovalitemdetail

`func NewNonemployeeapprovalitemdetail() *Nonemployeeapprovalitemdetail`

NewNonemployeeapprovalitemdetail instantiates a new Nonemployeeapprovalitemdetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeeapprovalitemdetailWithDefaults

`func NewNonemployeeapprovalitemdetailWithDefaults() *Nonemployeeapprovalitemdetail`

NewNonemployeeapprovalitemdetailWithDefaults instantiates a new Nonemployeeapprovalitemdetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeeapprovalitemdetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeeapprovalitemdetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeeapprovalitemdetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeeapprovalitemdetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetApprover

`func (o *Nonemployeeapprovalitemdetail) GetApprover() Nonemployeeidentityreferencewithid`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *Nonemployeeapprovalitemdetail) GetApproverOk() (*Nonemployeeidentityreferencewithid, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *Nonemployeeapprovalitemdetail) SetApprover(v Nonemployeeidentityreferencewithid)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *Nonemployeeapprovalitemdetail) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetAccountName

`func (o *Nonemployeeapprovalitemdetail) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeeapprovalitemdetail) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeeapprovalitemdetail) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Nonemployeeapprovalitemdetail) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *Nonemployeeapprovalitemdetail) GetApprovalStatus() Approvalstatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *Nonemployeeapprovalitemdetail) GetApprovalStatusOk() (*Approvalstatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *Nonemployeeapprovalitemdetail) SetApprovalStatus(v Approvalstatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *Nonemployeeapprovalitemdetail) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalOrder

`func (o *Nonemployeeapprovalitemdetail) GetApprovalOrder() float32`

GetApprovalOrder returns the ApprovalOrder field if non-nil, zero value otherwise.

### GetApprovalOrderOk

`func (o *Nonemployeeapprovalitemdetail) GetApprovalOrderOk() (*float32, bool)`

GetApprovalOrderOk returns a tuple with the ApprovalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalOrder

`func (o *Nonemployeeapprovalitemdetail) SetApprovalOrder(v float32)`

SetApprovalOrder sets ApprovalOrder field to given value.

### HasApprovalOrder

`func (o *Nonemployeeapprovalitemdetail) HasApprovalOrder() bool`

HasApprovalOrder returns a boolean if a field has been set.

### GetComment

`func (o *Nonemployeeapprovalitemdetail) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Nonemployeeapprovalitemdetail) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Nonemployeeapprovalitemdetail) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Nonemployeeapprovalitemdetail) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeeapprovalitemdetail) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeeapprovalitemdetail) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeeapprovalitemdetail) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeeapprovalitemdetail) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeeapprovalitemdetail) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeeapprovalitemdetail) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeeapprovalitemdetail) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeeapprovalitemdetail) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetNonEmployeeRequest

`func (o *Nonemployeeapprovalitemdetail) GetNonEmployeeRequest() Nonemployeerequestwithoutapprovalitem`

GetNonEmployeeRequest returns the NonEmployeeRequest field if non-nil, zero value otherwise.

### GetNonEmployeeRequestOk

`func (o *Nonemployeeapprovalitemdetail) GetNonEmployeeRequestOk() (*Nonemployeerequestwithoutapprovalitem, bool)`

GetNonEmployeeRequestOk returns a tuple with the NonEmployeeRequest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonEmployeeRequest

`func (o *Nonemployeeapprovalitemdetail) SetNonEmployeeRequest(v Nonemployeerequestwithoutapprovalitem)`

SetNonEmployeeRequest sets NonEmployeeRequest field to given value.

### HasNonEmployeeRequest

`func (o *Nonemployeeapprovalitemdetail) HasNonEmployeeRequest() bool`

HasNonEmployeeRequest returns a boolean if a field has been set.


