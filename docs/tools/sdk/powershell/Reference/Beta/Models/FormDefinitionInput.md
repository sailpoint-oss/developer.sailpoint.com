---
id: beta-form-definition-input
title: FormDefinitionInput
pagination_label: FormDefinitionInput
sidebar_label: FormDefinitionInput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionInput', 'BetaFormDefinitionInput'] 
slug: /tools/sdk/powershell/beta/models/form-definition-input
tags: ['SDK', 'Software Development Kit', 'FormDefinitionInput', 'BetaFormDefinitionInput']
---


# FormDefinitionInput

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
$FormDefinitionInput = Initialize-BetaFormDefinitionInput  -Id 00000000-0000-0000-0000-000000000000 `
 -Type STRING `
 -Label input1 `
 -Description A single dynamic scalar value (i.e. number, string, date, etc.) that can be passed into the form for use in conditional logic
```

- Convert the resource to JSON
```powershell
$FormDefinitionInput | ConvertTo-JSON
```


[[Back to top]](#) 

