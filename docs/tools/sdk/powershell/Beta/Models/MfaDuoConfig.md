---
id: mfa-duo-config
title: MfaDuoConfig
pagination_label: MfaDuoConfig
sidebar_label: MfaDuoConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'MfaDuoConfig'] 
slug: /tools/sdk/powershell/beta/models/mfa-duo-config
tags: ['SDK', 'Software Development Kit', 'MfaDuoConfig']
---


# MfaDuoConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MfaMethod** |  Pointer to **String** | Mfa method name | [optional] 
**Enabled** |  Pointer to **Boolean** | If MFA method is enabled. | [optional] [default to $false]
**VarHost** |  Pointer to **String** | The server host name or IP address of the MFA provider. | [optional] 
**AccessKey** |  Pointer to **String** | The secret key for authenticating requests to the MFA provider. | [optional] 
**IdentityAttribute** |  Pointer to **String** | Optional. The name of the attribute for mapping IdentityNow identity to the MFA provider. | [optional] 
**ConfigProperties** |  Pointer to [**map[string]AnyType**](any-type) | A map with additional config properties for the given MFA method - duo-web. | [optional] 

## Examples

- Prepare the resource
```powershell
$MfaDuoConfig = Initialize-PSSailpointBetaMfaDuoConfig  -MfaMethod duo-web `
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

