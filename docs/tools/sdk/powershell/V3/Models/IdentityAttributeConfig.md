---
id: identity-attribute-config
title: IdentityAttributeConfig
pagination_label: IdentityAttributeConfig
sidebar_label: IdentityAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityAttributeConfig'] 
slug: /tools/sdk/powershell/v3/models/identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'IdentityAttributeConfig']
---


# IdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** |  Pointer to **Boolean** | The backend will only promote values if the profile/mapping is enabled. | [optional] [default to $false]
**AttributeTransforms** |  Pointer to [**[]IdentityAttributeTransform**](identity-attribute-transform) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityAttributeConfig = Initialize-IdentityAttributeConfig  -Enabled true `
 -AttributeTransforms null
```

- Convert the resource to JSON
```powershell
$IdentityAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

