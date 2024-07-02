---
id: bearer-token-auth-config
title: BearerTokenAuthConfig
pagination_label: BearerTokenAuthConfig
sidebar_label: BearerTokenAuthConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'BearerTokenAuthConfig'] 
slug: /tools/sdk/powershell/beta/models/bearer-token-auth-config
tags: ['SDK', 'Software Development Kit', 'BearerTokenAuthConfig']
---


# BearerTokenAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BearerToken** |  Pointer to **String** | Bearer token | [optional] 

## Examples

- Prepare the resource
```powershell
$BearerTokenAuthConfig = Initialize-BetaBearerTokenAuthConfig  -BearerToken null
```

- Convert the resource to JSON
```powershell
$BearerTokenAuthConfig | ConvertTo-JSON
```


[[Back to top]](#) 

