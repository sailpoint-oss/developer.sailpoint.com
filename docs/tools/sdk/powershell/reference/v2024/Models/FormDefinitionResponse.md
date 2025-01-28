---
id: v2024-form-definition-response
title: FormDefinitionResponse
pagination_label: FormDefinitionResponse
sidebar_label: FormDefinitionResponse
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FormDefinitionResponse', 'V2024FormDefinitionResponse'] 
slug: /tools/sdk/powershell/v2024/models/form-definition-response
tags: ['SDK', 'Software Development Kit', 'FormDefinitionResponse', 'V2024FormDefinitionResponse']
---


# FormDefinitionResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Unique guid identifying the form definition. | [optional] 
**Name** |  Pointer to **String** | Name of the form definition. | [optional] 
**Description** |  Pointer to **String** | Form definition's description. | [optional] 
**Owner** |  Pointer to [**FormOwner**](form-owner) |  | [optional] 
**UsedBy** |  Pointer to [**[]FormUsedBy**](form-used-by) | List of objects using the form definition. Whenever a system uses a form, the API reaches out to the form service to record that the system is currently using it. | [optional] 
**FormInput** |  Pointer to [**[]FormDefinitionInput**](form-definition-input) | List of form inputs required to create a form-instance object. | [optional] 
**FormElements** |  Pointer to [**[]FormElement**](form-element) | List of nested form elements. | [optional] 
**FormConditions** |  Pointer to [**[]FormCondition**](form-condition) | Conditional logic that can dynamically modify the form as the recipient is interacting with it. | [optional] 
**Created** |  Pointer to **System.DateTime** | Created is the date the form definition was created | [optional] 
**Modified** |  Pointer to **System.DateTime** | Modified is the last date the form definition was modified | [optional] 

## Examples

- Prepare the resource
```powershell
$FormDefinitionResponse = Initialize-PSSailpoint.V2024FormDefinitionResponse  -Id 00000000-0000-0000-0000-000000000000 `
 -Name My form `
 -Description My form description `
 -Owner null `
 -UsedBy null `
 -FormInput null `
 -FormElements null `
 -FormConditions null `
 -Created 2023-07-12T20:14:57.744860Z `
 -Modified 2023-07-12T20:14:57.744860Z
```

- Convert the resource to JSON
```powershell
$FormDefinitionResponse | ConvertTo-JSON
```


[[Back to top]](#) 

