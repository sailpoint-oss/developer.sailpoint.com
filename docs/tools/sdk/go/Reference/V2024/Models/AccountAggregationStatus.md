---
id: v2024-account-aggregation-status
title: AccountAggregationStatus
pagination_label: AccountAggregationStatus
sidebar_label: AccountAggregationStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountAggregationStatus', 'V2024AccountAggregationStatus'] 
slug: /tools/sdk/go/v2024/models/account-aggregation-status
tags: ['SDK', 'Software Development Kit', 'AccountAggregationStatus', 'V2024AccountAggregationStatus']
---

# AccountAggregationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **NullableTime** | When the aggregation started. | [optional] 
**Status** | Pointer to **string** | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] 
**TotalAccounts** | Pointer to **int32** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**ProcessedAccounts** | Pointer to **int32** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 

## Methods

### NewAccountAggregationStatus

`func NewAccountAggregationStatus() *AccountAggregationStatus`

NewAccountAggregationStatus instantiates a new AccountAggregationStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountAggregationStatusWithDefaults

`func NewAccountAggregationStatusWithDefaults() *AccountAggregationStatus`

NewAccountAggregationStatusWithDefaults instantiates a new AccountAggregationStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *AccountAggregationStatus) GetStart() SailPointTime`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *AccountAggregationStatus) GetStartOk() (*SailPointTime, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *AccountAggregationStatus) SetStart(v SailPointTime)`

SetStart sets Start field to given value.

### HasStart

`func (o *AccountAggregationStatus) HasStart() bool`

HasStart returns a boolean if a field has been set.

### SetStartNil

`func (o *AccountAggregationStatus) SetStartNil(b bool)`

 SetStartNil sets the value for Start to be an explicit nil

### UnsetStart
`func (o *AccountAggregationStatus) UnsetStart()`

UnsetStart ensures that no value is present for Start, not even an explicit nil
### GetStatus

`func (o *AccountAggregationStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccountAggregationStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccountAggregationStatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *AccountAggregationStatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalAccounts

`func (o *AccountAggregationStatus) GetTotalAccounts() int32`

GetTotalAccounts returns the TotalAccounts field if non-nil, zero value otherwise.

### GetTotalAccountsOk

`func (o *AccountAggregationStatus) GetTotalAccountsOk() (*int32, bool)`

GetTotalAccountsOk returns a tuple with the TotalAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAccounts

`func (o *AccountAggregationStatus) SetTotalAccounts(v int32)`

SetTotalAccounts sets TotalAccounts field to given value.

### HasTotalAccounts

`func (o *AccountAggregationStatus) HasTotalAccounts() bool`

HasTotalAccounts returns a boolean if a field has been set.

### GetProcessedAccounts

`func (o *AccountAggregationStatus) GetProcessedAccounts() int32`

GetProcessedAccounts returns the ProcessedAccounts field if non-nil, zero value otherwise.

### GetProcessedAccountsOk

`func (o *AccountAggregationStatus) GetProcessedAccountsOk() (*int32, bool)`

GetProcessedAccountsOk returns a tuple with the ProcessedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedAccounts

`func (o *AccountAggregationStatus) SetProcessedAccounts(v int32)`

SetProcessedAccounts sets ProcessedAccounts field to given value.

### HasProcessedAccounts

`func (o *AccountAggregationStatus) HasProcessedAccounts() bool`

HasProcessedAccounts returns a boolean if a field has been set.


