---
id: basecommondto
title: Basecommondto
pagination_label: Basecommondto
sidebar_label: Basecommondto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Basecommondto', 'Basecommondto'] 
slug: /tools/sdk/powershell/machineidentities/models/basecommondto
tags: ['SDK', 'Software Development Kit', 'Basecommondto', 'Basecommondto']
---


# Basecommondto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Basecommondto = Initialize-Basecommondto  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z
```

- Convert the resource to JSON
```powershell
$Basecommondto | ConvertTo-JSON
```


[[Back to top]](#) 

