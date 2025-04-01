---
id: v2025-bearer-token-auth-config
title: BearerTokenAuthConfig
pagination_label: BearerTokenAuthConfig
sidebar_label: BearerTokenAuthConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BearerTokenAuthConfig', 'V2025BearerTokenAuthConfig'] 
slug: /tools/sdk/powershell/v2025/models/bearer-token-auth-config
tags: ['SDK', 'Software Development Kit', 'BearerTokenAuthConfig', 'V2025BearerTokenAuthConfig']
---


# BearerTokenAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BearerToken** | **String** | Bearer token | [optional] 

## Examples

- Prepare the resource
```powershell
$BearerTokenAuthConfig = Initialize-PSSailpoint.V2025BearerTokenAuthConfig  -BearerToken null
```

- Convert the resource to JSON
```powershell
$BearerTokenAuthConfig | ConvertTo-JSON
```


[[Back to top]](#) 

