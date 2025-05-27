---
id: beta-sod-violation-context
title: SodViolationContext
pagination_label: SodViolationContext
sidebar_label: SodViolationContext
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContext', 'BetaSodViolationContext'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context
tags: ['SDK', 'Software Development Kit', 'SodViolationContext', 'BetaSodViolationContext']
---


# SodViolationContext

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | [**SodPolicyDto**](sod-policy-dto) |  | [optional] 
**ConflictingAccessCriteria** | [**SodViolationContextConflictingAccessCriteria**](sod-violation-context-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext = Initialize-BetaSodViolationContext  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContext | ConvertTo-JSON
```


[[Back to top]](#) 

