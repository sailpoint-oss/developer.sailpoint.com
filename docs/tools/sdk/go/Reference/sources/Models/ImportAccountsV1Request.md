---
id: v1-import-accounts-v1-request
title: ImportAccountsV1Request
pagination_label: ImportAccountsV1Request
sidebar_label: ImportAccountsV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportAccountsV1Request', 'V1ImportAccountsV1Request'] 
slug: /tools/sdk/go/sources/models/import-accounts-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsV1Request', 'V1ImportAccountsV1Request']
---

# ImportAccountsV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** | The CSV file containing the source accounts to aggregate. | [optional] 
**DisableOptimization** | Pointer to **string** | Use this flag to reprocess every account whether or not the data has changed. | [optional] 

## Methods

### NewImportAccountsV1Request

`func NewImportAccountsV1Request() *ImportAccountsV1Request`

NewImportAccountsV1Request instantiates a new ImportAccountsV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportAccountsV1RequestWithDefaults

`func NewImportAccountsV1RequestWithDefaults() *ImportAccountsV1Request`

NewImportAccountsV1RequestWithDefaults instantiates a new ImportAccountsV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ImportAccountsV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ImportAccountsV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ImportAccountsV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *ImportAccountsV1Request) HasFile() bool`

HasFile returns a boolean if a field has been set.

### GetDisableOptimization

`func (o *ImportAccountsV1Request) GetDisableOptimization() string`

GetDisableOptimization returns the DisableOptimization field if non-nil, zero value otherwise.

### GetDisableOptimizationOk

`func (o *ImportAccountsV1Request) GetDisableOptimizationOk() (*string, bool)`

GetDisableOptimizationOk returns a tuple with the DisableOptimization field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisableOptimization

`func (o *ImportAccountsV1Request) SetDisableOptimization(v string)`

SetDisableOptimization sets DisableOptimization field to given value.

### HasDisableOptimization

`func (o *ImportAccountsV1Request) HasDisableOptimization() bool`

HasDisableOptimization returns a boolean if a field has been set.


