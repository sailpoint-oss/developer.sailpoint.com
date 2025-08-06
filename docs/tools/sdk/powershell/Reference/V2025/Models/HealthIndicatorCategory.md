---
id: v2025-health-indicator-category
title: HealthIndicatorCategory
pagination_label: HealthIndicatorCategory
sidebar_label: HealthIndicatorCategory
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'HealthIndicatorCategory', 'V2025HealthIndicatorCategory'] 
slug: /tools/sdk/powershell/v2025/models/health-indicator-category
tags: ['SDK', 'Software Development Kit', 'HealthIndicatorCategory', 'V2025HealthIndicatorCategory']
---


# HealthIndicatorCategory

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Errors** | [**[]HealthEvent**](health-event) | List of error events for this category | [optional] 
**Warnings** | [**[]HealthEvent**](health-event) | List of warning events for this category | [optional] 

## Examples

- Prepare the resource
```powershell
$HealthIndicatorCategory = Initialize-V2025HealthIndicatorCategory  -Errors null `
 -Warnings null
```

- Convert the resource to JSON
```powershell
$HealthIndicatorCategory | ConvertTo-JSON
```


[[Back to top]](#) 

