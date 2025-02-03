---
id: sod-violation-context-conflicting-access-criteria
title: SodViolationContextConflictingAccessCriteria
pagination_label: SodViolationContextConflictingAccessCriteria
sidebar_label: SodViolationContextConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContextConflictingAccessCriteria', 'SodViolationContextConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/v3/models/sod-violation-context-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteria', 'SodViolationContextConflictingAccessCriteria']
---


# SodViolationContextConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 
**RightCriteria** | [**SodViolationContextConflictingAccessCriteriaLeftCriteria**](sod-violation-context-conflicting-access-criteria-left-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextConflictingAccessCriteria = Initialize-PSSailpoint.V3SodViolationContextConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodViolationContextConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

