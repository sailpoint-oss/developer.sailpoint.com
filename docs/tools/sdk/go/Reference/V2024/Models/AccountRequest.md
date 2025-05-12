---
id: v2024-account-request
title: AccountRequest
pagination_label: AccountRequest
sidebar_label: AccountRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountRequest', 'V2024AccountRequest'] 
slug: /tools/sdk/go/v2024/models/account-request
tags: ['SDK', 'Software Development Kit', 'AccountRequest', 'V2024AccountRequest']
---

# AccountRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountId** | Pointer to **string** | Unique ID of the account | [optional] 
**AttributeRequests** | Pointer to [**[]AttributeRequest**](attribute-request) |  | [optional] 
**Op** | Pointer to **string** | The operation that was performed | [optional] 
**ProvisioningTarget** | Pointer to [**AccountSource**](account-source) |  | [optional] 
**Result** | Pointer to [**AccountRequestResult**](account-request-result) |  | [optional] 
**Source** | Pointer to [**AccountSource**](account-source) |  | [optional] 

## Methods

### NewAccountRequest

`func NewAccountRequest() *AccountRequest`

NewAccountRequest instantiates a new AccountRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountRequestWithDefaults

`func NewAccountRequestWithDefaults() *AccountRequest`

NewAccountRequestWithDefaults instantiates a new AccountRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccountId

`func (o *AccountRequest) GetAccountId() string`

GetAccountId returns the AccountId field if non-nil, zero value otherwise.

### GetAccountIdOk

`func (o *AccountRequest) GetAccountIdOk() (*string, bool)`

GetAccountIdOk returns a tuple with the AccountId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountId

`func (o *AccountRequest) SetAccountId(v string)`

SetAccountId sets AccountId field to given value.

### HasAccountId

`func (o *AccountRequest) HasAccountId() bool`

HasAccountId returns a boolean if a field has been set.

### GetAttributeRequests

`func (o *AccountRequest) GetAttributeRequests() []AttributeRequest`

GetAttributeRequests returns the AttributeRequests field if non-nil, zero value otherwise.

### GetAttributeRequestsOk

`func (o *AccountRequest) GetAttributeRequestsOk() (*[]AttributeRequest, bool)`

GetAttributeRequestsOk returns a tuple with the AttributeRequests field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeRequests

`func (o *AccountRequest) SetAttributeRequests(v []AttributeRequest)`

SetAttributeRequests sets AttributeRequests field to given value.

### HasAttributeRequests

`func (o *AccountRequest) HasAttributeRequests() bool`

HasAttributeRequests returns a boolean if a field has been set.

### GetOp

`func (o *AccountRequest) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *AccountRequest) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *AccountRequest) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *AccountRequest) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetProvisioningTarget

`func (o *AccountRequest) GetProvisioningTarget() AccountSource`

GetProvisioningTarget returns the ProvisioningTarget field if non-nil, zero value otherwise.

### GetProvisioningTargetOk

`func (o *AccountRequest) GetProvisioningTargetOk() (*AccountSource, bool)`

GetProvisioningTargetOk returns a tuple with the ProvisioningTarget field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProvisioningTarget

`func (o *AccountRequest) SetProvisioningTarget(v AccountSource)`

SetProvisioningTarget sets ProvisioningTarget field to given value.

### HasProvisioningTarget

`func (o *AccountRequest) HasProvisioningTarget() bool`

HasProvisioningTarget returns a boolean if a field has been set.

### GetResult

`func (o *AccountRequest) GetResult() AccountRequestResult`

GetResult returns the Result field if non-nil, zero value otherwise.

### GetResultOk

`func (o *AccountRequest) GetResultOk() (*AccountRequestResult, bool)`

GetResultOk returns a tuple with the Result field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResult

`func (o *AccountRequest) SetResult(v AccountRequestResult)`

SetResult sets Result field to given value.

### HasResult

`func (o *AccountRequest) HasResult() bool`

HasResult returns a boolean if a field has been set.

### GetSource

`func (o *AccountRequest) GetSource() AccountSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AccountRequest) GetSourceOk() (*AccountSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AccountRequest) SetSource(v AccountSource)`

SetSource sets Source field to given value.

### HasSource

`func (o *AccountRequest) HasSource() bool`

HasSource returns a boolean if a field has been set.


