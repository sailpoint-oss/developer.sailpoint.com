---
id: sodpolicy-conflicting-access-criteria
title: SodpolicyConflictingAccessCriteria
pagination_label: SodpolicyConflictingAccessCriteria
sidebar_label: SodpolicyConflictingAccessCriteria
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SodpolicyConflictingAccessCriteria', 'SodpolicyConflictingAccessCriteria'] 
slug: /tools/sdk/powershell/sodpolicies/models/sodpolicy-conflicting-access-criteria
tags: ['SDK', 'Software Development Kit', 'SodpolicyConflictingAccessCriteria', 'SodpolicyConflictingAccessCriteria']
---


# SodpolicyConflictingAccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**LeftCriteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 
**RightCriteria** | [**Accesscriteria**](accesscriteria) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SodpolicyConflictingAccessCriteria = Initialize-SodpolicyConflictingAccessCriteria  -LeftCriteria null `
 -RightCriteria null
```

- Convert the resource to JSON
```powershell
$SodpolicyConflictingAccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

