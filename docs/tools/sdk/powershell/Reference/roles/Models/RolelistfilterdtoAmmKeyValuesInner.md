---
id: rolelistfilterdto-amm-key-values-inner
title: RolelistfilterdtoAmmKeyValuesInner
pagination_label: RolelistfilterdtoAmmKeyValuesInner
sidebar_label: RolelistfilterdtoAmmKeyValuesInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RolelistfilterdtoAmmKeyValuesInner', 'RolelistfilterdtoAmmKeyValuesInner'] 
slug: /tools/sdk/powershell/roles/models/rolelistfilterdto-amm-key-values-inner
tags: ['SDK', 'Software Development Kit', 'RolelistfilterdtoAmmKeyValuesInner', 'RolelistfilterdtoAmmKeyValuesInner']
---


# RolelistfilterdtoAmmKeyValuesInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attribute** | **String** | attribute key of a metadata. | [optional] 
**Values** | **[]String** | A list of attribute key names to filter roles. If the values is empty, will only filter by attribute key. | [optional] 

## Examples

- Prepare the resource
```powershell
$RolelistfilterdtoAmmKeyValuesInner = Initialize-RolelistfilterdtoAmmKeyValuesInner  -Attribute iscFederalClassifications `
 -Values ["secret"]
```

- Convert the resource to JSON
```powershell
$RolelistfilterdtoAmmKeyValuesInner | ConvertTo-JSON
```


[[Back to top]](#) 

