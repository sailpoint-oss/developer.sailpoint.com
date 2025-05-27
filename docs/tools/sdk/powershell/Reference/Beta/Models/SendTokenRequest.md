---
id: beta-send-token-request
title: SendTokenRequest
pagination_label: SendTokenRequest
sidebar_label: SendTokenRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendTokenRequest', 'BetaSendTokenRequest'] 
slug: /tools/sdk/powershell/beta/models/send-token-request
tags: ['SDK', 'Software Development Kit', 'SendTokenRequest', 'BetaSendTokenRequest']
---


# SendTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserAlias** | **String** | User alias from table spt_identity field named 'name' | [required]
**DeliveryType** |  **Enum** [  "SMS_PERSONAL",    "VOICE_PERSONAL",    "SMS_WORK",    "VOICE_WORK",    "EMAIL_WORK",    "EMAIL_PERSONAL" ] | Token delivery type | [required]

## Examples

- Prepare the resource
```powershell
$SendTokenRequest = Initialize-BetaSendTokenRequest  -UserAlias will.albin `
 -DeliveryType EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$SendTokenRequest | ConvertTo-JSON
```


[[Back to top]](#) 

