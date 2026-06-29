---
id: sodpolicydto
title: Sodpolicydto
pagination_label: Sodpolicydto
sidebar_label: Sodpolicydto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sodpolicydto', 'Sodpolicydto'] 
slug: /tools/sdk/powershell/accessrequestapprovals/models/sodpolicydto
tags: ['SDK', 'Software Development Kit', 'Sodpolicydto', 'Sodpolicydto']
---


# Sodpolicydto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "SOD_POLICY" ] | SOD policy DTO type. | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** | SOD policy display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Sodpolicydto = Initialize-Sodpolicydto  -Type SOD_POLICY `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name Business SOD Policy
```

- Convert the resource to JSON
```powershell
$Sodpolicydto | ConvertTo-JSON
```


[[Back to top]](#) 

