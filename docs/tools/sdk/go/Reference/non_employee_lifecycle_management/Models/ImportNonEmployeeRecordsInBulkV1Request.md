---
id: v1-import-non-employee-records-in-bulk-v1-request
title: ImportNonEmployeeRecordsInBulkV1Request
pagination_label: ImportNonEmployeeRecordsInBulkV1Request
sidebar_label: ImportNonEmployeeRecordsInBulkV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ImportNonEmployeeRecordsInBulkV1Request', 'V1ImportNonEmployeeRecordsInBulkV1Request'] 
slug: /tools/sdk/go/nonemployeelifecyclemanagement/models/import-non-employee-records-in-bulk-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportNonEmployeeRecordsInBulkV1Request', 'V1ImportNonEmployeeRecordsInBulkV1Request']
---

# ImportNonEmployeeRecordsInBulkV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | ***os.File** |  | 

## Methods

### NewImportNonEmployeeRecordsInBulkV1Request

`func NewImportNonEmployeeRecordsInBulkV1Request(data *os.File, ) *ImportNonEmployeeRecordsInBulkV1Request`

NewImportNonEmployeeRecordsInBulkV1Request instantiates a new ImportNonEmployeeRecordsInBulkV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewImportNonEmployeeRecordsInBulkV1RequestWithDefaults

`func NewImportNonEmployeeRecordsInBulkV1RequestWithDefaults() *ImportNonEmployeeRecordsInBulkV1Request`

NewImportNonEmployeeRecordsInBulkV1RequestWithDefaults instantiates a new ImportNonEmployeeRecordsInBulkV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ImportNonEmployeeRecordsInBulkV1Request) GetData() *os.File`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ImportNonEmployeeRecordsInBulkV1Request) GetDataOk() (**os.File, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ImportNonEmployeeRecordsInBulkV1Request) SetData(v *os.File)`

SetData sets Data field to given value.



