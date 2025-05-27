---
id: beta-sod-violation-context1
title: SodViolationContext1
pagination_label: SodViolationContext1
sidebar_label: SodViolationContext1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContext1', 'BetaSodViolationContext1'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context1
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1', 'BetaSodViolationContext1']
---


# SodViolationContext1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** | [**SodPolicyDto**](sod-policy-dto) |  | [optional] 
**ConflictingAccessCriteria** | [**SodViolationContext1ConflictingAccessCriteria**](sod-violation-context1-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext1 = Initialize-BetaSodViolationContext1  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContext1 | ConvertTo-JSON
```


[[Back to top]](#) 

