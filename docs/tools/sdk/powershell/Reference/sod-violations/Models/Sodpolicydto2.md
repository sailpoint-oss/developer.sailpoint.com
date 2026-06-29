---
id: sodpolicydto2
title: Sodpolicydto2
pagination_label: Sodpolicydto2
sidebar_label: Sodpolicydto2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodpolicydto2', 'Sodpolicydto2'] 
slug: /tools/sdk/powershell/sodviolations/models/sodpolicydto2
tags: ['SDK', 'Software Development Kit', 'Sodpolicydto2', 'Sodpolicydto2']
---


# Sodpolicydto2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOD_POLICY" ] | SOD policy DTO type. | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** | SOD policy display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodpolicydto2 = Initialize-Sodpolicydto2  -Type SOD_POLICY `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name Business SOD Policy
```

- Convert the resource to JSON
```powershell
$Sodpolicydto2 | ConvertTo-JSON
```


[[Back to top]](#) 

