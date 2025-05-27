---
id: v2024-account-status-changed-status-change
title: AccountStatusChangedStatusChange
pagination_label: AccountStatusChangedStatusChange
sidebar_label: AccountStatusChangedStatusChange
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountStatusChangedStatusChange', 'V2024AccountStatusChangedStatusChange'] 
slug: /tools/sdk/go/v2024/models/account-status-changed-status-change
tags: ['SDK', 'Software Development Kit', 'AccountStatusChangedStatusChange', 'V2024AccountStatusChangedStatusChange']
---

# AccountStatusChangedStatusChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PreviousStatus** | Pointer to **string** | the previous status of the account | [optional] 
**NewStatus** | Pointer to **string** | the new status of the account | [optional] 

## Methods

### NewAccountStatusChangedStatusChange

`func NewAccountStatusChangedStatusChange() *AccountStatusChangedStatusChange`

NewAccountStatusChangedStatusChange instantiates a new AccountStatusChangedStatusChange object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountStatusChangedStatusChangeWithDefaults

`func NewAccountStatusChangedStatusChangeWithDefaults() *AccountStatusChangedStatusChange`

NewAccountStatusChangedStatusChangeWithDefaults instantiates a new AccountStatusChangedStatusChange object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPreviousStatus

`func (o *AccountStatusChangedStatusChange) GetPreviousStatus() string`

GetPreviousStatus returns the PreviousStatus field if non-nil, zero value otherwise.

### GetPreviousStatusOk

`func (o *AccountStatusChangedStatusChange) GetPreviousStatusOk() (*string, bool)`

GetPreviousStatusOk returns a tuple with the PreviousStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousStatus

`func (o *AccountStatusChangedStatusChange) SetPreviousStatus(v string)`

SetPreviousStatus sets PreviousStatus field to given value.

### HasPreviousStatus

`func (o *AccountStatusChangedStatusChange) HasPreviousStatus() bool`

HasPreviousStatus returns a boolean if a field has been set.

### GetNewStatus

`func (o *AccountStatusChangedStatusChange) GetNewStatus() string`

GetNewStatus returns the NewStatus field if non-nil, zero value otherwise.

### GetNewStatusOk

`func (o *AccountStatusChangedStatusChange) GetNewStatusOk() (*string, bool)`

GetNewStatusOk returns a tuple with the NewStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewStatus

`func (o *AccountStatusChangedStatusChange) SetNewStatus(v string)`

SetNewStatus sets NewStatus field to given value.

### HasNewStatus

`func (o *AccountStatusChangedStatusChange) HasNewStatus() bool`

HasNewStatus returns a boolean if a field has been set.


