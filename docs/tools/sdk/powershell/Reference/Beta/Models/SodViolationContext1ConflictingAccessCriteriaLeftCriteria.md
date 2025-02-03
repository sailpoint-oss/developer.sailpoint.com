---
id: beta-sod-violation-context1-conflicting-access-criteria-left-criteria
title: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
pagination_label: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
sidebar_label: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodViolationContext1ConflictingAccessCriteriaLeftCriteria', 'BetaSodViolationContext1ConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context1-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1ConflictingAccessCriteriaLeftCriteria', 'BetaSodViolationContext1ConflictingAccessCriteriaLeftCriteria']
---


# SodViolationContext1ConflictingAccessCriteriaLeftCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** | [**[]SodExemptCriteria1**](sod-exempt-criteria1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext1ConflictingAccessCriteriaLeftCriteria = Initialize-PSSailpoint.BetaSodViolationContext1ConflictingAccessCriteriaLeftCriteria  -CriteriaList null
```

- Convert the resource to JSON
```powershell
$SodViolationContext1ConflictingAccessCriteriaLeftCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

