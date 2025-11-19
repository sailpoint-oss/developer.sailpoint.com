---
id: v2024-identity-attribute-config
title: IdentityAttributeConfig
pagination_label: IdentityAttributeConfig
sidebar_label: IdentityAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityAttributeConfig', 'V2024IdentityAttributeConfig'] 
slug: /tools/sdk/powershell/v2024/models/identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig', 'V2024IdentityAttributeConfig']
---


# IdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Backend will only promote values if the profile/mapping is enabled. | [optional] [default to $false]
**AttributeTransforms** | [**[]IdentityAttributeTransform**](identity-attribute-transform) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeConfig = Initialize-V2024IdentityAttributeConfig  -Enabled true `
 -AttributeTransforms null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

