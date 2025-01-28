---
id: beta-sod-violation-context1-conflicting-access-criteria
title: SodViolationContext1ConflictingAccessCriteria
pagination_label: SodViolationContext1ConflictingAccessCriteria
sidebar_label: SodViolationContext1ConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContext1ConflictingAccessCriteria', 'BetaSodViolationContext1ConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context1-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1ConflictingAccessCriteria', 'BetaSodViolationContext1ConflictingAccessCriteria']
---


# SodViolationContext1ConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** |  Pointer to [**SodViolationContext1ConflictingAccessCriteriaLeftCriteria**](sod-violation-context1-conflicting-access-criteria-left-criteria) |  | [optional] 
**RightCriteria** |  Pointer to [**SodViolationContext1ConflictingAccessCriteriaLeftCriteria**](sod-violation-context1-conflicting-access-criteria-left-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext1ConflictingAccessCriteria = Initialize-PSSailpoint.BetaSodViolationContext1ConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContext1ConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

