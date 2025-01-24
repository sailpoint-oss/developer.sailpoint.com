---
id: public-identity-attribute-config
title: PublicIdentityAttributeConfig
pagination_label: PublicIdentityAttributeConfig
sidebar_label: PublicIdentityAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentityAttributeConfig'] 
slug: /tools/sdk/powershell/v3/models/public-identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityAttributeConfig']
---


# PublicIdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | The attribute key | [optional] 
**Name** |  Pointer to **String** | The attribute display name | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityAttributeConfig = Initialize-PSSailpoint.V3PublicIdentityAttributeConfig  -Key country `
 -Name Country
```

- Convert the resource to JSON
```powershell
$PublicIdentityAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

