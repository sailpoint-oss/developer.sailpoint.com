---
id: workflowlibraryformfields
title: Workflowlibraryformfields
pagination_label: Workflowlibraryformfields
sidebar_label: Workflowlibraryformfields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workflowlibraryformfields', 'Workflowlibraryformfields'] 
slug: /tools/sdk/powershell/workflows/models/workflowlibraryformfields
tags: ['SDK', 'Software Development Kit', 'Workflowlibraryformfields', 'Workflowlibraryformfields']
---


# Workflowlibraryformfields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | **String** | Description of the form field | [optional] 
**HelpText** | **String** | Describes the form field in the UI | [optional] 
**Label** | **String** | A human readable name for this form field in the UI | [optional] 
**Name** | **String** | The name of the input attribute | [optional] 
**Required** | **Boolean** | Denotes if this field is a required attribute | [optional] [default to $false]
**Type** |  **Enum** [  "text",    "textarea",    "boolean",    "email",    "url",    "number",    "json",    "checkbox",    "jsonpath",    "select",    "multiType",    "duration",    "toggle",    "formPicker",    "identityPicker",    "governanceGroupPicker",    "string",    "object",    "array",    "secret",    "keyValuePairs",    "emailPicker",    "advancedToggle",    "variableCreator",    "htmlEditor" ] | The type of the form field | [optional] 

## Examples

- Prepare the resource
```powershell
$Workflowlibraryformfields = Initialize-Workflowlibraryformfields  -Description First value to compare `
 -HelpText The name to give to this certification campaign. `
 -Label Campaign Name `
 -Name name `
 -Required false `
 -Type text
```

- Convert the resource to JSON
```powershell
$Workflowlibraryformfields | ConvertTo-JSON
```


[[Back to top]](#) 

