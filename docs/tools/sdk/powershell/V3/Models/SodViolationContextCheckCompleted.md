---
id: sod-violation-context-check-completed
title: SodViolationContextCheckCompleted
pagination_label: SodViolationContextCheckCompleted
sidebar_label: SodViolationContextCheckCompleted
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodViolationContextCheckCompleted'] 
slug: /tools/sdk/powershell/v3/models/sod-violation-context-check-completed
tags: ['SDK', 'Software Development Kit', 'SodViolationContextCheckCompleted']
---


# SodViolationContextCheckCompleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**State** |  Pointer to  **Enum** [  "SUCCESS",    "ERROR",    "null" ] | The status of SOD violation check | [optional] 
**Uuid** |  Pointer to **String** | The id of the Violation check event | [optional] 
**ViolationCheckResult** |  Pointer to [**SodViolationCheckResult**](sod-violation-check-result) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextCheckCompleted = Initialize-PSSailpointSodViolationContextCheckCompleted  -State SUCCESS `
 -Uuid f73d16e9-a038-46c5-b217-1246e15fdbdd `
 -ViolationCheckResult null
```

- Convert the resource to JSON
```powershell
$SodViolationContextCheckCompleted | ConvertTo-JSON
```


[[Back to top]](#) 

