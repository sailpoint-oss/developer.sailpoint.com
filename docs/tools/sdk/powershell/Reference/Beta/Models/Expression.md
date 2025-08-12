---
id: beta-expression
title: Expression
pagination_label: Expression
sidebar_label: Expression
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Expression', 'BetaExpression'] 
slug: /tools/sdk/powershell/beta/models/expression
tags: ['SDK', 'Software Development Kit', 'Expression', 'BetaExpression']
---


# Expression

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operator** |  **Enum** [  "AND",    "EQUALS" ] | Operator for the expression | [optional] 
**Attribute** | **String** | Name for the attribute | [optional] 
**Value** | [**Value**](value) |  | [optional] 
**Children** | [**[]Children**](children) | List of expressions | [optional] 

## Examples

- Prepare the resource
```powershell
$Expression = Initialize-BetaExpression  -Operator EQUALS `
 -Attribute location `
 -Value null `
 -Children []
```

- Convert the resource to JSON
```powershell
$Expression | ConvertTo-JSON
```


[[Back to top]](#) 

