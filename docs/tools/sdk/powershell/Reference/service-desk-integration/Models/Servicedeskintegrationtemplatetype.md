---
id: servicedeskintegrationtemplatetype
title: Servicedeskintegrationtemplatetype
pagination_label: Servicedeskintegrationtemplatetype
sidebar_label: Servicedeskintegrationtemplatetype
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Servicedeskintegrationtemplatetype', 'Servicedeskintegrationtemplatetype'] 
slug: /tools/sdk/powershell/servicedeskintegration/models/servicedeskintegrationtemplatetype
tags: ['SDK', 'Software Development Kit', 'Servicedeskintegrationtemplatetype', 'Servicedeskintegrationtemplatetype']
---


# Servicedeskintegrationtemplatetype

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This is the name of the type. | [optional] 
**Type** | **String** | This is the type value for the type. | [required]
**ScriptName** | **String** | This is the scriptName attribute value for the type. | [required]

## Examples

- Prepare the resource
```powershell
$Servicedeskintegrationtemplatetype = Initialize-Servicedeskintegrationtemplatetype  -Name aName `
 -Type aType `
 -ScriptName aScriptName
```

- Convert the resource to JSON
```powershell
$Servicedeskintegrationtemplatetype | ConvertTo-JSON
```


[[Back to top]](#) 

