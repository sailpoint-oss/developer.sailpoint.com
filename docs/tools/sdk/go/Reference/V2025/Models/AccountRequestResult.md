---
id: account-request-result
title: AccountRequestResult
pagination_label: AccountRequestResult
sidebar_label: AccountRequestResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountRequestResult', 'AccountRequestResult'] 
slug: /tools/sdk/go//models/account-request-result
tags: ['SDK', 'Software Development Kit', 'AccountRequestResult', 'AccountRequestResult']
---

# AccountRequestResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | Pointer to **[]string** | Error message. | [optional] 
**Status** | Pointer to **string** | The status of the account request | [optional] 
**TicketId** | Pointer to **NullableString** | ID of associated ticket. | [optional] 

## Methods

### NewAccountRequestResult

`func NewAccountRequestResult() *AccountRequestResult`

NewAccountRequestResult instantiates a new AccountRequestResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountRequestResultWithDefaults

`func NewAccountRequestResultWithDefaults() *AccountRequestResult`

NewAccountRequestResultWithDefaults instantiates a new AccountRequestResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetErrors

`func (o *AccountRequestResult) GetErrors() []string`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *AccountRequestResult) GetErrorsOk() (*[]string, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *AccountRequestResult) SetErrors(v []string)`

SetErrors sets Errors field to given value.

### HasErrors

`func (o *AccountRequestResult) HasErrors() bool`

HasErrors returns a boolean if a field has been set.

### GetStatus

`func (o *AccountRequestResult) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccountRequestResult) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccountRequestResult) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccountRequestResult) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTicketId

`func (o *AccountRequestResult) GetTicketId() string`

GetTicketId returns the TicketId field if non-nil, zero value otherwise.

### GetTicketIdOk

`func (o *AccountRequestResult) GetTicketIdOk() (*string, bool)`

GetTicketIdOk returns a tuple with the TicketId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTicketId

`func (o *AccountRequestResult) SetTicketId(v string)`

SetTicketId sets TicketId field to given value.

### HasTicketId

`func (o *AccountRequestResult) HasTicketId() bool`

HasTicketId returns a boolean if a field has been set.

### SetTicketIdNil

`func (o *AccountRequestResult) SetTicketIdNil(b bool)`

 SetTicketIdNil sets the value for TicketId to be an explicit nil

### UnsetTicketId
`func (o *AccountRequestResult) UnsetTicketId()`

UnsetTicketId ensures that no value is present for TicketId, not even an explicit nil

