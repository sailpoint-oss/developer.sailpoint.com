---
id: v2024-delete-non-employee-records-in-bulk-request
title: DeleteNonEmployeeRecordsInBulkRequest
pagination_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteNonEmployeeRecordsInBulkRequest', 'V2024DeleteNonEmployeeRecordsInBulkRequest'] 
slug: /tools/sdk/powershell/v2024/models/delete-non-employee-records-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkRequest', 'V2024DeleteNonEmployeeRecordsInBulkRequest']
---


# DeleteNonEmployeeRecordsInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of non-employee ids. | [required]

## Examples

- Prepare the resource
```powershell
$DeleteNonEmployeeRecordsInBulkRequest = Initialize-PSSailpoint.V2024DeleteNonEmployeeRecordsInBulkRequest  -Ids [2b838de9-db9b-abcf-e646-d4f274ad4238, 2d838de9-db9b-abcf-e646-d4f274ad4238]
```

- Convert the resource to JSON
```powershell
$DeleteNonEmployeeRecordsInBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

