---
id: sod-violation-context1-conflicting-access-criteria-left-criteria
title: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
pagination_label: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
sidebar_label: SodViolationContext1ConflictingAccessCriteriaLeftCriteria
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodViolationContext1ConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context1-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContext1ConflictingAccessCriteriaLeftCriteria']
---


# SodViolationContext1ConflictingAccessCriteriaLeftCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** |  Pointer to [**[]SodExemptCriteria1**](sod-exempt-criteria1) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContext1ConflictingAccessCriteriaLeftCriteria = Initialize-PSSailpointBetaSodViolationContext1ConflictingAccessCriteriaLeftCriteria  -CriteriaList null
```

- Convert the resource to JSON
```powershell
$SodViolationContext1ConflictingAccessCriteriaLeftCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

