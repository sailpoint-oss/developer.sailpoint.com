---
id: beta-password-digit-token-reset
title: PasswordDigitTokenReset
pagination_label: PasswordDigitTokenReset
sidebar_label: PasswordDigitTokenReset
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordDigitTokenReset', 'BetaPasswordDigitTokenReset'] 
slug: /tools/sdk/powershell/beta/models/password-digit-token-reset
tags: ['SDK', 'Software Development Kit', 'PasswordDigitTokenReset', 'BetaPasswordDigitTokenReset']
---


# PasswordDigitTokenReset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** |  **String** | The uid of the user requested for digit token | [required]
**Length** |  Pointer to **Int32** | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [optional] 
**DurationMinutes** |  Pointer to **Int32** | The time to live for the digit token in minutes. The default value is 5 minutes. | [optional] 

## Examples

- Prepare the resource
```powershell
$PasswordDigitTokenReset = Initialize-PSSailpoint.BetaPasswordDigitTokenReset  -UserId Abby.Smith `
 -Length 8 `
 -DurationMinutes 5
```

- Convert the resource to JSON
```powershell
$PasswordDigitTokenReset | ConvertTo-JSON
```


[[Back to top]](#) 

