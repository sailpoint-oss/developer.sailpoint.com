---
id: passwordinfoquerydto
title: Passwordinfoquerydto
pagination_label: Passwordinfoquerydto
sidebar_label: Passwordinfoquerydto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Passwordinfoquerydto', 'Passwordinfoquerydto'] 
slug: /tools/sdk/powershell/passwordmanagement/models/passwordinfoquerydto
tags: ['SDK', 'Software Development Kit', 'Passwordinfoquerydto', 'Passwordinfoquerydto']
---


# Passwordinfoquerydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**UserName** | **String** | The login name of the user | [optional] 
**SourceName** | **String** | The display name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$Passwordinfoquerydto = Initialize-Passwordinfoquerydto  -UserName Abby.Smith `
 -SourceName My-AD
```

- Convert the resource to JSON
```powershell
$Passwordinfoquerydto | ConvertTo-JSON
```


[[Back to top]](#) 

