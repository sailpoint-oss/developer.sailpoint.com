---
id: v1-accountaggregationstatus
title: Accountaggregationstatus
pagination_label: Accountaggregationstatus
sidebar_label: Accountaggregationstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accountaggregationstatus', 'V1Accountaggregationstatus'] 
slug: /tools/sdk/go/accountaggregations/models/accountaggregationstatus
tags: ['SDK', 'Software Development Kit', 'Accountaggregationstatus', 'V1Accountaggregationstatus']
---

# Accountaggregationstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Start** | Pointer to **NullableTime** | When the aggregation started. | [optional] 
**Status** | Pointer to **string** | STARTED - Aggregation started, but source account iteration has not completed.  ACCOUNTS_COLLECTED - Source account iteration completed, but all accounts have not yet been processed.  COMPLETED - Aggregation completed (*possibly with errors*).  CANCELLED - Aggregation cancelled by user.  RETRIED - Aggregation retried because of connectivity issues with the Virtual Appliance.  TERMINATED - Aggregation marked as failed after 3 tries after connectivity issues with the Virtual Appliance.  | [optional] 
**TotalAccounts** | Pointer to **int32** | The total number of *NEW, CHANGED and DELETED* accounts that need to be processed for this aggregation. This does not include accounts that were unchanged since the previous aggregation. This can be zero if there were no new, changed or deleted accounts since the previous aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**ProcessedAccounts** | Pointer to **int32** | The number of *NEW, CHANGED and DELETED* accounts that have been processed so far. This reflects the number of accounts that have been processed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**TotalAccountsMarkedForDeletion** | Pointer to **int32** | The total number of accounts that have been marked for deletion during the aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**DeletedAccounts** | Pointer to **int32** | The number of accounts that have been deleted during the aggregation. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**TotalIdentities** | Pointer to **int32** | The total number of unique identities that have been marked for refresh. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 
**ProcessedIdentities** | Pointer to **int32** | The number of unique identities that have been refreshed at the time of the API call, and may increase on subsequent API calls while the status is ACCOUNTS_COLLECTED. *Only available when status is ACCOUNTS_COLLECTED or COMPLETED.* | [optional] 

## Methods

### NewAccountaggregationstatus

`func NewAccountaggregationstatus() *Accountaggregationstatus`

NewAccountaggregationstatus instantiates a new Accountaggregationstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountaggregationstatusWithDefaults

`func NewAccountaggregationstatusWithDefaults() *Accountaggregationstatus`

NewAccountaggregationstatusWithDefaults instantiates a new Accountaggregationstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStart

`func (o *Accountaggregationstatus) GetStart() SailPointTime`

GetStart returns the Start field if non-nil, zero value otherwise.

### GetStartOk

`func (o *Accountaggregationstatus) GetStartOk() (*SailPointTime, bool)`

GetStartOk returns a tuple with the Start field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStart

`func (o *Accountaggregationstatus) SetStart(v SailPointTime)`

SetStart sets Start field to given value.

### HasStart

`func (o *Accountaggregationstatus) HasStart() bool`

HasStart returns a boolean if a field has been set.

### SetStartNil

`func (o *Accountaggregationstatus) SetStartNil(b bool)`

 SetStartNil sets the value for Start to be an explicit nil

### UnsetStart
`func (o *Accountaggregationstatus) UnsetStart()`

UnsetStart ensures that no value is present for Start, not even an explicit nil
### GetStatus

`func (o *Accountaggregationstatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Accountaggregationstatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Accountaggregationstatus) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Accountaggregationstatus) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetTotalAccounts

`func (o *Accountaggregationstatus) GetTotalAccounts() int32`

GetTotalAccounts returns the TotalAccounts field if non-nil, zero value otherwise.

### GetTotalAccountsOk

`func (o *Accountaggregationstatus) GetTotalAccountsOk() (*int32, bool)`

GetTotalAccountsOk returns a tuple with the TotalAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAccounts

`func (o *Accountaggregationstatus) SetTotalAccounts(v int32)`

SetTotalAccounts sets TotalAccounts field to given value.

### HasTotalAccounts

`func (o *Accountaggregationstatus) HasTotalAccounts() bool`

HasTotalAccounts returns a boolean if a field has been set.

### GetProcessedAccounts

`func (o *Accountaggregationstatus) GetProcessedAccounts() int32`

GetProcessedAccounts returns the ProcessedAccounts field if non-nil, zero value otherwise.

### GetProcessedAccountsOk

`func (o *Accountaggregationstatus) GetProcessedAccountsOk() (*int32, bool)`

GetProcessedAccountsOk returns a tuple with the ProcessedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedAccounts

`func (o *Accountaggregationstatus) SetProcessedAccounts(v int32)`

SetProcessedAccounts sets ProcessedAccounts field to given value.

### HasProcessedAccounts

`func (o *Accountaggregationstatus) HasProcessedAccounts() bool`

HasProcessedAccounts returns a boolean if a field has been set.

### GetTotalAccountsMarkedForDeletion

`func (o *Accountaggregationstatus) GetTotalAccountsMarkedForDeletion() int32`

GetTotalAccountsMarkedForDeletion returns the TotalAccountsMarkedForDeletion field if non-nil, zero value otherwise.

### GetTotalAccountsMarkedForDeletionOk

`func (o *Accountaggregationstatus) GetTotalAccountsMarkedForDeletionOk() (*int32, bool)`

GetTotalAccountsMarkedForDeletionOk returns a tuple with the TotalAccountsMarkedForDeletion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalAccountsMarkedForDeletion

`func (o *Accountaggregationstatus) SetTotalAccountsMarkedForDeletion(v int32)`

SetTotalAccountsMarkedForDeletion sets TotalAccountsMarkedForDeletion field to given value.

### HasTotalAccountsMarkedForDeletion

`func (o *Accountaggregationstatus) HasTotalAccountsMarkedForDeletion() bool`

HasTotalAccountsMarkedForDeletion returns a boolean if a field has been set.

### GetDeletedAccounts

`func (o *Accountaggregationstatus) GetDeletedAccounts() int32`

GetDeletedAccounts returns the DeletedAccounts field if non-nil, zero value otherwise.

### GetDeletedAccountsOk

`func (o *Accountaggregationstatus) GetDeletedAccountsOk() (*int32, bool)`

GetDeletedAccountsOk returns a tuple with the DeletedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeletedAccounts

`func (o *Accountaggregationstatus) SetDeletedAccounts(v int32)`

SetDeletedAccounts sets DeletedAccounts field to given value.

### HasDeletedAccounts

`func (o *Accountaggregationstatus) HasDeletedAccounts() bool`

HasDeletedAccounts returns a boolean if a field has been set.

### GetTotalIdentities

`func (o *Accountaggregationstatus) GetTotalIdentities() int32`

GetTotalIdentities returns the TotalIdentities field if non-nil, zero value otherwise.

### GetTotalIdentitiesOk

`func (o *Accountaggregationstatus) GetTotalIdentitiesOk() (*int32, bool)`

GetTotalIdentitiesOk returns a tuple with the TotalIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalIdentities

`func (o *Accountaggregationstatus) SetTotalIdentities(v int32)`

SetTotalIdentities sets TotalIdentities field to given value.

### HasTotalIdentities

`func (o *Accountaggregationstatus) HasTotalIdentities() bool`

HasTotalIdentities returns a boolean if a field has been set.

### GetProcessedIdentities

`func (o *Accountaggregationstatus) GetProcessedIdentities() int32`

GetProcessedIdentities returns the ProcessedIdentities field if non-nil, zero value otherwise.

### GetProcessedIdentitiesOk

`func (o *Accountaggregationstatus) GetProcessedIdentitiesOk() (*int32, bool)`

GetProcessedIdentitiesOk returns a tuple with the ProcessedIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessedIdentities

`func (o *Accountaggregationstatus) SetProcessedIdentities(v int32)`

SetProcessedIdentities sets ProcessedIdentities field to given value.

### HasProcessedIdentities

`func (o *Accountaggregationstatus) HasProcessedIdentities() bool`

HasProcessedIdentities returns a boolean if a field has been set.


