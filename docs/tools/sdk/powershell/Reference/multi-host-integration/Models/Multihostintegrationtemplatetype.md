---
id: multihostintegrationtemplatetype
title: Multihostintegrationtemplatetype
pagination_label: Multihostintegrationtemplatetype
sidebar_label: Multihostintegrationtemplatetype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Multihostintegrationtemplatetype', 'Multihostintegrationtemplatetype'] 
slug: /tools/sdk/powershell/multihostintegration/models/multihostintegrationtemplatetype
tags: ['SDK', 'Software Development Kit', 'Multihostintegrationtemplatetype', 'Multihostintegrationtemplatetype']
---


# Multihostintegrationtemplatetype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This is the name of the type. | [optional] 
**Type** | **String** | This is the type value for the type. | [required]
**ScriptName** | **String** | This is the scriptName attribute value for the type. | [required]

## Examples

- Prepare the resource
```powershell
$Multihostintegrationtemplatetype = Initialize-Multihostintegrationtemplatetype  -Name aName `
 -Type aType `
 -ScriptName aScriptName
```

- Convert the resource to JSON
```powershell
$Multihostintegrationtemplatetype | ConvertTo-JSON
```


[[Back to top]](#) 

