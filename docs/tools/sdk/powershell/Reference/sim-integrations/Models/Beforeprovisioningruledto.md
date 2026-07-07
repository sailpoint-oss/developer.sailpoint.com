---
id: beforeprovisioningruledto
title: Beforeprovisioningruledto
pagination_label: Beforeprovisioningruledto
sidebar_label: Beforeprovisioningruledto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Beforeprovisioningruledto', 'Beforeprovisioningruledto'] 
slug: /tools/sdk/powershell/simintegrations/models/beforeprovisioningruledto
tags: ['SDK', 'Software Development Kit', 'Beforeprovisioningruledto', 'Beforeprovisioningruledto']
---


# Beforeprovisioningruledto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "RULE" ] | Before Provisioning Rule DTO type. | [optional] 
**Id** | **String** | Before Provisioning Rule ID. | [optional] 
**Name** | **String** | Rule display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Beforeprovisioningruledto = Initialize-Beforeprovisioningruledto  -Type RULE `
 -Id 048eb3d55c5a4758bd07dccb87741c78 `
 -Name Before Provisioning Airtable Rule
```

- Convert the resource to JSON
```powershell
$Beforeprovisioningruledto | ConvertTo-JSON
```


[[Back to top]](#) 

