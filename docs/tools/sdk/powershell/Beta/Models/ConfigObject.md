---
id: config-object
title: ConfigObject
pagination_label: ConfigObject
sidebar_label: ConfigObject
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'ConfigObject'] 
slug: /tools/sdk/powershell/beta/models/config-object
tags: ['SDK', 'Software Development Kit', 'ConfigObject']
---


# ConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** |  Pointer to **Int32** | Current version of configuration object. | [optional] 
**Self** |  Pointer to [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**Object** |  Pointer to [map[string] **Any**] | Object details. Format dependant on the object type. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConfigObject = Initialize-PSSailpointBetaConfigObject  -Version 1 `
 -Self null `
 -Object null
```

- Convert the resource to JSON
```powershell
$ConfigObject | ConvertTo-JSON
```


[[Back to top]](#) 

