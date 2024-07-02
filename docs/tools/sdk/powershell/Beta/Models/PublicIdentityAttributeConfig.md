---
id: public-identity-attribute-config
title: PublicIdentityAttributeConfig
pagination_label: PublicIdentityAttributeConfig
sidebar_label: PublicIdentityAttributeConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PublicIdentityAttributeConfig'] 
slug: /tools/sdk/powershell/beta/models/public-identity-attribute-config
tags: ['SDK', 'Software Development Kit', 'PublicIdentityAttributeConfig']
---


# PublicIdentityAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** |  Pointer to **String** | the key of the attribute | [optional] 
**Name** |  Pointer to **String** | the display name of the attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$PublicIdentityAttributeConfig = Initialize-BetaPublicIdentityAttributeConfig  -Key country `
 -Name Country
```

- Convert the resource to JSON
```powershell
$PublicIdentityAttributeConfig | ConvertTo-JSON
```


[[Back to top]](#) 

