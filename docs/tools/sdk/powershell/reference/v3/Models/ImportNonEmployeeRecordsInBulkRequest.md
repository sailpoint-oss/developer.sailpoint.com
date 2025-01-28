---
id: import-non-employee-records-in-bulk-request
title: ImportNonEmployeeRecordsInBulkRequest
pagination_label: ImportNonEmployeeRecordsInBulkRequest
sidebar_label: ImportNonEmployeeRecordsInBulkRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ImportNonEmployeeRecordsInBulkRequest'] 
slug: /tools/sdk/powershell/v3/models/import-non-employee-records-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'ImportNonEmployeeRecordsInBulkRequest']
---


# ImportNonEmployeeRecordsInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarData** |  **System.IO.FileInfo** |  | [required]

## Examples

- Prepare the resource
```powershell
$ImportNonEmployeeRecordsInBulkRequest = Initialize-PSSailpoint.V3ImportNonEmployeeRecordsInBulkRequest  -VarData null
```

- Convert the resource to JSON
```powershell
$ImportNonEmployeeRecordsInBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

