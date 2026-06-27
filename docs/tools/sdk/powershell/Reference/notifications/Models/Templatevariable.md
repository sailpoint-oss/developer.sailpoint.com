---
id: templatevariable
title: Templatevariable
pagination_label: Templatevariable
sidebar_label: Templatevariable
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Templatevariable', 'Templatevariable'] 
slug: /tools/sdk/powershell/notifications/models/templatevariable
tags: ['SDK', 'Software Development Kit', 'Templatevariable', 'Templatevariable']
---


# Templatevariable

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Key** | **String** | The variable name as used when rendering context in templates. | [optional] 
**Type** |  **Enum** [  "string",    "boolean",    "number",    "object",    "array",    "function" ] | The data type for this variable. Use JSON Schema-like names for values (string, boolean, number, object, array) or ""function"" for template utility/helper functions (e.g. __dateTool.format(), __esc.html()).  | [optional] 
**Description** | **String** | Human-readable description explaining what this variable represents. | [optional] 
**Example** | [**AnyType**]https://learn.microsoft.com/en-us/powershell/scripting/lang-spec/chapter-04?view=powershell-7.4 | Example value demonstrating the format and usage. For type ""function"", often a Velocity-style call (e.g. $__esc.html($value)). Can be a string, number, boolean, object, array, or null when no example is defined.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Templatevariable = Initialize-Templatevariable  -Key recipientDisplayName `
 -Type string `
 -Description Display name of the notification recipient `
 -Example John Doe
```

- Convert the resource to JSON
```powershell
$Templatevariable | ConvertTo-JSON
```


[[Back to top]](#) 

