---
id: v2025-role-list-filter-dto-amm-key-values-inner
title: RoleListFilterDTOAmmKeyValuesInner
pagination_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_label: RoleListFilterDTOAmmKeyValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RoleListFilterDTOAmmKeyValuesInner', 'V2025RoleListFilterDTOAmmKeyValuesInner'] 
slug: /tools/sdk/powershell/v2025/models/role-list-filter-dto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RoleListFilterDTOAmmKeyValuesInner', 'V2025RoleListFilterDTOAmmKeyValuesInner']
---


# RoleListFilterDTOAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | attribute key of a metadata. | [optional] 
**Values** | **[]String** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleListFilterDTOAmmKeyValuesInner = Initialize-V2025RoleListFilterDTOAmmKeyValuesInner  -Attribute iscFederalClassifications `
 -Values [secret]
```

- Convert the resource to JSON
```powershell
$RoleListFilterDTOAmmKeyValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

