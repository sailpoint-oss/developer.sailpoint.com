---
id: import-entitlement-csv-request
title: ImportEntitlementCsvRequest
pagination_label: ImportEntitlementCsvRequest
sidebar_label: ImportEntitlementCsvRequest
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ImportEntitlementCsvRequest'] 
slug: /tools/sdk/go/beta/models/import-entitlement-csv-request
tags: ['SDK', 'Software Development Kit', 'ImportEntitlementCsvRequest']
---

# ImportEntitlementCsvRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CsvFile** |  ***os.File** |  | 

## Methods

### NewImportEntitlementCsvRequest

`func NewImportEntitlementCsvRequest(csvFile *os.File, ) *ImportEntitlementCsvRequest`

NewImportEntitlementCsvRequest instantiates a new ImportEntitlementCsvRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportEntitlementCsvRequestWithDefaults

`func NewImportEntitlementCsvRequestWithDefaults() *ImportEntitlementCsvRequest`

NewImportEntitlementCsvRequestWithDefaults instantiates a new ImportEntitlementCsvRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCsvFile

`func (o *ImportEntitlementCsvRequest) GetCsvFile() *os.File`

GetCsvFile returns the CsvFile field if non-nil, zero value otherwise.

### GetCsvFileOk

`func (o *ImportEntitlementCsvRequest) GetCsvFileOk() (**os.File, bool)`

GetCsvFileOk returns a tuple with the CsvFile field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCsvFile

`func (o *ImportEntitlementCsvRequest) SetCsvFile(v *os.File)`

SetCsvFile sets CsvFile field to given value.



[[Back to top]](#) 


