---
id: verification-response
title: VerificationResponse
pagination_label: VerificationResponse
sidebar_label: VerificationResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'VerificationResponse', 'VerificationResponse'] 
slug: /tools/sdk/powershell/v3/models/verification-response
tags: ['SDK', 'Software Development Kit', 'VerificationResponse', 'VerificationResponse']
---


# VerificationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** | **String** | The verificationPollRequest request ID | [optional] 
**Status** |  **Enum** [  "PENDING",    "SUCCESS",    "FAILED",    "LOCKOUT",    "NOT_ENOUGH_DATA" ] | MFA Authentication status | [optional] 
**VarError** | **String** | Error messages from MFA verification request | [optional] 

## Examples

- Prepare the resource
```powershell
$VerificationResponse = Initialize-VerificationResponse  -RequestId 089899f13a8f4da7824996191587bab9 `
 -Status SUCCESS `
 -VarError Unable to connect DUO Service during verification
```

- Convert the resource to JSON
```powershell
$VerificationResponse | ConvertTo-JSON
```


[[Back to top]](#) 

