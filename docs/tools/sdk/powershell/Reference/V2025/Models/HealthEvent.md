---
id: v2025-health-event
title: HealthEvent
pagination_label: HealthEvent
sidebar_label: HealthEvent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'HealthEvent', 'V2025HealthEvent'] 
slug: /tools/sdk/powershell/v2025/models/health-event
tags: ['SDK', 'Software Development Kit', 'HealthEvent', 'V2025HealthEvent']
---


# HealthEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DetailedMessage** | **String** | Description of the issue | [optional] 
**Uuid** | **String** | Unique identifier for the health event | [optional] 
**Url** | **String** | Optional URL associated with the issue | [optional] 
**Timestamp** | **System.DateTime** | Time when the event occurred | [optional] 
**LastNotifiedTimeStamp** | **System.DateTime** | Last time notification was sent for this issue | [optional] 
**CpuUtilizationPercentage** | **Decimal** | CPU usage percentage | [optional] 
**FreeSpacePercentage** | **Decimal** | Free memory percentage | [optional] 

## Examples

- Prepare the resource
```powershell
$HealthEvent = Initialize-V2025HealthEvent  -DetailedMessage CPU utilization is high `
 -Uuid 5 `
 -Url https://sample.com:80/ `
 -Timestamp 2025-03-25T14:46:58.605Z `
 -LastNotifiedTimeStamp 2025-08-06T06:53:22.206956Z `
 -CpuUtilizationPercentage 80 `
 -FreeSpacePercentage 8
```

- Convert the resource to JSON
```powershell
$HealthEvent | ConvertTo-JSON
```


[[Back to top]](#) 

