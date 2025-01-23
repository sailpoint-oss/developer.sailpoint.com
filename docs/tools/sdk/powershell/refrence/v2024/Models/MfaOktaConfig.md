---
id: mfa-okta-config
title: MfaOktaConfig
pagination_label: MfaOktaConfig
sidebar_label: MfaOktaConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MfaOktaConfig'] 
slug: /tools/sdk/powershell/v2024/models/mfa-okta-config
tags: ['SDK', 'Software Development Kit', 'MfaOktaConfig']
---


# MfaOktaConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** |  Pointer to **String** | Mfa method name | [optional] 
**Enabled** |  Pointer to **Boolean** | If MFA method is enabled. | [optional] [default to $false]
**VarHost** |  Pointer to **String** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** |  Pointer to **String** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** |  Pointer to **String** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 

## Examples

- Prepare the resource
```powershell
$MfaOktaConfig = Initialize-PSSailpoint.V2024MfaOktaConfig  -MfaMethod okta-verify `
 -Enabled true `
 -VarHost example.com `
 -AccessKey qw123Y3QlA5UqocYpdU3rEkzrK2D497y `
 -IdentityAttribute email
```

- Convert the resource to JSON
```powershell
$MfaOktaConfig | ConvertTo-JSON
```


[[Back to top]](#) 

