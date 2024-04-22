---
id: password-org-config
title: PasswordOrgConfig
pagination_label: PasswordOrgConfig
sidebar_label: PasswordOrgConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'PasswordOrgConfig'] 
slug: /tools/sdk/powershell/v3/models/password-org-config
tags: ['SDK', 'Software Development Kit', 'PasswordOrgConfig']
---


# PasswordOrgConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CustomInstructionsEnabled** |  Pointer to **Boolean** | Indicator whether custom password instructions feature is enabled. The default value is false. | [optional] [default to $false]
**DigitTokenEnabled** |  Pointer to **Boolean** | Indicator whether &quot;&quot;digit token&quot;&quot; feature is enabled. The default value is false. | [optional] [default to $false]
**DigitTokenDurationMinutes** |  Pointer to **Int32** | The duration of &quot;&quot;digit token&quot;&quot; in minutes. The default value is 5. | [optional] [default to 5]
**DigitTokenLength** |  Pointer to **Int32** | The length of &quot;&quot;digit token&quot;&quot;. The default value is 6. | [optional] [default to 6]

## Examples

- Prepare the resource
```powershell
$PasswordOrgConfig = Initialize-PasswordOrgConfig  -CustomInstructionsEnabled true `
 -DigitTokenEnabled true `
 -DigitTokenDurationMinutes 10 `
 -DigitTokenLength 9
```

- Convert the resource to JSON
```powershell
$PasswordOrgConfig | ConvertTo-JSON
```


[[Back to top]](#) 

