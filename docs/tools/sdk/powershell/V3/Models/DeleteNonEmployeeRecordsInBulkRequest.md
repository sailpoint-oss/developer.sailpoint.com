---
id: delete-non-employee-records-in-bulk-request
title: DeleteNonEmployeeRecordsInBulkRequest
pagination_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_label: DeleteNonEmployeeRecordsInBulkRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DeleteNonEmployeeRecordsInBulkRequest'] 
slug: /tools/sdk/powershell/v3/models/delete-non-employee-records-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkRequest']
---


# DeleteNonEmployeeRecordsInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  **[]String** | List of non-employee ids. | 

## Examples

- Prepare the resource
```powershell
$DeleteNonEmployeeRecordsInBulkRequest = Initialize-PSSailpointDeleteNonEmployeeRecordsInBulkRequest  -Ids [2b838de9-db9b-abcf-e646-d4f274ad4238, 2d838de9-db9b-abcf-e646-d4f274ad4238]
```

- Convert the resource to JSON
```powershell
$DeleteNonEmployeeRecordsInBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

