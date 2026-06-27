---
id: formdefinitioninput
title: Formdefinitioninput
pagination_label: Formdefinitioninput
sidebar_label: Formdefinitioninput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Formdefinitioninput', 'Formdefinitioninput'] 
slug: /tools/sdk/powershell/customforms/models/formdefinitioninput
tags: ['SDK', 'Software Development Kit', 'Formdefinitioninput', 'Formdefinitioninput']
---


# Formdefinitioninput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the form input. | [optional] 
**Type** |  **Enum** [  "STRING",    "ARRAY" ] | FormDefinitionInputType value. STRING FormDefinitionInputTypeString | [optional] 
**Label** | **String** | Name for the form input. | [optional] 
**Description** | **String** | Form input's description. | [optional] 

## Examples

- Prepare the resource
```powershell
$Formdefinitioninput = Initialize-Formdefinitioninput  -Id 00000000-0000-0000-0000-000000000000 `
 -Type STRING `
 -Label input1 `
 -Description A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic
```

- Convert the resource to JSON
```powershell
$Formdefinitioninput | ConvertTo-JSON
```


[[Back to top]](#) 

