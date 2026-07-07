---
id: nonemployeebulkuploadstatus
title: Nonemployeebulkuploadstatus
pagination_label: Nonemployeebulkuploadstatus
sidebar_label: Nonemployeebulkuploadstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Nonemployeebulkuploadstatus', 'Nonemployeebulkuploadstatus'] 
slug: /tools/sdk/powershell/nonemployeelifecyclemanagement/models/nonemployeebulkuploadstatus
tags: ['SDK', 'Software Development Kit', 'Nonemployeebulkuploadstatus', 'Nonemployeebulkuploadstatus']
---


# Nonemployeebulkuploadstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "PENDING",    "IN_PROGRESS",    "COMPLETED",    "ERROR" ] | Returns the following values indicating the progress or result of the bulk upload job. ""PENDING"" means the job is queued and waiting to be processed. ""IN_PROGRESS"" means the job is currently being processed. ""COMPLETED"" means the job has been completed without any errors. ""ERROR"" means the job failed to process with errors. null means job has been submitted to the source.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Nonemployeebulkuploadstatus = Initialize-Nonemployeebulkuploadstatus  -Status PENDING
```

- Convert the resource to JSON
```powershell
$Nonemployeebulkuploadstatus | ConvertTo-JSON
```


[[Back to top]](#) 

