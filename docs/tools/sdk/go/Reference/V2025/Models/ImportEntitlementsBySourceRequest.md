---
id: import-entitlements-by-source-request
title: ImportEntitlementsBySourceRequest
pagination_label: ImportEntitlementsBySourceRequest
sidebar_label: ImportEntitlementsBySourceRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportEntitlementsBySourceRequest', 'ImportEntitlementsBySourceRequest'] 
slug: /tools/sdk/go//models/import-entitlements-by-source-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsBySourceRequest', 'ImportEntitlementsBySourceRequest']
---

# ImportEntitlementsBySourceRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** | Pointer to ***os.File** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Methods

### NewImportEntitlementsBySourceRequest

`func NewImportEntitlementsBySourceRequest() *ImportEntitlementsBySourceRequest`

NewImportEntitlementsBySourceRequest instantiates a new ImportEntitlementsBySourceRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportEntitlementsBySourceRequestWithDefaults

`func NewImportEntitlementsBySourceRequestWithDefaults() *ImportEntitlementsBySourceRequest`

NewImportEntitlementsBySourceRequestWithDefaults instantiates a new ImportEntitlementsBySourceRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCsvFile

`func (o *ImportEntitlementsBySourceRequest) GetCsvFile() *os.File`

GetCsvFile returns the CsvFile field if non-nil, zero value otherwise.

### GetCsvFileOk

`func (o *ImportEntitlementsBySourceRequest) GetCsvFileOk() (**os.File, bool)`

GetCsvFileOk returns a tuple with the CsvFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCsvFile

`func (o *ImportEntitlementsBySourceRequest) SetCsvFile(v *os.File)`

SetCsvFile sets CsvFile field to given value.

### HasCsvFile

`func (o *ImportEntitlementsBySourceRequest) HasCsvFile() bool`

HasCsvFile returns a boolean if a field has been set.


