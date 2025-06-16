---
id: v2025-import-entitlements-request
title: ImportEntitlementsRequest
pagination_label: ImportEntitlementsRequest
sidebar_label: ImportEntitlementsRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportEntitlementsRequest', 'V2025ImportEntitlementsRequest'] 
slug: /tools/sdk/go/v2025/models/import-entitlements-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsRequest', 'V2025ImportEntitlementsRequest']
---

# ImportEntitlementsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**File** | Pointer to ***os.File** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Methods

### NewImportEntitlementsRequest

`func NewImportEntitlementsRequest() *ImportEntitlementsRequest`

NewImportEntitlementsRequest instantiates a new ImportEntitlementsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportEntitlementsRequestWithDefaults

`func NewImportEntitlementsRequestWithDefaults() *ImportEntitlementsRequest`

NewImportEntitlementsRequestWithDefaults instantiates a new ImportEntitlementsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFile

`func (o *ImportEntitlementsRequest) GetFile() *os.File`

GetFile returns the File field if non-nil, zero value otherwise.

### GetFileOk

`func (o *ImportEntitlementsRequest) GetFileOk() (**os.File, bool)`

GetFileOk returns a tuple with the File field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFile

`func (o *ImportEntitlementsRequest) SetFile(v *os.File)`

SetFile sets File field to given value.

### HasFile

`func (o *ImportEntitlementsRequest) HasFile() bool`

HasFile returns a boolean if a field has been set.


