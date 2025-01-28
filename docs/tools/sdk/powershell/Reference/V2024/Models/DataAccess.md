---
id: v2024-data-access
title: DataAccess
pagination_label: DataAccess
sidebar_label: DataAccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DataAccess', 'V2024DataAccess'] 
slug: /tools/sdk/powershell/v2024/models/data-access
tags: ['SDK', 'Software Development Kit', 'DataAccess', 'V2024DataAccess']
---


# DataAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** |  Pointer to [**[]DataAccessPoliciesInner**](data-access-policies-inner) | List of classification policies that apply to resources the entitlement \ groups has access to | [optional] 
**Categories** |  Pointer to [**[]DataAccessCategoriesInner**](data-access-categories-inner) | List of classification categories that apply to resources the entitlement \ groups has access to | [optional] 
**ImpactScore** |  Pointer to [**DataAccessImpactScore**](data-access-impact-score) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$DataAccess = Initialize-PSSailpoint.V2024DataAccess  -Policies null `
 -Categories null `
 -ImpactScore null
```

- Convert the resource to JSON
```powershell
$DataAccess | ConvertTo-JSON
```


[[Back to top]](#) 

