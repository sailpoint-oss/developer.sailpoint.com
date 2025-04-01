---
id: v2025-password-digit-token
title: PasswordDigitToken
pagination_label: PasswordDigitToken
sidebar_label: PasswordDigitToken
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordDigitToken', 'V2025PasswordDigitToken'] 
slug: /tools/sdk/powershell/v2025/models/password-digit-token
tags: ['SDK', 'Software Development Kit', 'PasswordDigitToken', 'V2025PasswordDigitToken']
---


# PasswordDigitToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DigitToken** | **String** | The digit token for password management | [optional] 
**RequestId** | **String** | The reference ID of the digit token generation request | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordDigitToken = Initialize-PSSailpoint.V2025PasswordDigitToken  -DigitToken 09087713 `
 -RequestId e1267ecd-fcd9-4c73-9c55-12555efad136
```

- Convert the resource to JSON
```powershell
$PasswordDigitToken | ConvertTo-JSON
```


[[Back to top]](#) 

