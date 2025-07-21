---
id: v2025-source-classification-status
title: SourceClassificationStatus
pagination_label: SourceClassificationStatus
sidebar_label: SourceClassificationStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceClassificationStatus', 'V2025SourceClassificationStatus'] 
slug: /tools/sdk/powershell/v2025/models/source-classification-status
tags: ['SDK', 'Software Development Kit', 'SourceClassificationStatus', 'V2025SourceClassificationStatus']
---


# SourceClassificationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "STARTED",    "COLLECTED",    "COMPLETED",    "CANCELLED",    "TERMINATED" ] | Status of Classification Process | [optional] 
**Started** | **System.DateTime** | Time when the process was started | [optional] 
**Updated** | **System.DateTime** | Time when the process status was last updated | [optional] 
**Counts** | [**SourceClassificationStatusAllOfCounts**](source-classification-status-all-of-counts) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceClassificationStatus = Initialize-V2025SourceClassificationStatus  -Status COMPLETED `
 -Started 2017-07-11T18:45:37.098Z `
 -Updated 2018-06-25T20:22:28.104Z `
 -Counts null
```

- Convert the resource to JSON
```powershell
$SourceClassificationStatus | ConvertTo-JSON
```


[[Back to top]](#) 

