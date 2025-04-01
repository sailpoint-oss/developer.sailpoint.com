---
id: v2025-sod-violation-context-check-completed
title: SodViolationContextCheckCompleted
pagination_label: SodViolationContextCheckCompleted
sidebar_label: SodViolationContextCheckCompleted
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContextCheckCompleted', 'V2025SodViolationContextCheckCompleted'] 
slug: /tools/sdk/powershell/v2025/models/sod-violation-context-check-completed
tags: ['SDK', 'Software Development Kit', 'SodViolationContextCheckCompleted', 'V2025SodViolationContextCheckCompleted']
---


# SodViolationContextCheckCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** | **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextCheckCompleted = Initialize-PSSailpoint.V2025SodViolationContextCheckCompleted  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$SodViolationContextCheckCompleted | ConvertTo-JSON
```


[[Back to top]](#) 

