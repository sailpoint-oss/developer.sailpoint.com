---
id: argument
title: Argument
pagination_label: Argument
sidebar_label: Argument
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Argument'] 
slug: /tools/sdk/powershell/beta/models/argument
tags: ['SDK', 'Software Development Kit', 'Argument']
---


# Argument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | the name of the argument | 
**Description** |  Pointer to **String** | the description of the argument | [optional] 
**Type** |  Pointer to **String** | the programmatic type of the argument | [optional] 

## Examples

- Prepare the resource
```powershell
$Argument = Initialize-BetaArgument  -Name firstName `
 -Description the first name of the identity `
 -Type String
```

- Convert the resource to JSON
```powershell
$Argument | ConvertTo-JSON
```


[[Back to top]](#) 

