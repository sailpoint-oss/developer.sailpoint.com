---
id: password-org-config
title: PasswordOrgConfig
pagination_label: PasswordOrgConfig
sidebar_label: PasswordOrgConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'PasswordOrgConfig', 'PasswordOrgConfig'] 
slug: /tools/sdk/powershell/v3/models/password-org-config
tags: ['SDK', 'Software Development Kit', 'PasswordOrgConfig', 'PasswordOrgConfig']
---


# PasswordOrgConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomInstructionsEnabled** | **Boolean** | Indicator whether custom password instructions feature is enabled. The default value is false. | [optional] [default to $false]
**DigitTokenEnabled** | **Boolean** | Indicator whether ""digit token"" feature is enabled. The default value is false. | [optional] [default to $false]
**DigitTokenDurationMinutes** | **Int32** | The duration of ""digit token"" in minutes. The default value is 5. | [optional] [default to 5]
**DigitTokenLength** | **Int32** | The length of ""digit token"". The default value is 6. | [optional] [default to 6]

## Examples

- Prepare the resource
```powershell
$PasswordOrgConfig = Initialize-PSSailpoint.V3PasswordOrgConfig  -CustomInstructionsEnabled true `
 -DigitTokenEnabled true `
 -DigitTokenDurationMinutes 10 `
 -DigitTokenLength 9
```

- Convert the resource to JSON
```powershell
$PasswordOrgConfig | ConvertTo-JSON
```


[[Back to top]](#) 

