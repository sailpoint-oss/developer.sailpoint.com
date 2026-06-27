---
id: v1-import-entitlements-by-source-v1-request
title: ImportEntitlementsBySourceV1Request
pagination_label: ImportEntitlementsBySourceV1Request
sidebar_label: ImportEntitlementsBySourceV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportEntitlementsBySourceV1Request', 'V1ImportEntitlementsBySourceV1Request'] 
slug: /tools/sdk/go/entitlements/models/import-entitlements-by-source-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementsBySourceV1Request', 'V1ImportEntitlementsBySourceV1Request']
---

# ImportEntitlementsBySourceV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** | Pointer to ***os.File** | The CSV file containing the source entitlements to aggregate. | [optional] 

## Methods

### NewImportEntitlementsBySourceV1Request

`func NewImportEntitlementsBySourceV1Request() *ImportEntitlementsBySourceV1Request`

NewImportEntitlementsBySourceV1Request instantiates a new ImportEntitlementsBySourceV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportEntitlementsBySourceV1RequestWithDefaults

`func NewImportEntitlementsBySourceV1RequestWithDefaults() *ImportEntitlementsBySourceV1Request`

NewImportEntitlementsBySourceV1RequestWithDefaults instantiates a new ImportEntitlementsBySourceV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCsvFile

`func (o *ImportEntitlementsBySourceV1Request) GetCsvFile() *os.File`

GetCsvFile returns the CsvFile field if non-nil, zero value otherwise.

### GetCsvFileOk

`func (o *ImportEntitlementsBySourceV1Request) GetCsvFileOk() (**os.File, bool)`

GetCsvFileOk returns a tuple with the CsvFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCsvFile

`func (o *ImportEntitlementsBySourceV1Request) SetCsvFile(v *os.File)`

SetCsvFile sets CsvFile field to given value.

### HasCsvFile

`func (o *ImportEntitlementsBySourceV1Request) HasCsvFile() bool`

HasCsvFile returns a boolean if a field has been set.


