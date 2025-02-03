---
id: beta-sod-policy-conflicting-access-criteria
title: SodPolicyConflictingAccessCriteria
pagination_label: SodPolicyConflictingAccessCriteria
sidebar_label: SodPolicyConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyConflictingAccessCriteria', 'BetaSodPolicyConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/beta/models/sod-policy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyConflictingAccessCriteria', 'BetaSodPolicyConflictingAccessCriteria']
---


# SodPolicyConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** | [**AccessCriteria**](access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyConflictingAccessCriteria = Initialize-PSSailpoint.BetaSodPolicyConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicyConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

