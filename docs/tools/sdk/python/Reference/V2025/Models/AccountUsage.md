---
id: v2025-account-usage
title: AccountUsage
pagination_label: AccountUsage
sidebar_label: AccountUsage
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccountUsage', 'V2025AccountUsage'] 
slug: /tools/sdk/go/v2025/models/account-usage
tags: ['SDK', 'Software Development Kit', 'AccountUsage', 'V2025AccountUsage']
---

# AccountUsage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | Pointer to **string** | The first day of the month for which activity is aggregated. | [optional] 
**Count** | Pointer to **int64** | The number of days within the month that the account was active in a source. | [optional] 

## Methods

### NewAccountUsage

`func NewAccountUsage() *AccountUsage`

NewAccountUsage instantiates a new AccountUsage object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountUsageWithDefaults

`func NewAccountUsageWithDefaults() *AccountUsage`

NewAccountUsageWithDefaults instantiates a new AccountUsage object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *AccountUsage) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AccountUsage) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AccountUsage) SetDate(v string)`

SetDate sets Date field to given value.

### HasDate

`func (o *AccountUsage) HasDate() bool`

HasDate returns a boolean if a field has been set.

### GetCount

`func (o *AccountUsage) GetCount() int64`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *AccountUsage) GetCountOk() (*int64, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *AccountUsage) SetCount(v int64)`

SetCount sets Count field to given value.

### HasCount

`func (o *AccountUsage) HasCount() bool`

HasCount returns a boolean if a field has been set.


