---
id: public-identity-config
title: PublicIdentityConfig
pagination_label: PublicIdentityConfig
sidebar_label: PublicIdentityConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentityConfig', 'PublicIdentityConfig'] 
slug: /tools/sdk/powershell/v3/models/public-identity-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityConfig', 'PublicIdentityConfig']
---


# PublicIdentityConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) | Up to 5 identity attributes that will be available to everyone in the org for all users in the org. | [optional] 
**Modified** | **System.DateTime** | When this configuration was last modified. | [optional] 
**ModifiedBy** | [**IdentityReference**](identity-reference) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityConfig = Initialize-PublicIdentityConfig  -Attributes null `
 -Modified 2018-06-25T20:22:28.104Z `
 -ModifiedBy null
```

- Convert the resource to JSON
```powershell
$PublicIdentityConfig | ConvertTo-JSON
```


[[Back to top]](#) 

