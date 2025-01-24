---
id: source-usage-status
title: SourceUsageStatus
pagination_label: SourceUsageStatus
sidebar_label: SourceUsageStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SourceUsageStatus'] 
slug: /tools/sdk/powershell/beta/models/source-usage-status
tags: ['SDK', 'Software Development Kit', 'SourceUsageStatus']
---


# SourceUsageStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  Pointer to  **Enum** [  "COMPLETE",    "INCOMPLETE" ] | Source Usage Status. Acceptable values are:   - COMPLETE       - This status means that an activity data source has been setup and usage insights are available for the source.   - INCOMPLETE       - This status means that an activity data source has not been setup and usage insights are not available for the source. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceUsageStatus = Initialize-PSSailpoint.BetaSourceUsageStatus  -Status COMPLETE
```

- Convert the resource to JSON
```powershell
$SourceUsageStatus | ConvertTo-JSON
```


[[Back to top]](#) 

