---
id: beta-token-auth-response
title: TokenAuthResponse
pagination_label: TokenAuthResponse
sidebar_label: TokenAuthResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TokenAuthResponse'] 
slug: /tools/sdk/powershell/beta/models/token-auth-response
tags: ['SDK', 'Software Development Kit', 'TokenAuthResponse']
---


# TokenAuthResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Status** |  Pointer to  **Enum** [  "PENDING",    "SUCCESS",    "FAILED",    "LOCKOUT",    "NOT_ENOUGH_DATA" ] | MFA Authentication status | [optional] 

## Examples

- Prepare the resource
```powershell
$TokenAuthResponse = Initialize-PSSailpoint.BetaTokenAuthResponse  -Status PENDING
```

- Convert the resource to JSON
```powershell
$TokenAuthResponse | ConvertTo-JSON
```


[[Back to top]](#) 

