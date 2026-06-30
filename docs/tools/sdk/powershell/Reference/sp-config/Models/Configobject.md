---
id: configobject
title: Configobject
pagination_label: Configobject
sidebar_label: Configobject
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Configobject', 'Configobject'] 
slug: /tools/sdk/powershell/spconfig/models/configobject
tags: ['SDK', 'Software Development Kit', 'Configobject', 'Configobject']
---


# Configobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | **Int32** | Current version of configuration object. | [optional] 
**Self** | [**Selfimportexportdto**](selfimportexportdto) |  | [optional] 
**Object** | [**map[string]AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Object details. Format dependant on the object type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Configobject = Initialize-Configobject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$Configobject | ConvertTo-JSON
```


[[Back to top]](#) 

