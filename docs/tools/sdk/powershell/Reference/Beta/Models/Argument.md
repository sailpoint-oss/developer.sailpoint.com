---
id: beta-argument
title: Argument
pagination_label: Argument
sidebar_label: Argument
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Argument', 'BetaArgument'] 
slug: /tools/sdk/powershell/beta/models/argument
tags: ['SDK', 'Software Development Kit', 'Argument', 'BetaArgument']
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
$Argument = Initialize-PSSailpoint.BetaArgument  -Name firstName `
 -Description the first name of the identity `
 -Type String
```

- Convert the resource to JSON
```powershell
$Argument | ConvertTo-JSON
```


[[Back to top]](#) 

