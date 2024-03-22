---
id: sod-policy-conflicting-access-criteria
title: SodPolicyConflictingAccessCriteria
pagination_label: SodPolicyConflictingAccessCriteria
sidebar_label: SodPolicyConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SodPolicyConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/v3/models/sod-policy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyConflictingAccessCriteria']
---


# SodPolicyConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** |  Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** |  Pointer to [**AccessCriteria**](access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyConflictingAccessCriteria = Initialize-PSSailpointSodPolicyConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicyConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

