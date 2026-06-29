---
id: v1-accountstatuschanged-status-change
title: AccountstatuschangedStatusChange
pagination_label: AccountstatuschangedStatusChange
sidebar_label: AccountstatuschangedStatusChange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountstatuschangedStatusChange', 'V1AccountstatuschangedStatusChange'] 
slug: /tools/sdk/go/identityhistory/models/accountstatuschanged-status-change
tags: ['SDK', 'Software Development Kit', 'AccountstatuschangedStatusChange', 'V1AccountstatuschangedStatusChange']
---

# AccountstatuschangedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** | Pointer to **string** | the previous status of the account | [optional] 
**NewStatus** | Pointer to **string** | the new status of the account | [optional] 

## Methods

### NewAccountstatuschangedStatusChange

`func NewAccountstatuschangedStatusChange() *AccountstatuschangedStatusChange`

NewAccountstatuschangedStatusChange instantiates a new AccountstatuschangedStatusChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountstatuschangedStatusChangeWithDefaults

`func NewAccountstatuschangedStatusChangeWithDefaults() *AccountstatuschangedStatusChange`

NewAccountstatuschangedStatusChangeWithDefaults instantiates a new AccountstatuschangedStatusChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreviousStatus

`func (o *AccountstatuschangedStatusChange) GetPreviousStatus() string`

GetPreviousStatus returns the PreviousStatus field if non-nil, zero value otherwise.

### GetPreviousStatusOk

`func (o *AccountstatuschangedStatusChange) GetPreviousStatusOk() (*string, bool)`

GetPreviousStatusOk returns a tuple with the PreviousStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousStatus

`func (o *AccountstatuschangedStatusChange) SetPreviousStatus(v string)`

SetPreviousStatus sets PreviousStatus field to given value.

### HasPreviousStatus

`func (o *AccountstatuschangedStatusChange) HasPreviousStatus() bool`

HasPreviousStatus returns a boolean if a field has been set.

### GetNewStatus

`func (o *AccountstatuschangedStatusChange) GetNewStatus() string`

GetNewStatus returns the NewStatus field if non-nil, zero value otherwise.

### GetNewStatusOk

`func (o *AccountstatuschangedStatusChange) GetNewStatusOk() (*string, bool)`

GetNewStatusOk returns a tuple with the NewStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewStatus

`func (o *AccountstatuschangedStatusChange) SetNewStatus(v string)`

SetNewStatus sets NewStatus field to given value.

### HasNewStatus

`func (o *AccountstatuschangedStatusChange) HasNewStatus() bool`

HasNewStatus returns a boolean if a field has been set.


