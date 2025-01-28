---
id: v2024-http-config
title: HttpConfig
pagination_label: HttpConfig
sidebar_label: HttpConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'HttpConfig', 'V2024HttpConfig'] 
slug: /tools/sdk/powershell/v2024/models/http-config
tags: ['SDK', 'Software Development Kit', 'HttpConfig', 'V2024HttpConfig']
---


# HttpConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Url** |  **String** | URL of the external/custom integration. | [required]
**HttpDispatchMode** |  [**HttpDispatchMode**](http-dispatch-mode) |  | [required]
**HttpAuthenticationType** |  Pointer to [**HttpAuthenticationType**](http-authentication-type) |  | [optional] 
**BasicAuthConfig** |  Pointer to [**BasicAuthConfig**](basic-auth-config) |  | [optional] 
**BearerTokenAuthConfig** |  Pointer to [**BearerTokenAuthConfig**](bearer-token-auth-config) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$HttpConfig = Initialize-PSSailpoint.V2024HttpConfig  -Url https://www.example.com `
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

