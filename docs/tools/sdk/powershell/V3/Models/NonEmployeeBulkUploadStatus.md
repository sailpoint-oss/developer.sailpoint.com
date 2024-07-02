---
id: non-employee-bulk-upload-status
title: NonEmployeeBulkUploadStatus
pagination_label: NonEmployeeBulkUploadStatus
sidebar_label: NonEmployeeBulkUploadStatus
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'NonEmployeeBulkUploadStatus'] 
slug: /tools/sdk/powershell/v3/models/non-employee-bulk-upload-status
tags: ['SDK', 'Software Development Kit', 'NonEmployeeBulkUploadStatus']
---


# NonEmployeeBulkUploadStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  Pointer to  **Enum** [  "PENDING",    "IN_PROGRESS",    "COMPLETED",    "ERROR" ] | Returns the following values indicating the progress or result of the bulk upload job. &quot;&quot;PENDING&quot;&quot; means the job is queued and waiting to be processed. &quot;&quot;IN_PROGRESS&quot;&quot; means the job is currently being processed. &quot;&quot;COMPLETED&quot;&quot; means the job has been completed without any errors. &quot;&quot;ERROR&quot;&quot; means the job failed to process with errors. null means job has been submitted to the source.  | [optional] 

## Examples

- Prepare the resource
```powershell
$NonEmployeeBulkUploadStatus = Initialize-NonEmployeeBulkUploadStatus  -Status PENDING
```

- Convert the resource to JSON
```powershell
$NonEmployeeBulkUploadStatus | ConvertTo-JSON
```


[[Back to top]](#) 

