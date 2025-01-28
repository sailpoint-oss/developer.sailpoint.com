---
id: v2024-public-identity-config
title: PublicIdentityConfig
pagination_label: PublicIdentityConfig
sidebar_label: PublicIdentityConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentityConfig'] 
slug: /tools/sdk/powershell/v2024/models/public-identity-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityConfig']
---


# PublicIdentityConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** |  Pointer to [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**Modified** |  Pointer to **System.DateTime** | When this configuration was last modified. | [optional] 
**ModifiedBy** |  Pointer to [**IdentityReference**](identity-reference) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityConfig = Initialize-PSSailpoint.V2024PublicIdentityConfig  -Attributes null `
 -Modified 2018-06-25T20:22:28.104Z `
 -ModifiedBy null
```

- Convert the resource to JSON
```powershell
$PublicIdentityConfig | ConvertTo-JSON
```


[[Back to top]](#) 

