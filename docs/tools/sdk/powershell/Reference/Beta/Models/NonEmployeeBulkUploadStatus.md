---
id: beta-non-employee-bulk-upload-status
title: NonEmployeeBulkUploadStatus
pagination_label: NonEmployeeBulkUploadStatus
sidebar_label: NonEmployeeBulkUploadStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'NonEmployeeBulkUploadStatus', 'BetaNonEmployeeBulkUploadStatus'] 
slug: /tools/sdk/powershell/beta/models/non-employee-bulk-upload-status
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadStatus', 'BetaNonEmployeeBulkUploadStatus']
---


# NonEmployeeBulkUploadStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "PENDING",    "IN_PROGRESS",    "COMPLETED",    "ERROR" ] | Returns the following values indicating the progress or result of the bulk upload job. ""PENDING"" means the job is queued and waiting to be processed. ""IN_PROGRESS"" means the job is currently being processed. ""COMPLETED"" means the job has been completed without any errors. ""ERROR"" means the job failed to process with errors. null means job has been submitted to the source.  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeBulkUploadStatus = Initialize-BetaNonEmployeeBulkUploadStatus  -Status PENDING
```

- Convert the resource to JSON
```powershell
$NonEmployeeBulkUploadStatus | ConvertTo-JSON
```


[[Back to top]](#) 

