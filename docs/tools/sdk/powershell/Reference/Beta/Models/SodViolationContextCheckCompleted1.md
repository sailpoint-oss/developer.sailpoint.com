---
id: beta-sod-violation-context-check-completed1
title: SodViolationContextCheckCompleted1
pagination_label: SodViolationContextCheckCompleted1
sidebar_label: SodViolationContextCheckCompleted1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContextCheckCompleted1', 'BetaSodViolationContextCheckCompleted1'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context-check-completed1
tags: ['SDK', 'Software Development Kit', 'SodViolationContextCheckCompleted1', 'BetaSodViolationContextCheckCompleted1']
---


# SodViolationContextCheckCompleted1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  **Enum** [  "SUCCESS",    "ERROR" ] | The status of SOD violation check | [optional] 
**Uuid** | **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** | [**SodViolationCheckResult1**](sod-violation-check-result1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextCheckCompleted1 = Initialize-BetaSodViolationContextCheckCompleted1  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$SodViolationContextCheckCompleted1 | ConvertTo-JSON
```


[[Back to top]](#) 

