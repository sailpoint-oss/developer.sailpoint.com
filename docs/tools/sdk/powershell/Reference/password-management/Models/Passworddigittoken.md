---
id: passworddigittoken
title: Passworddigittoken
pagination_label: Passworddigittoken
sidebar_label: Passworddigittoken
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passworddigittoken', 'Passworddigittoken'] 
slug: /tools/sdk/powershell/passwordmanagement/models/passworddigittoken
tags: ['SDK', 'Software Development Kit', 'Passworddigittoken', 'Passworddigittoken']
---


# Passworddigittoken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DigitToken** | **String** | The digit token for password management | [optional] 
**RequestId** | **String** | The reference ID of the digit token generation request | [optional] 

## Examples

- Prepare the resource
```powershell
$Passworddigittoken = Initialize-Passworddigittoken  -DigitToken 9087713 `
 -RequestId e1267ecd-fcd9-4c73-9c55-12555efad136
```

- Convert the resource to JSON
```powershell
$Passworddigittoken | ConvertTo-JSON
```


[[Back to top]](#) 

