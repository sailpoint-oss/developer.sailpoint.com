---
id: access-request-admin-item-status-sod-violation-context
title: AccessRequestAdminItemStatusSodViolationContext
pagination_label: AccessRequestAdminItemStatusSodViolationContext
sidebar_label: AccessRequestAdminItemStatusSodViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessRequestAdminItemStatusSodViolationContext'] 
slug: /tools/sdk/powershell/v2024/models/access-request-admin-item-status-sod-violation-context
tags: ['SDK', 'Software Development Kit', 'AccessRequestAdminItemStatusSodViolationContext']
---


# AccessRequestAdminItemStatusSodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  Pointer to  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** |  Pointer to **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** |  Pointer to [**SodViolationCheckResult1**](sod-violation-check-result1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessRequestAdminItemStatusSodViolationContext = Initialize-PSSailpoint.V2024AccessRequestAdminItemStatusSodViolationContext  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$AccessRequestAdminItemStatusSodViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

