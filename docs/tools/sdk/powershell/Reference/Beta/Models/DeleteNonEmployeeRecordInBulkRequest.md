---
id: beta-delete-non-employee-record-in-bulk-request
title: DeleteNonEmployeeRecordInBulkRequest
pagination_label: DeleteNonEmployeeRecordInBulkRequest
sidebar_label: DeleteNonEmployeeRecordInBulkRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteNonEmployeeRecordInBulkRequest', 'BetaDeleteNonEmployeeRecordInBulkRequest'] 
slug: /tools/sdk/powershell/beta/models/delete-non-employee-record-in-bulk-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordInBulkRequest', 'BetaDeleteNonEmployeeRecordInBulkRequest']
---


# DeleteNonEmployeeRecordInBulkRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of non-employee ids. | [required]

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

