---
id: beta-import-accounts-request1
title: ImportAccountsRequest1
pagination_label: ImportAccountsRequest1
sidebar_label: ImportAccountsRequest1
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportAccountsRequest1', 'BetaImportAccountsRequest1'] 
slug: /tools/sdk/go/beta/models/import-accounts-request1
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest1', 'BetaImportAccountsRequest1']
---

# ImportAccountsRequest1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisableOptimization** | Pointer to **string** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Methods

### NewImportAccountsRequest1

`func NewImportAccountsRequest1() *ImportAccountsRequest1`

NewImportAccountsRequest1 instantiates a new ImportAccountsRequest1 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportAccountsRequest1WithDefaults

`func NewImportAccountsRequest1WithDefaults() *ImportAccountsRequest1`

NewImportAccountsRequest1WithDefaults instantiates a new ImportAccountsRequest1 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisableOptimization

`func (o *ImportAccountsRequest1) GetDisableOptimization() string`

GetDisableOptimization returns the DisableOptimization field if non-nil, zero value otherwise.

### GetDisableOptimizationOk

`func (o *ImportAccountsRequest1) GetDisableOptimizationOk() (*string, bool)`

GetDisableOptimizationOk returns a tuple with the DisableOptimization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableOptimization

`func (o *ImportAccountsRequest1) SetDisableOptimization(v string)`

SetDisableOptimization sets DisableOptimization field to given value.

### HasDisableOptimization

`func (o *ImportAccountsRequest1) HasDisableOptimization() bool`

HasDisableOptimization returns a boolean if a field has been set.


