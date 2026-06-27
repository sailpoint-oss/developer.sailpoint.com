---
id: v1-import-entitlements-v1-request
title: ImportEntitlementsV1Request
pagination_label: ImportEntitlementsV1Request
sidebar_label: ImportEntitlementsV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportEntitlementsV1Request', 'V1ImportEntitlementsV1Request'] 
slug: /tools/sdk/go/sources/models/import-entitlements-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsV1Request', 'V1ImportEntitlementsV1Request']
---

# ImportEntitlementsV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Methods

### NewImportEntitlementsV1Request

`func NewImportEntitlementsV1Request() *ImportEntitlementsV1Request`

NewImportEntitlementsV1Request instantiates a new ImportEntitlementsV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportEntitlementsV1RequestWithDefaults

`func NewImportEntitlementsV1RequestWithDefaults() *ImportEntitlementsV1Request`

NewImportEntitlementsV1RequestWithDefaults instantiates a new ImportEntitlementsV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ImportEntitlementsV1Request) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ImportEntitlementsV1Request) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ImportEntitlementsV1Request) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *ImportEntitlementsV1Request) HasFile() bool`

HasFile returns a boolean if a field has been set.


