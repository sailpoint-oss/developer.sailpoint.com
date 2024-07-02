---
id: verification-poll-request
title: VerificationPollRequest
pagination_label: VerificationPollRequest
sidebar_label: VerificationPollRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'VerificationPollRequest'] 
slug: /tools/sdk/powershell/beta/models/verification-poll-request
tags: ['SDK', 'Software Development Kit', 'VerificationPollRequest']
---


# VerificationPollRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RequestId** |  **String** | Verification request Id | 

## Examples

- Prepare the resource
```powershell
$VerificationPollRequest = Initialize-BetaVerificationPollRequest  -RequestId 089899f13a8f4da7824996191587bab9
```

- Convert the resource to JSON
```powershell
$VerificationPollRequest | ConvertTo-JSON
```


[[Back to top]](#) 

