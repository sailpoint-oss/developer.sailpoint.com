---
id: v2025-sed-batch-status
title: SedBatchStatus
pagination_label: SedBatchStatus
sidebar_label: SedBatchStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SedBatchStatus', 'V2025SedBatchStatus'] 
slug: /tools/sdk/powershell/v2025/models/sed-batch-status
tags: ['SDK', 'Software Development Kit', 'SedBatchStatus', 'V2025SedBatchStatus']
---


# SedBatchStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** | **String** | status of batch | [optional] 

## Examples

- Prepare the resource
```powershell
$SedBatchStatus = Initialize-V2025SedBatchStatus  -Status OK
```

- Convert the resource to JSON
```powershell
$SedBatchStatus | ConvertTo-JSON
```


[[Back to top]](#) 

