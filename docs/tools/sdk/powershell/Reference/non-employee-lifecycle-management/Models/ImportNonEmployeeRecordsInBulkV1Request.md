---
id: import-non-employee-records-in-bulk-v1-request
title: ImportNonEmployeeRecordsInBulkV1Request
pagination_label: ImportNonEmployeeRecordsInBulkV1Request
sidebar_label: ImportNonEmployeeRecordsInBulkV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportNonEmployeeRecordsInBulkV1Request', 'ImportNonEmployeeRecordsInBulkV1Request'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/import-non-employee-records-in-bulk-v1-request
tags: ['SDK', 'Software Development Kit', 'ImportNonEmployeeRecordsInBulkV1Request', 'ImportNonEmployeeRecordsInBulkV1Request']
---


# ImportNonEmployeeRecordsInBulkV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** | **System.IO.FileInfo** |  | [required]

## Examples

- Prepare the resource
```powershell
$ImportNonEmployeeRecordsInBulkV1Request = Initialize-ImportNonEmployeeRecordsInBulkV1Request  -VarData null
```

- Convert the resource to JSON
```powershell
$ImportNonEmployeeRecordsInBulkV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

