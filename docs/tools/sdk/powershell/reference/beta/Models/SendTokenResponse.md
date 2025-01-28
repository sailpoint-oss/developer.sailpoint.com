---
id: beta-send-token-response
title: SendTokenResponse
pagination_label: SendTokenResponse
sidebar_label: SendTokenResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendTokenResponse', 'BetaSendTokenResponse'] 
slug: /tools/sdk/powershell/beta/models/send-token-response
tags: ['SDK', 'Software Development Kit', 'SendTokenResponse', 'BetaSendTokenResponse']
---


# SendTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** |  Pointer to **String** | The token request ID | [optional] 
**Status** |  Pointer to  **Enum** [  "SUCCESS",    "FAILED" ] | Status of sending token | [optional] 
**ErrorMessage** |  Pointer to **String** | Error messages from token send request | [optional] 

## Examples

- Prepare the resource
```powershell
$SendTokenResponse = Initialize-PSSailpoint.BetaSendTokenResponse  -RequestId 089899f13a8f4da7824996191587bab9 `
 -Status SUCCESS `
 -ErrorMessage Unable to sent text message
```

- Convert the resource to JSON
```powershell
$SendTokenResponse | ConvertTo-JSON
```


[[Back to top]](#) 

