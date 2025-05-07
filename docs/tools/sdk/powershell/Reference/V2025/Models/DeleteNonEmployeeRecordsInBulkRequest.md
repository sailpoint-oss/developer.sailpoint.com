---
id: v2025-delete-non-employee-records-in-bulk-request
title: DeleteNonEmployeeRecordsInBulkRequest
pagination_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteNonEmployeeRecordsInBulkRequest', 'V2025DeleteNonEmployeeRecordsInBulkRequest'] 
slug: /tools/sdk/powershell/v2025/models/delete-non-employee-records-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkRequest', 'V2025DeleteNonEmployeeRecordsInBulkRequest']
---


# DeleteNonEmployeeRecordsInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of non-employee ids. | [required]

## Examples

- Prepare the resource
```powershell
$DeleteNonEmployeeRecordsInBulkRequest = Initialize-V2025DeleteNonEmployeeRecordsInBulkRequest  -Ids [2b838de9-db9b-abcf-e646-d4f274ad4238, 2d838de9-db9b-abcf-e646-d4f274ad4238]
```

- Convert the resource to JSON
```powershell
$DeleteNonEmployeeRecordsInBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

