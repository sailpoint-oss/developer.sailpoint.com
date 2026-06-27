---
id: passwordorgconfig
title: Passwordorgconfig
pagination_label: Passwordorgconfig
sidebar_label: Passwordorgconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passwordorgconfig', 'Passwordorgconfig'] 
slug: /tools/sdk/powershell/passwordconfiguration/models/passwordorgconfig
tags: ['SDK', 'Software Development Kit', 'Passwordorgconfig', 'Passwordorgconfig']
---


# Passwordorgconfig

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
$Passwordorgconfig = Initialize-Passwordorgconfig  -CustomInstructionsEnabled true `
 -DigitTokenEnabled true `
 -DigitTokenDurationMinutes 10 `
 -DigitTokenLength 9
```

- Convert the resource to JSON
```powershell
$Passwordorgconfig | ConvertTo-JSON
```


[[Back to top]](#) 

