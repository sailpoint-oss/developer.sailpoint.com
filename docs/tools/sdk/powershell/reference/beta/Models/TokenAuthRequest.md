---
id: beta-token-auth-request
title: TokenAuthRequest
pagination_label: TokenAuthRequest
sidebar_label: TokenAuthRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TokenAuthRequest'] 
slug: /tools/sdk/powershell/beta/models/token-auth-request
tags: ['SDK', 'Software Development Kit', 'TokenAuthRequest']
---


# TokenAuthRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** |  **String** | Token value | [required]
**UserAlias** |  **String** | User alias from table spt_identity field named 'name' | [required]
**DeliveryType** |   **Enum** [  "SMS_PERSONAL",    "VOICE_PERSONAL",    "SMS_WORK",    "VOICE_WORK",    "EMAIL_WORK",    "EMAIL_PERSONAL" ] | Token delivery type | [required]

## Examples

- Prepare the resource
```powershell
$TokenAuthRequest = Initialize-PSSailpoint.BetaTokenAuthRequest  -Token 12345 `
 -UserAlias will.albin `
 -DeliveryType EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$TokenAuthRequest | ConvertTo-JSON
```


[[Back to top]](#) 

