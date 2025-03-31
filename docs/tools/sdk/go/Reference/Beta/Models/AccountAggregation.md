---
id: beta-account-aggregation
title: AccountAggregation
pagination_label: AccountAggregation
sidebar_label: AccountAggregation
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAggregation', 'BetaAccountAggregation'] 
slug: /tools/sdk/go/beta/models/account-aggregation
tags: ['SDK', 'Software Development Kit', 'AccountAggregation', 'BetaAccountAggregation']
---

# AccountAggregation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **time.Time** | When the aggregation started. | [optional] 
**Status** | Pointer to **string** | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] 
**TotalAccounts** | Pointer to **int32** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**ProcessedAccounts** | Pointer to **int32** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 

## Methods

### NewAccountAggregation

`func NewAccountAggregation() *AccountAggregation`

NewAccountAggregation instantiates a new AccountAggregation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAggregationWithDefaults

`func NewAccountAggregationWithDefaults() *AccountAggregation`

NewAccountAggregationWithDefaults instantiates a new AccountAggregation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *AccountAggregation) GetStart() time.Time`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *AccountAggregation) GetStartOk() (*time.Time, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *AccountAggregation) SetStart(v time.Time)`

SetStart sets Start field to given value.

### HasStart

`func (o *AccountAggregation) HasStart() bool`

HasStart returns a boolean if a field has been set.

### GetStatus

`func (o *AccountAggregation) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccountAggregation) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccountAggregation) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccountAggregation) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalAccounts

`func (o *AccountAggregation) GetTotalAccounts() int32`

GetTotalAccounts returns the TotalAccounts field if non-nil, zero value otherwise.

### GetTotalAccountsOk

`func (o *AccountAggregation) GetTotalAccountsOk() (*int32, bool)`

GetTotalAccountsOk returns a tuple with the TotalAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAccounts

`func (o *AccountAggregation) SetTotalAccounts(v int32)`

SetTotalAccounts sets TotalAccounts field to given value.

### HasTotalAccounts

`func (o *AccountAggregation) HasTotalAccounts() bool`

HasTotalAccounts returns a boolean if a field has been set.

### GetProcessedAccounts

`func (o *AccountAggregation) GetProcessedAccounts() int32`

GetProcessedAccounts returns the ProcessedAccounts field if non-nil, zero value otherwise.

### GetProcessedAccountsOk

`func (o *AccountAggregation) GetProcessedAccountsOk() (*int32, bool)`

GetProcessedAccountsOk returns a tuple with the ProcessedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedAccounts

`func (o *AccountAggregation) SetProcessedAccounts(v int32)`

SetProcessedAccounts sets ProcessedAccounts field to given value.

### HasProcessedAccounts

`func (o *AccountAggregation) HasProcessedAccounts() bool`

HasProcessedAccounts returns a boolean if a field has been set.


