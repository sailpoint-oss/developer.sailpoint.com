---
id: v2024-form-definition-input
title: FormDefinitionInput
pagination_label: FormDefinitionInput
sidebar_label: FormDefinitionInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionInput', 'V2024FormDefinitionInput'] 
slug: /tools/sdk/powershell/v2024/models/form-definition-input
tags: ['SDK', 'Software Development Kit', 'FormDefinitionInput', 'V2024FormDefinitionInput']
---


# FormDefinitionInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier for the form input. | [optional] 
**Type** |  **Enum** [  "STRING" ] | FormDefinitionInputType value. STRING FormDefinitionInputTypeString | [optional] 
**Label** | **String** | Name for the form input. | [optional] 
**Description** | **String** | Form input's description. | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionInput = Initialize-PSSailpoint.V2024FormDefinitionInput  -Id 00000000-0000-0000-0000-000000000000 `
 -Type STRING `
 -Label input1 `
 -Description A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic
```

- Convert the resource to JSON
```powershell
$FormDefinitionInput | ConvertTo-JSON
```


[[Back to top]](#) 

