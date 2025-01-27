---
id: beta-requested-item-status-sod-violation-context
title: RequestedItemStatusSodViolationContext
pagination_label: RequestedItemStatusSodViolationContext
sidebar_label: RequestedItemStatusSodViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestedItemStatusSodViolationContext'] 
slug: /tools/sdk/powershell/beta/models/requested-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusSodViolationContext']
---


# RequestedItemStatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  Pointer to  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** |  Pointer to **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** |  Pointer to [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestedItemStatusSodViolationContext = Initialize-PSSailpoint.BetaRequestedItemStatusSodViolationContext  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$RequestedItemStatusSodViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

