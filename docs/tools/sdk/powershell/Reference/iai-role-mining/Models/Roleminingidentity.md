---
id: roleminingidentity
title: Roleminingidentity
pagination_label: Roleminingidentity
sidebar_label: Roleminingidentity
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Roleminingidentity', 'Roleminingidentity'] 
slug: /tools/sdk/powershell/iairolemining/models/roleminingidentity
tags: ['SDK', 'Software Development Kit', 'Roleminingidentity', 'Roleminingidentity']
---


# Roleminingidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the identity | [optional] 
**Name** | **String** | Name of the identity | [optional] 
**Attributes** | **map[string]String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Roleminingidentity = Initialize-Roleminingidentity  -Id 2c9180877212632a017228d5934525e6 `
 -Name Allene Abernathy-Welch `
 -Attributes {"jobTitle":"SQL Developer","department":"IT","location":"NYC","firstName":"Allene"}
```

- Convert the resource to JSON
```powershell
$Roleminingidentity | ConvertTo-JSON
```


[[Back to top]](#) 

