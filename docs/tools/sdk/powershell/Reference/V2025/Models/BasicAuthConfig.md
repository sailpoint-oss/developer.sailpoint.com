---
id: v2025-basic-auth-config
title: BasicAuthConfig
pagination_label: BasicAuthConfig
sidebar_label: BasicAuthConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'BasicAuthConfig', 'V2025BasicAuthConfig'] 
slug: /tools/sdk/powershell/v2025/models/basic-auth-config
tags: ['SDK', 'Software Development Kit', 'BasicAuthConfig', 'V2025BasicAuthConfig']
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
$BasicAuthConfig = Initialize-V2025BasicAuthConfig  -UserName user@example.com `
 -Password null
```

- Convert the resource to JSON
```powershell
$BasicAuthConfig | ConvertTo-JSON
```


[[Back to top]](#) 

