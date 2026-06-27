---
id: healthevent
title: Healthevent
pagination_label: Healthevent
sidebar_label: Healthevent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Healthevent', 'Healthevent'] 
slug: /tools/sdk/powershell/managedclients/models/healthevent
tags: ['SDK', 'Software Development Kit', 'Healthevent', 'Healthevent']
---


# Healthevent

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
$Healthevent = Initialize-Healthevent  -DetailedMessage CPU utilization is high `
 -Uuid 5 `
 -Url https://example.com:80/ `
 -Timestamp 2025-03-25T14:46:58.605Z `
 -LastNotifiedTimeStamp 2025-08-06T06:53:22.206956Z `
 -CpuUtilizationPercentage 80 `
 -FreeSpacePercentage 8
```

- Convert the resource to JSON
```powershell
$Healthevent | ConvertTo-JSON
```


[[Back to top]](#) 

