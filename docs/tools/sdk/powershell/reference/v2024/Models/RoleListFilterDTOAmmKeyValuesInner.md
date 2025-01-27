---
id: v2024-role-list-filter-dto-amm-key-values-inner
title: RoleListFilterDTOAmmKeyValuesInner
pagination_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleListFilterDTOAmmKeyValuesInner'] 
slug: /tools/sdk/powershell/v2024/models/role-list-filter-dto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTOAmmKeyValuesInner']
---


# RoleListFilterDTOAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** |  Pointer to **String** | attribute key of a metadata. | [optional] 
**Values** |  Pointer to **[]String** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleListFilterDTOAmmKeyValuesInner = Initialize-PSSailpoint.V2024RoleListFilterDTOAmmKeyValuesInner  -Attribute iscFederalClassifications `
 -Values [secret]
```

- Convert the resource to JSON
```powershell
$RoleListFilterDTOAmmKeyValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

