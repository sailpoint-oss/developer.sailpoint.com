---
id: token-auth-response
title: TokenAuthResponse
pagination_label: TokenAuthResponse
sidebar_label: TokenAuthResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TokenAuthResponse', 'TokenAuthResponse'] 
slug: /tools/sdk/powershell/v3/models/token-auth-response
tags: ['SDK', 'Software Development Kit', 'TokenAuthResponse', 'TokenAuthResponse']
---


# TokenAuthResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  **Enum** [  "PENDING",    "SUCCESS",    "FAILED",    "LOCKOUT",    "NOT_ENOUGH_DATA" ] | MFA Authentication status | [optional] 

## Examples

- Prepare the resource
```powershell
$TokenAuthResponse = Initialize-TokenAuthResponse  -Status PENDING
```

- Convert the resource to JSON
```powershell
$TokenAuthResponse | ConvertTo-JSON
```


[[Back to top]](#) 

