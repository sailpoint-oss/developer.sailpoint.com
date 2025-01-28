---
id: v2024-sod-violation-context1
title: SodViolationContext1
pagination_label: SodViolationContext1
sidebar_label: SodViolationContext1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContext1', 'V2024SodViolationContext1'] 
slug: /tools/sdk/powershell/v2024/models/sod-violation-context1
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1', 'V2024SodViolationContext1']
---


# SodViolationContext1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policy** |  Pointer to [**SodPolicyDto**](sod-policy-dto) |  | [optional] 
**ConflictingAccessCriteria** |  Pointer to [**SodViolationContext1ConflictingAccessCriteria**](sod-violation-context1-conflicting-access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext1 = Initialize-PSSailpoint.V2024SodViolationContext1  -Policy null `
 -ConflictingAccessCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContext1 | ConvertTo-JSON
```


[[Back to top]](#) 

