---
id: send-token-request
title: SendTokenRequest
pagination_label: SendTokenRequest
sidebar_label: SendTokenRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SendTokenRequest'] 
slug: /tools/sdk/powershell/beta/models/send-token-request
tags: ['SDK', 'Software Development Kit', 'SendTokenRequest']
---


# SendTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserAlias** |  **String** | User alias from table spt_identity field named &#39;name&#39; | 
**DeliveryType** |   **Enum** [  "SMS_PERSONAL",    "VOICE_PERSONAL",    "SMS_WORK",    "VOICE_WORK",    "EMAIL_WORK",    "EMAIL_PERSONAL" ] | Token delivery type | 

## Examples

- Prepare the resource
```powershell
$SendTokenRequest = Initialize-PSSailpointBetaSendTokenRequest  -UserAlias will.albin `
 -DeliveryType EMAIL_WORK
```

- Convert the resource to JSON
```powershell
$SendTokenRequest | ConvertTo-JSON
```


[[Back to top]](#) 

