---
id: beta-http-config
title: HttpConfig
pagination_label: HttpConfig
sidebar_label: HttpConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'HttpConfig', 'BetaHttpConfig'] 
slug: /tools/sdk/powershell/beta/models/http-config
tags: ['SDK', 'Software Development Kit', 'HttpConfig', 'BetaHttpConfig']
---


# HttpConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** | **String** | URL of the external/custom integration. | [required]
**HttpDispatchMode** | [**HttpDispatchMode**](http-dispatch-mode) |  | [required]
**HttpAuthenticationType** | [**HttpAuthenticationType**](http-authentication-type) |  | [optional] 
**BasicAuthConfig** | [**BasicAuthConfig**](basic-auth-config) |  | [optional] 
**BearerTokenAuthConfig** | [**BearerTokenAuthConfig**](bearer-token-auth-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$HttpConfig = Initialize-PSSailpoint.BetaHttpConfig  -Url https://www.example.com `
 -HttpDispatchMode null `
 -HttpAuthenticationType null `
 -BasicAuthConfig null `
 -BearerTokenAuthConfig null
```

- Convert the resource to JSON
```powershell
$HttpConfig | ConvertTo-JSON
```


[[Back to top]](#) 

