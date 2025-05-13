---
id: beta-import-accounts-request
title: ImportAccountsRequest
pagination_label: ImportAccountsRequest
sidebar_label: ImportAccountsRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportAccountsRequest', 'BetaImportAccountsRequest'] 
slug: /tools/sdk/go/beta/models/import-accounts-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsRequest', 'BetaImportAccountsRequest']
---

# ImportAccountsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** | The CSV file containing the source accounts to aggregate. | [optional] 
**DisableOptimization** | Pointer to **string** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Methods

### NewImportAccountsRequest

`func NewImportAccountsRequest() *ImportAccountsRequest`

NewImportAccountsRequest instantiates a new ImportAccountsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportAccountsRequestWithDefaults

`func NewImportAccountsRequestWithDefaults() *ImportAccountsRequest`

NewImportAccountsRequestWithDefaults instantiates a new ImportAccountsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ImportAccountsRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ImportAccountsRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ImportAccountsRequest) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *ImportAccountsRequest) HasFile() bool`

HasFile returns a boolean if a field has been set.

### GetDisableOptimization

`func (o *ImportAccountsRequest) GetDisableOptimization() string`

GetDisableOptimization returns the DisableOptimization field if non-nil, zero value otherwise.

### GetDisableOptimizationOk

`func (o *ImportAccountsRequest) GetDisableOptimizationOk() (*string, bool)`

GetDisableOptimizationOk returns a tuple with the DisableOptimization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableOptimization

`func (o *ImportAccountsRequest) SetDisableOptimization(v string)`

SetDisableOptimization sets DisableOptimization field to given value.

### HasDisableOptimization

`func (o *ImportAccountsRequest) HasDisableOptimization() bool`

HasDisableOptimization returns a boolean if a field has been set.


