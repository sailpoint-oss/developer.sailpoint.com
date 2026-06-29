---
id: authuserslimresponse
title: Authuserslimresponse
pagination_label: Authuserslimresponse
sidebar_label: Authuserslimresponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Authuserslimresponse', 'Authuserslimresponse'] 
slug: /tools/sdk/powershell/customuserlevels/models/authuserslimresponse
tags: ['SDK', 'Software Development Kit', 'Authuserslimresponse', 'Authuserslimresponse']
---


# Authuserslimresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Identity ID. | [optional] 
**Uid** | **String** | Identity unique identifier. | [optional] 
**Alias** | **String** | Identity alias. | [optional] 
**DisplayName** | **String** | Identity name in display format. | [optional] 

## Examples

- Prepare the resource
```powershell
$Authuserslimresponse = Initialize-Authuserslimresponse  -Id eea1c52bc51c4f7d95565f4f8d6c1e41 `
 -Uid john.doe@testmail.identitysoon.com `
 -Alias john.doe `
 -DisplayName John Doe
```

- Convert the resource to JSON
```powershell
$Authuserslimresponse | ConvertTo-JSON
```


[[Back to top]](#) 

