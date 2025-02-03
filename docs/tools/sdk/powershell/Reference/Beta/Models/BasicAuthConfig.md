---
id: beta-basic-auth-config
title: BasicAuthConfig
pagination_label: BasicAuthConfig
sidebar_label: BasicAuthConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BasicAuthConfig', 'BetaBasicAuthConfig'] 
slug: /tools/sdk/powershell/beta/models/basic-auth-config
tags: ['SDK', 'Software Development Kit', 'BasicAuthConfig', 'BetaBasicAuthConfig']
---


# BasicAuthConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **String** | The username to authenticate. | [optional] 
**Password** | **String** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 

## Examples

- Prepare the resource
```powershell
$BasicAuthConfig = Initialize-PSSailpoint.BetaBasicAuthConfig  -UserName user@example.com `
 -Password null
```

- Convert the resource to JSON
```powershell
$BasicAuthConfig | ConvertTo-JSON
```


[[Back to top]](#) 

