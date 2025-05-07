---
id: v2024-argument
title: Argument
pagination_label: Argument
sidebar_label: Argument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Argument', 'V2024Argument'] 
slug: /tools/sdk/powershell/v2024/models/argument
tags: ['SDK', 'Software Development Kit', 'Argument', 'V2024Argument']
---


# Argument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the name of the argument | [required]
**Description** | **String** | the description of the argument | [optional] 
**Type** | **String** | the programmatic type of the argument | [optional] 

## Examples

- Prepare the resource
```powershell
$Argument = Initialize-V2024Argument  -Name firstName `
 -Description the first name of the identity `
 -Type String
```

- Convert the resource to JSON
```powershell
$Argument | ConvertTo-JSON
```


[[Back to top]](#) 

