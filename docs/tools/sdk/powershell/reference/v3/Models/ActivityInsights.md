---
id: activity-insights
title: ActivityInsights
pagination_label: ActivityInsights
sidebar_label: ActivityInsights
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ActivityInsights'] 
slug: /tools/sdk/powershell/v3/models/activity-insights
tags: ['SDK', 'Software Development Kit', 'ActivityInsights']
---


# ActivityInsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountID** |  Pointer to **String** | UUID of the account | [optional] 
**UsageDays** |  Pointer to **Int32** | The number of days of activity | [optional] 
**UsageDaysState** |  Pointer to  **Enum** [  "COMPLETE",    "UNKNOWN" ] | Status indicating if the activity is complete or unknown | [optional] 

## Examples

- Prepare the resource
```powershell
$ActivityInsights = Initialize-PSSailpoint.V3ActivityInsights  -AccountID c4ddd5421d8549f0abd309162cafd3b1 `
 -UsageDays 45 `
 -UsageDaysState COMPLETE
```

- Convert the resource to JSON
```powershell
$ActivityInsights | ConvertTo-JSON
```


[[Back to top]](#) 

