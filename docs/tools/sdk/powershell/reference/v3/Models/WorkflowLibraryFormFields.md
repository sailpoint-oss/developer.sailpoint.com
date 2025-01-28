---
id: workflow-library-form-fields
title: WorkflowLibraryFormFields
pagination_label: WorkflowLibraryFormFields
sidebar_label: WorkflowLibraryFormFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryFormFields'] 
slug: /tools/sdk/powershell/v3/models/workflow-library-form-fields
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryFormFields']
---


# WorkflowLibraryFormFields

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** |  Pointer to **String** | Description of the form field | [optional] 
**HelpText** |  Pointer to **String** | Describes the form field in the UI | [optional] 
**Label** |  Pointer to **String** | A human readable name for this form field in the UI | [optional] 
**Name** |  Pointer to **String** | The name of the input attribute | [optional] 
**Required** |  Pointer to **Boolean** | Denotes if this field is a required attribute | [optional] [default to $false]
**Type** |  Pointer to  **Enum** [  "text",    "textarea",    "boolean",    "email",    "url",    "number",    "json",    "checkbox",    "jsonpath",    "select",    "multiType",    "duration",    "toggle",    "formPicker",    "identityPicker",    "governanceGroupPicker",    "string",    "object",    "array",    "secret",    "keyValuePairs",    "emailPicker",    "advancedToggle",    "variableCreator",    "htmlEditor" ] | The type of the form field | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowLibraryFormFields = Initialize-PSSailpoint.V3WorkflowLibraryFormFields  -Description First value to compare `
 -HelpText The name to give to this certification campaign. `
 -Label Campaign Name `
 -Name name `
 -Required false `
 -Type text
```

- Convert the resource to JSON
```powershell
$WorkflowLibraryFormFields | ConvertTo-JSON
```


[[Back to top]](#) 

