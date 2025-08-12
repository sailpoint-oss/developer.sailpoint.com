---
id: v2025-identity-attribute-names
title: IdentityAttributeNames
pagination_label: IdentityAttributeNames
sidebar_label: IdentityAttributeNames
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributeNames', 'V2025IdentityAttributeNames'] 
slug: /tools/sdk/powershell/v2025/models/identity-attribute-names
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeNames', 'V2025IdentityAttributeNames']
---


# IdentityAttributeNames

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | **[]String** | List of identity attributes' technical names. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeNames = Initialize-V2025IdentityAttributeNames  -Ids [name, displayName]
```

- Convert the resource to JSON
```powershell
$IdentityAttributeNames | ConvertTo-JSON
```


[[Back to top]](#) 

