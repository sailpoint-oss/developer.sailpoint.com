---
id: token-auth-request
title: TokenAuthRequest
pagination_label: TokenAuthRequest
sidebar_label: TokenAuthRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TokenAuthRequest'] 
slug: /tools/sdk/powershell/beta/models/token-auth-request
tags: ['SDK', 'Software Development Kit', 'TokenAuthRequest']
---


# TokenAuthRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** |  **String** | Token value | 
**UserAlias** |  **String** | User alias from table spt_identity field named &#39;name&#39; | 
**DeliveryType** |   **Enum** [  "SMS_PERSONAL",    "VOICE_PERSONAL",    "SMS_WORK",    "VOICE_WORK",    "EMAIL_WORK",    "EMAIL_PERSONAL" ] | Token delivery type | 

## Examples

- Prepare the resource
```powershell
$TokenAuthRequest = Initialize-BetaTokenAuthRequest  -Token 12345 `
 -UserAlias will.albin `
 -DeliveryType EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$TokenAuthRequest | ConvertTo-JSON
```


[[Back to top]](#) 

