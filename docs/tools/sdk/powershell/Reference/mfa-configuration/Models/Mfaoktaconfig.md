---
id: mfaoktaconfig
title: Mfaoktaconfig
pagination_label: Mfaoktaconfig
sidebar_label: Mfaoktaconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Mfaoktaconfig', 'Mfaoktaconfig'] 
slug: /tools/sdk/powershell/mfaconfiguration/models/mfaoktaconfig
tags: ['SDK', 'Software Development Kit', 'Mfaoktaconfig', 'Mfaoktaconfig']
---


# Mfaoktaconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | **String** | Mfa method name | [optional] 
**Enabled** | **Boolean** | If MFA method is enabled. | [optional] [default to $false]
**VarHost** | **String** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** | **String** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** | **String** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 

## Examples

- Prepare the resource
```powershell
$Mfaoktaconfig = Initialize-Mfaoktaconfig  -MfaMethod okta-verify `
 -Enabled true `
 -VarHost example.com `
 -AccessKey qw123Y3QlA5UqocYpdU3rEkzrK2D497y `
 -IdentityAttribute email
```

- Convert the resource to JSON
```powershell
$Mfaoktaconfig | ConvertTo-JSON
```


[[Back to top]](#) 

