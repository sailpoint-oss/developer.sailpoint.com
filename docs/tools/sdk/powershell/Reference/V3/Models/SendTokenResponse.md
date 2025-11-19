---
id: send-token-response
title: SendTokenResponse
pagination_label: SendTokenResponse
sidebar_label: SendTokenResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SendTokenResponse', 'SendTokenResponse'] 
slug: /tools/sdk/powershell/v3/models/send-token-response
tags: ['SDK', 'Software Development Kit', 'SendTokenResponse', 'SendTokenResponse']
---


# SendTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | The token request ID | [optional] 
**Status** |  **Enum** [  "SUCCESS",    "FAILED" ] | Status of sending token | [optional] 
**ErrorMessage** | **String** | Error messages from token send request | [optional] 

## Examples

- Prepare the resource
```powershell
$SendTokenResponse = Initialize-SendTokenResponse  -RequestId 089899f13a8f4da7824996191587bab9 `
 -Status SUCCESS `
 -ErrorMessage Unable to sent text message
```

- Convert the resource to JSON
```powershell
$SendTokenResponse | ConvertTo-JSON
```


[[Back to top]](#) 

