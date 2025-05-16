---
id: v2025-data-access
title: DataAccess
pagination_label: DataAccess
sidebar_label: DataAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccess', 'V2025DataAccess'] 
slug: /tools/sdk/powershell/v2025/models/data-access
tags: ['SDK', 'Software Development Kit', 'DataAccess', 'V2025DataAccess']
---


# DataAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement \ groups has access to | [optional] 
**Categories** | [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement \ groups has access to | [optional] 
**ImpactScore** | [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccess = Initialize-V2025DataAccess  -Policies null `
 -Categories null `
 -ImpactScore null
```

- Convert the resource to JSON
```powershell
$DataAccess | ConvertTo-JSON
```


[[Back to top]](#) 

