---
id: delete-non-employee-records-in-bulk-v1-request
title: DeleteNonEmployeeRecordsInBulkV1Request
pagination_label: DeleteNonEmployeeRecordsInBulkV1Request
sidebar_label: DeleteNonEmployeeRecordsInBulkV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteNonEmployeeRecordsInBulkV1Request', 'DeleteNonEmployeeRecordsInBulkV1Request'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/delete-non-employee-records-in-bulk-v1-request
tags: ['SDK', 'Software Development Kit', 'DeleteNonEmployeeRecordsInBulkV1Request', 'DeleteNonEmployeeRecordsInBulkV1Request']
---


# DeleteNonEmployeeRecordsInBulkV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of non-employee ids. | [required]

## Examples

- Prepare the resource
```powershell
$DeleteNonEmployeeRecordsInBulkV1Request = Initialize-DeleteNonEmployeeRecordsInBulkV1Request  -Ids ["2b838de9-db9b-abcf-e646-d4f274ad4238","2d838de9-db9b-abcf-e646-d4f274ad4238"]
```

- Convert the resource to JSON
```powershell
$DeleteNonEmployeeRecordsInBulkV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

