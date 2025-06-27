---
id: sod-policy-read-all-of-conflicting-access-criteria
title: SodPolicyReadAllOfConflictingAccessCriteria
pagination_label: SodPolicyReadAllOfConflictingAccessCriteria
sidebar_label: SodPolicyReadAllOfConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodPolicyReadAllOfConflictingAccessCriteria', 'SodPolicyReadAllOfConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/v3/models/sod-policy-read-all-of-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodPolicyReadAllOfConflictingAccessCriteria', 'SodPolicyReadAllOfConflictingAccessCriteria']
---


# SodPolicyReadAllOfConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**AccessCriteria**](access-criteria) |  | [optional] 
**RightCriteria** | [**AccessCriteria**](access-criteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodPolicyReadAllOfConflictingAccessCriteria = Initialize-SodPolicyReadAllOfConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodPolicyReadAllOfConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

