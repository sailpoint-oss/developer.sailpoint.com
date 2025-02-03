---
id: mfa-duo-config
title: MfaDuoConfig
pagination_label: MfaDuoConfig
sidebar_label: MfaDuoConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'MfaDuoConfig', 'MfaDuoConfig'] 
slug: /tools/sdk/powershell/v3/models/mfa-duo-config
tags: ['SDK', 'Software Development Kit', 'MfaDuoConfig', 'MfaDuoConfig']
---


# MfaDuoConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** | **String** | Mfa method name | [optional] 
**Enabled** | **Boolean** | If MFA method is enabled. | [optional] [default to $false]
**VarHost** | **String** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** | **String** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** | **String** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 
**ConfigProperties** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | A map with additional config properties for the given MFA method - duo-web. | [optional] 

## Examples

- Prepare the resource
```powershell
$MfaDuoConfig = Initialize-PSSailpoint.V3MfaDuoConfig  -MfaMethod duo-web `
 -Enabled true `
 -VarHost example.com `
 -AccessKey qw123Y3QlA5UqocYpdU3rEkzrK2D497y `
 -IdentityAttribute email `
 -ConfigProperties {skey&#x3D;qwERttyZx1CdlQye2Vwtbsjr3HKddy4BAiCXjc5x, ikey&#x3D;Q123WE45R6TY7890ZXCV}
```

- Convert the resource to JSON
```powershell
$MfaDuoConfig | ConvertTo-JSON
```


[[Back to top]](#) 

