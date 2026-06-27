---
id: activityinsights
title: Activityinsights
pagination_label: Activityinsights
sidebar_label: Activityinsights
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Activityinsights', 'Activityinsights'] 
slug: /tools/sdk/powershell/certifications/models/activityinsights
tags: ['SDK', 'Software Development Kit', 'Activityinsights', 'Activityinsights']
---


# Activityinsights

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountID** | **String** | UUID of the account | [optional] 
**UsageDays** | **Int32** | The number of days of activity | [optional] 
**UsageDaysState** |  **Enum** [  "COMPLETE",    "UNKNOWN" ] | Status indicating if the activity is complete or unknown | [optional] 

## Examples

- Prepare the resource
```powershell
$Activityinsights = Initialize-Activityinsights  -AccountID c4ddd5421d8549f0abd309162cafd3b1 `
 -UsageDays 45 `
 -UsageDaysState COMPLETE
```

- Convert the resource to JSON
```powershell
$Activityinsights | ConvertTo-JSON
```


[[Back to top]](#) 

