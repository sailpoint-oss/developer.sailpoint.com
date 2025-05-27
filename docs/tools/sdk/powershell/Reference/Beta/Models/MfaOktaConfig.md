---
id: beta-mfa-okta-config
title: MfaOktaConfig
pagination_label: MfaOktaConfig
sidebar_label: MfaOktaConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MfaOktaConfig', 'BetaMfaOktaConfig'] 
slug: /tools/sdk/powershell/beta/models/mfa-okta-config
tags: ['SDK', 'Software Development Kit', 'MfaOktaConfig', 'BetaMfaOktaConfig']
---


# MfaOktaConfig

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
$MfaOktaConfig = Initialize-BetaMfaOktaConfig  -MfaMethod okta-verify `
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

