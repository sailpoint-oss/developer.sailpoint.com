---
id: sod-violation-context-conflicting-access-criteria-left-criteria
title: SodViolationContextConflictingAccessCriteriaLeftCriteria
pagination_label: SodViolationContextConflictingAccessCriteriaLeftCriteria
sidebar_label: SodViolationContextConflictingAccessCriteriaLeftCriteria
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodViolationContextConflictingAccessCriteriaLeftCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-violation-context-conflicting-access-criteria-left-criteria
tags: ['SDK', 'Software Development Kit', 'SodViolationContextConflictingAccessCriteriaLeftCriteria']
---


# SodViolationContextConflictingAccessCriteriaLeftCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CriteriaList** |  Pointer to [**[]SodExemptCriteria**](sod-exempt-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodViolationContextConflictingAccessCriteriaLeftCriteria = Initialize-PSSailpointBetaSodViolationContextConflictingAccessCriteriaLeftCriteria  -CriteriaList null
```

- Convert the resource to JSON
```powershell
$SodViolationContextConflictingAccessCriteriaLeftCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

