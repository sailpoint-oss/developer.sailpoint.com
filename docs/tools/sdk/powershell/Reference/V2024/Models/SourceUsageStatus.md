---
id: v2024-source-usage-status
title: SourceUsageStatus
pagination_label: SourceUsageStatus
sidebar_label: SourceUsageStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsageStatus', 'V2024SourceUsageStatus'] 
slug: /tools/sdk/powershell/v2024/models/source-usage-status
tags: ['SDK', 'Software Development Kit', 'SourceUsageStatus', 'V2024SourceUsageStatus']
---


# SourceUsageStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "COMPLETE",    "INCOMPLETE" ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceUsageStatus = Initialize-V2024SourceUsageStatus  -Status COMPLETE
```

- Convert the resource to JSON
```powershell
$SourceUsageStatus | ConvertTo-JSON
```


[[Back to top]](#) 

