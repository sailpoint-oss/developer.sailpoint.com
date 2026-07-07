---
id: passworddigittokenreset
title: Passworddigittokenreset
pagination_label: Passworddigittokenreset
sidebar_label: Passworddigittokenreset
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passworddigittokenreset', 'Passworddigittokenreset'] 
slug: /tools/sdk/powershell/passwordmanagement/models/passworddigittokenreset
tags: ['SDK', 'Software Development Kit', 'Passworddigittokenreset', 'Passworddigittokenreset']
---


# Passworddigittokenreset

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserId** | **String** | The uid of the user requested for digit token | [required]
**Length** | **Int32** | The length of digit token. It should be from 6 to 18, inclusive. The default value is 6. | [optional] 
**DurationMinutes** | **Int32** | The time to live for the digit token in minutes. The default value is 5 minutes. | [optional] 

## Examples

- Prepare the resource
```powershell
$Passworddigittokenreset = Initialize-Passworddigittokenreset  -UserId Abby.Smith `
 -Length 8 `
 -DurationMinutes 5
```

- Convert the resource to JSON
```powershell
$Passworddigittokenreset | ConvertTo-JSON
```


[[Back to top]](#) 

