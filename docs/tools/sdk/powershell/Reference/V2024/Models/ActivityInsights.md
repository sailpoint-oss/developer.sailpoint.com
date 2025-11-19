---
id: v2024-activity-insights
title: ActivityInsights
pagination_label: ActivityInsights
sidebar_label: ActivityInsights
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ActivityInsights', 'V2024ActivityInsights'] 
slug: /tools/sdk/powershell/v2024/models/activity-insights
tags: ['SDK', 'Software Development Kit', 'ActivityInsights', 'V2024ActivityInsights']
---


# ActivityInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountID** | **String** | UUID of the account | [optional] 
**UsageDays** | **Int32** | The number of days of activity | [optional] 
**UsageDaysState** |  **Enum** [  "COMPLETE",    "UNKNOWN" ] | Status indicating if the activity is complete or unknown | [optional] 

## Examples

- Prepare the resource
```powershell
$ActivityInsights = Initialize-V2024ActivityInsights  -AccountID c4ddd5421d8549f0abd309162cafd3b1 `
 -UsageDays 45 `
 -UsageDaysState COMPLETE
```

- Convert the resource to JSON
```powershell
$ActivityInsights | ConvertTo-JSON
```


[[Back to top]](#) 

