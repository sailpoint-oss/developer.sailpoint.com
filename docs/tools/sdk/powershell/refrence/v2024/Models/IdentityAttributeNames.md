---
id: identity-attribute-names
title: IdentityAttributeNames
pagination_label: IdentityAttributeNames
sidebar_label: IdentityAttributeNames
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributeNames'] 
slug: /tools/sdk/powershell/v2024/models/identity-attribute-names
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeNames']
---


# IdentityAttributeNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** |  Pointer to **[]String** | List of identity attributes' technical names. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeNames = Initialize-PSSailpoint.V2024IdentityAttributeNames  -Ids [name, displayName]
```

- Convert the resource to JSON
```powershell
$IdentityAttributeNames | ConvertTo-JSON
```


[[Back to top]](#) 

