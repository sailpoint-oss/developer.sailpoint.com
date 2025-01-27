---
id: beta-sod-violation-context-conflicting-access-criteria
title: SodViolationContextConflictingAccessCriteria
pagination_label: SodViolationContextConflictingAccessCriteria
sidebar_label: SodViolationContextConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContextConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteria']
---


# SodViolationContextConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** |  Pointer to [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 
**RightCriteria** |  Pointer to [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextConflictingAccessCriteria = Initialize-PSSailpoint.BetaSodViolationContextConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContextConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

