---
id: beta-public-identity-config
title: PublicIdentityConfig
pagination_label: PublicIdentityConfig
sidebar_label: PublicIdentityConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PublicIdentityConfig', 'BetaPublicIdentityConfig'] 
slug: /tools/sdk/powershell/beta/models/public-identity-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityConfig', 'BetaPublicIdentityConfig']
---


# PublicIdentityConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | [**[]PublicIdentityAttributeConfig**](public-identity-attribute-config) |  | [optional] 
**ModifiedBy** | [**IdentityReference**](identity-reference) |  | [optional] 
**Modified** | **System.DateTime** | the date/time of the modification | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityConfig = Initialize-BetaPublicIdentityConfig  -Attributes null `
 -ModifiedBy null `
 -Modified 2018-06-25T20:22:28.104Z
```

- Convert the resource to JSON
```powershell
$PublicIdentityConfig | ConvertTo-JSON
```


[[Back to top]](#) 

