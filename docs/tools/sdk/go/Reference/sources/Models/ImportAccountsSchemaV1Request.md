---
id: v1-import-accounts-schema-v1-request
title: ImportAccountsSchemaV1Request
pagination_label: ImportAccountsSchemaV1Request
sidebar_label: ImportAccountsSchemaV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportAccountsSchemaV1Request', 'V1ImportAccountsSchemaV1Request'] 
slug: /tools/sdk/go/sources/models/import-accounts-schema-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportAccountsSchemaV1Request', 'V1ImportAccountsSchemaV1Request']
---

# ImportAccountsSchemaV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** |  | [optional] 

## Methods

### NewImportAccountsSchemaV1Request

`func NewImportAccountsSchemaV1Request() *ImportAccountsSchemaV1Request`

NewImportAccountsSchemaV1Request instantiates a new ImportAccountsSchemaV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportAccountsSchemaV1RequestWithDefaults

`func NewImportAccountsSchemaV1RequestWithDefaults() *ImportAccountsSchemaV1Request`

NewImportAccountsSchemaV1RequestWithDefaults instantiates a new ImportAccountsSchemaV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ImportAccountsSchemaV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ImportAccountsSchemaV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ImportAccountsSchemaV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *ImportAccountsSchemaV1Request) HasFile() bool`

HasFile returns a boolean if a field has been set.


