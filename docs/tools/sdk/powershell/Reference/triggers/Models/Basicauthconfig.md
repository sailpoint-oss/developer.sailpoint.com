---
id: basicauthconfig
title: Basicauthconfig
pagination_label: Basicauthconfig
sidebar_label: Basicauthconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basicauthconfig', 'Basicauthconfig'] 
slug: /tools/sdk/powershell/triggers/models/basicauthconfig
tags: ['SDK', 'Software Development Kit', 'Basicauthconfig', 'Basicauthconfig']
---


# Basicauthconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **String** | The username to authenticate. | [optional] 
**Password** | **String** | The password to authenticate. On response, this field is set to null as to not return secrets. | [optional] 

## Examples

- Prepare the resource
```powershell
$Basicauthconfig = Initialize-Basicauthconfig  -UserName user@example.com `
 -Password null
```

- Convert the resource to JSON
```powershell
$Basicauthconfig | ConvertTo-JSON
```


[[Back to top]](#) 

