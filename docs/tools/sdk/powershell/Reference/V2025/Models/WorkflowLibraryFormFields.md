---
id: v2025-workflow-library-form-fields
title: WorkflowLibraryFormFields
pagination_label: WorkflowLibraryFormFields
sidebar_label: WorkflowLibraryFormFields
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkflowLibraryFormFields', 'V2025WorkflowLibraryFormFields'] 
slug: /tools/sdk/powershell/v2025/models/workflow-library-form-fields
tags: ['SDK', 'Software Development Kit', 'WorkflowLibraryFormFields', 'V2025WorkflowLibraryFormFields']
---


# WorkflowLibraryFormFields

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
$WorkflowLibraryFormFields = Initialize-PSSailpoint.V2025WorkflowLibraryFormFields  -Description First value to compare `
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

