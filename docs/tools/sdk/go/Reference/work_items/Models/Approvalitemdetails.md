---
id: v1-approvalitemdetails
title: Approvalitemdetails
pagination_label: Approvalitemdetails
sidebar_label: Approvalitemdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalitemdetails', 'V1Approvalitemdetails'] 
slug: /tools/sdk/go/workitems/models/approvalitemdetails
tags: ['SDK', 'Software Development Kit', 'Approvalitemdetails', 'V1Approvalitemdetails']
---

# Approvalitemdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The approval item's ID | [optional] 
**Account** | Pointer to **NullableString** | The account referenced by the approval item | [optional] 
**Application** | Pointer to **string** | The name of the application/source | [optional] 
**Name** | Pointer to **NullableString** | The attribute's name | [optional] 
**Operation** | Pointer to **string** | The attribute's operation | [optional] 
**Value** | Pointer to **NullableString** | The attribute's value | [optional] 
**State** | Pointer to [**Workitemstate**](workitemstate) |  | [optional] 

## Methods

### NewApprovalitemdetails

`func NewApprovalitemdetails() *Approvalitemdetails`

NewApprovalitemdetails instantiates a new Approvalitemdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalitemdetailsWithDefaults

`func NewApprovalitemdetailsWithDefaults() *Approvalitemdetails`

NewApprovalitemdetailsWithDefaults instantiates a new Approvalitemdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Approvalitemdetails) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Approvalitemdetails) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Approvalitemdetails) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Approvalitemdetails) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccount

`func (o *Approvalitemdetails) GetAccount() string`

GetAccount returns the Account field if non-nil, zero value otherwise.

### GetAccountOk

`func (o *Approvalitemdetails) GetAccountOk() (*string, bool)`

GetAccountOk returns a tuple with the Account field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccount

`func (o *Approvalitemdetails) SetAccount(v string)`

SetAccount sets Account field to given value.

### HasAccount

`func (o *Approvalitemdetails) HasAccount() bool`

HasAccount returns a boolean if a field has been set.

### SetAccountNil

`func (o *Approvalitemdetails) SetAccountNil(b bool)`

 SetAccountNil sets the value for Account to be an explicit nil

### UnsetAccount
`func (o *Approvalitemdetails) UnsetAccount()`

UnsetAccount ensures that no value is present for Account, not even an explicit nil
### GetApplication

`func (o *Approvalitemdetails) GetApplication() string`

GetApplication returns the Application field if non-nil, zero value otherwise.

### GetApplicationOk

`func (o *Approvalitemdetails) GetApplicationOk() (*string, bool)`

GetApplicationOk returns a tuple with the Application field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplication

`func (o *Approvalitemdetails) SetApplication(v string)`

SetApplication sets Application field to given value.

### HasApplication

`func (o *Approvalitemdetails) HasApplication() bool`

HasApplication returns a boolean if a field has been set.

### GetName

`func (o *Approvalitemdetails) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Approvalitemdetails) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Approvalitemdetails) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Approvalitemdetails) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *Approvalitemdetails) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Approvalitemdetails) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetOperation

`func (o *Approvalitemdetails) GetOperation() string`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *Approvalitemdetails) GetOperationOk() (*string, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *Approvalitemdetails) SetOperation(v string)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *Approvalitemdetails) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetValue

`func (o *Approvalitemdetails) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Approvalitemdetails) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Approvalitemdetails) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Approvalitemdetails) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *Approvalitemdetails) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *Approvalitemdetails) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetState

`func (o *Approvalitemdetails) GetState() Workitemstate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Approvalitemdetails) GetStateOk() (*Workitemstate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Approvalitemdetails) SetState(v Workitemstate)`

SetState sets State field to given value.

### HasState

`func (o *Approvalitemdetails) HasState() bool`

HasState returns a boolean if a field has been set.


