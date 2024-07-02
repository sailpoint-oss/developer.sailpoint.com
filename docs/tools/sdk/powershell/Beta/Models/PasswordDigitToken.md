---
id: password-digit-token
title: PasswordDigitToken
pagination_label: PasswordDigitToken
sidebar_label: PasswordDigitToken
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordDigitToken'] 
slug: /tools/sdk/powershell/beta/models/password-digit-token
tags: ['SDK', 'Software Development Kit', 'PasswordDigitToken']
---


# PasswordDigitToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DigitToken** |  Pointer to **String** | The digit token for password management | [optional] 
**RequestId** |  Pointer to **String** | The reference ID of the digit token generation request | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordDigitToken = Initialize-BetaPasswordDigitToken  -DigitToken 09087713 `
 -RequestId e1267ecd-fcd9-4c73-9c55-12555efad136
```

- Convert the resource to JSON
```powershell
$PasswordDigitToken | ConvertTo-JSON
```


[[Back to top]](#) 

