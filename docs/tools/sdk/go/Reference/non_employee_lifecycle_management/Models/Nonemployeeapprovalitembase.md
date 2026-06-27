---
id: v1-nonemployeeapprovalitembase
title: Nonemployeeapprovalitembase
pagination_label: Nonemployeeapprovalitembase
sidebar_label: Nonemployeeapprovalitembase
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Nonemployeeapprovalitembase', 'V1Nonemployeeapprovalitembase'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/nonemployeeapprovalitembase
tags: ['SDK', 'Software Development Kit', 'Nonemployeeapprovalitembase', 'V1Nonemployeeapprovalitembase']
---

# Nonemployeeapprovalitembase

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

## Methods

### NewNonemployeeapprovalitembase

`func NewNonemployeeapprovalitembase() *Nonemployeeapprovalitembase`

NewNonemployeeapprovalitembase instantiates a new Nonemployeeapprovalitembase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewNonemployeeapprovalitembaseWithDefaults

`func NewNonemployeeapprovalitembaseWithDefaults() *Nonemployeeapprovalitembase`

NewNonemployeeapprovalitembaseWithDefaults instantiates a new Nonemployeeapprovalitembase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Nonemployeeapprovalitembase) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Nonemployeeapprovalitembase) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Nonemployeeapprovalitembase) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Nonemployeeapprovalitembase) HasId() bool`

HasId returns a boolean if a field has been set.

### GetApprover

`func (o *Nonemployeeapprovalitembase) GetApprover() Nonemployeeidentityreferencewithid`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *Nonemployeeapprovalitembase) GetApproverOk() (*Nonemployeeidentityreferencewithid, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *Nonemployeeapprovalitembase) SetApprover(v Nonemployeeidentityreferencewithid)`

SetApprover sets Approver field to given value.

### HasApprover

`func (o *Nonemployeeapprovalitembase) HasApprover() bool`

HasApprover returns a boolean if a field has been set.

### GetAccountName

`func (o *Nonemployeeapprovalitembase) GetAccountName() string`

GetAccountName returns the AccountName field if non-nil, zero value otherwise.

### GetAccountNameOk

`func (o *Nonemployeeapprovalitembase) GetAccountNameOk() (*string, bool)`

GetAccountNameOk returns a tuple with the AccountName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountName

`func (o *Nonemployeeapprovalitembase) SetAccountName(v string)`

SetAccountName sets AccountName field to given value.

### HasAccountName

`func (o *Nonemployeeapprovalitembase) HasAccountName() bool`

HasAccountName returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *Nonemployeeapprovalitembase) GetApprovalStatus() Approvalstatus`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *Nonemployeeapprovalitembase) GetApprovalStatusOk() (*Approvalstatus, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *Nonemployeeapprovalitembase) SetApprovalStatus(v Approvalstatus)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *Nonemployeeapprovalitembase) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalOrder

`func (o *Nonemployeeapprovalitembase) GetApprovalOrder() float32`

GetApprovalOrder returns the ApprovalOrder field if non-nil, zero value otherwise.

### GetApprovalOrderOk

`func (o *Nonemployeeapprovalitembase) GetApprovalOrderOk() (*float32, bool)`

GetApprovalOrderOk returns a tuple with the ApprovalOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalOrder

`func (o *Nonemployeeapprovalitembase) SetApprovalOrder(v float32)`

SetApprovalOrder sets ApprovalOrder field to given value.

### HasApprovalOrder

`func (o *Nonemployeeapprovalitembase) HasApprovalOrder() bool`

HasApprovalOrder returns a boolean if a field has been set.

### GetComment

`func (o *Nonemployeeapprovalitembase) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Nonemployeeapprovalitembase) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Nonemployeeapprovalitembase) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Nonemployeeapprovalitembase) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetModified

`func (o *Nonemployeeapprovalitembase) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Nonemployeeapprovalitembase) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Nonemployeeapprovalitembase) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Nonemployeeapprovalitembase) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCreated

`func (o *Nonemployeeapprovalitembase) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Nonemployeeapprovalitembase) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Nonemployeeapprovalitembase) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Nonemployeeapprovalitembase) HasCreated() bool`

HasCreated returns a boolean if a field has been set.


