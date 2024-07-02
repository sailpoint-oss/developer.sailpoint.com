---
id: delete-non-employee-record-in-bulk-request
title: DeleteNonEmployeeRecordInBulkRequest
pagination_label: DeleteNonEmployeeRecordInBulkRequest
sidebar_label: DeleteNonEmployeeRecordInBulkRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DeleteNonEmployeeRecordInBulkRequest'] 
slug: /tools/sdk/powershell/beta/models/delete-non-employee-record-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordInBulkRequest']
---


# DeleteNonEmployeeRecordInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  **[]String** | List of non-employee ids. | 

## Examples

- Prepare the resource
```powershell
$DeleteNonEmployeeRecordInBulkRequest = Initialize-BetaDeleteNonEmployeeRecordInBulkRequest  -Ids null
```

- Convert the resource to JSON
```powershell
$DeleteNonEmployeeRecordInBulkRequest | ConvertTo-JSON
```


[[Back to top]](#) 

