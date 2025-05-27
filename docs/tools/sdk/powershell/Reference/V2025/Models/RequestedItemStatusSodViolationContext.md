---
id: v2025-requested-item-status-sod-violation-context
title: RequestedItemStatusSodViolationContext
pagination_label: RequestedItemStatusSodViolationContext
sidebar_label: RequestedItemStatusSodViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusSodViolationContext', 'V2025RequestedItemStatusSodViolationContext'] 
slug: /tools/sdk/powershell/v2025/models/requested-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusSodViolationContext', 'V2025RequestedItemStatusSodViolationContext']
---


# RequestedItemStatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** | **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusSodViolationContext = Initialize-V2025RequestedItemStatusSodViolationContext  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusSodViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

