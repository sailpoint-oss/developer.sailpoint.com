---
id: dataaccess
title: Dataaccess
pagination_label: Dataaccess
sidebar_label: Dataaccess
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Dataaccess', 'Dataaccess'] 
slug: /tools/sdk/powershell/certifications/models/dataaccess
tags: ['SDK', 'Software Development Kit', 'Dataaccess', 'Dataaccess']
---


# Dataaccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Policies** | [**[]DataaccessPoliciesInner**](dataaccess-policies-inner) | List of classification policies that apply to resources the entitlement \ groups has access to | [optional] 
**Categories** | [**[]DataaccessCategoriesInner**](dataaccess-categories-inner) | List of classification categories that apply to resources the entitlement \ groups has access to | [optional] 
**ImpactScore** | [**DataaccessImpactScore**](dataaccess-impact-score) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Dataaccess = Initialize-Dataaccess  -Policies null `
 -Categories null `
 -ImpactScore null
```

- Convert the resource to JSON
```powershell
$Dataaccess | ConvertTo-JSON
```


[[Back to top]](#) 

